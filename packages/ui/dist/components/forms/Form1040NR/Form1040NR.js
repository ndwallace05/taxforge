import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Progress } from '../../ui/progress';
import { Alert, AlertDescription } from '../../ui/alert';
import { Badge } from '../../ui/badge';
import { Separator } from '../../ui/separator';
// Icons replaced with Unicode symbols to avoid lucide-react dependency
import { selectForm1040NRData, selectForm1040NRCurrentStep, selectForm1040NRErrors, selectForm1040NRIsComplete, setCurrentStep, saveForm, loadForm, } from '../../../store/slices/form1040NRSlice';
import { useCalculated1040NR } from '../../../hooks/useCalculated1040NR';
import { PersonalInfoStep, ResidencyStep, IncomeStep, DeductionsStep, TaxCalculationStep, PaymentsStep, ReviewStep, } from './steps';
const STEPS = [
    { id: 1, title: 'Personal Information', component: PersonalInfoStep },
    { id: 2, title: 'Residency Status', component: ResidencyStep },
    { id: 3, title: 'Income', component: IncomeStep },
    { id: 4, title: 'Deductions', component: DeductionsStep },
    { id: 5, title: 'Tax Calculation', component: TaxCalculationStep },
    { id: 6, title: 'Payments & Credits', component: PaymentsStep },
    { id: 7, title: 'Review & Submit', component: ReviewStep },
];
export const Form1040NR = ({ onSubmit, onSave, initialData, readOnly = false, showProgress = true, autoSave = true, autoSaveInterval = 30000, // 30 seconds
 }) => {
    const dispatch = useDispatch();
    const formData = useSelector(selectForm1040NRData);
    const currentStep = useSelector(selectForm1040NRCurrentStep);
    const errors = useSelector(selectForm1040NRErrors);
    const isComplete = useSelector(selectForm1040NRIsComplete);
    const calculated = useCalculated1040NR();
    const [lastSaved, setLastSaved] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    // Load initial data
    useEffect(() => {
        if (initialData) {
            dispatch(loadForm(initialData));
        }
    }, [initialData, dispatch]);
    // Auto-save functionality
    useEffect(() => {
        if (!autoSave || readOnly)
            return;
        const interval = setInterval(() => {
            handleSave();
        }, autoSaveInterval);
        return () => clearInterval(interval);
    }, [autoSave, autoSaveInterval, readOnly]);
    const handleSave = async () => {
        if (readOnly)
            return;
        setIsSaving(true);
        try {
            dispatch(saveForm());
            setLastSaved(new Date());
            onSave?.(formData);
        }
        catch (error) {
            console.error('Failed to save form:', error);
        }
        finally {
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
    const handleStepClick = (stepId) => {
        if (readOnly)
            return;
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
    return (_jsxs("div", { className: "max-w-4xl mx-auto p-6 space-y-6", children: [_jsx(Card, { children: _jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "p-2 bg-blue-100 rounded-lg", children: _jsx("span", { className: "text-2xl text-blue-600", children: "\uD83C\uDF0D" }) }), _jsxs("div", { children: [_jsx(CardTitle, { className: "text-2xl font-bold text-gray-900", children: "Form 1040-NR" }), _jsx("p", { className: "text-sm text-gray-600 mt-1", children: "U.S. Nonresident Alien Income Tax Return" })] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs(Badge, { variant: "outline", className: "bg-blue-50 text-blue-700 border-blue-200", children: [_jsx("span", { className: "mr-1", children: "\uD83D\uDCC5" }), "Tax Year 2024"] }), calculated.requiresScheduleNEC && (_jsx(Badge, { variant: "outline", className: "bg-orange-50 text-orange-700 border-orange-200", children: "Schedule NEC Required" })), calculated.requiresScheduleOI && (_jsx(Badge, { variant: "outline", className: "bg-purple-50 text-purple-700 border-purple-200", children: "Schedule OI Required" }))] })] }), showProgress && (_jsxs("div", { className: "mt-4", children: [_jsxs("div", { className: "flex justify-between text-sm text-gray-600 mb-2", children: [_jsxs("span", { children: ["Step ", currentStep, " of ", STEPS.length] }), _jsxs("span", { children: [Math.round(progress), "% Complete"] })] }), _jsx(Progress, { value: progress, className: "h-2" })] }))] }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-4", children: _jsx("div", { className: "flex flex-wrap gap-2", children: STEPS.map((step, index) => {
                            const isActive = step.id === currentStep;
                            const isCompleted = step.id < currentStep;
                            const hasStepErrors = errors[step.id]?.length > 0;
                            return (_jsxs(Button, { variant: isActive ? 'default' : isCompleted ? 'secondary' : 'outline', size: "sm", className: `relative ${hasStepErrors ? 'border-red-300 bg-red-50 text-red-700' : ''}`, onClick: () => handleStepClick(step.id), disabled: readOnly, children: [hasStepErrors && (_jsx("span", { className: "mr-1", children: "\u26A0\uFE0F" })), _jsxs("span", { className: "mr-2", children: [step.id, "."] }), step.title] }, step.id));
                        }) }) }) }), _jsxs(Alert, { className: "border-blue-200 bg-blue-50", children: [_jsx("span", { className: "text-blue-600", children: "\uD83C\uDF0D" }), _jsxs(AlertDescription, { className: "text-blue-800", children: [_jsx("strong", { children: "Important for Nonresident Aliens:" }), " This form is for individuals who are not U.S. citizens or residents but have U.S. source income. Different tax rules apply compared to Form 1040. Consider consulting a tax professional familiar with nonresident alien taxation."] })] }), currentStepErrors.length > 0 && (_jsxs(Alert, { variant: "destructive", children: [_jsx("span", { children: "\u26A0\uFE0F" }), _jsxs(AlertDescription, { children: [_jsx("strong", { children: "Please fix the following errors:" }), _jsx("ul", { className: "list-disc list-inside mt-2", children: currentStepErrors.map((error, index) => (_jsx("li", { children: error }, index))) })] })] })), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx("span", { children: "\uD83D\uDCC4" }), _jsxs("span", { children: ["Step ", currentStep, ": ", STEPS[currentStepIndex]?.title] })] }) }), _jsx(CardContent, { children: CurrentStepComponent && (_jsx(CurrentStepComponent, { data: formData, calculated: calculated, errors: currentStepErrors, readOnly: readOnly, onNext: handleNext, onPrevious: handlePrevious })) })] }), _jsx(Card, { children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs(Button, { variant: "outline", onClick: handlePrevious, disabled: currentStep === 1 || readOnly, children: [_jsx("span", { className: "mr-1", children: "\u2190" }), "Previous"] }), currentStep < STEPS.length ? (_jsxs(Button, { onClick: handleNext, disabled: currentStepErrors.length > 0 || readOnly, children: ["Next", _jsx("span", { className: "ml-1", children: "\u2192" })] })) : (_jsx(Button, { onClick: handleSubmit, disabled: !isComplete || readOnly, className: "bg-green-600 hover:bg-green-700", children: "Submit Form 1040-NR" }))] }), _jsxs("div", { className: "flex items-center space-x-4", children: [lastSaved && (_jsxs("span", { className: "text-sm text-gray-500", children: ["Last saved: ", lastSaved.toLocaleTimeString()] })), _jsxs(Button, { variant: "outline", size: "sm", onClick: handleSave, disabled: isSaving || readOnly, children: [_jsx("span", { className: "mr-1", children: "\uD83D\uDCBE" }), isSaving ? 'Saving...' : 'Save'] })] })] }) }) }), showProgress && (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg", children: "Form Summary" }) }), _jsxs(CardContent, { children: [_jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm", children: [_jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "Effectively Connected Income" }), _jsxs("p", { className: "font-semibold", children: ["$", calculated.totalEffectivelyConnectedIncome.toLocaleString()] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "Not Effectively Connected Income" }), _jsxs("p", { className: "font-semibold", children: ["$", calculated.totalNECIncome.toLocaleString()] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "Total Tax" }), _jsxs("p", { className: "font-semibold", children: ["$", calculated.totalTax.toLocaleString()] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: calculated.refundAmount > 0 ? 'Refund' : 'Amount Owed' }), _jsxs("p", { className: `font-semibold ${calculated.refundAmount > 0 ? 'text-green-600' : 'text-red-600'}`, children: ["$", (calculated.refundAmount || calculated.amountOwed).toLocaleString()] })] })] }), _jsx(Separator, { className: "my-4" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [_jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "Substantial Presence Test" }), _jsxs("p", { className: `font-semibold ${calculated.isSubstantialPresenceTest ? 'text-orange-600' : 'text-green-600'}`, children: [calculated.isSubstantialPresenceTest ? 'Met' : 'Not Met', _jsxs("span", { className: "text-gray-500 ml-1", children: ["(", calculated.substantialPresenceDays.toFixed(1), " days)"] })] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "Treaty Benefits" }), _jsx("p", { className: `font-semibold ${calculated.treatyBenefitsApplicable ? 'text-blue-600' : 'text-gray-600'}`, children: calculated.treatyBenefitsApplicable ? 'Applicable' : 'Not Claimed' })] }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "Effective Tax Rate" }), _jsxs("p", { className: "font-semibold", children: [calculated.effectiveTaxRate.toFixed(2), "%"] })] })] })] })] }))] }));
};
export default Form1040NR;
