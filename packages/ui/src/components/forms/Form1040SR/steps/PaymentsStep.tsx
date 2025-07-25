import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, selectForm1040SRData } from '../../../../store/slices/form1040SRSlice';
import { useCalculated1040SR } from '../../../../hooks/useCalculated1040SR';
import styles from '../Form1040SR.module.css';

interface PaymentsStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

/**
 * Payments Step for Form 1040-SR
 * Handles tax payments, withholdings, and refundable credits
 */
export const PaymentsStep: React.FC<PaymentsStepProps> = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm1040SRData);
  const calculated = useCalculated1040SR();

  const handleInputChange = (field: string, value: string | number) => {
    const numericValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    dispatch(updateField({ field, value: numericValue }));
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const isRefundDue = (calculated['1040SR_line_30'] || 0) > 0;
  const isAmountOwed = (calculated['1040SR_line_35'] || 0) > 0;

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle}>Payments and Credits</h2>
        <p className={styles.stepDescription}>
          Enter your tax payments, withholdings, and refundable credits.
        </p>
      </div>

      <div className={styles.formGrid}>
        {/* Federal Income Tax Withheld */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Federal Income Tax Withheld</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line25a">
              Line 25a: Federal income tax withheld
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line25a"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_25a'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_25a', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Forms W-2, 1099-R, 1099-MISC, etc.</span>
            </div>
          </div>

          <div className={styles.infoBox}>
            <h4>Common Sources of Withholding for Seniors:</h4>
            <ul>
              <li><strong>Form W-2:</strong> Wages from employment (Box 2)</li>
              <li><strong>Form 1099-R:</strong> Retirement distributions (Box 4)</li>
              <li><strong>Form 1099-MISC:</strong> Other income with withholding</li>
              <li><strong>Social Security:</strong> Voluntary withholding if elected</li>
            </ul>
          </div>
        </div>

        {/* Estimated Tax Payments */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Estimated Tax Payments</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line25b">
              Line 25b: 2024 estimated tax payments
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line25b"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_25b'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_25b', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>Quarterly payments made during 2024</span>
            </div>
          </div>

          <div className={styles.infoBox}>
            <h4>Estimated Tax Payments for Seniors:</h4>
            <ul>
              <li>Required if you expect to owe $1,000 or more in tax</li>
              <li>Common for those with significant retirement income</li>
              <li>Due dates: April 15, June 17, September 16, January 15</li>
              <li>Consider increasing withholding instead of making quarterly payments</li>
            </ul>
          </div>
        </div>

        {/* Refundable Credits */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Refundable Credits</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line25c">
              Line 25c: Earned income credit (EIC)
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line25c"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_25c'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_25c', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From EIC Worksheet or Schedule EIC</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line25d">
              Line 25d: Additional child tax credit
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line25d"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_25d'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_25d', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Schedule 8812</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line26">
              Line 26: American opportunity credit
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line26"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_26'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_26', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Form 8863</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line27">
              Line 27: Reserved for future use
            </label>
            <input
              id="line27"
              type="number"
              className={styles.input}
              value={formData['1040SR_line_27'] || ''}
              onChange={(e) => handleInputChange('1040SR_line_27', e.target.value)}
              placeholder="0"
              min="0"
              step="1"
              disabled
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line28">
              Line 28: Amount from Schedule 3
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line28"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_28'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_28', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>Other refundable credits</span>
            </div>
          </div>
        </div>

        {/* Total Payments */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Total Payments</h3>
          
          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 29: Total payments</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_29'] || 0)}
            </span>
          </div>
        </div>

        {/* Refund or Amount Owed */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Refund or Amount You Owe</h3>
          
          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 30: Overpaid amount</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_30'] || 0)}
            </span>
          </div>

          {isRefundDue && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="line31">
                  Line 31: Amount you want refunded to you
                </label>
                <input
                  id="line31"
                  type="number"
                  className={styles.input}
                  value={formData['1040SR_line_31'] || ''}
                  onChange={(e) => handleInputChange('1040SR_line_31', e.target.value)}
                  placeholder="0"
                  min="0"
                  max={calculated['1040SR_line_30'] || 0}
                  step="1"
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="line32">
                  Line 32: Amount you want applied to your 2025 estimated tax
                </label>
                <input
                  id="line32"
                  type="number"
                  className={styles.input}
                  value={formData['1040SR_line_32'] || ''}
                  onChange={(e) => handleInputChange('1040SR_line_32', e.target.value)}
                  placeholder="0"
                  min="0"
                  step="1"
                />
              </div>

              <div className={styles.refundOptions}>
                <h4>Refund Options:</h4>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="refundMethod"
                      value="direct_deposit"
                      className={styles.radioInput}
                    />
                    <span className={styles.radioText}>Direct deposit (fastest)</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="refundMethod"
                      value="check"
                      className={styles.radioInput}
                    />
                    <span className={styles.radioText}>Paper check</span>
                  </label>
                </div>
              </div>
            </>
          )}

          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 33: Amount you owe</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_33'] || 0)}
            </span>
          </div>

          {isAmountOwed && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="line34">
                  Line 34: Estimated tax penalty
                </label>
                <div className={styles.inputWithHelp}>
                  <input
                    id="line34"
                    type="number"
                    className={styles.input}
                    value={formData['1040SR_line_34'] || ''}
                    onChange={(e) => handleInputChange('1040SR_line_34', e.target.value)}
                    placeholder="0"
                    min="0"
                    step="1"
                  />
                  <span className={styles.helpText}>From Form 2210</span>
                </div>
              </div>

              <div className={styles.calculatedField}>
                <label className={styles.label}>Line 35: Amount you owe (including penalty)</label>
                <span className={styles.calculatedValue}>
                  {formatCurrency(calculated['1040SR_line_35'] || 0)}
                </span>
              </div>

              <div className={styles.paymentOptions}>
                <h4>Payment Options:</h4>
                <ul>
                  <li><strong>Online:</strong> Pay directly from your bank account at irs.gov/payments</li>
                  <li><strong>Phone:</strong> Call 1-888-PAY-1040 (automated system)</li>
                  <li><strong>Check/Money Order:</strong> Make payable to "United States Treasury"</li>
                  <li><strong>Installment Agreement:</strong> If you can't pay in full, consider a payment plan</li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Payment Status Summary */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Payment Status</h3>
          
          <div className={styles.statusCard}>
            {isRefundDue && (
              <div className={styles.refundStatus}>
                <h4>✓ You Have a Refund</h4>
                <p>Total overpaid: {formatCurrency(calculated['1040SR_line_30'] || 0)}</p>
                <p>Refund amount: {formatCurrency(formData['1040SR_line_31'] || 0)}</p>
                <p>Applied to 2025: {formatCurrency(formData['1040SR_line_32'] || 0)}</p>
              </div>
            )}
            
            {isAmountOwed && (
              <div className={styles.owedStatus}>
                <h4>⚠️ You Owe Tax</h4>
                <p>Tax owed: {formatCurrency(calculated['1040SR_line_33'] || 0)}</p>
                <p>Penalty: {formatCurrency(formData['1040SR_line_34'] || 0)}</p>
                <p>Total amount due: {formatCurrency(calculated['1040SR_line_35'] || 0)}</p>
                <p><strong>Due date: April 15, 2025</strong></p>
              </div>
            )}
            
            {!isRefundDue && !isAmountOwed && (
              <div className={styles.balancedStatus}>
                <h4>✓ Your Tax is Balanced</h4>
                <p>Your payments equal your tax liability.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={styles.navigationContainer}>
        <button
          type="button"
          onClick={onPrevious}
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          Previous: Tax Calculation
        </button>
        
        <button
          type="button"
          onClick={onNext}
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          Next: Review
        </button>
      </div>

      {/* Payment Summary */}
      <div className={styles.summarySection}>
        <h4 className={styles.summaryTitle}>Payment Summary</h4>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Total Tax:</span>
            <span className={styles.summaryValue}>{formatCurrency(calculated['1040SR_line_24'] || 0)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Total Payments:</span>
            <span className={styles.summaryValue}>{formatCurrency(calculated['1040SR_line_29'] || 0)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Refund/Owed:</span>
            <span className={`${styles.summaryValue} ${isRefundDue ? styles.refund : isAmountOwed ? styles.owed : ''}`}>
              {isRefundDue 
                ? `+${formatCurrency(calculated['1040SR_line_30'] || 0)}` 
                : isAmountOwed 
                ? `-${formatCurrency(calculated['1040SR_line_35'] || 0)}`
                : formatCurrency(0)
              }
            </span>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className={styles.helpSection}>
        <h4 className={styles.helpTitle}>Payment Tips for Seniors</h4>
        <ul className={styles.helpList}>
          <li><strong>Withholding Strategy:</strong> Consider having taxes withheld from retirement distributions to avoid quarterly payments</li>
          <li><strong>Safe Harbor:</strong> Pay 100% of last year's tax (110% if AGI > $150,000) to avoid penalties</li>
          <li><strong>RMD Planning:</strong> Coordinate required minimum distributions with tax withholding needs</li>
          <li><strong>Refund Timing:</strong> Direct deposit typically takes 1-3 weeks; paper checks take 6-8 weeks</li>
          <li><strong>Payment Plans:</strong> The IRS offers installment agreements if you can't pay the full amount</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentsStep;