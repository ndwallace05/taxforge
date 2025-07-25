import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCalculated1040 } from '../../../hooks/useCalculated1040';
import styles from './Form1040.module.css';
import './print.css'; // global print only
import { selectForm1040Data, selectForm1040Errors, selectForm1040CurrentStep, selectForm1040IsComplete, updateField, updateMultipleFields, setCurrentStep, completeStep, saveForm, } from '../../../store/slices/form1040Slice';
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
    '1040_line_9': z.number().optional(),
    '1040_line_10': z.number().min(0, 'Amount cannot be negative').optional(),
    '1040_line_11': z.number().optional(),
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
    '1040_line_24': z.number().optional(),
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
    '1040_line_33': z.number().optional(),
    '1040_line_34': z.number().min(0, 'Amount cannot be negative').optional(),
    '1040_line_35': z.number().optional(),
    '1040_line_36': z.number().optional(),
    '1040_line_37': z.number().optional(),
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
const FORM_STEPS = [
    { id: 1, title: 'Personal Information', component: PersonalInfoStep },
    { id: 2, title: 'Income', component: IncomeStep },
    { id: 3, title: 'Deductions', component: DeductionsStep },
    { id: 4, title: 'Tax Calculation', component: TaxCalculationStep },
    { id: 5, title: 'Payments', component: PaymentsStep },
];
export const Form1040 = ({ onSave, onSubmit, readonly = false, className = '', }) => {
    const dispatch = useDispatch();
    const formData = useSelector(selectForm1040Data);
    const errors = useSelector(selectForm1040Errors);
    const currentStep = useSelector(selectForm1040CurrentStep);
    const isComplete = useSelector(selectForm1040IsComplete);
    const calculatedValues = useCalculated1040();
    const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
    const [lastAutoSave, setLastAutoSave] = useState(null);
    const methods = useForm({
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
    const handleFieldChange = (field, value) => {
        if (!readonly) {
            dispatch(updateField({ field, value }));
        }
    };
    const handleStepChange = (stepId) => {
        if (!readonly) {
            dispatch(setCurrentStep(stepId));
        }
    };
    const handleStepComplete = (stepId) => {
        if (!readonly) {
            dispatch(completeStep(stepId));
        }
    };
    const onFormSubmit = (data) => {
        if (!readonly) {
            dispatch(updateMultipleFields(data));
            dispatch(saveForm());
            onSubmit?.(data);
        }
    };
    const currentStepData = FORM_STEPS.find(step => step.id === currentStep);
    const CurrentStepComponent = currentStepData?.component;
    return (_jsxs("div", { className: `${styles.form1040Container} ${className}`, children: [_jsx("div", { className: "px-6 py-4 border-b border-gray-200 bg-blue-50", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Form 1040 - U.S. Individual Income Tax Return" }), _jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Tax Year 2024" })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: `${styles.stepPill} ${styles.active}`, children: "Form 1040" }), readonly && _jsx("span", { className: "text-xs text-gray-500 block mt-1", children: "Read Only" })] })] }) }), _jsxs("div", { className: "px-6 py-4 border-b border-gray-200", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-sm font-medium text-gray-700", children: "Progress" }), _jsxs("span", { className: "text-sm text-gray-500", children: [currentStep, " of ", FORM_STEPS.length] })] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full transition-all duration-300", style: { width: `${(currentStep / FORM_STEPS.length) * 100}%` } }) }), _jsx("div", { className: "flex justify-between mt-3", children: FORM_STEPS.map((step, index) => (_jsx("div", { className: `${styles.stepPill} ${index + 1 <= currentStep ? styles.completed : ''}`, children: step.title }, step.id))) })] }), _jsx("div", { className: "px-6 py-2 bg-gray-50 border-b border-gray-200", children: _jsxs("div", { className: "flex items-center justify-between text-sm text-gray-600", children: [_jsxs("span", { children: ["Auto-save: ", autoSaveEnabled ? 'Enabled' : 'Disabled'] }), lastAutoSave && _jsxs("span", { children: ["Last saved: ", lastAutoSave.toLocaleTimeString()] })] }) }), Object.keys(errors).length > 0 && (_jsx("div", { className: "px-6 py-4 border-b border-gray-200 bg-red-50", children: _jsx("div", { className: "rounded-md bg-red-50 p-4", children: _jsx("div", { className: "flex", children: _jsxs("div", { className: "ml-3", children: [_jsx("h3", { className: "text-sm font-medium text-red-800", children: "Please correct the following errors:" }), _jsx("div", { className: "mt-2 text-sm text-red-700", children: _jsx("ul", { className: "list-disc pl-5 space-y-1", children: Object.entries(errors).map(([field, error]) => (_jsx("li", { children: error }, field))) }) })] }) }) }) })), _jsx(FormProvider, { ...methods, children: _jsxs("form", { onSubmit: handleSubmit(onFormSubmit), className: "space-y-6", children: [_jsx("div", { className: "px-6 py-6", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx("div", { className: "lg:col-span-2", children: CurrentStepComponent && (_jsx(CurrentStepComponent, { data: formData, onChange: handleFieldChange, readonly: readonly, errors: errors })) }), _jsx("div", { className: "lg:col-span-1", children: _jsxs("div", { className: styles.calculationSidebar, children: [_jsx("h3", { children: "Tax Summary" }), _jsx("div", { className: styles.zebraTable, children: _jsx("table", { className: "w-full", children: _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { className: "font-medium", children: "Total Income (Line 24):" }), _jsxs("td", { className: "text-right", children: ["$", calculatedValues['1040_line_24']?.toLocaleString() || '0'] })] }), _jsxs("tr", { children: [_jsx("td", { className: "font-medium", children: "Adjusted Gross Income (Line 11):" }), _jsxs("td", { className: "text-right", children: ["$", calculatedValues['1040_line_11']?.toLocaleString() || '0'] })] }), _jsxs("tr", { children: [_jsx("td", { className: "font-medium", children: "Total Payments (Line 33):" }), _jsxs("td", { className: "text-right", children: ["$", calculatedValues['1040_line_33']?.toLocaleString() || '0'] })] }), _jsxs("tr", { children: [_jsx("td", { className: "font-medium", children: "Filing Status:" }), _jsx("td", { className: "text-right", children: formData['1040_filing_status'] || 'Not selected' })] }), _jsxs("tr", { className: "border-t-2 border-blue-600", children: [_jsx("td", { className: "font-bold", children: "Refund Amount (Line 38):" }), _jsxs("td", { className: "text-right font-bold text-green-600", children: ["$", calculatedValues['1040_line_38']?.toLocaleString() || '0'] })] }), _jsxs("tr", { children: [_jsx("td", { className: "font-bold", children: "Amount Owed (Line 37):" }), _jsxs("td", { className: "text-right font-bold text-red-600", children: ["$", calculatedValues['1040_line_37']?.toLocaleString() || '0'] })] })] }) }) })] }) })] }) }), _jsx("div", { className: "px-6 py-4 border-t border-gray-200 bg-gray-50", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("button", { type: "button", onClick: () => handleStepChange(Math.max(1, currentStep - 1)), disabled: currentStep === 1 || readonly, className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed", children: "Previous" }), _jsxs("span", { className: "text-sm text-gray-600", children: ["Step ", currentStep, " of ", FORM_STEPS.length] }), _jsxs("div", { className: "space-x-2", children: [_jsx("button", { type: "button", onClick: () => {
                                                    dispatch(saveForm());
                                                    onSave?.(formData);
                                                }, disabled: readonly, className: `${styles.secondaryButton} ${readonly ? 'opacity-50 cursor-not-allowed' : ''}`, children: "Save Progress" }), currentStep < FORM_STEPS.length ? (_jsx("button", { type: "button", onClick: () => {
                                                    handleStepComplete(currentStep);
                                                    handleStepChange(currentStep + 1);
                                                }, disabled: !isValid || readonly, className: `${styles.primaryButton} ${(!isValid || readonly) ? 'opacity-50 cursor-not-allowed' : ''}`, children: "Next" })) : (_jsx("button", { type: "submit", disabled: !isComplete || readonly, className: `${styles.primaryButton} bg-green-600 hover:bg-green-700 ${(!isComplete || readonly) ? 'opacity-50 cursor-not-allowed' : ''}`, children: "File Tax Return" }))] })] }) })] }) }), _jsx("div", { className: "px-6 py-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-600", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("p", { children: "Form 1040 (2024) - Page 1 of 2" }), _jsxs("p", { className: "text-xs mt-1", children: ["For the latest information about developments related to Form 1040 and its instructions, go to ", _jsx("a", { href: "https://www.irs.gov/form1040", className: "text-tax-blue hover:underline", target: "_blank", rel: "noopener noreferrer", children: "www.irs.gov/Form1040" })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "font-medium", children: "Department of the Treasury" }), _jsx("p", { children: "Internal Revenue Service" })] })] }) })] }));
};
export default Form1040;
