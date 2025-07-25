import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
import { FormSection } from '../../../common/FormSection';
import { CurrencyField } from '../../../common/CurrencyField';
import { InfoTooltip } from '../../../common/InfoTooltip';
import { CalculatedField } from '../../../common/CalculatedField';

interface IncomeStepProps {
  data: Form1040Data;
  onChange: (field: keyof Form1040Data, value: any) => void;
  readonly?: boolean;
  errors: Record<string, string>;
}

export const IncomeStep: React.FC<IncomeStepProps> = ({
  data,
  onChange,
  readonly = false,
  errors,
}) => {
  const { formState: { errors: formErrors } } = useFormContext();

  const handleImportW2Data = (w2Data: any) => {
    // Handle W-2 import logic
    if (w2Data.wages) {
      onChange('1040_line_1a', w2Data.wages);
    }
    if (w2Data.federalWithholding) {
      onChange('1040_line_25a', w2Data.federalWithholding);
    }
  };

  const handleImport1099Data = (form1099Data: any) => {
    // Handle 1099 import logic
    if (form1099Data.interest) {
      onChange('1040_line_2b', form1099Data.interest);
    }
    if (form1099Data.dividends) {
      onChange('1040_line_3b', form1099Data.dividends);
    }
  };

  return (
    <div className="space-y-8">
      {/* Wages and Salary Section */}
      <FormSection
        title="Wages, Salaries, Tips, etc."
        description="Report income from Forms W-2 and other wage statements"
        lineNumbers="1a-1e"
      >
        <div className="space-y-6">
          {/* Import W-2 Data */}
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-blue-900">Import W-2 Data</h4>
                <p className="text-sm text-blue-700 mt-1">Upload your W-2 forms to automatically populate wage information</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="Wages, salaries, tips, etc."
              name="1040_line_1a"
              value={data['1040_line_1a']}
              onChange={(value) => onChange('1040_line_1a', value)}
              disabled={readonly}
              error={errors['1040_line_1a'] || (formErrors['1040_line_1a']?.message as string)}
              lineNumber="1a"
              helpText="Enter the total from all Forms W-2, box 1"
              aria-describedby="line-1a-help"
            />

            <CurrencyField
              label="Household employee wages not reported on Form(s) W-2"
              name="1040_line_1b"
              value={data['1040_line_1b']}
              onChange={(value) => onChange('1040_line_1b', value)}
              disabled={readonly}
              error={errors['1040_line_1b'] || (formErrors['1040_line_1b']?.message as string)}
              lineNumber="1b"
              helpText="Wages paid to household employees not reported on W-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="Tip income not reported to employer"
              name="1040_line_1c"
              value={data['1040_line_1c']}
              onChange={(value) => onChange('1040_line_1c', value)}
              disabled={readonly}
              error={errors['1040_line_1c'] || (formErrors['1040_line_1c']?.message as string)}
              lineNumber="1c"
              helpText="Cash tips you received but didn't report to your employer"
            />

            <CurrencyField
              label="Nontaxable combat pay election"
              name="1040_line_1d"
              value={data['1040_line_1d']}
              onChange={(value) => onChange('1040_line_1d', value)}
              disabled={readonly}
              error={errors['1040_line_1d'] || (formErrors['1040_line_1d']?.message as string)}
              lineNumber="1d"
              helpText="Combat pay excluded from income that you elect to include"
            />
          </div>

          <CalculatedField
            label="Add lines 1a through 1d"
            value={data['1040_line_1e']}
            lineNumber="1e"
            calculation={`${data['1040_line_1a'] || 0} + ${data['1040_line_1b'] || 0} + ${data['1040_line_1c'] || 0} + ${data['1040_line_1d'] || 0}`}
            className="bg-gray-50 border-2 border-gray-300"
          />

          <div id="line-1a-help" className="text-sm text-gray-600">
            <InfoTooltip content="Include all wages, salaries, and tips from Forms W-2. This includes regular wages, overtime pay, bonuses, and commissions.">
              <span className="cursor-help border-b border-dotted border-gray-400">
                What counts as wages?
              </span>
            </InfoTooltip>
          </div>
        </div>
      </FormSection>

      {/* Interest and Dividends Section */}
      <FormSection
        title="Interest and Dividends"
        description="Report interest and dividend income from Forms 1099-INT and 1099-DIV"
        lineNumbers="2a-3b"
      >
        <div className="space-y-6">
          {/* Import 1099 Data */}
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-blue-900">Import 1099 Data</h4>
                <p className="text-sm text-blue-700 mt-1">Upload your 1099 forms to automatically populate interest and dividend information</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="Tax-exempt interest"
              name="1040_line_2a"
              value={data['1040_line_2a']}
              onChange={(value) => onChange('1040_line_2a', value)}
              disabled={readonly}
              error={errors['1040_line_2a'] || (formErrors['1040_line_2a']?.message as string)}
              lineNumber="2a"
              helpText="Interest from municipal bonds and other tax-exempt sources"
              className="bg-yellow-50"
            />

            <CurrencyField
              label="Taxable interest"
              name="1040_line_2b"
              value={data['1040_line_2b']}
              onChange={(value) => onChange('1040_line_2b', value)}
              disabled={readonly}
              error={errors['1040_line_2b'] || (formErrors['1040_line_2b']?.message as string)}
              lineNumber="2b"
              helpText="Interest from banks, credit unions, bonds, etc. (Form 1099-INT)"
              required={data['1040_line_2b'] > 1500}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="Qualified dividends"
              name="1040_line_3a"
              value={data['1040_line_3a']}
              onChange={(value) => onChange('1040_line_3a', value)}
              disabled={readonly}
              error={errors['1040_line_3a'] || (formErrors['1040_line_3a']?.message as string)}
              lineNumber="3a"
              helpText="Qualified dividends eligible for capital gains tax rates"
            />

            <CurrencyField
              label="Ordinary dividends"
              name="1040_line_3b"
              value={data['1040_line_3b']}
              onChange={(value) => onChange('1040_line_3b', value)}
              disabled={readonly}
              error={errors['1040_line_3b'] || (formErrors['1040_line_3b']?.message as string)}
              lineNumber="3b"
              helpText="Total dividends from Form 1099-DIV, box 1a"
            />
          </div>

          {data['1040_line_2b'] > 1500 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-yellow-400 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-yellow-800">Schedule B Required</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    You must file Schedule B because your taxable interest exceeds $1,500.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </FormSection>

      {/* Retirement Income Section */}
      <FormSection
        title="Retirement Income"
        description="Report distributions from IRAs, pensions, annuities, and Social Security"
        lineNumbers="4a-6b"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="IRA distributions - Total amount"
              name="1040_line_4a"
              value={data['1040_line_4a']}
              onChange={(value) => onChange('1040_line_4a', value)}
              disabled={readonly}
              error={errors['1040_line_4a'] || (formErrors['1040_line_4a']?.message as string)}
              lineNumber="4a"
              helpText="Total IRA distributions from Form 1099-R"
            />

            <CurrencyField
              label="IRA distributions - Taxable amount"
              name="1040_line_4b"
              value={data['1040_line_4b']}
              onChange={(value) => onChange('1040_line_4b', value)}
              disabled={readonly}
              error={errors['1040_line_4b'] || (formErrors['1040_line_4b']?.message as string)}
              lineNumber="4b"
              helpText="Taxable portion of IRA distributions"
              validation={{
                max: data['1040_line_4a'],
                message: 'Taxable amount cannot exceed total amount'
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="Pensions and annuities - Total amount"
              name="1040_line_5a"
              value={data['1040_line_5a']}
              onChange={(value) => onChange('1040_line_5a', value)}
              disabled={readonly}
              error={errors['1040_line_5a'] || (formErrors['1040_line_5a']?.message as string)}
              lineNumber="5a"
              helpText="Total pensions and annuities from Form 1099-R"
            />

            <CurrencyField
              label="Pensions and annuities - Taxable amount"
              name="1040_line_5b"
              value={data['1040_line_5b']}
              onChange={(value) => onChange('1040_line_5b', value)}
              disabled={readonly}
              error={errors['1040_line_5b'] || (formErrors['1040_line_5b']?.message as string)}
              lineNumber="5b"
              helpText="Taxable portion of pensions and annuities"
              validation={{
                max: data['1040_line_5a'],
                message: 'Taxable amount cannot exceed total amount'
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="Social security benefits - Total amount"
              name="1040_line_6a"
              value={data['1040_line_6a']}
              onChange={(value) => onChange('1040_line_6a', value)}
              disabled={readonly}
              error={errors['1040_line_6a'] || (formErrors['1040_line_6a']?.message as string)}
              lineNumber="6a"
              helpText="Total Social Security benefits from Form SSA-1099"
            />

            <CurrencyField
              label="Social security benefits - Taxable amount"
              name="1040_line_6b"
              value={data['1040_line_6b']}
              onChange={(value) => onChange('1040_line_6b', value)}
              disabled={readonly}
              error={errors['1040_line_6b'] || (formErrors['1040_line_6b']?.message as string)}
              lineNumber="6b"
              helpText="Taxable portion of Social Security benefits"
              validation={{
                max: data['1040_line_6a'],
                message: 'Taxable amount cannot exceed total amount'
              }}
            />
          </div>
        </div>
      </FormSection>

      {/* Other Income Section */}
      <FormSection
        title="Other Income"
        description="Report capital gains, additional income, and adjustments"
        lineNumbers="7-11"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="Capital gain or (loss)"
              name="1040_line_7"
              value={data['1040_line_7']}
              onChange={(value) => onChange('1040_line_7', value)}
              disabled={readonly}
              error={errors['1040_line_7'] || (formErrors['1040_line_7']?.message as string)}
              lineNumber="7"
              helpText="From Schedule D, line 21, or Form 8949"
            />

            <CurrencyField
              label="Additional income from Schedule 1, line 10"
              name="1040_line_8"
              value={data['1040_line_8']}
              onChange={(value) => onChange('1040_line_8', value)}
              disabled={readonly}
              error={errors['1040_line_8'] || (formErrors['1040_line_8']?.message as string)}
              lineNumber="8"
              helpText="Business income, unemployment, gambling winnings, etc."
            />
          </div>

          <CalculatedField
            label="Add lines 1e, 2b, 3b, 4b, 5b, 6b, 7, and 8. This is your total income"
            value={data['1040_line_9']}
            lineNumber="9"
            calculation={`${data['1040_line_1e'] || 0} + ${data['1040_line_2b'] || 0} + ${data['1040_line_3b'] || 0} + ${data['1040_line_4b'] || 0} + ${data['1040_line_5b'] || 0} + ${data['1040_line_6b'] || 0} + ${data['1040_line_7'] || 0} + ${data['1040_line_8'] || 0}`}
            className="bg-blue-50 border-2 border-blue-300 font-semibold"
            highlight
          />

          <CurrencyField
            label="Adjustments to income from Schedule 1, line 26"
            name="1040_line_10"
            value={data['1040_line_10']}
            onChange={(value) => onChange('1040_line_10', value)}
            disabled={readonly}
            error={errors['1040_line_10'] || (formErrors['1040_line_10']?.message as string)}
            lineNumber="10"
            helpText="Educator expenses, IRA deduction, student loan interest, etc."
          />

          <CalculatedField
            label="Subtract line 10 from line 9. This is your adjusted gross income"
            value={data['1040_line_11']}
            lineNumber="11"
            calculation={`${data['1040_line_9'] || 0} - ${data['1040_line_10'] || 0}`}
            className="bg-green-50 border-2 border-green-300 font-semibold text-lg"
            highlight
            important
          />
        </div>
      </FormSection>

      {/* Income Summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Income Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Total Income</div>
            <div className="text-xl font-semibold text-gray-900">
              ${(data['1040_line_9'] || 0).toLocaleString()}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Adjustments</div>
            <div className="text-xl font-semibold text-gray-900">
              ${(data['1040_line_10'] || 0).toLocaleString()}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Adjusted Gross Income</div>
            <div className="text-xl font-semibold text-green-600">
              ${(data['1040_line_11'] || 0).toLocaleString()}
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
            Complete this section to proceed to Deductions
          </span>
        </div>
      </div>
    </div>
  );
};

export default IncomeStep;