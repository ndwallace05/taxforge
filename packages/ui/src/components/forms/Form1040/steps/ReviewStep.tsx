import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
import { FormSection } from '../../../common/FormSection';
import { Button } from '../../../common/Button';
import { CheckboxField } from '../../../common/CheckboxField';
import { InputField } from '../../../common/InputField';
import { SelectField } from '../../../common/SelectField';
import { InfoTooltip } from '../../../common/InfoTooltip';

interface ReviewStepProps {
  data: Form1040Data;
  onChange: (field: keyof Form1040Data, value: any) => void;
  onSubmit: () => void;
  readonly?: boolean;
  errors: Record<string, string>;
  isSubmitting?: boolean;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({
  data,
  onChange,
  onSubmit,
  readonly = false,
  errors,
  isSubmitting = false,
}) => {
  const { formState: { errors: formErrors } } = useFormContext();
  const [showFullForm, setShowFullForm] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedSignatureMethod, setSelectedSignatureMethod] = useState('electronic');

  // Calculate key totals for review
  const totalIncome = data['1040_line_9'] || 0;
  const adjustedGrossIncome = data['1040_line_11'] || 0;
  const taxableIncome = data['1040_line_15'] || 0;
  const totalTax = data['1040_line_24'] || 0;
  const totalPayments = (
    (data['1040_line_25a'] || 0) +
    (data['1040_line_25b'] || 0) +
    (data['1040_line_25c'] || 0) +
    (data['1040_line_25d'] || 0) +
    (data['1040_line_26'] || 0) +
    (data['1040_line_27'] || 0) +
    (data['1040_line_28'] || 0) +
    (data['1040_line_29'] || 0)
  );
  const refundOrOwed = totalPayments - totalTax;
  const isRefund = refundOrOwed > 0;

  // Validation checks
  const validationIssues = [];
  
  if (!data.firstName || !data.lastName) {
    validationIssues.push('Missing taxpayer name');
  }
  if (!data.ssn) {
    validationIssues.push('Missing taxpayer SSN');
  }
  if (!data.filingStatus) {
    validationIssues.push('Missing filing status');
  }
  if (!data.address || !data.city || !data.state || !data.zipCode) {
    validationIssues.push('Incomplete address information');
  }
  if (data.filingStatus === 'married_filing_jointly' && (!data.spouseFirstName || !data.spouseLastName || !data.spouseSSN)) {
    validationIssues.push('Missing spouse information for joint filing');
  }

  const canSubmit = validationIssues.length === 0 && agreedToTerms;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getFilingStatusLabel = (status: string) => {
    const statusMap: Record<string, string> = {
      'single': 'Single',
      'married_filing_jointly': 'Married Filing Jointly',
      'married_filing_separately': 'Married Filing Separately',
      'head_of_household': 'Head of Household',
      'qualifying_widow': 'Qualifying Surviving Spouse'
    };
    return statusMap[status] || status;
  };

  return (
    <div className="space-y-8">
      {/* Form Summary */}
      <FormSection
        title="Form 1040 Summary"
        description="Review your tax return before submitting"
      >
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Taxpayer Information */}
            <div className="bg-white rounded-lg p-4 border">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Taxpayer Information</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium">{data.firstName} {data.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">SSN:</span>
                  <span className="font-medium">{data.ssn ? `***-**-${data.ssn.slice(-4)}` : 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Filing Status:</span>
                  <span className="font-medium">{getFilingStatusLabel(data.filingStatus || '')}</span>
                </div>
                {data.filingStatus === 'married_filing_jointly' && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Spouse:</span>
                    <span className="font-medium">{data.spouseFirstName} {data.spouseLastName}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Address:</span>
                  <span className="font-medium text-right">
                    {data.address}<br />
                    {data.city}, {data.state} {data.zipCode}
                  </span>
                </div>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-white rounded-lg p-4 border">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Financial Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Income:</span>
                  <span className="font-medium">{formatCurrency(totalIncome)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Adjusted Gross Income:</span>
                  <span className="font-medium">{formatCurrency(adjustedGrossIncome)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxable Income:</span>
                  <span className="font-medium">{formatCurrency(taxableIncome)}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-gray-600">Total Tax:</span>
                  <span className="font-semibold text-red-600">{formatCurrency(totalTax)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Payments:</span>
                  <span className="font-semibold text-green-600">{formatCurrency(totalPayments)}</span>
                </div>
                <div className={`flex justify-between border-t pt-2 text-lg font-bold ${
                  isRefund ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span>{isRefund ? 'Refund:' : 'Amount Owed:'}</span>
                  <span>{formatCurrency(Math.abs(refundOrOwed))}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormSection>

      {/* Validation Issues */}
      {validationIssues.length > 0 && (
        <FormSection
          title="Issues to Resolve"
          description="Please address these issues before submitting"
        >
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="h-6 w-6 text-red-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-lg font-semibold text-red-800">Cannot Submit - Issues Found</h4>
                <ul className="mt-2 text-red-700 space-y-1">
                  {validationIssues.map((issue, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FormSection>
      )}

      {/* Detailed Form Review */}
      <FormSection
        title="Detailed Form Review"
        description="Line-by-line review of your tax return"
      >
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={() => setShowFullForm(!showFullForm)}
            className="w-full"
          >
            {showFullForm ? 'Hide' : 'Show'} Complete Form Details
          </Button>

          {showFullForm && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Income Section */}
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Income</h4>
                  <div className="space-y-2 text-sm">
                    {data['1040_line_1a'] && (
                      <div className="flex justify-between">
                        <span>1a. Wages, salaries, tips:</span>
                        <span>{formatCurrency(data['1040_line_1a'])}</span>
                      </div>
                    )}
                    {data['1040_line_2a'] && (
                      <div className="flex justify-between">
                        <span>2a. Tax-exempt interest:</span>
                        <span>{formatCurrency(data['1040_line_2a'])}</span>
                      </div>
                    )}
                    {data['1040_line_2b'] && (
                      <div className="flex justify-between">
                        <span>2b. Taxable interest:</span>
                        <span>{formatCurrency(data['1040_line_2b'])}</span>
                      </div>
                    )}
                    {data['1040_line_3a'] && (
                      <div className="flex justify-between">
                        <span>3a. Qualified dividends:</span>
                        <span>{formatCurrency(data['1040_line_3a'])}</span>
                      </div>
                    )}
                    {data['1040_line_3b'] && (
                      <div className="flex justify-between">
                        <span>3b. Ordinary dividends:</span>
                        <span>{formatCurrency(data['1040_line_3b'])}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 font-semibold">
                      <div className="flex justify-between">
                        <span>9. Total income:</span>
                        <span>{formatCurrency(totalIncome)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deductions Section */}
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Deductions</h4>
                  <div className="space-y-2 text-sm">
                    {data['1040_line_12'] && (
                      <div className="flex justify-between">
                        <span>12. Standard/Itemized deduction:</span>
                        <span>{formatCurrency(data['1040_line_12'])}</span>
                      </div>
                    )}
                    {data['1040_line_13'] && (
                      <div className="flex justify-between">
                        <span>13. Qualified business income:</span>
                        <span>{formatCurrency(data['1040_line_13'])}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 font-semibold">
                      <div className="flex justify-between">
                        <span>15. Taxable income:</span>
                        <span>{formatCurrency(taxableIncome)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax and Credits Section */}
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Tax & Credits</h4>
                  <div className="space-y-2 text-sm">
                    {data['1040_line_16'] && (
                      <div className="flex justify-between">
                        <span>16. Tax on taxable income:</span>
                        <span>{formatCurrency(data['1040_line_16'])}</span>
                      </div>
                    )}
                    {data['1040_line_19'] && (
                      <div className="flex justify-between">
                        <span>19. Child tax credit:</span>
                        <span>{formatCurrency(data['1040_line_19'])}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 font-semibold">
                      <div className="flex justify-between">
                        <span>24. Total tax:</span>
                        <span>{formatCurrency(totalTax)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payments Section */}
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Payments</h4>
                  <div className="space-y-2 text-sm">
                    {data['1040_line_25a'] && (
                      <div className="flex justify-between">
                        <span>25a. Federal income tax withheld:</span>
                        <span>{formatCurrency(data['1040_line_25a'])}</span>
                      </div>
                    )}
                    {data['1040_line_25b'] && (
                      <div className="flex justify-between">
                        <span>25b. Estimated tax payments:</span>
                        <span>{formatCurrency(data['1040_line_25b'])}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 font-semibold">
                      <div className="flex justify-between">
                        <span>30. Total payments:</span>
                        <span>{formatCurrency(totalPayments)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </FormSection>

      {/* Signature and Submission */}
      <FormSection
        title="Signature and Submission"
        description="Electronic signature and submission options"
      >
        <div className="space-y-6">
          {/* Signature Method */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">Signature Method</h4>
            
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="signatureMethod"
                  value="electronic"
                  checked={selectedSignatureMethod === 'electronic'}
                  onChange={(e) => setSelectedSignatureMethod(e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium text-blue-900">Electronic Signature (Recommended)</div>
                  <div className="text-sm text-blue-700">Fastest processing, immediate confirmation</div>
                </div>
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="signatureMethod"
                  value="print_and_mail"
                  checked={selectedSignatureMethod === 'print_and_mail'}
                  onChange={(e) => setSelectedSignatureMethod(e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="font-medium text-blue-900">Print and Mail</div>
                  <div className="text-sm text-blue-700">Print completed form and mail with signature</div>
                </div>
              </label>
            </div>
          </div>

          {selectedSignatureMethod === 'electronic' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-900 mb-4">Electronic Signature</h4>
              
              <div className="space-y-4">
                <InputField
                  label="Electronic Signature PIN"
                  name="electronic_signature_pin"
                  type="password"
                  value={data.electronicSignaturePIN || ''}
                  onChange={(value) => onChange('electronicSignaturePIN', value)}
                  disabled={readonly}
                  maxLength={5}
                  pattern="[0-9]{5}"
                  helpText="5-digit PIN for electronic signature (choose any 5 digits except all zeros)"
                  required
                />
                
                {data.filingStatus === 'married_filing_jointly' && (
                  <InputField
                    label="Spouse Electronic Signature PIN"
                    name="spouse_electronic_signature_pin"
                    type="password"
                    value={data.spouseElectronicSignaturePIN || ''}
                    onChange={(value) => onChange('spouseElectronicSignaturePIN', value)}
                    disabled={readonly}
                    maxLength={5}
                    pattern="[0-9]{5}"
                    helpText="5-digit PIN for spouse electronic signature"
                    required
                  />
                )}
                
                <div className="text-sm text-green-700">
                  <InfoTooltip content="Your electronic signature has the same legal effect as a written signature.">
                    <span className="cursor-help border-b border-dotted border-green-600">
                      Electronic Signature Legal Notice
                    </span>
                  </InfoTooltip>
                </div>
              </div>
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Terms and Conditions</h4>
            
            <div className="space-y-4">
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  Under penalties of perjury, I declare that I have examined this return and accompanying schedules and statements, 
                  and to the best of my knowledge and belief, they are true, correct, and complete. Declaration of preparer 
                  (other than taxpayer) is based on all information of which preparer has any knowledge.
                </p>
                
                <p>
                  By submitting this return electronically, I authorize the IRS to process this return and any refund or payment 
                  associated with it. I understand that submitting false information may result in penalties and interest.
                </p>
              </div>
              
              <CheckboxField
                label="I agree to the terms and conditions above and certify that the information provided is accurate"
                name="agree_to_terms"
                checked={agreedToTerms}
                onChange={setAgreedToTerms}
                disabled={readonly}
                required
                className="text-sm"
              />
              
              {data.filingStatus === 'married_filing_jointly' && (
                <CheckboxField
                  label="Spouse agrees to the terms and conditions and certifies the accuracy of this joint return"
                  name="spouse_agree_to_terms"
                  checked={data.spouseAgreesToTerms || false}
                  onChange={(value) => onChange('spouseAgreesToTerms', value)}
                  disabled={readonly}
                  required
                  className="text-sm"
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              onClick={onSubmit}
              disabled={!canSubmit || isSubmitting || readonly}
              className={`px-8 py-3 text-lg font-semibold ${
                canSubmit && !isSubmitting
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              loading={isSubmitting}
            >
              {isSubmitting ? 'Submitting Tax Return...' : 'Submit Tax Return'}
            </Button>
          </div>
          
          {!canSubmit && (
            <div className="text-center text-sm text-red-600">
              Please resolve all validation issues and agree to terms before submitting
            </div>
          )}
        </div>
      </FormSection>

      {/* Submission Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-blue-900 mb-3">What Happens Next?</h4>
        <div className="space-y-2 text-sm text-blue-800">
          <div className="flex items-start">
            <span className="font-semibold mr-2">1.</span>
            <span>Your return will be transmitted securely to the IRS</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold mr-2">2.</span>
            <span>You'll receive an email confirmation with your submission ID</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold mr-2">3.</span>
            <span>IRS processing typically takes 21 days for e-filed returns</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold mr-2">4.</span>
            <span>Track your refund status at irs.gov/refunds or call 1-800-829-1954</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold mr-2">5.</span>
            <span>Keep a copy of your completed return for your records</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;