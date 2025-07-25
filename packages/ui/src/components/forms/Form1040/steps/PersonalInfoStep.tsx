import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
import { FormSection } from '../../../common/FormSection';
import { InputField } from '../../../common/InputField';
import { SelectField } from '../../../common/SelectField';
import { SSNField } from '../../../common/SSNField';
import { InfoTooltip } from '../../../common/InfoTooltip';
import { ConditionalField } from '../../../common/ConditionalField';

interface PersonalInfoStepProps {
  data: Form1040Data;
  onChange: (field: keyof Form1040Data, value: any) => void;
  readonly?: boolean;
  errors: Record<string, string>;
}

const FILING_STATUS_OPTIONS = [
  { value: '', label: 'Select filing status', disabled: true },
  { value: 'single', label: 'Single' },
  { value: 'married_filing_jointly', label: 'Married filing jointly' },
  { value: 'married_filing_separately', label: 'Married filing separately' },
  { value: 'head_of_household', label: 'Head of household' },
  { value: 'qualifying_surviving_spouse', label: 'Qualifying surviving spouse' },
];

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  data,
  onChange,
  readonly = false,
  errors,
}) => {
  const { register, formState: { errors: formErrors } } = useFormContext();

  const isMarried = ['married_filing_jointly', 'married_filing_separately'].includes(data['1040_filing_status']);

  return (
    <div className="space-y-8">
      {/* Filing Status Section */}
      <FormSection
        title="Filing Status"
        description="Check only one box that applies to your filing status on December 31, 2024"
        required
      >
        <div className="space-y-4">
          <SelectField
            label="Filing Status"
            name="1040_filing_status"
            value={data['1040_filing_status']}
            onChange={(value) => onChange('1040_filing_status', value)}
            options={FILING_STATUS_OPTIONS}
            required
            disabled={readonly}
            error={errors['1040_filing_status'] || (formErrors['1040_filing_status']?.message as string)}
            aria-describedby="filing-status-help"
            className="max-w-md"
          />
          
          <div id="filing-status-help" className="text-sm text-gray-600">
            <InfoTooltip content="Your filing status determines your filing requirements, standard deduction, and tax rates.">
              <span className="cursor-help border-b border-dotted border-gray-400">
                Need help choosing your filing status?
              </span>
            </InfoTooltip>
          </div>

          {/* Filing Status Guidance */}
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 text-sm">
            <h4 className="font-medium text-blue-900 mb-2">Filing Status Guidelines:</h4>
            <ul className="space-y-1 text-blue-800">
              <li><strong>Single:</strong> You were unmarried or legally separated on December 31, 2024</li>
              <li><strong>Married filing jointly:</strong> You were married on December 31, 2024, and choose to file together</li>
              <li><strong>Married filing separately:</strong> You were married but choose to file separate returns</li>
              <li><strong>Head of household:</strong> You were unmarried and paid more than half the cost of keeping up a home</li>
              <li><strong>Qualifying surviving spouse:</strong> Your spouse died in 2022 or 2023 and you meet certain conditions</li>
            </ul>
          </div>
        </div>
      </FormSection>

      {/* Taxpayer Information Section */}
      <FormSection
        title="Taxpayer Information"
        description="Enter your personal information exactly as it appears on your Social Security card"
        required
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="First Name"
            name="1040_first_name"
            value={data['1040_first_name']}
            onChange={(value) => onChange('1040_first_name', value)}
            required
            disabled={readonly}
            error={errors['1040_first_name'] || (formErrors['1040_first_name']?.message as string)}
            maxLength={35}
            placeholder="Enter your first name"
            aria-describedby="first-name-help"
          />
          
          <InputField
            label="Last Name"
            name="1040_last_name"
            value={data['1040_last_name']}
            onChange={(value) => onChange('1040_last_name', value)}
            required
            disabled={readonly}
            error={errors['1040_last_name'] || (formErrors['1040_last_name']?.message as string)}
            maxLength={35}
            placeholder="Enter your last name"
            aria-describedby="last-name-help"
          />
        </div>

        <div className="mt-6">
          <SSNField
            label="Social Security Number"
            name="1040_ssn"
            value={data['1040_ssn']}
            onChange={(value) => onChange('1040_ssn', value)}
            required
            disabled={readonly}
            error={errors['1040_ssn'] || (formErrors['1040_ssn']?.message as string)}
            aria-describedby="ssn-help"
            className="max-w-xs"
          />
          
          <div id="ssn-help" className="mt-2 text-sm text-gray-600">
            <InfoTooltip content="Your SSN is used to identify your tax account. Enter it exactly as shown on your Social Security card.">
              <span className="cursor-help border-b border-dotted border-gray-400">
                Why do we need your SSN?
              </span>
            </InfoTooltip>
          </div>
        </div>

        <div id="first-name-help last-name-help" className="mt-4 text-sm text-gray-600">
          <p>Enter your name exactly as shown on your Social Security card. If you legally changed your name, contact the Social Security Administration.</p>
        </div>
      </FormSection>

      {/* Spouse Information Section */}
      <ConditionalField condition={isMarried}>
        <FormSection
          title="Spouse Information"
          description="Enter your spouse's information exactly as it appears on their Social Security card"
          required={isMarried}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Spouse's First Name"
              name="1040_spouse_first_name"
              value={data['1040_spouse_first_name']}
              onChange={(value) => onChange('1040_spouse_first_name', value)}
              required={isMarried}
              disabled={readonly}
              error={errors['1040_spouse_first_name'] || (formErrors['1040_spouse_first_name']?.message as string)}
              maxLength={35}
              placeholder="Enter spouse's first name"
            />
            
            <InputField
              label="Spouse's Last Name"
              name="1040_spouse_last_name"
              value={data['1040_spouse_last_name']}
              onChange={(value) => onChange('1040_spouse_last_name', value)}
              required={isMarried}
              disabled={readonly}
              error={errors['1040_spouse_last_name'] || (formErrors['1040_spouse_last_name']?.message as string)}
              maxLength={35}
              placeholder="Enter spouse's last name"
            />
          </div>

          <div className="mt-6">
            <SSNField
              label="Spouse's Social Security Number"
              name="1040_spouse_ssn"
              value={data['1040_spouse_ssn']}
              onChange={(value) => onChange('1040_spouse_ssn', value)}
              required={isMarried}
              disabled={readonly}
              error={errors['1040_spouse_ssn'] || (formErrors['1040_spouse_ssn']?.message as string)}
              className="max-w-xs"
            />
          </div>

          {data['1040_filing_status'] === 'married_filing_separately' && (
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-yellow-800">Married Filing Separately</h4>
                  <p className="mt-1 text-sm text-yellow-700">
                    When married filing separately, you and your spouse must both use the same method for deductions (both itemize or both use standard deduction).
                  </p>
                </div>
              </div>
            </div>
          )}
        </FormSection>
      </ConditionalField>

      {/* Address Information Section */}
      <FormSection
        title="Home Address"
        description="Enter your home address where you lived on December 31, 2024"
        required
      >
        <div className="space-y-6">
          <InputField
            label="Home Address (Number and Street)"
            name="1040_address"
            value={data['1040_address']}
            onChange={(value) => onChange('1040_address', value)}
            required
            disabled={readonly}
            error={errors['1040_address'] || (formErrors['1040_address']?.message as string)}
            maxLength={35}
            placeholder="123 Main Street, Apt 4B"
            aria-describedby="address-help"
          />
          
          <InputField
            label="City, State, and ZIP Code"
            name="1040_city_state_zip"
            value={data['1040_city_state_zip']}
            onChange={(value) => onChange('1040_city_state_zip', value)}
            required
            disabled={readonly}
            error={errors['1040_city_state_zip'] || (formErrors['1040_city_state_zip']?.message as string)}
            maxLength={35}
            placeholder="Anytown, ST 12345"
            aria-describedby="city-state-zip-help"
          />
        </div>

        <div id="address-help city-state-zip-help" className="mt-4 text-sm text-gray-600">
          <p>Enter your address where you lived on December 31, 2024. If you moved during the year, use your address on December 31.</p>
          <p className="mt-2">
            <InfoTooltip content="If you have a foreign address, enter it in the format used by the foreign country's postal service.">
              <span className="cursor-help border-b border-dotted border-gray-400">
                Foreign address?
              </span>
            </InfoTooltip>
          </p>
        </div>
      </FormSection>

      {/* Presidential Election Campaign Fund */}
      <FormSection
        title="Presidential Election Campaign Fund"
        description="Check here if you want $3 to go to this fund. This will not change your tax or refund."
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="presidential-fund-you"
              className="h-4 w-4 text-tax-blue focus:ring-tax-blue border-gray-300 rounded"
              disabled={readonly}
              aria-describedby="presidential-fund-help"
            />
            <label htmlFor="presidential-fund-you" className="text-sm font-medium text-gray-700">
              You
            </label>
            
            {isMarried && (
              <>
                <input
                  type="checkbox"
                  id="presidential-fund-spouse"
                  className="h-4 w-4 text-tax-blue focus:ring-tax-blue border-gray-300 rounded ml-6"
                  disabled={readonly}
                />
                <label htmlFor="presidential-fund-spouse" className="text-sm font-medium text-gray-700">
                  Spouse
                </label>
              </>
            )}
          </div>
          
          <div id="presidential-fund-help" className="text-sm text-gray-600">
            <p>Checking this box will designate $3 of your taxes to the Presidential Election Campaign Fund. This does not increase your tax or reduce your refund.</p>
          </div>
        </div>
      </FormSection>

      {/* Step Completion Indicator */}
      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md">
        <div className="flex items-center">
          <svg className="h-5 w-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-green-800">
            Complete this section to proceed to Income information
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;