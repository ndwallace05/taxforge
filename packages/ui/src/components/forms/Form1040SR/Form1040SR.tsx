import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCalculated1040SR } from '../../../hooks/useCalculated1040SR';
import styles from './Form1040SR.module.css';
import {
  selectForm1040SRData,
  selectForm1040SRErrors,
  selectForm1040SRCurrentStep,
  selectForm1040SRIsComplete,
  updateField,
  updateMultipleFields,
  setCurrentStep,
  completeStep,
  saveForm,
  Form1040SRData,
} from '../../../store/slices/form1040SRSlice';

// Import step components
import PersonalInfoStep from './steps/PersonalInfoStep';
import IncomeStep from './steps/IncomeStep';
import DeductionsStep from './steps/DeductionsStep';
import TaxCalculationStep from './steps/TaxCalculationStep';
import PaymentsStep from './steps/PaymentsStep';
import ReviewStep from './steps/ReviewStep';

// Form validation schema
const form1040SRSchema = z.object({
  '1040SR_filing_status': z.enum(['single', 'married_filing_jointly', 'married_filing_separately', 'head_of_household', 'qualifying_surviving_spouse']),
  '1040SR_first_name': z.string().min(1, 'First name is required'),
  '1040SR_last_name': z.string().min(1, 'Last name is required'),
  '1040SR_ssn': z.string().regex(/^\d{3}-\d{2}-\d{4}$/, 'SSN must be in format XXX-XX-XXXX'),
  '1040SR_date_of_birth': z.string().min(1, 'Date of birth is required'),
  '1040SR_address': z.string().min(1, 'Address is required'),
  '1040SR_city_state_zip': z.string().min(1, 'City, state, and ZIP are required'),
  '1040SR_age_65_or_older': z.boolean().refine(val => val === true, 'Must be 65 or older to use Form 1040-SR'),
}).partial();

type Form1040SRFormData = z.infer<typeof form1040SRSchema>;

interface Form1040SRProps {
  onSave?: (data: Form1040SRData) => void;
  onSubmit?: (data: Form1040SRData) => void;
  readonly?: boolean;
  className?: string;
}

const STEPS = [
  { id: 1, title: 'Personal Information', component: PersonalInfoStep },
  { id: 2, title: 'Income', component: IncomeStep },
  { id: 3, title: 'Deductions', component: DeductionsStep },
  { id: 4, title: 'Tax Calculation', component: TaxCalculationStep },
  { id: 5, title: 'Payments & Credits', component: PaymentsStep },
  { id: 6, title: 'Review & Submit', component: ReviewStep },
];

export const Form1040SR: React.FC<Form1040SRProps> = ({
  onSave,
  onSubmit,
  readonly = false,
  className = '',
}) => {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm1040SRData);
  const errors = useSelector(selectForm1040SRErrors);
  const currentStep = useSelector(selectForm1040SRCurrentStep);
  const isComplete = useSelector(selectForm1040SRIsComplete);
  const calculatedValues = useCalculated1040SR();
  
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [lastAutoSave, setLastAutoSave] = useState<Date | null>(null);

  const methods = useForm<Form1040SRFormData>({
    resolver: zodResolver(form1040SRSchema),
    defaultValues: formData,
    mode: 'onChange',
  });

  const { handleSubmit, watch, setValue, formState: { isValid } } = methods;

  // Watch for form changes and auto-save
  const watchedValues = watch();
  
  useEffect(() => {
    if (autoSaveEnabled && !readonly) {
      const timeoutId = setTimeout(() => {
        dispatch(saveForm());
        setLastAutoSave(new Date());
      }, 2000); // Auto-save after 2 seconds of inactivity
      
      return () => clearTimeout(timeoutId);
    }
  }, [watchedValues, autoSaveEnabled, readonly, dispatch]);

  // Update form values when Redux state changes
  useEffect(() => {
    Object.entries(formData).forEach(([key, value]) => {
      setValue(key as keyof Form1040SRFormData, value);
    });
  }, [formData, setValue]);

  // Handle field changes
  const handleFieldChange = (field: keyof Form1040SRData, value: any) => {
    if (!readonly) {
      dispatch(updateField({ field, value }));
    }
  };

  // Handle step navigation
  const handleStepChange = (stepId: number) => {
    if (!readonly) {
      dispatch(setCurrentStep(stepId));
    }
  };

  const handleNextStep = () => {
    if (currentStep < STEPS.length) {
      dispatch(completeStep(currentStep));
      dispatch(setCurrentStep(currentStep + 1));
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };

  // Handle form submission
  const onFormSubmit = (data: Form1040SRFormData) => {
    if (!readonly) {
      dispatch(updateMultipleFields(data));
      dispatch(saveForm());
      onSubmit?.(data as Form1040SRData);
    }
  };

  const CurrentStepComponent = STEPS[currentStep - 1]?.component;

  return (
    <div className={`${styles.form1040SRContainer} ${className}`}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <h1 className={styles.title}>Form 1040-SR - U.S. Tax Return for Seniors</h1>
              <p className={styles.subtitle}>Tax Year 2024 • For taxpayers age 65 and older</p>
              <div className={styles.seniorBadge}>
                <span className={styles.seniorIcon}>👥</span>
                <span>Senior-Friendly Large Print Version</span>
              </div>
            </div>
            
            {/* Auto-save indicator */}
            {!readonly && (
              <div className={styles.autoSaveContainer}>
                <label className={styles.autoSaveToggle}>
                  <input
                    type="checkbox"
                    checked={autoSaveEnabled}
                    onChange={(e) => setAutoSaveEnabled(e.target.checked)}
                  />
                  <span>Auto-save</span>
                </label>
                {lastAutoSave && (
                  <span className={styles.lastSaved}>
                    Last saved: {lastAutoSave.toLocaleTimeString()}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              {STEPS.map((step, index) => (
                <div
                  key={step.id}
                  className={`${
                    styles.stepPill
                  } ${
                    currentStep === step.id ? styles.stepActive : ''
                  } ${
                    currentStep > step.id ? styles.stepCompleted : ''
                  }`}
                  onClick={() => !readonly && handleStepChange(step.id)}
                >
                  <span className={styles.stepNumber}>{step.id}</span>
                  <span className={styles.stepTitle}>{step.title}</span>
                </div>
              ))}
            </div>
            <div className={styles.progressIndicator}>
              Step {currentStep} of {STEPS.length}
            </div>
          </div>

          {/* Standard Deduction Quick Reference */}
          <div className={styles.standardDeductionTable}>
            <h3>2024 Standard Deduction Quick Reference (Age 65+)</h3>
            <div className={styles.deductionGrid}>
              <div className={styles.deductionItem}>
                <span className={styles.filingStatus}>Single</span>
                <span className={styles.amount}>$16,150</span>
              </div>
              <div className={styles.deductionItem}>
                <span className={styles.filingStatus}>Married Filing Jointly</span>
                <span className={styles.amount}>$32,300</span>
              </div>
              <div className={styles.deductionItem}>
                <span className={styles.filingStatus}>Married Filing Separately</span>
                <span className={styles.amount}>$16,150</span>
              </div>
              <div className={styles.deductionItem}>
                <span className={styles.filingStatus}>Head of Household</span>
                <span className={styles.amount}>$23,450</span>
              </div>
            </div>
            <p className={styles.deductionNote}>
              * Additional $1,550 for each spouse age 65+ or blind
            </p>
          </div>

          {/* Current Step Content */}
          <div className={styles.stepContent}>
            {CurrentStepComponent && (
              <CurrentStepComponent
                data={formData}
                onChange={handleFieldChange}
                errors={errors}
                calculatedValues={calculatedValues}
                readonly={readonly}
              />
            )}
          </div>

          {/* Navigation */}
          {!readonly && (
            <div className={styles.navigation}>
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className={`${styles.navButton} ${styles.prevButton}`}
              >
                ← Previous
              </button>
              
              <div className={styles.navCenter}>
                <button
                  type="button"
                  onClick={() => dispatch(saveForm())}
                  className={styles.saveButton}
                >
                  💾 Save Progress
                </button>
              </div>
              
              {currentStep < STEPS.length ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className={`${styles.navButton} ${styles.nextButton}`}
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isComplete}
                  className={`${styles.navButton} ${styles.submitButton}`}
                >
                  Submit Return
                </button>
              )}
            </div>
          )}

          {/* Form Status */}
          <div className={styles.formStatus}>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Form Status:</span>
              <span className={`${styles.statusValue} ${
                isComplete ? styles.statusComplete : styles.statusIncomplete
              }`}>
                {isComplete ? '✅ Complete' : '⏳ In Progress'}
              </span>
            </div>
            
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Age Verification:</span>
              <span className={`${styles.statusValue} ${
                formData['1040SR_age_65_or_older'] ? styles.statusComplete : styles.statusIncomplete
              }`}>
                {formData['1040SR_age_65_or_older'] ? '✅ Verified (65+)' : '❌ Not Verified'}
              </span>
            </div>
            
            {Object.keys(errors).length > 0 && (
              <div className={styles.statusItem}>
                <span className={styles.statusLabel}>Errors:</span>
                <span className={`${styles.statusValue} ${styles.statusError}`}>
                  {Object.keys(errors).length} error(s) found
                </span>
              </div>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form1040SR;