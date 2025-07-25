import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
import { FormSection } from '../../../common/FormSection';
import { CurrencyField } from '../../../common/CurrencyField';
import { InfoTooltip } from '../../../common/InfoTooltip';
import { CalculatedField } from '../../../common/CalculatedField';
import { ConditionalField } from '../../../common/ConditionalField';
import { CheckboxField } from '../../../common/CheckboxField';
import { SelectField } from '../../../common/SelectField';
import { InputField } from '../../../common/InputField';
import { Button } from '../../../common/Button';

interface PaymentsStepProps {
  data: Form1040Data;
  onChange: (field: keyof Form1040Data, value: any) => void;
  readonly?: boolean;
  errors: Record<string, string>;
}

export const PaymentsStep: React.FC<PaymentsStepProps> = ({
  data,
  onChange,
  readonly = false,
  errors,
}) => {
  const { formState: { errors: formErrors } } = useFormContext();
  const [showEstimatedPayments, setShowEstimatedPayments] = useState(false);
  const [showRefundOptions, setShowRefundOptions] = useState(false);

  // Calculate total tax from previous step
  const totalTax = (data['1040_line_24'] || 0);
  
  // Calculate total payments
  const totalPayments = (
    (data['1040_line_25a'] || 0) + // Federal income tax withheld
    (data['1040_line_25b'] || 0) + // 2023 estimated tax payments
    (data['1040_line_25c'] || 0) + // Earned income credit
    (data['1040_line_25d'] || 0) + // Additional child tax credit
    (data['1040_line_26'] || 0) +  // American opportunity credit
    (data['1040_line_27'] || 0) +  // Reserved for future use
    (data['1040_line_28'] || 0) +  // Amount from Schedule 3, line 15
    (data['1040_line_29'] || 0)    // Excess social security and tier 1 RRTA tax withheld
  );

  // Calculate refund or amount owed
  const refundOrOwed = totalPayments - totalTax;
  const isRefund = refundOrOwed > 0;
  const amountOwed = Math.max(0, -refundOrOwed);
  const refundAmount = Math.max(0, refundOrOwed);

  // Calculate estimated tax penalty
  const calculatePenalty = () => {
    if (totalTax <= 1000) return 0; // No penalty if tax owed is $1,000 or less
    
    const priorYearTax = data.priorYearTax || 0;
    const currentYearAGI = data['1040_line_11'] || 0;
    const priorYearAGI = data.priorYearAGI || 0;
    
    // Safe harbor rules
    const safeHarborAmount = priorYearAGI > 150000 ? priorYearTax * 1.1 : priorYearTax;
    const currentYearSafeHarbor = totalTax * 0.9;
    
    const totalWithholding = (data['1040_line_25a'] || 0) + (data['1040_line_25b'] || 0);
    
    if (totalWithholding >= Math.min(safeHarborAmount, currentYearSafeHarbor)) {
      return 0; // No penalty
    }
    
    // Simplified penalty calculation (actual calculation is more complex)
    const underpayment = Math.max(0, totalTax - totalWithholding);
    return Math.round(underpayment * 0.08); // Approximate 8% annual rate
  };

  const estimatedPenalty = calculatePenalty();

  return (
    <div className="space-y-8">
      {/* Federal Income Tax Withheld */}
      <FormSection
        title="Federal Income Tax Withheld"
        description="Tax withheld from wages, pensions, and other income"
        lineNumbers="25a-25d"
      >
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <h4 className="text-sm font-medium text-blue-800">Where to Find Withholding Information</h4>
            </div>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <strong>Form W-2:</strong> Box 2 (Federal income tax withheld)</li>
              <li>• <strong>Form 1099-R:</strong> Box 4 (Federal income tax withheld)</li>
              <li>• <strong>Form 1099-MISC:</strong> Box 4 (Federal income tax withheld)</li>
              <li>• <strong>Form 1042-S:</strong> Box 7 (Tax withheld)</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="Federal income tax withheld"
              name="1040_line_25a"
              value={data['1040_line_25a']}
              onChange={(value) => onChange('1040_line_25a', value)}
              disabled={readonly}
              error={errors['1040_line_25a'] || (formErrors['1040_line_25a']?.message as string)}
              lineNumber="25a"
              helpText="From Forms W-2, 1099, etc."
              required
            />

            <CurrencyField
              label="2024 estimated tax payments and amount applied from 2023 return"
              name="1040_line_25b"
              value={data['1040_line_25b']}
              onChange={(value) => onChange('1040_line_25b', value)}
              disabled={readonly}
              error={errors['1040_line_25b'] || (formErrors['1040_line_25b']?.message as string)}
              lineNumber="25b"
              helpText="Quarterly estimated payments made during 2024"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="Earned income credit (EIC)"
              name="1040_line_25c"
              value={data['1040_line_25c']}
              onChange={(value) => onChange('1040_line_25c', value)}
              disabled={readonly}
              error={errors['1040_line_25c'] || (formErrors['1040_line_25c']?.message as string)}
              lineNumber="25c"
              helpText="From Schedule EIC if you have qualifying children"
            />

            <CurrencyField
              label="Additional child tax credit from Schedule 8812"
              name="1040_line_25d"
              value={data['1040_line_25d']}
              onChange={(value) => onChange('1040_line_25d', value)}
              disabled={readonly}
              error={errors['1040_line_25d'] || (formErrors['1040_line_25d']?.message as string)}
              lineNumber="25d"
              helpText="Refundable portion of child tax credit"
            />
          </div>

          {/* Estimated Payments Helper */}
          {!data['1040_line_25b'] && (
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => setShowEstimatedPayments(!showEstimatedPayments)}
                className="text-sm"
              >
                {showEstimatedPayments ? 'Hide' : 'Show'} Estimated Payments Calculator
              </Button>
            </div>
          )}

          {showEstimatedPayments && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">2024 Estimated Tax Payments</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Q1 Payment (Due 4/15/24)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Q2 Payment (Due 6/17/24)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Q3 Payment (Due 9/16/24)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Q4 Payment (Due 1/15/25)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </FormSection>

      {/* Other Payments and Credits */}
      <FormSection
        title="Other Payments and Refundable Credits"
        description="Additional payments and refundable credits"
        lineNumbers="26-29"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="American opportunity credit from Form 8863, line 8"
              name="1040_line_26"
              value={data['1040_line_26']}
              onChange={(value) => onChange('1040_line_26', value)}
              disabled={readonly}
              error={errors['1040_line_26'] || (formErrors['1040_line_26']?.message as string)}
              lineNumber="26"
              helpText="Refundable education credit"
            />

            <CurrencyField
              label="Reserved for future use"
              name="1040_line_27"
              value={data['1040_line_27']}
              onChange={(value) => onChange('1040_line_27', value)}
              disabled={readonly}
              error={errors['1040_line_27'] || (formErrors['1040_line_27']?.message as string)}
              lineNumber="27"
              helpText="Currently not used"
              className="bg-gray-100"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrencyField
              label="Amount from Schedule 3, line 15"
              name="1040_line_28"
              value={data['1040_line_28']}
              onChange={(value) => onChange('1040_line_28', value)}
              disabled={readonly}
              error={errors['1040_line_28'] || (formErrors['1040_line_28']?.message as string)}
              lineNumber="28"
              helpText="Net premium tax credit, health coverage tax credit, etc."
            />

            <CurrencyField
              label="Excess social security and tier 1 RRTA tax withheld"
              name="1040_line_29"
              value={data['1040_line_29']}
              onChange={(value) => onChange('1040_line_29', value)}
              disabled={readonly}
              error={errors['1040_line_29'] || (formErrors['1040_line_29']?.message as string)}
              lineNumber="29"
              helpText="If you had multiple employers and excess SS tax was withheld"
            />
          </div>
        </div>
      </FormSection>

      {/* Total Payments */}
      <FormSection
        title="Total Payments"
        description="Sum of all payments and refundable credits"
        lineNumbers="30"
      >
        <div className="space-y-6">
          <CalculatedField
            label="Add lines 25a through 29. These are your total payments"
            value={totalPayments}
            lineNumber="30"
            calculation={`${(data['1040_line_25a'] || 0).toLocaleString()} + ${(data['1040_line_25b'] || 0).toLocaleString()} + ${(data['1040_line_25c'] || 0).toLocaleString()} + ${(data['1040_line_25d'] || 0).toLocaleString()} + ${(data['1040_line_26'] || 0).toLocaleString()} + ${(data['1040_line_27'] || 0).toLocaleString()} + ${(data['1040_line_28'] || 0).toLocaleString()} + ${(data['1040_line_29'] || 0).toLocaleString()}`}
            className="bg-green-50 border-2 border-green-300 font-semibold text-lg"
            highlight
            important
          />
        </div>
      </FormSection>

      {/* Refund or Amount Owed */}
      <FormSection
        title={isRefund ? "Refund" : "Amount You Owe"}
        description={isRefund ? "You overpaid and are due a refund" : "You owe additional tax"}
        lineNumbers="31-34"
      >
        <div className="space-y-6">
          {/* Payment vs Tax Comparison */}
          <div className={`rounded-lg p-6 border-2 ${
            isRefund 
              ? 'bg-green-50 border-green-300' 
              : 'bg-red-50 border-red-300'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-md border">
                <div className="text-sm text-gray-600">Total Tax</div>
                <div className="text-xl font-bold text-red-600">
                  ${totalTax.toLocaleString()}
                </div>
              </div>
              <div className="bg-white p-4 rounded-md border">
                <div className="text-sm text-gray-600">Total Payments</div>
                <div className="text-xl font-bold text-green-600">
                  ${totalPayments.toLocaleString()}
                </div>
              </div>
              <div className="bg-white p-4 rounded-md border">
                <div className="text-sm text-gray-600">{isRefund ? 'Refund' : 'Amount Owed'}</div>
                <div className={`text-2xl font-bold ${
                  isRefund ? 'text-green-600' : 'text-red-600'
                }`}>
                  ${(isRefund ? refundAmount : amountOwed).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {isRefund ? (
            // Refund Section
            <div className="space-y-6">
              <CalculatedField
                label="If line 30 is more than line 24, subtract line 24 from line 30. This is the amount you overpaid"
                value={refundAmount}
                lineNumber="31"
                calculation={`${totalPayments.toLocaleString()} - ${totalTax.toLocaleString()}`}
                className="bg-green-50 border-2 border-green-300 font-semibold"
                highlight
              />

              {/* Refund Options */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">Refund Options</h4>
                
                <div className="space-y-4">
                  <CurrencyField
                    label="Amount to be refunded to you"
                    name="1040_line_32"
                    value={data['1040_line_32']}
                    onChange={(value) => onChange('1040_line_32', value)}
                    disabled={readonly}
                    error={errors['1040_line_32'] || (formErrors['1040_line_32']?.message as string)}
                    lineNumber="32"
                    helpText="Amount you want refunded (cannot exceed line 31)"
                    validation={{
                      max: refundAmount,
                      message: 'Refund amount cannot exceed overpayment'
                    }}
                  />

                  <CurrencyField
                    label="Amount to be applied to your 2025 estimated tax"
                    name="1040_line_33"
                    value={data['1040_line_33']}
                    onChange={(value) => onChange('1040_line_33', value)}
                    disabled={readonly}
                    error={errors['1040_line_33'] || (formErrors['1040_line_33']?.message as string)}
                    lineNumber="33"
                    helpText="Amount to apply to next year's estimated tax"
                    validation={{
                      max: refundAmount - (data['1040_line_32'] || 0),
                      message: 'Total of lines 32 and 33 cannot exceed line 31'
                    }}
                  />
                </div>

                {/* Direct Deposit Information */}
                <div className="mt-6 p-4 bg-white rounded-md border">
                  <h5 className="font-medium text-gray-900 mb-3">Direct Deposit Information</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <SelectField
                      label="Account Type"
                      name="refund_account_type"
                      value={data.refundAccountType || ''}
                      onChange={(value) => onChange('refundAccountType', value)}
                      options={[
                        { value: '', label: 'Select account type' },
                        { value: 'checking', label: 'Checking' },
                        { value: 'savings', label: 'Savings' }
                      ]}
                      disabled={readonly}
                    />
                    
                    <InputField
                      label="Routing Number"
                      name="refund_routing_number"
                      value={data.refundRoutingNumber || ''}
                      onChange={(value) => onChange('refundRoutingNumber', value)}
                      disabled={readonly}
                      maxLength={9}
                      pattern="[0-9]{9}"
                      helpText="9-digit routing number"
                    />
                    
                    <InputField
                      label="Account Number"
                      name="refund_account_number"
                      value={data.refundAccountNumber || ''}
                      onChange={(value) => onChange('refundAccountNumber', value)}
                      disabled={readonly}
                      helpText="Your account number"
                    />
                  </div>
                  
                  <div className="mt-3 text-sm text-gray-600">
                    <InfoTooltip content="Direct deposit is the fastest way to receive your refund. Make sure your account information is correct.">
                      <span className="cursor-help border-b border-dotted border-gray-400">
                        Why use direct deposit?
                      </span>
                    </InfoTooltip>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Amount Owed Section
            <div className="space-y-6">
              <CalculatedField
                label="If line 24 is more than line 30, subtract line 30 from line 24. This is the amount you owe"
                value={amountOwed}
                lineNumber="34"
                calculation={`${totalTax.toLocaleString()} - ${totalPayments.toLocaleString()}`}
                className="bg-red-50 border-2 border-red-300 font-semibold"
                highlight
              />

              {/* Payment Options */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-4">Payment Options</h4>
                
                <div className="space-y-3 text-sm text-yellow-800">
                  <div className="flex items-start">
                    <svg className="h-4 w-4 text-yellow-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Online:</strong> Pay at irs.gov/payments using bank transfer (free) or debit/credit card (fees apply)
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-4 w-4 text-yellow-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Phone:</strong> Call 1-888-PAY-1040 (1-888-729-1040) for automated payment
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-4 w-4 text-yellow-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Mail:</strong> Send check or money order with Form 1040-V payment voucher
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-4 w-4 text-yellow-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Installment Plan:</strong> If you can't pay in full, request a payment plan at irs.gov
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded">
                  <div className="text-sm text-red-800">
                    <strong>Payment Due Date:</strong> April 15, 2025
                    <br />
                    <strong>Interest and Penalties:</strong> Apply to unpaid amounts after the due date
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Estimated Tax Penalty */}
          {estimatedPenalty > 0 && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-orange-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-orange-800">Estimated Tax Penalty May Apply</h4>
                  <p className="text-orange-700 mt-2">
                    You may owe an estimated tax penalty of approximately 
                    <span className="font-semibold">${estimatedPenalty.toLocaleString()}</span> 
                    for underpayment of estimated tax during 2024.
                  </p>
                  <p className="text-sm text-orange-600 mt-2">
                    Use Form 2210 to calculate the exact penalty amount. This penalty is in addition to any tax owed.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </FormSection>

      {/* Payment Summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Total Tax</div>
            <div className="text-lg font-semibold text-red-600">
              ${totalTax.toLocaleString()}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Total Payments</div>
            <div className="text-lg font-semibold text-green-600">
              ${totalPayments.toLocaleString()}
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">Withholding Rate</div>
            <div className="text-lg font-semibold text-gray-900">
              {data['1040_line_11'] > 0 
                ? ((data['1040_line_25a'] || 0) / data['1040_line_11'] * 100).toFixed(1)
                : '0.0'
              }%
            </div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="text-gray-600">{isRefund ? 'Refund' : 'Amount Owed'}</div>
            <div className={`text-xl font-bold ${
              isRefund ? 'text-green-600' : 'text-red-600'
            }`}>
              ${(isRefund ? refundAmount : amountOwed).toLocaleString()}
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
            Complete this section to proceed to Review and Submit
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentsStep;