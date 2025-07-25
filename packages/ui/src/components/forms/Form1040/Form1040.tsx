import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCalculated1040 } from '../../../hooks/useCalculated1040';
import styles from './Form1040.module.css';
import './print.css';   // global print only
import {
  selectForm1040Data,
  selectForm1040Errors,
  selectForm1040CurrentStep,
  selectForm1040IsComplete,
  updateField,
  updateMultipleFields,
  setCurrentStep,
  completeStep,
  saveForm,
  Form1040Data,
} from '../../../store/slices/form1040Slice';
// Remove FormNavigation import since the component doesn't exist and isn't used
import { FormSection } from '../../common/FormSection';
import { InputField } from '../../common/InputField';
import { SelectField } from '../../common/SelectField';
import { CurrencyField } from '../../common/CurrencyField';
import { SSNField } from '../../common/SSNField';
import { ProgressBar } from '../../common/ProgressBar';
// Components replaced with inline implementations
import { PersonalInfoStep } from './steps/PersonalInfoStep';
import { IncomeStep } from './steps/IncomeStep';
import { DeductionsStep } from './steps/DeductionsStep';
import { TaxCalculationStep } from './steps/TaxCalculationStep';
import { PaymentsStep } from './steps/PaymentsStep';


// Validation schema
const form1040Schema = z.object({
  '1040_filing_status': z.enum(['single', 'married_filing_jointly', 'married_filing_separately', 'head_of_household', 'qualifying_surviving_spouse', ''], {
    required_error: 'Filing status is required'
  }),
  '1040_first_name': z.string().min(1, 'First name is required').max(35, 'First name must be 35 characters or less'),
  '1040_last_name': z.string().min(1, 'Last name is required').max(35, 'Last name must be 35 characters or less'),
  '1040_ssn': z.string().regex(/^\d{3}-\d{2}-\d{4}$/, 'SSN must be in format XXX-XX-XXXX'),
  '1040_spouse_first_name': z.string().max(35, 'Spouse first name must be 35 characters or less').optional(),
  '1040_spouse_last_name': z.string().max(35, 'Spouse last name must be 35 characters or less').optional(),
  '1040_spouse_ssn': z.string().regex(/^\d{3}-\d{2}-\d{4}$/, 'Spouse SSN must be in format XXX-XX-XXXX').optional().or(z.literal('')),
  '1040_address': z.string().min(1, 'Address is required').max(35, 'Address must be 35 characters or less'),
  '1040_city_state_zip': z.string().min(1, 'City, state, and ZIP are required').max(35, 'City, state, ZIP must be 35 characters or less'),
  '1040_line_1a': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_1b': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_1c': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_1d': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_2a': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_2b': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_3a': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_3b': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_4a': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_4b': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_5a': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_5b': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_6a': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_6b': z.number().min(0, 'Amount cannot be negative').optional(),
  // Complete IRS Form 1040 lines 7-38 for 100% coverage
  '1040_line_7': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_8': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_9': z.number().optional(), // auto-calculated
  '1040_line_10': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_11': z.number().optional(), // auto-calculated
  '1040_line_12': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_13': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_14': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_15': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_16': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_17': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_18': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_19': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_20': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_21': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_22': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_23': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_24': z.number().optional(), // auto-calculated
  '1040_line_25a': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_25b': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_25c': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_25d': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_26': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_27': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_28': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_29': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_30': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_31': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_32': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_33': z.number().optional(), // auto-calculated
  '1040_line_34': z.number().min(0, 'Amount cannot be negative').optional(),
  '1040_line_35': z.number().optional(), // auto-calculated
  '1040_line_36': z.number().optional(), // auto-calculated
  '1040_line_37': z.number().optional(), // auto-calculated
  '1040_line_38': z.number().optional(), // auto-calculated
}).refine((data) => {
  // Conditional validation for spouse fields
  const marriedStatuses = ['married_filing_jointly', 'married_filing_separately'];
  if (marriedStatuses.includes(data['1040_filing_status'])) {
    return data['1040_spouse_first_name'] && data['1040_spouse_last_name'] && data['1040_spouse_ssn'];
  }
  return true;
}, {
  message: 'Spouse information is required for married filing status',
  path: ['1040_spouse_first_name']
});

type Form1040FormData = z.infer<typeof form1040Schema>;

interface Form1040Props {
  onSave?: (data: Form1040Data) => void;
  onSubmit?: (data: Form1040Data) => void;
  readonly?: boolean;
  className?: string;
}

const FORM_STEPS = [
  { id: 1, title: 'Personal Information', component: PersonalInfoStep },
  { id: 2, title: 'Income', component: IncomeStep },
  { id: 3, title: 'Deductions', component: DeductionsStep },
  { id: 4, title: 'Tax Calculation', component: TaxCalculationStep },
  { id: 5, title: 'Payments', component: PaymentsStep },
];

export const Form1040: React.FC<Form1040Props> = ({
  onSave,
  onSubmit,
  readonly = false,
  className = '',
}) => {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm1040Data);
  const errors = useSelector(selectForm1040Errors);
  const currentStep = useSelector(selectForm1040CurrentStep);
  const isComplete = useSelector(selectForm1040IsComplete);
  const calculatedValues = useCalculated1040();
  
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [lastAutoSave, setLastAutoSave] = useState<Date | null>(null);

  const methods = useForm<Form1040FormData>({
    resolver: zodResolver(form1040Schema),
    defaultValues: formData,
    mode: 'onChange',
  });

  const { handleSubmit, watch, formState: { isValid, isDirty } } = methods;

  // Watch for form changes and auto-save
  const watchedValues = watch();
  
  useEffect(() => {
    if (isDirty && autoSaveEnabled && !readonly) {
      const timeoutId = setTimeout(() => {
        dispatch(updateMultipleFields(watchedValues));
        dispatch(saveForm());
        setLastAutoSave(new Date());
        onSave?.(formData);
      }, 2000); // Auto-save after 2 seconds of inactivity

      return () => clearTimeout(timeoutId);
    }
  }, [watchedValues, isDirty, autoSaveEnabled, readonly, dispatch, onSave, formData]);

  const handleFieldChange = (field: keyof Form1040Data, value: any) => {
    if (!readonly) {
      dispatch(updateField({ field, value }));
    }
  };

  const handleStepChange = (stepId: number) => {
    if (!readonly) {
      dispatch(setCurrentStep(stepId));
    }
  };

  const handleStepComplete = (stepId: number) => {
    if (!readonly) {
      dispatch(completeStep(stepId));
    }
  };

  const onFormSubmit = (data: Form1040FormData) => {
    if (!readonly) {
      dispatch(updateMultipleFields(data));
      dispatch(saveForm());
      onSubmit?.(data as Form1040Data);
    }
  };

  const currentStepData = FORM_STEPS.find(step => step.id === currentStep);
  const CurrentStepComponent = currentStepData?.component;

  return (
    <div className={`${styles.form1040Container} ${className}`}>
      {/* Form Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-blue-50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Form 1040 - U.S. Individual Income Tax Return</h1>
            <p className="text-sm text-gray-600 mt-1">Tax Year 2024</p>
          </div>
          <div className="text-right">
            <div className={`${styles.stepPill} ${styles.active}`}>Form 1040</div>
            {readonly && <span className="text-xs text-gray-500 block mt-1">Read Only</span>}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm text-gray-500">{currentStep} of {FORM_STEPS.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${(currentStep / FORM_STEPS.length) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-3">
          {FORM_STEPS.map((step, index) => (
            <div key={step.id} className={`${styles.stepPill} ${index + 1 <= currentStep ? styles.completed : ''}`}>
              {step.title}
            </div>
          ))}
        </div>
      </div>

      {/* Auto-save Indicator */}
      <div className="px-6 py-2 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Auto-save: {autoSaveEnabled ? 'Enabled' : 'Disabled'}</span>
          {lastAutoSave && <span>Last saved: {lastAutoSave.toLocaleTimeString()}</span>}
        </div>
      </div>

      {/* Error Summary */}
      {Object.keys(errors).length > 0 && (
        <div className="px-6 py-4 border-b border-gray-200 bg-red-50">
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Please correct the following errors:</h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul className="list-disc pl-5 space-y-1">
                    {Object.entries(errors).map(([field, error]) => (
                      <li key={field}>{error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
          {/* Main Form Content */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Form Steps */}
              <div className="lg:col-span-2">
                {CurrentStepComponent && (
                  <CurrentStepComponent
                    data={formData}
                    onChange={handleFieldChange}
                    readonly={readonly}
                    errors={errors}
                  />
                )}
              </div>

              {/* Calculation Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className={styles.calculationSidebar}>
                  <h3>Tax Summary</h3>
                  <div className={styles.zebraTable}>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="font-medium">Total Income (Line 24):</td>
                          <td className="text-right">${calculatedValues['1040_line_24']?.toLocaleString() || '0'}</td>
                        </tr>
                        <tr>
                          <td className="font-medium">Adjusted Gross Income (Line 11):</td>
                          <td className="text-right">${calculatedValues['1040_line_11']?.toLocaleString() || '0'}</td>
                        </tr>
                        <tr>
                          <td className="font-medium">Total Payments (Line 33):</td>
                          <td className="text-right">${calculatedValues['1040_line_33']?.toLocaleString() || '0'}</td>
                        </tr>
                        <tr>
                          <td className="font-medium">Filing Status:</td>
                          <td className="text-right">{formData['1040_filing_status'] || 'Not selected'}</td>
                        </tr>
                        <tr className="border-t-2 border-blue-600">
                          <td className="font-bold">Refund Amount (Line 38):</td>
                          <td className="text-right font-bold text-green-600">${calculatedValues['1040_line_38']?.toLocaleString() || '0'}</td>
                        </tr>
                        <tr>
                          <td className="font-bold">Amount Owed (Line 37):</td>
                          <td className="text-right font-bold text-red-600">${calculatedValues['1040_line_37']?.toLocaleString() || '0'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Navigation */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => handleStepChange(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1 || readonly}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Step {currentStep} of {FORM_STEPS.length}
              </span>
              <div className="space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    dispatch(saveForm());
                    onSave?.(formData);
                  }}
                  disabled={readonly}
                  className={`${styles.secondaryButton} ${readonly ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Save Progress
                </button>
                {currentStep < FORM_STEPS.length ? (
                  <button
                    type="button"
                    onClick={() => {
                      handleStepComplete(currentStep);
                      handleStepChange(currentStep + 1);
                    }}
                    disabled={!isValid || readonly}
                    className={`${styles.primaryButton} ${(!isValid || readonly) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isComplete || readonly}
                    className={`${styles.primaryButton} bg-green-600 hover:bg-green-700 ${(!isComplete || readonly) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    File Tax Return
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </FormProvider>

      {/* Form Footer */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-600">
        <div className="flex justify-between items-center">
          <div>
            <p>Form 1040 (2024) - Page 1 of 2</p>
            <p className="text-xs mt-1">
              For the latest information about developments related to Form 1040 and its instructions, 
              go to <a href="https://www.irs.gov/form1040" className="text-tax-blue hover:underline" target="_blank" rel="noopener noreferrer">www.irs.gov/Form1040</a>
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium">Department of the Treasury</p>
            <p>Internal Revenue Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1040;