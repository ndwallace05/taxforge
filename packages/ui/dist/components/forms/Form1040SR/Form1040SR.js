import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCalculated1040SR } from '../../../hooks/useCalculated1040SR';
import styles from './Form1040SR.module.css';
import { selectForm1040SRData, selectForm1040SRErrors, selectForm1040SRCurrentStep, selectForm1040SRIsComplete, updateField, updateMultipleFields, setCurrentStep, completeStep, saveForm, } from '../../../store/slices/form1040SRSlice';
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
const STEPS = [
    { id: 1, title: 'Personal Information', component: PersonalInfoStep },
    { id: 2, title: 'Income', component: IncomeStep },
    { id: 3, title: 'Deductions', component: DeductionsStep },
    { id: 4, title: 'Tax Calculation', component: TaxCalculationStep },
    { id: 5, title: 'Payments & Credits', component: PaymentsStep },
    { id: 6, title: 'Review & Submit', component: ReviewStep },
];
export const Form1040SR = ({ onSave, onSubmit, readonly = false, className = '', }) => {
    const dispatch = useDispatch();
    const formData = useSelector(selectForm1040SRData);
    const errors = useSelector(selectForm1040SRErrors);
    const currentStep = useSelector(selectForm1040SRCurrentStep);
    const isComplete = useSelector(selectForm1040SRIsComplete);
    const calculatedValues = useCalculated1040SR();
    const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
    const [lastAutoSave, setLastAutoSave] = useState(null);
    const methods = useForm({
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
            setValue(key, value);
        });
    }, [formData, setValue]);
    // Handle field changes
    const handleFieldChange = (field, value) => {
        if (!readonly) {
            dispatch(updateField({ field, value }));
        }
    };
    // Handle step navigation
    const handleStepChange = (stepId) => {
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
    const onFormSubmit = (data) => {
        if (!readonly) {
            dispatch(updateMultipleFields(data));
            dispatch(saveForm());
            onSubmit?.(data);
        }
    };
    const CurrentStepComponent = STEPS[currentStep - 1]?.component;
    return (_jsx("div", { className: `${styles.form1040SRContainer} ${className}`, children: _jsx(FormProvider, { ...methods, children: _jsxs("form", { onSubmit: handleSubmit(onFormSubmit), className: styles.form, children: [_jsxs("div", { className: styles.header, children: [_jsxs("div", { className: styles.headerContent, children: [_jsx("h1", { className: styles.title, children: "Form 1040-SR - U.S. Tax Return for Seniors" }), _jsx("p", { className: styles.subtitle, children: "Tax Year 2024 \u2022 For taxpayers age 65 and older" }), _jsxs("div", { className: styles.seniorBadge, children: [_jsx("span", { className: styles.seniorIcon, children: "\uD83D\uDC65" }), _jsx("span", { children: "Senior-Friendly Large Print Version" })] })] }), !readonly && (_jsxs("div", { className: styles.autoSaveContainer, children: [_jsxs("label", { className: styles.autoSaveToggle, children: [_jsx("input", { type: "checkbox", checked: autoSaveEnabled, onChange: (e) => setAutoSaveEnabled(e.target.checked) }), _jsx("span", { children: "Auto-save" })] }), lastAutoSave && (_jsxs("span", { className: styles.lastSaved, children: ["Last saved: ", lastAutoSave.toLocaleTimeString()] }))] }))] }), _jsxs("div", { className: styles.progressContainer, children: [_jsx("div", { className: styles.progressBar, children: STEPS.map((step, index) => (_jsxs("div", { className: `${styles.stepPill} ${currentStep === step.id ? styles.stepActive : ''} ${currentStep > step.id ? styles.stepCompleted : ''}`, onClick: () => !readonly && handleStepChange(step.id), children: [_jsx("span", { className: styles.stepNumber, children: step.id }), _jsx("span", { className: styles.stepTitle, children: step.title })] }, step.id))) }), _jsxs("div", { className: styles.progressIndicator, children: ["Step ", currentStep, " of ", STEPS.length] })] }), _jsxs("div", { className: styles.standardDeductionTable, children: [_jsx("h3", { children: "2024 Standard Deduction Quick Reference (Age 65+)" }), _jsxs("div", { className: styles.deductionGrid, children: [_jsxs("div", { className: styles.deductionItem, children: [_jsx("span", { className: styles.filingStatus, children: "Single" }), _jsx("span", { className: styles.amount, children: "$16,150" })] }), _jsxs("div", { className: styles.deductionItem, children: [_jsx("span", { className: styles.filingStatus, children: "Married Filing Jointly" }), _jsx("span", { className: styles.amount, children: "$32,300" })] }), _jsxs("div", { className: styles.deductionItem, children: [_jsx("span", { className: styles.filingStatus, children: "Married Filing Separately" }), _jsx("span", { className: styles.amount, children: "$16,150" })] }), _jsxs("div", { className: styles.deductionItem, children: [_jsx("span", { className: styles.filingStatus, children: "Head of Household" }), _jsx("span", { className: styles.amount, children: "$23,450" })] })] }), _jsx("p", { className: styles.deductionNote, children: "* Additional $1,550 for each spouse age 65+ or blind" })] }), _jsx("div", { className: styles.stepContent, children: CurrentStepComponent && (_jsx(CurrentStepComponent, { data: formData, onChange: handleFieldChange, errors: errors, calculatedValues: calculatedValues, readonly: readonly })) }), !readonly && (_jsxs("div", { className: styles.navigation, children: [_jsx("button", { type: "button", onClick: handlePrevStep, disabled: currentStep === 1, className: `${styles.navButton} ${styles.prevButton}`, children: "\u2190 Previous" }), _jsx("div", { className: styles.navCenter, children: _jsx("button", { type: "button", onClick: () => dispatch(saveForm()), className: styles.saveButton, children: "\uD83D\uDCBE Save Progress" }) }), currentStep < STEPS.length ? (_jsx("button", { type: "button", onClick: handleNextStep, className: `${styles.navButton} ${styles.nextButton}`, children: "Next \u2192" })) : (_jsx("button", { type: "submit", disabled: !isComplete, className: `${styles.navButton} ${styles.submitButton}`, children: "Submit Return" }))] })), _jsxs("div", { className: styles.formStatus, children: [_jsxs("div", { className: styles.statusItem, children: [_jsx("span", { className: styles.statusLabel, children: "Form Status:" }), _jsx("span", { className: `${styles.statusValue} ${isComplete ? styles.statusComplete : styles.statusIncomplete}`, children: isComplete ? '✅ Complete' : '⏳ In Progress' })] }), _jsxs("div", { className: styles.statusItem, children: [_jsx("span", { className: styles.statusLabel, children: "Age Verification:" }), _jsx("span", { className: `${styles.statusValue} ${formData['1040SR_age_65_or_older'] ? styles.statusComplete : styles.statusIncomplete}`, children: formData['1040SR_age_65_or_older'] ? '✅ Verified (65+)' : '❌ Not Verified' })] }), Object.keys(errors).length > 0 && (_jsxs("div", { className: styles.statusItem, children: [_jsx("span", { className: styles.statusLabel, children: "Errors:" }), _jsxs("span", { className: `${styles.statusValue} ${styles.statusError}`, children: [Object.keys(errors).length, " error(s) found"] })] }))] })] }) }) }));
};
export default Form1040SR;
