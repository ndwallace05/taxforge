import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, selectForm1040SRData } from '../../../../store/slices/form1040SRSlice';
import { useCalculated1040SR } from '../../../../hooks/useCalculated1040SR';
import styles from '../Form1040SR.module.css';

interface TaxCalculationStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

/**
 * Tax Calculation Step for Form 1040-SR
 * Shows tax computation and credits commonly used by seniors
 */
export const TaxCalculationStep: React.FC<TaxCalculationStepProps> = ({ onNext, onPrevious }) => {
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

  const formatPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle}>Tax Calculation</h2>
        <p className={styles.stepDescription}>
          Review your tax calculation and enter any applicable credits.
        </p>
      </div>

      <div className={styles.formGrid}>
        {/* Tax Computation */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Tax Computation</h3>
          
          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 15: Taxable income</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_15'] || 0)}
            </span>
          </div>

          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 16: Tax</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_16'] || 0)}
            </span>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line17">
              Line 17: Amount from Schedule 2
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line17"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_17'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_17', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>Additional taxes (AMT, etc.)</span>
            </div>
          </div>

          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 18: Total tax before credits</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_18'] || 0)}
            </span>
          </div>
        </div>

        {/* Tax Rate Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Tax Rate Information</h3>
          
          <div className={styles.taxRateGrid}>
            <div className={styles.taxRateItem}>
              <span className={styles.taxRateLabel}>Effective Tax Rate:</span>
              <span className={styles.taxRateValue}>
                {formatPercentage(calculated['1040SR_effective_tax_rate'] || 0)}
              </span>
            </div>
            <div className={styles.taxRateItem}>
              <span className={styles.taxRateLabel}>Marginal Tax Rate:</span>
              <span className={styles.taxRateValue}>
                {formatPercentage(calculated['1040SR_marginal_tax_rate'] || 0)}
              </span>
            </div>
          </div>

          <div className={styles.infoBox}>
            <h4>Understanding Your Tax Rates:</h4>
            <ul>
              <li><strong>Effective Rate:</strong> Your total tax as a percentage of your AGI</li>
              <li><strong>Marginal Rate:</strong> The tax rate on your last dollar of income</li>
              <li>These rates help you understand the tax impact of additional income or deductions</li>
            </ul>
          </div>
        </div>

        {/* Tax Credits */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Tax Credits</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line19">
              Line 19: Child tax credit and credit for other dependents
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line19"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_19'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_19', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Schedule 8812</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line20">
              Line 20: Amount from Schedule 3
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line20"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_20'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_20', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>Other nonrefundable credits</span>
            </div>
          </div>

          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 21: Total credits</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_21'] || 0)}
            </span>
          </div>

          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 22: Tax after credits</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_22'] || 0)}
            </span>
          </div>
        </div>

        {/* Common Credits for Seniors */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Common Tax Credits for Seniors</h3>
          
          <div className={styles.creditsList}>
            <div className={styles.creditItem}>
              <h4>Credit for the Elderly or Disabled</h4>
              <p>Available if you're 65 or older, or retired on permanent disability. Income limits apply.</p>
            </div>
            
            <div className={styles.creditItem}>
              <h4>Retirement Savings Contributions Credit (Saver's Credit)</h4>
              <p>For contributions to IRAs, 401(k)s, and other retirement plans. Income limits apply.</p>
            </div>
            
            <div className={styles.creditItem}>
              <h4>Foreign Tax Credit</h4>
              <p>If you paid foreign taxes on foreign income, you may be able to claim this credit.</p>
            </div>
            
            <div className={styles.creditItem}>
              <h4>Child and Dependent Care Credit</h4>
              <p>For care of qualifying dependents, including elderly parents or disabled spouses.</p>
            </div>
          </div>
        </div>

        {/* Other Taxes */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Other Taxes</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line23">
              Line 23: Other taxes
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line23"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_23'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_23', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Schedule 2</span>
            </div>
          </div>

          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 24: Total tax</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_24'] || 0)}
            </span>
          </div>
        </div>

        {/* Medicare Considerations */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Medicare Premium Considerations</h3>
          
          <div className={styles.medicareInfo}>
            <h4>Income-Related Monthly Adjustment Amount (IRMAA)</h4>
            <p>
              If your modified adjusted gross income exceeds certain thresholds, you may pay higher Medicare Part B and Part D premiums.
            </p>
            
            <div className={styles.irmaaTable}>
              <h5>2024 IRMAA Thresholds (Individual/Joint):</h5>
              <ul>
                <li>$103,000 / $206,000 - Standard premium</li>
                <li>$129,000 / $258,000 - 1.4x standard premium</li>
                <li>$161,000 / $322,000 - 2.0x standard premium</li>
                <li>$193,000 / $386,000 - 2.6x standard premium</li>
                <li>$500,000+ / $750,000+ - 3.2x standard premium</li>
              </ul>
            </div>
            
            <div className={styles.yourIrmaa}>
              <p>
                <strong>Your AGI:</strong> {formatCurrency(calculated['1040SR_line_11'] || 0)}
                <br />
                {(calculated['1040SR_line_11'] || 0) > (formData['1040SR_filing_status'] === 'married_filing_jointly' ? 206000 : 103000) 
                  ? '⚠️ You may be subject to IRMAA surcharges'
                  : '✓ You qualify for standard Medicare premiums'
                }
              </p>
            </div>
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
          Previous: Deductions
        </button>
        
        <button
          type="button"
          onClick={onNext}
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          Next: Payments & Credits
        </button>
      </div>

      {/* Tax Summary */}
      <div className={styles.summarySection}>
        <h4 className={styles.summaryTitle}>Tax Calculation Summary</h4>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Taxable Income:</span>
            <span className={styles.summaryValue}>{formatCurrency(calculated['1040SR_line_15'] || 0)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Tax Before Credits:</span>
            <span className={styles.summaryValue}>{formatCurrency(calculated['1040SR_line_18'] || 0)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Total Credits:</span>
            <span className={styles.summaryValue}>{formatCurrency(calculated['1040SR_line_21'] || 0)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Total Tax:</span>
            <span className={styles.summaryValue}>{formatCurrency(calculated['1040SR_line_24'] || 0)}</span>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className={styles.helpSection}>
        <h4 className={styles.helpTitle}>Tax Planning Tips for Seniors</h4>
        <ul className={styles.helpList}>
          <li><strong>Roth Conversions:</strong> Consider converting traditional IRA funds to Roth IRAs in lower-income years</li>
          <li><strong>Tax-Loss Harvesting:</strong> Offset capital gains with capital losses to reduce taxes</li>
          <li><strong>Charitable Giving:</strong> Qualified charitable distributions from IRAs can satisfy RMDs without increasing AGI</li>
          <li><strong>State Taxes:</strong> Consider your state's tax treatment of retirement income when planning</li>
          <li><strong>Timing:</strong> Coordinate income recognition with Medicare enrollment and Social Security claiming strategies</li>
        </ul>
      </div>
    </div>
  );
};

export default TaxCalculationStep;