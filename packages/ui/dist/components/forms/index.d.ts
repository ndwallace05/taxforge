export { default as Form1040 } from './Form1040';
export { default as Form1040SR } from './Form1040SR';
export { default as Form1040NR } from './Form1040NR';
export type { Form1040Props } from './Form1040';
export type { Form1040SRProps } from './Form1040SR';
export type { Form1040NRProps } from './Form1040NR';
export { PersonalInfoStep as Form1040PersonalInfoStep, IncomeStep as Form1040IncomeStep, DeductionsStep as Form1040DeductionsStep, TaxCalculationStep as Form1040TaxCalculationStep, PaymentsStep as Form1040PaymentsStep, ReviewStep as Form1040ReviewStep } from './Form1040';
export { PersonalInfoStep as Form1040SRPersonalInfoStep, IncomeStep as Form1040SRIncomeStep, DeductionsStep as Form1040SRDeductionsStep, TaxCalculationStep as Form1040SRTaxCalculationStep, PaymentsStep as Form1040SRPaymentsStep, ReviewStep as Form1040SRReviewStep } from './Form1040SR';
export { PersonalInfoStep as Form1040NRPersonalInfoStep, ResidencyStep as Form1040NRResidencyStep, IncomeStep as Form1040NRIncomeStep, DeductionsStep as Form1040NRDeductionsStep, TaxCalculationStep as Form1040NRTaxCalculationStep, PaymentsStep as Form1040NRPaymentsStep, ReviewStep as Form1040NRReviewStep } from './Form1040NR';
export declare const AVAILABLE_FORMS: {
    readonly '1040': {
        readonly component: "Form1040";
        readonly name: "Form 1040";
        readonly description: "U.S. Individual Income Tax Return";
        readonly status: "DONE";
    };
    readonly '1040SR': {
        readonly component: "Form1040SR";
        readonly name: "Form 1040-SR";
        readonly description: "U.S. Tax Return for Seniors";
        readonly status: "DONE";
    };
    readonly '1040NR': {
        readonly component: "Form1040NR";
        readonly name: "Form 1040-NR";
        readonly description: "U.S. Nonresident Alien Income Tax Return";
        readonly status: "DONE";
    };
};
export type FormType = keyof typeof AVAILABLE_FORMS;
//# sourceMappingURL=index.d.ts.map