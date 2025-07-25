import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, selectForm1040SRData } from '../../../../store/slices/form1040SRSlice';
import { useCalculated1040SR } from '../../../../hooks/useCalculated1040SR';
import styles from '../Form1040SR.module.css';

interface IncomeStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

/**
 * Income Step for Form 1040-SR
 * Focuses on common income sources for seniors
 */
export const IncomeStep: React.FC<IncomeStepProps> = ({ onNext, onPrevious }) => {
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

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle}>Income Information</h2>
        <p className={styles.stepDescription}>
          Enter your income from all sources. Leave fields blank if they don't apply to you.
        </p>
      </div>

      <div className={styles.formGrid}>
        {/* Wages and Salary */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Wages, Salaries, and Tips</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line1a">
              Line 1a: Wages, salaries, tips, etc.
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line1a"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_1a'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_1a', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Form W-2, box 1</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line1b">
              Line 1b: Household employee wages
            </label>
            <input
              id="line1b"
              type="number"
              className={styles.input}
              value={formData['1040SR_line_1b'] || ''}
              onChange={(e) => handleInputChange('1040SR_line_1b', e.target.value)}
              placeholder="0"
              min="0"
              step="1"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line1c">
              Line 1c: Tip income not reported to employer
            </label>
            <input
              id="line1c"
              type="number"
              className={styles.input}
              value={formData['1040SR_line_1c'] || ''}
              onChange={(e) => handleInputChange('1040SR_line_1c', e.target.value)}
              placeholder="0"
              min="0"
              step="1"
            />
          </div>

          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 1e: Total wages</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_1e'] || 0)}
            </span>
          </div>
        </div>

        {/* Interest and Dividends */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Interest and Dividends</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line2a">
              Line 2a: Tax-exempt interest
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line2a"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_2a'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_2a', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>Municipal bonds, etc.</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line2b">
              Line 2b: Taxable interest
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line2b"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_2b'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_2b', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Form 1099-INT</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line3a">
              Line 3a: Qualified dividends
            </label>
            <input
              id="line3a"
              type="number"
              className={styles.input}
              value={formData['1040SR_line_3a'] || ''}
              onChange={(e) => handleInputChange('1040SR_line_3a', e.target.value)}
              placeholder="0"
              min="0"
              step="1"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line3b">
              Line 3b: Ordinary dividends
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line3b"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_3b'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_3b', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Form 1099-DIV</span>
            </div>
          </div>
        </div>

        {/* Retirement Income */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Retirement Income</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line4a">
              Line 4a: IRA distributions (total)
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line4a"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_4a'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_4a', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Form 1099-R</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line4b">
              Line 4b: IRA distributions (taxable amount)
            </label>
            <input
              id="line4b"
              type="number"
              className={styles.input}
              value={formData['1040SR_line_4b'] || ''}
              onChange={(e) => handleInputChange('1040SR_line_4b', e.target.value)}
              placeholder="0"
              min="0"
              step="1"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line5a">
              Line 5a: Pensions and annuities (total)
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line5a"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_5a'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_5a', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Form 1099-R</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line5b">
              Line 5b: Pensions and annuities (taxable amount)
            </label>
            <input
              id="line5b"
              type="number"
              className={styles.input}
              value={formData['1040SR_line_5b'] || ''}
              onChange={(e) => handleInputChange('1040SR_line_5b', e.target.value)}
              placeholder="0"
              min="0"
              step="1"
            />
          </div>
        </div>

        {/* Social Security Benefits */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Social Security Benefits</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line6a">
              Line 6a: Social Security benefits (total)
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line6a"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_6a'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_6a', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Form SSA-1099</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line6b">
              Line 6b: Social Security benefits (taxable amount)
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line6b"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_6b'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_6b', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>
                Calculated: {formatCurrency(calculated['1040SR_social_security_taxable_amount'] || 0)}
              </span>
            </div>
          </div>
        </div>

        {/* Other Income */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Other Income</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line7">
              Line 7: Capital gain or (loss)
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line7"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_7'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_7', e.target.value)}
                placeholder="0"
                step="1"
              />
              <span className={styles.helpText}>From Schedule D or Form 8949</span>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line8">
              Line 8: Additional income from Schedule 1
            </label>
            <input
              id="line8"
              type="number"
              className={styles.input}
              value={formData['1040SR_line_8'] || ''}
              onChange={(e) => handleInputChange('1040SR_line_8', e.target.value)}
              placeholder="0"
              min="0"
              step="1"
            />
          </div>
        </div>

        {/* Total Income */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Total Income</h3>
          
          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 9: Total income</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_9'] || 0)}
            </span>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="line10">
              Line 10: Adjustments to income
            </label>
            <div className={styles.inputWithHelp}>
              <input
                id="line10"
                type="number"
                className={styles.input}
                value={formData['1040SR_line_10'] || ''}
                onChange={(e) => handleInputChange('1040SR_line_10', e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <span className={styles.helpText}>From Schedule 1</span>
            </div>
          </div>

          <div className={styles.calculatedField}>
            <label className={styles.label}>Line 11: Adjusted gross income (AGI)</label>
            <span className={styles.calculatedValue}>
              {formatCurrency(calculated['1040SR_line_11'] || 0)}
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
          Previous: Personal Info
        </button>
        
        <button
          type="button"
          onClick={onNext}
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          Next: Deductions
        </button>
      </div>

      {/* Senior-Specific Help */}
      <div className={styles.helpSection}>
        <h4 className={styles.helpTitle}>Income Tips for Seniors</h4>
        <ul className={styles.helpList}>
          <li><strong>Social Security:</strong> Not all Social Security benefits are taxable. The taxable amount depends on your total income.</li>
          <li><strong>Retirement Distributions:</strong> Distributions from traditional IRAs and 401(k)s are generally taxable, while Roth distributions may not be.</li>
          <li><strong>Pensions:</strong> Most pension income is taxable, but some government pensions may have special rules.</li>
          <li><strong>Required Minimum Distributions (RMDs):</strong> If you're 73 or older, you may be required to take distributions from retirement accounts.</li>
          <li><strong>Medicare Premiums:</strong> High income may result in higher Medicare Part B and Part D premiums (IRMAA).</li>
        </ul>
      </div>

      {/* Income Summary */}
      <div className={styles.summarySection}>
        <h4 className={styles.summaryTitle}>Income Summary</h4>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Total Wages:</span>
            <span className={styles.summaryValue}>{formatCurrency(calculated['1040SR_line_1e'] || 0)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Total Income:</span>
            <span className={styles.summaryValue}>{formatCurrency(calculated['1040SR_line_9'] || 0)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Adjusted Gross Income:</span>
            <span className={styles.summaryValue}>{formatCurrency(calculated['1040SR_line_11'] || 0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeStep;