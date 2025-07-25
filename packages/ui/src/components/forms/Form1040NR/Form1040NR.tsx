import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Progress } from '../../ui/progress';
import { Alert, AlertDescription } from '../../ui/alert';
import { Badge } from '../../ui/badge';
import { Separator } from '../../ui/separator';
// Icons replaced with Unicode symbols to avoid lucide-react dependency
import {
  selectForm1040NRData,
  selectForm1040NRCurrentStep,
  selectForm1040NRErrors,
  selectForm1040NRIsComplete,
  setCurrentStep,
  saveForm,
  loadForm,
} from '../../../store/slices/form1040NRSlice';
import { useCalculated1040NR } from '../../../hooks/useCalculated1040NR';
import {
  PersonalInfoStep,
  ResidencyStep,
  IncomeStep,
  DeductionsStep,
  TaxCalculationStep,
  PaymentsStep,
  ReviewStep,
} from './steps';

export interface Form1040NRProps {
  onSubmit?: (data: any) => void;
  onSave?: (data: any) => void;
  initialData?: any;
  readOnly?: boolean;
  showProgress?: boolean;
  autoSave?: boolean;
  autoSaveInterval?: number;
}

const STEPS = [
  { id: 1, title: 'Personal Information', component: PersonalInfoStep },
  { id: 2, title: 'Residency Status', component: ResidencyStep },
  { id: 3, title: 'Income', component: IncomeStep },
  { id: 4, title: 'Deductions', component: DeductionsStep },
  { id: 5, title: 'Tax Calculation', component: TaxCalculationStep },
  { id: 6, title: 'Payments & Credits', component: PaymentsStep },
  { id: 7, title: 'Review & Submit', component: ReviewStep },
];

export const Form1040NR: React.FC<Form1040NRProps> = ({
  onSubmit,
  onSave,
  initialData,
  readOnly = false,
  showProgress = true,
  autoSave = true,
  autoSaveInterval = 30000, // 30 seconds
}) => {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm1040NRData);
  const currentStep = useSelector(selectForm1040NRCurrentStep);
  const errors = useSelector(selectForm1040NRErrors);
  const isComplete = useSelector(selectForm1040NRIsComplete);
  const calculated = useCalculated1040NR();
  
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Load initial data
  useEffect(() => {
    if (initialData) {
      dispatch(loadForm(initialData));
    }
  }, [initialData, dispatch]);

  // Auto-save functionality
  useEffect(() => {
    if (!autoSave || readOnly) return;

    const interval = setInterval(() => {
      handleSave();
    }, autoSaveInterval);

    return () => clearInterval(interval);
  }, [autoSave, autoSaveInterval, readOnly]);

  const handleSave = async () => {
    if (readOnly) return;
    
    setIsSaving(true);
    try {
      dispatch(saveForm());
      setLastSaved(new Date());
      onSave?.(formData);
    } catch (error) {
      console.error('Failed to save form:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      dispatch(setCurrentStep(currentStep + 1));
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };

  const handleStepClick = (stepId: number) => {
    if (readOnly) return;
    dispatch(setCurrentStep(stepId));
  };

  const handleSubmit = () => {
    if (isComplete) {
      onSubmit?.(formData);
    }
  };

  const currentStepIndex = currentStep - 1; // Convert 1-based to 0-based index
  const CurrentStepComponent = STEPS[currentStepIndex]?.component;
  const progress = (currentStep / STEPS.length) * 100;

  const hasErrors = Object.keys(errors).length > 0;
  const currentStepErrors = errors[currentStep] || [];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl text-blue-600">🌍</span>
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Form 1040-NR
                </CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  U.S. Nonresident Alien Income Tax Return
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                <span className="mr-1">📅</span>
                Tax Year 2024
              </Badge>
              {calculated.requiresScheduleNEC && (
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  Schedule NEC Required
                </Badge>
              )}
              {calculated.requiresScheduleOI && (
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  Schedule OI Required
                </Badge>
              )}
            </div>
          </div>
          
          {/* Progress Bar */}
          {showProgress && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Step {currentStep} of {STEPS.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </CardHeader>
      </Card>

      {/* Step Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            {STEPS.map((step, index) => {
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;
              const hasStepErrors = errors[step.id]?.length > 0;
              
              return (
                <Button
                  key={step.id}
                  variant={isActive ? 'default' : isCompleted ? 'secondary' : 'outline'}
                  size="sm"
                  className={`relative ${
                    hasStepErrors ? 'border-red-300 bg-red-50 text-red-700' : ''
                  }`}
                  onClick={() => handleStepClick(step.id)}
                  disabled={readOnly}
                >
                  {hasStepErrors && (
                    <span className="mr-1">⚠️</span>
                  )}
                  <span className="mr-2">{step.id}.</span>
                  {step.title}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Nonresident Alien Information */}
      <Alert className="border-blue-200 bg-blue-50">
        <span className="text-blue-600">🌍</span>
        <AlertDescription className="text-blue-800">
          <strong>Important for Nonresident Aliens:</strong> This form is for individuals who are not U.S. citizens or residents 
          but have U.S. source income. Different tax rules apply compared to Form 1040. Consider consulting a tax professional 
          familiar with nonresident alien taxation.
        </AlertDescription>
      </Alert>

      {/* Current Step Errors */}
      {currentStepErrors.length > 0 && (
        <Alert variant="destructive">
          <span>⚠️</span>
          <AlertDescription>
            <strong>Please fix the following errors:</strong>
            <ul className="list-disc list-inside mt-2">
              {currentStepErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Step Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>📄</span>
            <span>Step {currentStep}: {STEPS[currentStepIndex]?.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {CurrentStepComponent && (
            <CurrentStepComponent
              data={formData}
              calculated={calculated}
              errors={currentStepErrors}
              readOnly={readOnly}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
        </CardContent>
      </Card>

      {/* Navigation and Actions */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1 || readOnly}
              >
                <span className="mr-1">←</span>
                Previous
              </Button>
              
              {currentStep < STEPS.length ? (
                <Button
                  onClick={handleNext}
                  disabled={currentStepErrors.length > 0 || readOnly}
                >
                  Next
                  <span className="ml-1">→</span>
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isComplete || readOnly}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Submit Form 1040-NR
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {/* Auto-save status */}
              {lastSaved && (
                <span className="text-sm text-gray-500">
                  Last saved: {lastSaved.toLocaleTimeString()}
                </span>
              )}
              
              {/* Manual save button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                disabled={isSaving || readOnly}
              >
                <span className="mr-1">💾</span>
                {isSaving ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Summary */}
      {showProgress && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Form Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Effectively Connected Income</p>
                <p className="font-semibold">
                  ${calculated.totalEffectivelyConnectedIncome.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Not Effectively Connected Income</p>
                <p className="font-semibold">
                  ${calculated.totalNECIncome.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Total Tax</p>
                <p className="font-semibold">
                  ${calculated.totalTax.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  {calculated.refundAmount > 0 ? 'Refund' : 'Amount Owed'}
                </p>
                <p className={`font-semibold ${
                  calculated.refundAmount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  ${(calculated.refundAmount || calculated.amountOwed).toLocaleString()}
                </p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Substantial Presence Test</p>
                <p className={`font-semibold ${
                  calculated.isSubstantialPresenceTest ? 'text-orange-600' : 'text-green-600'
                }`}>
                  {calculated.isSubstantialPresenceTest ? 'Met' : 'Not Met'}
                  <span className="text-gray-500 ml-1">
                    ({calculated.substantialPresenceDays.toFixed(1)} days)
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-600">Treaty Benefits</p>
                <p className={`font-semibold ${
                  calculated.treatyBenefitsApplicable ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  {calculated.treatyBenefitsApplicable ? 'Applicable' : 'Not Claimed'}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Effective Tax Rate</p>
                <p className="font-semibold">
                  {calculated.effectiveTaxRate.toFixed(2)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Form1040NR;