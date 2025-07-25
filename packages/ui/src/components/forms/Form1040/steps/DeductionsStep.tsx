import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
import { FormSection } from '../../../common/FormSection';
import { CurrencyField } from '../../../common/CurrencyField';
import { SelectField } from '../../../common/SelectField';
import { InfoTooltip } from '../../../common/InfoTooltip';
import { CalculatedField } from '../../../common/CalculatedField';
import { ConditionalField } from '../../../common/ConditionalField';
import { Button } from '../../../common/Button';

interface DeductionsStepProps {
  data: Form1040Data;
  onChange: (field: keyof Form1040Data, value: any) => void;
  readonly?: boolean;
  errors: Record<string, string>;
}

// 2024 Standard Deduction Amounts
const STANDARD_DEDUCTIONS_2024 = {
  single: 14600,
  marriedFilingJointly: 29200,
  marriedFilingSeparately: 14600,
  headOfHousehold: 21900,
  qualifyingWidow: 29200
};

export const DeductionsStep: React.FC<DeductionsStepProps> = ({
  data,
  onChange,
  readonly = false,
  errors,
}) => {
  const { formState: { errors: formErrors } } = useFormContext();
  const [showItemizedCalculator, setShowItemizedCalculator] = useState(false);
  const [estimatedItemized, setEstimatedItemized] = useState(0);

  // Get standard deduction based on filing status
  const getStandardDeduction = () => {
    switch (data['1040_filing_status']) {
      case 'single':
        return STANDARD_DEDUCTIONS_2024.single;
      case 'married_filing_jointly':
        return STANDARD_DEDUCTIONS_2024.marriedFilingJointly;
      case 'married_filing_separately':
        return STANDARD_DEDUCTIONS_2024.marriedFilingSeparately;
      case 'head_of_household':
        return STANDARD_DEDUCTIONS_2024.headOfHousehold;
      case 'qualifying_surviving_spouse':
        return STANDARD_DEDUCTIONS_2024.qualifyingWidow;
      default:
        return STANDARD_DEDUCTIONS_2024.single;
    }
  };

  const standardDeduction = getStandardDeduction();
  const shouldItemize = (data['1040_line_12b'] || 0) > standardDeduction;

  // Calculate estimated itemized deductions
  const calculateEstimatedItemized = () => {
    const stateLocalTax = parseFloat((document.getElementById('estimated-salt') as HTMLInputElement)?.value || '0');
    const mortgageInterest = parseFloat((document.getElementById('estimated-mortgage') as HTMLInputElement)?.value || '0');
    const charitableGifts = parseFloat((document.getElementById('estimated-charity') as HTMLInputElement)?.value || '0');
    const medicalExpenses = parseFloat((document.getElementById('estimated-medical') as HTMLInputElement)?.value || '0');
    const otherDeductions = parseFloat((document.getElementById('estimated-other') as HTMLInputElement)?.value || '0');
    
    // Medical expenses must exceed 7.5% of AGI
    const agiThreshold = (data['1040_line_11'] || 0) * 0.075;
    const deductibleMedical = Math.max(0, medicalExpenses - agiThreshold);
    
    const total = stateLocalTax + mortgageInterest + charitableGifts + deductibleMedical + otherDeductions;
    setEstimatedItemized(total);
  };

  return (
    <div className="space-y-8">
      {/* Standard vs Itemized Decision */}
      <FormSection
        title="Standard or Itemized Deduction"
        description="Choose the deduction method that gives you the larger tax benefit"
        lineNumbers="12a-12c"
      >
        <div className="space-y-6">
          {/* Deduction Comparison */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">Deduction Comparison</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-md border">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-gray-900">Standard Deduction</h5>
                  <InfoTooltip content="A fixed deduction amount based on your filing status. Most taxpayers use this option.">
                    <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </InfoTooltip>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  ${standardDeduction.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Based on {data['1040_filing_status']} status
                </div>
              </div>

              <div className="bg-white p-4 rounded-md border">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-gray-900">Itemized Deductions</h5>
                  <InfoTooltip content="Detailed deductions for specific expenses like mortgage interest, state taxes, and charitable contributions.">
                    <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </InfoTooltip>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  ${(data['1040_line_12b'] || 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  From Schedule A
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className={`mt-4 p-3 rounded-md ${
              shouldItemize 
                ? 'bg-blue-100 border border-blue-300' 
                : 'bg-green-100 border border-green-300'
            }`}>
              <div className="flex items-center">
                <svg className={`h-5 w-5 mr-2 ${
                  shouldItemize ? 'text-blue-600' : 'text-green-600'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={`font-medium ${
                  shouldItemize ? 'text-blue-800' : 'text-green-800'
                }`}>
                  Recommended: {shouldItemize ? 'Itemize' : 'Standard'} Deduction
                  {shouldItemize && ` (Save $${((data['1040_line_12b'] || 0) - standardDeduction).toLocaleString()})`}
                </span>
              </div>
            </div>

            {/* Itemized Deduction Estimator */}
            {!data['1040_line_12b'] && (
              <div className="mt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowItemizedCalculator(!showItemizedCalculator)}
                  className="text-sm"
                >
                  {showItemizedCalculator ? 'Hide' : 'Show'} Itemized Deduction Estimator
                </Button>
              </div>
            )}
          </div>

          {/* Itemized Deduction Estimator */}
          {showItemizedCalculator && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Estimate Your Itemized Deductions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State and Local Taxes (max $10,000)
                  </label>
                  <input
                    type="number"
                    id="estimated-salt"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="0"
                    onChange={calculateEstimatedItemized}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mortgage Interest
                  </label>
                  <input
                    type="number"
                    id="estimated-mortgage"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="0"
                    onChange={calculateEstimatedItemized}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Charitable Contributions
                  </label>
                  <input
                    type="number"
                    id="estimated-charity"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="0"
                    onChange={calculateEstimatedItemized}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Medical Expenses
                  </label>
                  <input
                    type="number"
                    id="estimated-medical"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="0"
                    onChange={calculateEstimatedItemized}
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md border">
                <div className="text-lg font-semibold">
                  Estimated Itemized Total: ${estimatedItemized.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {estimatedItemized > standardDeduction 
                    ? `You could save $${(estimatedItemized - standardDeduction).toLocaleString()} by itemizing`
                    : `Standard deduction is $${(standardDeduction - estimatedItemized).toLocaleString()} better`
                  }
                </div>
              </div>
            </div>
          )}

          {/* Actual Deduction Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CalculatedField
              label="Standard deduction"
              value={standardDeduction}
              lineNumber="12a"
              calculation={`Based on ${data['1040_filing_status']} filing status`}
              className="bg-green-50 border-2 border-green-300"
            />

            <CurrencyField
              label="Itemized deductions from Schedule A"
              name="1040_line_12b"
              value={data['1040_line_12b']}
              onChange={(value) => onChange('1040_line_12b', value)}
              disabled={readonly}
              error={errors['1040_line_12b'] || (formErrors['1040_line_12b']?.message as string)}
              lineNumber="12b"
              helpText="Enter amount from Schedule A, line 17"
              placeholder="Leave blank to use standard deduction"
            />
          </div>

          <CalculatedField
            label="Deduction (larger of line 12a or 12b)"
            value={Math.max(standardDeduction, data['1040_line_12b'] || 0)}
            lineNumber="12c"
            calculation={`max(${standardDeduction.toLocaleString()}, ${(data['1040_line_12b'] || 0).toLocaleString()})`}
            className="bg-blue-50 border-2 border-blue-300 font-semibold"
            highlight
          />
        </div>
      </FormSection>

      {/* Qualified Business Income Deduction */}
      <FormSection
        title="Qualified Business Income Deduction"
        description="Section 199A deduction for pass-through business income"
        lineNumbers="13"
      >
        <div className="space-y-6">
          <CurrencyField
            label="Qualified business income deduction from Form 8995 or 8995-A"
            name="1040_line_13"
            value={data['1040_line_13']}
            onChange={(value) => onChange('1040_line_13', value)}
            disabled={readonly}
            error={errors['1040_line_13'] || (formErrors['1040_line_13']?.message as string)}
            lineNumber="13"
            helpText="Up to 20% deduction for qualified business income"
          />

          {data['1040_line_11'] > 0 && !data['1040_line_13'] && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-blue-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-blue-800">QBI Deduction Available?</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    If you have business income, rental income, or income from partnerships/S-corps, 
                    you may qualify for the Section 199A deduction. Use Form 8995 or 8995-A to calculate.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </FormSection>

      {/* Taxable Income Calculation */}
      <FormSection
        title="Taxable Income"
        description="Your income after deductions - this determines your tax bracket"
        lineNumbers="14-15"
      >
        <div className="space-y-6">
          <CalculatedField
            label="Add lines 12c and 13"
            value={(Math.max(standardDeduction, data['1040_line_12b'] || 0)) + (data['1040_line_13'] || 0)}
            lineNumber="14"
            calculation={`${Math.max(standardDeduction, data['1040_line_12b'] || 0).toLocaleString()} + ${(data['1040_line_13'] || 0).toLocaleString()}`}
            className="bg-gray-50 border-2 border-gray-300"
          />

          <CalculatedField
            label="Subtract line 14 from line 11. This is your taxable income"
            value={Math.max(0, (data['1040_line_11'] || 0) - ((Math.max(standardDeduction, data['1040_line_12b'] || 0)) + (data['1040_line_13'] || 0)))}
            lineNumber="15"
            calculation={`max(0, ${(data['1040_line_11'] || 0).toLocaleString()} - ${((Math.max(standardDeduction, data['1040_line_12b'] || 0)) + (data['1040_line_13'] || 0)).toLocaleString()})`}
            className="bg-red-50 border-2 border-red-300 font-semibold text-lg"
            highlight
            important
          />
        </div>
      </FormSection>

      {/* Tax Bracket Information */}
      {data['1040_line_15'] > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4">Your Tax Bracket Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border">
              <div className="text-sm text-gray-600">Taxable Income</div>
              <div className="text-2xl font-bold text-gray-900">
                ${(data['1040_line_15'] || 0).toLocaleString()}
              </div>
            </div>
            <div className="bg-white p-4 rounded-md border">
              <div className="text-sm text-gray-600">Marginal Tax Rate</div>
              <div className="text-2xl font-bold text-red-600">
                {/* Calculate marginal rate based on 2024 brackets */}
                {(() => {
                  const taxableIncome = data['1040_line_15'] || 0;
                  const filingStatus = data.filingStatus;
                  
                  // 2024 Tax Brackets (simplified)
                  if (filingStatus === 'single') {
                    if (taxableIncome <= 11600) return '10%';
                    if (taxableIncome <= 47150) return '12%';
                    if (taxableIncome <= 100525) return '22%';
                    if (taxableIncome <= 191950) return '24%';
                    if (taxableIncome <= 243725) return '32%';
                    if (taxableIncome <= 609350) return '35%';
                    return '37%';
                  } else if (filingStatus === 'marriedFilingJointly') {
                    if (taxableIncome <= 23200) return '10%';
                    if (taxableIncome <= 94300) return '12%';
                    if (taxableIncome <= 201050) return '22%';
                    if (taxableIncome <= 383900) return '24%';
                    if (taxableIncome <= 487450) return '32%';
                    if (taxableIncome <= 731200) return '35%';
                    return '37%';
                  }
                  return 'N/A';
                })()
              }
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-yellow-800">
            <InfoTooltip content="Your marginal tax rate is the rate applied to your last dollar of income. Your effective rate (total tax ÷ total income) will be lower.">
              <span className="cursor-help border-b border-dotted border-yellow-600">
                Understanding tax brackets
              </span>
            </InfoTooltip>
          </div>
        </div>
      )}

      {/* Deduction Summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Deduction Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Adjusted Gross Income</div>
            <div className="text-lg font-semibold text-gray-900">
              ${(data['1040_line_11'] || 0).toLocaleString()}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Total Deductions</div>
            <div className="text-lg font-semibold text-gray-900">
              ${((Math.max(standardDeduction, data['1040_line_12b'] || 0)) + (data['1040_line_13'] || 0)).toLocaleString()}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Deduction Type</div>
            <div className="text-lg font-semibold text-gray-900">
              {shouldItemize ? 'Itemized' : 'Standard'}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Taxable Income</div>
            <div className="text-lg font-semibold text-red-600">
              ${(data['1040_line_15'] || 0).toLocaleString()}
            </div>
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
            Complete this section to proceed to Tax Calculation
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeductionsStep;