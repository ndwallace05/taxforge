export { Form1040NR } from './Form1040NR';
export type { Form1040NRProps } from './Form1040NR';
export { PersonalInfoStep } from './steps/PersonalInfoStep';
export type { PersonalInfoStepProps } from './steps/PersonalInfoStep';
export { ResidencyStep } from './steps/ResidencyStep';
export type { ResidencyStepProps } from './steps/ResidencyStep';
export { IncomeStep } from './steps/IncomeStep';
export type { IncomeStepProps } from './steps/IncomeStep';
export { DeductionsStep } from './steps/DeductionsStep';
export type { DeductionsStepProps } from './steps/DeductionsStep';
export { TaxCalculationStep } from './steps/TaxCalculationStep';
export type { TaxCalculationStepProps } from './steps/TaxCalculationStep';
export { PaymentsStep } from './steps/PaymentsStep';
export type { PaymentsStepProps } from './steps/PaymentsStep';
export { ReviewStep } from './steps/ReviewStep';
export type { ReviewStepProps } from './steps/ReviewStep';
export { form1040NRSlice, form1040NRReducer } from '../../../store/slices/form1040NRSlice';
export type { Form1040NRData, Form1040NRState } from '../../../store/slices/form1040NRSlice';
export { useCalculated1040NR } from '../../../hooks/useCalculated1040NR';
export type { Calculated1040NRValues } from '../../../hooks/useCalculated1040NR';
export declare const FORM_1040NR_STEPS: readonly [{
    readonly id: "personal";
    readonly title: "Personal Information";
    readonly component: "PersonalInfoStep";
}, {
    readonly id: "residency";
    readonly title: "Residency Status";
    readonly component: "ResidencyStep";
}, {
    readonly id: "income";
    readonly title: "Income";
    readonly component: "IncomeStep";
}, {
    readonly id: "deductions";
    readonly title: "Deductions";
    readonly component: "DeductionsStep";
}, {
    readonly id: "tax";
    readonly title: "Tax Calculation";
    readonly component: "TaxCalculationStep";
}, {
    readonly id: "payments";
    readonly title: "Payments & Credits";
    readonly component: "PaymentsStep";
}, {
    readonly id: "review";
    readonly title: "Review & Submit";
    readonly component: "ReviewStep";
}];
export declare const FORM_1040NR_CONFIG: {
    readonly formType: "1040NR";
    readonly title: "Form 1040-NR";
    readonly description: "U.S. Nonresident Alien Income Tax Return";
    readonly taxYear: 2024;
    readonly dueDate: "2025-06-16";
    readonly dueDateWithWages: "2025-04-15";
    readonly steps: readonly [{
        readonly id: "personal";
        readonly title: "Personal Information";
        readonly component: "PersonalInfoStep";
    }, {
        readonly id: "residency";
        readonly title: "Residency Status";
        readonly component: "ResidencyStep";
    }, {
        readonly id: "income";
        readonly title: "Income";
        readonly component: "IncomeStep";
    }, {
        readonly id: "deductions";
        readonly title: "Deductions";
        readonly component: "DeductionsStep";
    }, {
        readonly id: "tax";
        readonly title: "Tax Calculation";
        readonly component: "TaxCalculationStep";
    }, {
        readonly id: "payments";
        readonly title: "Payments & Credits";
        readonly component: "PaymentsStep";
    }, {
        readonly id: "review";
        readonly title: "Review & Submit";
        readonly component: "ReviewStep";
    }];
    readonly requiredSchedules: readonly ["NEC", "OI"];
    readonly optionalSchedules: readonly ["A", "B", "C", "D", "E", "F"];
};
//# sourceMappingURL=index.d.ts.map