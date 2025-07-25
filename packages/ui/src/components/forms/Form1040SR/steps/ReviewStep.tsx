import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectForm1040SRData } from '../../../../store/slices/form1040SRSlice';
import { useCalculated1040SR } from '../../../../hooks/useCalculated1040SR';
import styles from '../Form1040SR.module.css';

interface ReviewStepProps {
  onPrevious: () => void;
  onSubmit: () => void;
}

/**
 * Review Step for Form 1040-SR
 * Final review of all entered information before submission
 */
export const ReviewStep: React.FC<ReviewStepProps> = ({ onPrevious, onSubmit }) => {
  const formData = useSelector(selectForm1040SRData);
  const calculated = useCalculated1040SR();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFullForm, setShowFullForm] = useState(false);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSubmit();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isRefundDue = (calculated['1040SR_line_30'] || 0) > 0;
  const isAmountOwed = (calculated['1040SR_line_35'] || 0) > 0;
  const effectiveRate = calculated.effectiveRate || 0;
  const marginalRate = calculated.marginalRate || 0;

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle}>Review Your Form 1040-SR</h2>
        <p className={styles.stepDescription}>
          Please review all information carefully before submitting your tax return.
        </p>
      </div>

      {/* Tax Summary Card */}
      <div className={styles.summaryCard}>
        <h3 className={styles.summaryCardTitle}>Tax Return Summary</h3>
        
        <div className={styles.summaryGrid}>
          <div className={styles.summarySection}>
            <h4>Personal Information</h4>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Primary Taxpayer:</span>
              <span className={styles.summaryValue}>
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>SSN:</span>
              <span className={styles.summaryValue}>
                {formData.ssn ? `***-**-${formData.ssn.slice(-4)}` : 'Not provided'}
              </span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Filing Status:</span>
              <span className={styles.summaryValue}>{formData.filingStatus || 'Not selected'}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Age 65 or Older:</span>
              <span className={styles.summaryValue}>{formData.age65OrOlder ? 'Yes' : 'No'}</span>
            </div>
            {formData.spouseFirstName && (
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Spouse:</span>
                <span className={styles.summaryValue}>
                  {formData.spouseFirstName} {formData.spouseLastName}
                </span>
              </div>
            )}
          </div>

          <div className={styles.summarySection}>
            <h4>Income Summary</h4>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Total Income:</span>
              <span className={styles.summaryValue}>{formatCurrency(calculated.totalIncome || 0)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Adjusted Gross Income:</span>
              <span className={styles.summaryValue}>{formatCurrency(calculated.agi || 0)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Standard Deduction:</span>
              <span className={styles.summaryValue}>{formatCurrency(calculated.standardDeduction || 0)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Taxable Income:</span>
              <span className={styles.summaryValue}>{formatCurrency(calculated.taxableIncome || 0)}</span>
            </div>
          </div>

          <div className={styles.summarySection}>
            <h4>Tax Calculation</h4>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Federal Tax:</span>
              <span className={styles.summaryValue}>{formatCurrency(calculated.tax || 0)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Total Payments:</span>
              <span className={styles.summaryValue}>{formatCurrency(calculated['1040SR_line_29'] || 0)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Effective Tax Rate:</span>
              <span className={styles.summaryValue}>{(effectiveRate * 100).toFixed(2)}%</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Marginal Tax Rate:</span>
              <span className={styles.summaryValue}>{(marginalRate * 100).toFixed(2)}%</span>
            </div>
          </div>

          <div className={styles.summarySection}>
            <h4>Final Result</h4>
            {isRefundDue && (
              <>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Refund Amount:</span>
                  <span className={`${styles.summaryValue} ${styles.refundAmount}`}>
                    {formatCurrency(calculated['1040SR_line_30'] || 0)}
                  </span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Refund to You:</span>
                  <span className={styles.summaryValue}>{formatCurrency(formData['1040SR_line_31'] || 0)}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Applied to 2025:</span>
                  <span className={styles.summaryValue}>{formatCurrency(formData['1040SR_line_32'] || 0)}</span>
                </div>
              </>
            )}
            {isAmountOwed && (
              <>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Amount Owed:</span>
                  <span className={`${styles.summaryValue} ${styles.owedAmount}`}>
                    {formatCurrency(calculated['1040SR_line_35'] || 0)}
                  </span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Due Date:</span>
                  <span className={styles.summaryValue}>April 15, 2025</span>
                </div>
              </>
            )}
            {!isRefundDue && !isAmountOwed && (
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Status:</span>
                <span className={styles.summaryValue}>Tax Balanced</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Form View Toggle */}
      <div className={styles.section}>
        <button
          type="button"
          onClick={() => setShowFullForm(!showFullForm)}
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          {showFullForm ? 'Hide' : 'Show'} Detailed Form View
        </button>
      </div>

      {/* Detailed Form View */}
      {showFullForm && (
        <div className={styles.detailedForm}>
          <h3 className={styles.sectionTitle}>Complete Form 1040-SR Details</h3>
          
          {/* Personal Information */}
          <div className={styles.formSection}>
            <h4>Personal Information</h4>
            <div className={styles.formGrid}>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>First Name:</span>
                <span className={styles.formValue}>{formData.firstName || 'Not provided'}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Last Name:</span>
                <span className={styles.formValue}>{formData.lastName || 'Not provided'}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Address:</span>
                <span className={styles.formValue}>
                  {formData.address ? `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}` : 'Not provided'}
                </span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Date of Birth:</span>
                <span className={styles.formValue}>{formatDate(formData.dateOfBirth || '')}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Occupation:</span>
                <span className={styles.formValue}>{formData.occupation || 'Not provided'}</span>
              </div>
            </div>
          </div>

          {/* Income Lines */}
          <div className={styles.formSection}>
            <h4>Income</h4>
            <div className={styles.formGrid}>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 1a - Wages:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_1a'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 2a - Tax-exempt interest:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_2a'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 2b - Taxable interest:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_2b'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 3a - Qualified dividends:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_3a'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 3b - Ordinary dividends:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_3b'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 4a - IRA distributions:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_4a'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 4b - Taxable IRA:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_4b'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 5a - Pensions/annuities:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_5a'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 5b - Taxable pensions:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_5b'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 6a - Social Security:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_6a'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Line 6b - Taxable Social Security:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_6b'] || 0)}</span>
              </div>
            </div>
          </div>

          {/* Deductions */}
          <div className={styles.formSection}>
            <h4>Deductions</h4>
            <div className={styles.formGrid}>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Standard Deduction:</span>
                <span className={styles.formValue}>{formatCurrency(calculated.standardDeduction || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>QBI Deduction:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_13'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Total Deductions:</span>
                <span className={styles.formValue}>{formatCurrency(calculated.totalDeductions || 0)}</span>
              </div>
            </div>
          </div>

          {/* Tax and Credits */}
          <div className={styles.formSection}>
            <h4>Tax and Credits</h4>
            <div className={styles.formGrid}>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Tax on Taxable Income:</span>
                <span className={styles.formValue}>{formatCurrency(calculated.tax || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Child Tax Credit:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_19'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Credit for Elderly/Disabled:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_20'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Other Taxes:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_23'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Total Tax:</span>
                <span className={styles.formValue}>{formatCurrency(calculated['1040SR_line_24'] || 0)}</span>
              </div>
            </div>
          </div>

          {/* Payments */}
          <div className={styles.formSection}>
            <h4>Payments</h4>
            <div className={styles.formGrid}>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Federal Tax Withheld:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_25a'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Estimated Tax Payments:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_25b'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Earned Income Credit:</span>
                <span className={styles.formValue}>{formatCurrency(formData['1040SR_line_25c'] || 0)}</span>
              </div>
              <div className={styles.formItem}>
                <span className={styles.formLabel}>Total Payments:</span>
                <span className={styles.formValue}>{formatCurrency(calculated['1040SR_line_29'] || 0)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Important Notices */}
      <div className={styles.noticesSection}>
        <h3 className={styles.sectionTitle}>Important Notices</h3>
        
        <div className={styles.notice}>
          <h4>Before You Submit:</h4>
          <ul>
            <li>Verify all Social Security numbers are correct</li>
            <li>Ensure all income sources are included</li>
            <li>Double-check bank account information for direct deposit</li>
            <li>Keep copies of all supporting documents</li>
            <li>Sign and date your return if filing by mail</li>
          </ul>
        </div>

        <div className={styles.notice}>
          <h4>After Submission:</h4>
          <ul>
            <li>You'll receive a confirmation number for electronic filing</li>
            <li>Refunds typically arrive within 21 days for e-filed returns</li>
            <li>Check your refund status at irs.gov/refunds</li>
            <li>Keep your tax records for at least 3 years</li>
            <li>Consider making estimated payments for next year if you owe tax</li>
          </ul>
        </div>

        {isAmountOwed && (
          <div className={styles.notice}>
            <h4>Payment Due:</h4>
            <ul>
              <li><strong>Amount Due:</strong> {formatCurrency(calculated['1040SR_line_35'] || 0)}</li>
              <li><strong>Due Date:</strong> April 15, 2025</li>
              <li>Pay online at irs.gov/payments for fastest processing</li>
              <li>Consider setting up a payment plan if you can't pay in full</li>
              <li>Interest and penalties apply to late payments</li>
            </ul>
          </div>
        )}
      </div>

      {/* Certification */}
      <div className={styles.certificationSection}>
        <h3 className={styles.sectionTitle}>Certification</h3>
        
        <div className={styles.certificationText}>
          <p>
            Under penalties of perjury, I declare that I have examined this return and accompanying schedules and statements, 
            and to the best of my knowledge and belief, they are true, correct, and complete. Declaration of preparer 
            (other than taxpayer) is based on all information of which preparer has any knowledge.
          </p>
        </div>

        <div className={styles.signatureSection}>
          <div className={styles.signatureField}>
            <label className={styles.label}>Your signature:</label>
            <div className={styles.signaturePlaceholder}>
              [Electronic signature will be applied upon submission]
            </div>
          </div>
          
          <div className={styles.signatureField}>
            <label className={styles.label}>Date:</label>
            <div className={styles.signaturePlaceholder}>
              {new Date().toLocaleDateString('en-US')}
            </div>
          </div>

          {formData.spouseFirstName && (
            <>
              <div className={styles.signatureField}>
                <label className={styles.label}>Spouse's signature:</label>
                <div className={styles.signaturePlaceholder}>
                  [Electronic signature will be applied upon submission]
                </div>
              </div>
              
              <div className={styles.signatureField}>
                <label className={styles.label}>Date:</label>
                <div className={styles.signaturePlaceholder}>
                  {new Date().toLocaleDateString('en-US')}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className={styles.navigationContainer}>
        <button
          type="button"
          onClick={onPrevious}
          className={`${styles.button} ${styles.buttonSecondary}`}
          disabled={isSubmitting}
        >
          Previous: Payments
        </button>
        
        <button
          type="button"
          onClick={handleSubmit}
          className={`${styles.button} ${styles.buttonPrimary} ${styles.submitButton}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className={styles.spinner}></span>
              Submitting...
            </>
          ) : (
            'Submit Tax Return'
          )}
        </button>
      </div>

      {/* Final Summary */}
      <div className={styles.finalSummary}>
        <h4 className={styles.summaryTitle}>Final Tax Summary</h4>
        <div className={styles.summaryStats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Total Income</span>
            <span className={styles.statValue}>{formatCurrency(calculated.totalIncome || 0)}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>AGI</span>
            <span className={styles.statValue}>{formatCurrency(calculated.agi || 0)}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Taxable Income</span>
            <span className={styles.statValue}>{formatCurrency(calculated.taxableIncome || 0)}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Federal Tax</span>
            <span className={styles.statValue}>{formatCurrency(calculated.tax || 0)}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Effective Rate</span>
            <span className={styles.statValue}>{(effectiveRate * 100).toFixed(2)}%</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>
              {isRefundDue ? 'Refund' : isAmountOwed ? 'Amount Owed' : 'Balance'}
            </span>
            <span className={`${styles.statValue} ${isRefundDue ? styles.refund : isAmountOwed ? styles.owed : ''}`}>
              {isRefundDue 
                ? formatCurrency(calculated['1040SR_line_30'] || 0)
                : isAmountOwed 
                  ? formatCurrency(calculated['1040SR_line_35'] || 0)
                  : formatCurrency(0)
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;