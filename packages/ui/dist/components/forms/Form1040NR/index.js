// Form 1040-NR Component Exports
export { Form1040NR } from './Form1040NR';
// Step Components
export { PersonalInfoStep } from './steps/PersonalInfoStep';
export { ResidencyStep } from './steps/ResidencyStep';
export { IncomeStep } from './steps/IncomeStep';
export { DeductionsStep } from './steps/DeductionsStep';
export { TaxCalculationStep } from './steps/TaxCalculationStep';
export { PaymentsStep } from './steps/PaymentsStep';
export { ReviewStep } from './steps/ReviewStep';
// Redux Slice
export { form1040NRSlice, form1040NRReducer } from '../../../store/slices/form1040NRSlice';
// Hooks
export { useCalculated1040NR } from '../../../hooks/useCalculated1040NR';
// Form Configuration
export const FORM_1040NR_STEPS = [
    { id: 'personal', title: 'Personal Information', component: 'PersonalInfoStep' },
    { id: 'residency', title: 'Residency Status', component: 'ResidencyStep' },
    { id: 'income', title: 'Income', component: 'IncomeStep' },
    { id: 'deductions', title: 'Deductions', component: 'DeductionsStep' },
    { id: 'tax', title: 'Tax Calculation', component: 'TaxCalculationStep' },
    { id: 'payments', title: 'Payments & Credits', component: 'PaymentsStep' },
    { id: 'review', title: 'Review & Submit', component: 'ReviewStep' },
];
export const FORM_1040NR_CONFIG = {
    formType: '1040NR',
    title: 'Form 1040-NR',
    description: 'U.S. Nonresident Alien Income Tax Return',
    taxYear: 2024,
    dueDate: '2025-06-16',
    dueDateWithWages: '2025-04-15',
    steps: FORM_1040NR_STEPS,
    requiredSchedules: ['NEC', 'OI'],
    optionalSchedules: ['A', 'B', 'C', 'D', 'E', 'F'],
};
