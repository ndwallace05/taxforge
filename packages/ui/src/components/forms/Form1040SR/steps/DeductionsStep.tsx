import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, selectForm1040SRData } from '../../../../store/slices/form1040SRSlice';
import { useCalculated1040SR } from '../../../../hooks/useCalculated1040SR';
import styles from '../Form1040SR.module.css';

interface DeductionsStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

/**
 * Deductions Step for Form 1040-SR
 * Features the standard deduction table prominently for seniors
 */
export const DeductionsStep: React.FC<DeductionsStepProps> = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm1040SRData);
  const calculated = useCalculated1040SR();
  const [deductionType, setDeductionType] = useState<'standard' | 'itemized'>('standard');

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

  // 2024 Standard Deduction amounts for seniors
  const getStandardDeduction = () => {
    const filingStatus = formData['1040SR_filing_status'];
    const age65OrOlder = formData['1040SR_age_65_or_older'];
    const spouseAge65OrOlder = formData['1040SR_spouse_age_65_or_older'];
    const blind = formData['1040SR_blind'];
    const spouseBlind = formData['1040SR_spouse_blind'];

    const baseAmounts = {
      single: 14600,
      married_filing_jointly: 29200,
      married_filing_separately: 14600,
      head_of_household: 21900,
      qualifying_surviving_spouse: 29200,
    };

    let amount = baseAmounts[filingStatus as keyof typeof baseAmounts] || 0;
    const additionalAmount = 1550;

    // Additional amounts for age 65+ and blindness
    if (age65OrOlder) amount += additionalAmount;
    if (spouseAge65OrOlder && (filingStatus === 'married_filing_jointly' || filingStatus === 'qualifying_surviving_spouse')) {
      amount += additionalAmount;
    }
    if (blind) amount += additionalAmount;
    if (spouseBlind && (filingStatus === 'married_filing_jointly' || filingStatus === 'qualifying_surviving_spouse')) {
      amount += additionalAmount;
    }

    return amount;
  };

  const standardDeductionAmount = getStandardDeduction();

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle}>Deductions</h2>
        <p className={styles.stepDescription}>
          Choose between the standard deduction or itemizing your deductions. Most seniors benefit from the standard deduction.
        </p>
      </div>

      {/* Standard Deduction Table - Prominent for Form 1040-SR */}
      <div className={styles.standardDeductionTable}>
        <h3 className={styles.tableTitle}>2024 Standard Deduction Table</h3>
        <div className={styles.tableContainer}>
          <table className={styles.deductionTable}>
            <thead>
              <tr>
                <th>Filing Status</th>
                <th>Base Amount</th>
                <th>Additional if 65+</th>
                <th>Additional if Blind</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Single</td>
                <td>$14,600</td>
                <td>$1,550</td>
                <td>$1,550</td>
              </tr>
              <tr>
                <td>Married filing jointly</td>
                <td>$29,200</td>
                <td>$1,550 each</td>
                <td>$1,550 each</td>
              </tr>
              <tr>
                <td>Married filing separately</td>
                <td>$14,600</td>
                <td>$1,550</td>
                <td>$1,550</td>
              </tr>
              <tr>
                <td>Head of household</td>
                <td>$21,900</td>
                <td>$1,550</td>
                <td>$1,550</td>
              </tr>
              <tr>
                <td>Qualifying surviving spouse</td>
                <td>$29,200</td>
                <td>$1,550</td>
                <td>$1,550</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={styles.yourDeduction}>
          <h4>Your Standard Deduction Amount:</h4>
          <span className={styles.deductionAmount}>{formatCurrency(standardDeductionAmount)}</span>
        </div>
      </div>

      <div className={styles.formGrid}>
        {/* Deduction Type Selection */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Choose Your Deduction Method</h3>
          
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="deductionType"
                value="standard"
                checked={deductionType === 'standard'}
                onChange={(e) => {
                  setDeductionType('standard');
                  handleInputChange('1040SR_line_12', standardDeductionAmount);
                }}
                className={styles.radioInput}
              />
              <span className={styles.radioText}>
                <strong>Standard Deduction</strong> - {formatCurrency(standardDeductionAmount)}
                <br />
                <small>Recommended for most seniors. No receipts required.</small>
              </span>
            </label>

            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="deductionType"
                value="itemized"
                checked={deductionType === 'itemized'}
                onChange={(e) => {
                  setDeductionType('itemized');
                  handleInputChange('1040SR_line_12', 0);
                }}
                className={styles.radioInput}
              />
              <span className={styles.radioText}>
                <strong>Itemized Deductions</strong>
                <br />
                <small>Choose this only if your itemized deductions exceed {formatCurrency(standardDeductionAmount)}</small>
              </span>
            </label>
          </div>
        </div>

        {/* Standard Deduction */}
        {deductionType === 'standard' && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Standard Deduction</h3>
            
            <div className={styles.calculatedField}>
              <label className={styles.label}>Line 12: Standard deduction</label>
              <span className={styles.calculatedValue}>
                {formatCurrency(standardDeductionAmount)}
              </span>
            </div>

            <div className={styles.infoBox}>
              <h4>Why the Standard Deduction is Often Best for Seniors:</h4>
              <ul>
                <li>Higher base amounts for those 65 and older</li>
                <li>Additional amounts for blindness</li>
                <li>No need to keep detailed records</li>
                <li>Simpler tax preparation</li>
                <li>Automatic inflation adjustments each year</li>
              </ul>
            </div>
          </div>
        )}

        {/* Itemized Deductions */}
        {deductionType === 'itemized' && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Itemized Deductions</h3>
            
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="itemizedDeductions">
                Line 12: Itemized deductions from Schedule A
              </label>
              <div className={styles.inputWithHelp}>
                <input
                  id="itemizedDeductions"
                  type="number"
                  className={styles.input}
                  value={formData['1040SR_line_12'] || ''}
                  onChange={(e) => handleInputChange('1040SR_line_12', e.target.value)}
                  placeholder="0"
                  min="0"
                  step="1"
                />
                <span className={styles.helpText}>From Schedule A, line 17</span>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>⚠️ Important:</h4>
              <p>
                Your itemized deductions ({formatCurrency(formData['1040SR_line_12'] || 0)}) 
                {(formData['1040SR_line_12'] || 0) < standardDeductionAmount 
                  ? ` are less than your standard deduction (${formatCurrency(standardDeductionAmount)}). Consider using the standard deduction instead.`
                  : ` exceed your standard deduction (${formatCurrency(standardDeductionAmount)}). This is beneficial for you.`
                }
              </p>
            </div>

            <div className={styles.infoBox}>
              <h4>Common Itemized Deductions for Seniors:</h4>
              <ul>
                <li><strong>Medical expenses:</strong> Amounts over 7.5% of AGI</li>
                <li><strong>State and local taxes:</strong> Up to $10,000 limit</li>
                <li><strong>Mortgage interest:</strong> On qualified residence</li>
                <li><strong>Charitable contributions:</strong> Cash and property donations</li>
                <li><strong>Casualty losses:</strong> From federally declared disasters</li>
              </ul>
            </div>
          </div>
        )}

        {/* QBI Deduction */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Qualified Business Income (QBI) Deduction</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line13">
              Line 13: Qualified business income deduction
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line13"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_13'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_13', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Form 8995 or 8995-A</span>
            </div>
          </div>

          <div className={styles.infoBox}>
            <h4>QBI Deduction for Seniors:</h4>
            <ul>
              <li>Available if you have qualified business income</li>
              <li>Includes income from sole proprietorships, partnerships, S corporations</li>
              <li>May include rental real estate activities</li>
              <li>Generally up to 20% of qualified business income</li>
              <li>Subject to income limitations and other restrictions</li>
            </ul>
          </div>
        </div>

        {/* Total Deductions */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Total Deductions</h3>
          
          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 14: Total deductions</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_14'] || 0)}
            </span>
          </div>

          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 15: Taxable income</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_15'] || 0)}
            </span>
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
          Previous: Income
        </button>
        
        <button
          type="button"
          onClick={onNext}
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          Next: Tax Calculation
        </button>
      </div>

      {/* Deduction Comparison */}
      <div className={styles.comparisonSection}>
        <h4 className={styles.comparisonTitle}>Deduction Comparison</h4>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <span className={styles.comparisonLabel}>Standard Deduction:</span>
            <span className={styles.comparisonValue}>{formatCurrency(standardDeductionAmount)}</span>
          </div>
          <div className={styles.comparisonItem}>
            <span className={styles.comparisonLabel}>Your Current Choice:</span>
            <span className={styles.comparisonValue}>{formatCurrency(formData['1040SR_line_12'] || 0)}</span>
          </div>
          <div className={styles.comparisonItem}>
            <span className={styles.comparisonLabel}>QBI Deduction:</span>
            <span className={styles.comparisonValue}>{formatCurrency(formData['1040SR_line_13'] || 0)}</span>
          </div>
          <div className={styles.comparisonItem}>
            <span className={styles.comparisonLabel}>Total Deductions:</span>
            <span className={styles.comparisonValue}>{formatCurrency(calculated['1040SR_line_14'] || 0)}</span>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className={styles.helpSection}>
        <h4 className={styles.helpTitle}>Deduction Tips for Seniors</h4>
        <ul className={styles.helpList}>
          <li><strong>Medical Expenses:</strong> Include Medicare premiums, long-term care insurance, and medical equipment</li>
          <li><strong>Charitable Giving:</strong> Consider qualified charitable distributions from IRAs if you're 70½ or older</li>
          <li><strong>State Taxes:</strong> The $10,000 SALT deduction limit may affect high-tax state residents</li>
          <li><strong>Mortgage Interest:</strong> Interest on home equity loans may be deductible if used for home improvements</li>
          <li><strong>Record Keeping:</strong> Keep receipts and documentation for all itemized deductions</li>
        </ul>
      </div>
    </div>
  );
};

export default DeductionsStep;