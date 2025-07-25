import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, selectForm1040SRData } from '../../../../store/slices/form1040SRSlice';
import styles from '../Form1040SR.module.css';

interface PersonalInfoStepProps {
  onNext: () => void;
  onPrevious: () => void;
}

/**
 * Personal Information Step for Form 1040-SR
 * Senior-friendly design with larger fonts and clear labels
 */
export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm1040SRData);

  const handleInputChange = (field: string, value: string | boolean) => {
    dispatch(updateField({ field, value }));
  };

  const isStepValid = () => {
    return (
      formData['1040SR_first_name'] &&
      formData['1040SR_last_name'] &&
      formData['1040SR_ssn'] &&
      formData['1040SR_filing_status']
    );
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2 className={styles.stepTitle}>Personal Information</h2>
        <p className={styles.stepDescription}>
          Please provide your personal information. All fields marked with * are required.
        </p>
      </div>

      <div className={styles.formGrid}>
        {/* Primary Taxpayer Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Primary Taxpayer</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="firstName">
              First Name *
            </label>
            <input
              id="firstName"
              type="text"
              className={styles.input}
              value={formData['1040SR_first_name'] || ''}
              onChange={(e) => handleInputChange('1040SR_first_name', e.target.value)}
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="middleInitial">
              Middle Initial
            </label>
            <input
              id="middleInitial"
              type="text"
              className={styles.input}
              value={formData['1040SR_middle_initial'] || ''}
              onChange={(e) => handleInputChange('1040SR_middle_initial', e.target.value)}
              placeholder="M"
              maxLength={1}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="lastName">
              Last Name *
            </label>
            <input
              id="lastName"
              type="text"
              className={styles.input}
              value={formData['1040SR_last_name'] || ''}
              onChange={(e) => handleInputChange('1040SR_last_name', e.target.value)}
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="ssn">
              Social Security Number *
            </label>
            <input
              id="ssn"
              type="text"
              className={styles.input}
              value={formData['1040SR_ssn'] || ''}
              onChange={(e) => {
                // Format SSN as XXX-XX-XXXX
                const value = e.target.value.replace(/\D/g, '');
                let formatted = value;
                if (value.length >= 4) {
                  formatted = `${value.slice(0, 3)}-${value.slice(3, 5)}`;
                  if (value.length >= 6) {
                    formatted += `-${value.slice(5, 9)}`;
                  }
                }
                handleInputChange('1040SR_ssn', formatted);
              }}
              placeholder="XXX-XX-XXXX"
              maxLength={11}
              required
            />
          </div>
        </div>

        {/* Spouse Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Spouse Information (if filing jointly)</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="spouseFirstName">
              Spouse's First Name
            </label>
            <input
              id="spouseFirstName"
              type="text"
              className={styles.input}
              value={formData['1040SR_spouse_first_name'] || ''}
              onChange={(e) => handleInputChange('1040SR_spouse_first_name', e.target.value)}
              placeholder="Enter spouse's first name"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="spouseMiddleInitial">
              Spouse's Middle Initial
            </label>
            <input
              id="spouseMiddleInitial"
              type="text"
              className={styles.input}
              value={formData['1040SR_spouse_middle_initial'] || ''}
              onChange={(e) => handleInputChange('1040SR_spouse_middle_initial', e.target.value)}
              placeholder="M"
              maxLength={1}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="spouseLastName">
              Spouse's Last Name
            </label>
            <input
              id="spouseLastName"
              type="text"
              className={styles.input}
              value={formData['1040SR_spouse_last_name'] || ''}
              onChange={(e) => handleInputChange('1040SR_spouse_last_name', e.target.value)}
              placeholder="Enter spouse's last name"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="spouseSSN">
              Spouse's Social Security Number
            </label>
            <input
              id="spouseSSN"
              type="text"
              className={styles.input}
              value={formData['1040SR_spouse_ssn'] || ''}
              onChange={(e) => {
                // Format SSN as XXX-XX-XXXX
                const value = e.target.value.replace(/\D/g, '');
                let formatted = value;
                if (value.length >= 4) {
                  formatted = `${value.slice(0, 3)}-${value.slice(3, 5)}`;
                  if (value.length >= 6) {
                    formatted += `-${value.slice(5, 9)}`;
                  }
                }
                handleInputChange('1040SR_spouse_ssn', formatted);
              }}
              placeholder="XXX-XX-XXXX"
              maxLength={11}
            />
          </div>
        </div>

        {/* Address Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Address</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="address">
              Home Address (number and street)
            </label>
            <input
              id="address"
              type="text"
              className={styles.input}
              value={formData['1040SR_address'] || ''}
              onChange={(e) => handleInputChange('1040SR_address', e.target.value)}
              placeholder="123 Main Street"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="aptNumber">
              Apartment Number
            </label>
            <input
              id="aptNumber"
              type="text"
              className={styles.input}
              value={formData['1040SR_apt_number'] || ''}
              onChange={(e) => handleInputChange('1040SR_apt_number', e.target.value)}
              placeholder="Apt 4B"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="city">
              City
            </label>
            <input
              id="city"
              type="text"
              className={styles.input}
              value={formData['1040SR_city'] || ''}
              onChange={(e) => handleInputChange('1040SR_city', e.target.value)}
              placeholder="City name"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="state">
              State
            </label>
            <select
              id="state"
              className={styles.select}
              value={formData['1040SR_state'] || ''}
              onChange={(e) => handleInputChange('1040SR_state', e.target.value)}
            >
              <option value="">Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
              <option value="DC">District of Columbia</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="zipCode">
              ZIP Code
            </label>
            <input
              id="zipCode"
              type="text"
              className={styles.input}
              value={formData['1040SR_zip_code'] || ''}
              onChange={(e) => {
                // Format ZIP as XXXXX or XXXXX-XXXX
                const value = e.target.value.replace(/\D/g, '');
                let formatted = value;
                if (value.length > 5) {
                  formatted = `${value.slice(0, 5)}-${value.slice(5, 9)}`;
                }
                handleInputChange('1040SR_zip_code', formatted);
              }}
              placeholder="12345 or 12345-6789"
              maxLength={10}
            />
          </div>
        </div>

        {/* Filing Status */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Filing Status *</h3>
          
          <div className={styles.radioGroup}>
            {[
              { value: 'single', label: 'Single' },
              { value: 'married_filing_jointly', label: 'Married filing jointly' },
              { value: 'married_filing_separately', label: 'Married filing separately' },
              { value: 'head_of_household', label: 'Head of household' },
              { value: 'qualifying_surviving_spouse', label: 'Qualifying surviving spouse' },
            ].map((option) => (
              <label key={option.value} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="filingStatus"
                  value={option.value}
                  checked={formData['1040SR_filing_status'] === option.value}
                  onChange={(e) => handleInputChange('1040SR_filing_status', e.target.value)}
                  className={styles.radioInput}
                />
                <span className={styles.radioText}>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Senior-Specific Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Senior Information</h3>
          
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData['1040SR_age_65_or_older'] || false}
                onChange={(e) => handleInputChange('1040SR_age_65_or_older', e.target.checked)}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxText}>
                You were 65 or older on December 31, 2024
              </span>
            </label>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData['1040SR_spouse_age_65_or_older'] || false}
                onChange={(e) => handleInputChange('1040SR_spouse_age_65_or_older', e.target.checked)}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxText}>
                Your spouse was 65 or older on December 31, 2024
              </span>
            </label>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData['1040SR_blind'] || false}
                onChange={(e) => handleInputChange('1040SR_blind', e.target.checked)}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxText}>
                You are blind
              </span>
            </label>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData['1040SR_spouse_blind'] || false}
                onChange={(e) => handleInputChange('1040SR_spouse_blind', e.target.checked)}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxText}>
                Your spouse is blind
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={styles.navigationContainer}>
        <button
          type="button"
          onClick={onPrevious}
          className={`${styles.button} ${styles.buttonSecondary}`}
          disabled
        >
          Previous
        </button>
        
        <button
          type="button"
          onClick={onNext}
          className={`${styles.button} ${styles.buttonPrimary}`}
          disabled={!isStepValid()}
        >
          Next: Income Information
        </button>
      </div>

      {/* Help Text */}
      <div className={styles.helpSection}>
        <h4 className={styles.helpTitle}>Need Help?</h4>
        <ul className={styles.helpList}>
          <li>Your Social Security Number should be entered exactly as it appears on your Social Security card</li>
          <li>If you're married, you can choose to file jointly or separately</li>
          <li>Head of household status requires you to be unmarried and pay more than half the cost of keeping up a home</li>
          <li>Additional standard deduction amounts apply if you or your spouse are 65 or older, or blind</li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfoStep;