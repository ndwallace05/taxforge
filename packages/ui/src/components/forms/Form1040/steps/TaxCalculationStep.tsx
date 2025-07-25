import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
import { FormSection } from '../../../common/FormSection';
import { CurrencyField } from '../../../common/CurrencyField';
import { InfoTooltip } from '../../../common/InfoTooltip';
import { CalculatedField } from '../../../common/CalculatedField';
import { ConditionalField } from '../../../common/ConditionalField';
import { CheckboxField } from '../../../common/CheckboxField';

interface TaxCalculationStepProps {
  data: Form1040Data;
  onChange: (field: keyof Form1040Data, value: any) => void;
  readonly?: boolean;
  errors: Record<string, string>;
}

// 2024 Tax Brackets
const TAX_BRACKETS_2024 = {
  single: [
    { min: 0, max: 11600, rate: 0.10 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 }
  ],
  marriedFilingJointly: [
    { min: 0, max: 23200, rate: 0.10 },
    { min: 23200, max: 94300, rate: 0.12 },
    { min: 94300, max: 201050, rate: 0.22 },
    { min: 201050, max: 383900, rate: 0.24 },
    { min: 383900, max: 487450, rate: 0.32 },
    { min: 487450, max: 731200, rate: 0.35 },
    { min: 731200, max: Infinity, rate: 0.37 }
  ],
  marriedFilingSeparately: [
    { min: 0, max: 11600, rate: 0.10 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 365600, rate: 0.35 },
    { min: 365600, max: Infinity, rate: 0.37 }
  ],
  headOfHousehold: [
    { min: 0, max: 16550, rate: 0.10 },
    { min: 16550, max: 63100, rate: 0.12 },
    { min: 63100, max: 100500, rate: 0.22 },
    { min: 100500, max: 191950, rate: 0.24 },
    { min: 191950, max: 243700, rate: 0.32 },
    { min: 243700, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 }
  ],
  qualifyingWidow: [
    { min: 0, max: 23200, rate: 0.10 },
    { min: 23200, max: 94300, rate: 0.12 },
    { min: 94300, max: 201050, rate: 0.22 },
    { min: 201050, max: 383900, rate: 0.24 },
    { min: 383900, max: 487450, rate: 0.32 },
    { min: 487450, max: 731200, rate: 0.35 },
    { min: 731200, max: Infinity, rate: 0.37 }
  ]
};

export const TaxCalculationStep: React.FC<TaxCalculationStepProps> = ({
  data,
  onChange,
  readonly = false,
  errors,
}) => {
  const { formState: { errors: formErrors } } = useFormContext();

  // Calculate tax from tax tables
  const calculateTax = useMemo(() => {
    const taxableIncome = data['1040_line_15'] || 0;
    const qualifiedDividends = data['1040_line_3a'] || 0;
    const capitalGains = Math.max(0, data['1040_line_7'] || 0);
    
    if (taxableIncome <= 0) return 0;

    const brackets = TAX_BRACKETS_2024[data.filingStatus as keyof typeof TAX_BRACKETS_2024 || 'single'] || TAX_BRACKETS_2024.single;
    let tax = 0;
    let remainingIncome = taxableIncome;

    // Calculate ordinary income tax
    for (const bracket of brackets) {
      if (remainingIncome <= 0) break;
      
      const taxableAtThisBracket = Math.min(remainingIncome, bracket.max - bracket.min);
      tax += taxableAtThisBracket * bracket.rate;
      remainingIncome -= taxableAtThisBracket;
    }

    // Apply capital gains and qualified dividends preferential rates if applicable
    // This is a simplified calculation - actual Form 1040 uses Schedule D
    if (qualifiedDividends > 0 || capitalGains > 0) {
      // Simplified: assume 0%, 15%, or 20% rates based on income
      const preferentialIncome = qualifiedDividends + capitalGains;
      let capGainsRate = 0;
      
      if (data.filingStatus === 'single') {
        if (taxableIncome > 518900) capGainsRate = 0.20;
        else if (taxableIncome > 47025) capGainsRate = 0.15;
      } else if (data.filingStatus === 'marriedFilingJointly') {
        if (taxableIncome > 583750) capGainsRate = 0.20;
        else if (taxableIncome > 94050) capGainsRate = 0.15;
      }
      
      // This is a simplified approach - actual calculation is more complex
      const capGainsTax = preferentialIncome * capGainsRate;
      const ordinaryTax = (taxableIncome - preferentialIncome) * (tax / taxableIncome);
      
      return Math.round(ordinaryTax + capGainsTax);
    }

    return Math.round(tax);
  }, [data['1040_line_15'], data['1040_line_3a'], data['1040_line_7'], data.filingStatus]);

  // Calculate Alternative Minimum Tax (simplified)
  const calculateAMT = useMemo(() => {
    const taxableIncome = data['1040_line_15'] || 0;
    const exemption = data.filingStatus === 'marriedFilingJointly' ? 133300 : 85700;
    const phaseoutThreshold = data.filingStatus === 'marriedFilingJointly' ? 1218700 : 609350;
    
    if (taxableIncome <= exemption) return 0;
    
    // Simplified AMT calculation
    const amtIncome = taxableIncome; // In reality, this includes adjustments
    const amtExemption = Math.max(0, exemption - Math.max(0, (amtIncome - phaseoutThreshold) * 0.25));
    const amtTaxableIncome = Math.max(0, amtIncome - amtExemption);
    
    let amtTax = 0;
    if (amtTaxableIncome <= 220700) {
      amtTax = amtTaxableIncome * 0.26;
    } else {
      amtTax = 220700 * 0.26 + (amtTaxableIncome - 220700) * 0.28;
    }
    
    return Math.max(0, Math.round(amtTax - calculateTax));
  }, [data['1040_line_15'], data.filingStatus, calculateTax]);

  return (
    <div className="space-y-8">
      {/* Tax Calculation */}
      <FormSection
        title="Tax Calculation"
        description="Calculate your federal income tax based on taxable income"
        lineNumbers="16-18"
      >
        <div className="space-y-6">
          {/* Tax Table Calculation */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">Tax Calculation Method</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <CheckboxField
                  label="Use tax table (taxable income under $100,000)"
                  name="use_tax_table"
                  checked={data['1040_line_15'] < 100000}
                  onChange={() => {}} // Read-only based on income
                  disabled
                  helpText="Automatically selected based on your taxable income"
                />
                
                <CheckboxField
                  label="Use Schedule D (capital gains/losses)"
                  name="use_schedule_d"
                  checked={(data['1040_line_7'] || 0) !== 0 || (data['1040_line_3a'] || 0) > 0}
                  onChange={() => {}} // Read-only based on income types
                  disabled
                  helpText="Required if you have capital gains/losses or qualified dividends"
                />
              </div>
              
              <div className="bg-white p-4 rounded-md border">
                <h5 className="font-medium text-gray-900 mb-2">Tax Breakdown</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Taxable Income:</span>
                    <span className="font-medium">${(data['1040_line_15'] || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ordinary Income Tax:</span>
                    <span className="font-medium">${calculateTax.toLocaleString()}</span>
                  </div>
                  {(data['1040_line_3a'] || 0) > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Qualified Dividends:</span>
                      <span className="font-medium">${(data['1040_line_3a'] || 0).toLocaleString()}</span>
                    </div>
                  )}
                  {(data['1040_line_7'] || 0) > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Capital Gains:</span>
                      <span className="font-medium">${(data['1040_line_7'] || 0).toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <CalculatedField
            label="Tax (from tax table or Schedule D)"
            value={calculateTax}
            lineNumber="16"
            calculation={`Based on $${(data['1040_line_15'] || 0).toLocaleString()} taxable income`}
            className="bg-red-50 border-2 border-red-300 font-semibold"
            highlight
          />

          <CurrencyField
            label="Amount from Schedule 2, line 3"
            name="1040_line_17"
            value={data['1040_line_17']}
            onChange={(value) => onChange('1040_line_17', value)}
            disabled={readonly}
            error={errors['1040_line_17'] || (formErrors['1040_line_17']?.message as string)}
            lineNumber="17"
            helpText="Alternative minimum tax, excess advance premium tax credit repayment, etc."
          />

          <CalculatedField
            label="Add lines 16 and 17"
            value={calculateTax + (data['1040_line_17'] || 0)}
            lineNumber="18"
            calculation={`${calculateTax.toLocaleString()} + ${(data['1040_line_17'] || 0).toLocaleString()}`}
            className="bg-red-50 border-2 border-red-300 font-semibold"
          />
        </div>
      </FormSection>

      {/* Alternative Minimum Tax Warning */}
      {calculateAMT > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg className="h-6 w-6 text-yellow-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="text-lg font-semibold text-yellow-800">Alternative Minimum Tax (AMT) May Apply</h4>
              <p className="text-yellow-700 mt-2">
                Based on your income level, you may owe Alternative Minimum Tax of approximately 
                <span className="font-semibold">${calculateAMT.toLocaleString()}</span>. 
                You'll need to complete Form 6251 to determine the exact amount.
              </p>
              <p className="text-sm text-yellow-600 mt-2">
                This is included in Schedule 2, line 1, which feeds into line 17 above.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tax Credits */}
      <FormSection
        title="Tax Credits"
        description="Credits directly reduce your tax liability dollar-for-dollar"
        lineNumbers="19-20"
      >
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <svg className="h-5 w-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h4 className="text-sm font-medium text-green-800">Tax Credits vs. Deductions</h4>
            </div>
            <p className="text-sm text-green-700">
              Credits reduce your tax bill dollar-for-dollar, while deductions only reduce your taxable income. 
              A $1,000 credit saves you $1,000 in taxes, regardless of your tax bracket.
            </p>
          </div>

          <CurrencyField
            label="Child tax credit and credit for other dependents from Schedule 8812"
            name="1040_line_19"
            value={data['1040_line_19']}
            onChange={(value) => onChange('1040_line_19', value)}
            disabled={readonly}
            error={errors['1040_line_19'] || (formErrors['1040_line_19']?.message as string)}
            lineNumber="19"
            helpText="$2,000 per qualifying child under 17, $500 for other dependents"
          />

          <CurrencyField
            label="Amount from Schedule 3, line 8"
            name="1040_line_20"
            value={data['1040_line_20']}
            onChange={(value) => onChange('1040_line_20', value)}
            disabled={readonly}
            error={errors['1040_line_20'] || (formErrors['1040_line_20']?.message as string)}
            lineNumber="20"
            helpText="Education credits, foreign tax credit, general business credit, etc."
          />

          {/* Credit Estimator */}
          {data.dependents && data.dependents.length > 0 && !data['1040_line_19'] && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Estimated Child Tax Credit</h4>
              <div className="text-sm text-blue-700">
                Based on your {data.dependents.length} dependent(s), you may qualify for:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {data.dependents.map((dep: any, index: number) => {
                    const age = new Date().getFullYear() - new Date(dep.dateOfBirth).getFullYear();
                    const credit = age < 17 ? 2000 : 500;
                    return (
                      <li key={index}>
                        {dep.firstName} {dep.lastName} (age {age}): ${credit.toLocaleString()}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-2 font-semibold">
                  Total estimated credit: ${
                    data.dependents.reduce((total: number, dep: any) => {
                      const age = new Date().getFullYear() - new Date(dep.dateOfBirth).getFullYear();
                      return total + (age < 17 ? 2000 : 500);
                    }, 0).toLocaleString()
                  }
                </div>
              </div>
            </div>
          )}
        </div>
      </FormSection>

      {/* Total Credits and Tax After Credits */}
      <FormSection
        title="Tax After Credits"
        description="Your tax liability after applying all credits"
        lineNumbers="21-22"
      >
        <div className="space-y-6">
          <CalculatedField
            label="Add lines 19 and 20"
            value={(data['1040_line_19'] || 0) + (data['1040_line_20'] || 0)}
            lineNumber="21"
            calculation={`${(data['1040_line_19'] || 0).toLocaleString()} + ${(data['1040_line_20'] || 0).toLocaleString()}`}
            className="bg-green-50 border-2 border-green-300 font-semibold"
          />

          <CalculatedField
            label="Subtract line 21 from line 18. If zero or less, enter -0-"
            value={Math.max(0, (calculateTax + (data['1040_line_17'] || 0)) - ((data['1040_line_19'] || 0) + (data['1040_line_20'] || 0)))}
            lineNumber="22"
            calculation={`max(0, ${(calculateTax + (data['1040_line_17'] || 0)).toLocaleString()} - ${((data['1040_line_19'] || 0) + (data['1040_line_20'] || 0)).toLocaleString()})`}
            className="bg-red-50 border-2 border-red-300 font-semibold text-lg"
            highlight
            important
          />
        </div>
      </FormSection>

      {/* Other Taxes */}
      <FormSection
        title="Other Taxes"
        description="Self-employment tax, household employment taxes, and other additional taxes"
        lineNumbers="23-24"
      >
        <div className="space-y-6">
          <CurrencyField
            label="Other taxes, including self-employment tax, from Schedule 2, line 21"
            name="1040_line_23"
            value={data['1040_line_23']}
            onChange={(value) => onChange('1040_line_23', value)}
            disabled={readonly}
            error={errors['1040_line_23'] || (formErrors['1040_line_23']?.message as string)}
            lineNumber="23"
            helpText="Self-employment tax, additional tax on IRAs, household employment taxes, etc."
          />

          <CalculatedField
            label="Add lines 22 and 23. This is your total tax"
            value={(Math.max(0, (calculateTax + (data['1040_line_17'] || 0)) - ((data['1040_line_19'] || 0) + (data['1040_line_20'] || 0)))) + (data['1040_line_23'] || 0)}
            lineNumber="24"
            calculation={`${Math.max(0, (calculateTax + (data['1040_line_17'] || 0)) - ((data['1040_line_19'] || 0) + (data['1040_line_20'] || 0))).toLocaleString()} + ${(data['1040_line_23'] || 0).toLocaleString()}`}
            className="bg-red-50 border-2 border-red-300 font-bold text-xl"
            highlight
            important
          />
        </div>
      </FormSection>

      {/* Tax Summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Calculation Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Taxable Income</div>
            <div className="text-lg font-semibold text-gray-900">
              ${(data['1040_line_15'] || 0).toLocaleString()}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Income Tax</div>
            <div className="text-lg font-semibold text-red-600">
              ${calculateTax.toLocaleString()}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Total Credits</div>
            <div className="text-lg font-semibold text-green-600">
              ${((data['1040_line_19'] || 0) + (data['1040_line_20'] || 0)).toLocaleString()}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Total Tax</div>
            <div className="text-xl font-bold text-red-600">
              ${((Math.max(0, (calculateTax + (data['1040_line_17'] || 0)) - ((data['1040_line_19'] || 0) + (data['1040_line_20'] || 0)))) + (data['1040_line_23'] || 0)).toLocaleString()}
            </div>
          </div>
        </div>
        
        {/* Effective Tax Rate */}
        <div className="mt-4 p-3 bg-blue-50 rounded border">
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-700">Effective Tax Rate:</span>
            <span className="font-semibold text-blue-900">
              {data['1040_line_11'] > 0 
                ? (((Math.max(0, (calculateTax + (data['1040_line_17'] || 0)) - ((data['1040_line_19'] || 0) + (data['1040_line_20'] || 0)))) + (data['1040_line_23'] || 0)) / data['1040_line_11'] * 100).toFixed(2)
                : '0.00'
              }%
            </span>
          </div>
          <div className="text-xs text-blue-600 mt-1">
            Total tax ÷ Adjusted Gross Income
          </div>
        </div>
      </div>

      {/* Step Completion Indicator */}
      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md">
        <div className="flex items-center">
          <svg className="h-5 w-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-green-800">
            Complete this section to proceed to Payments and Refund
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculationStep;