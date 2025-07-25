// Export all form components
export { default as Form1040 } from './Form1040';
export { default as Form1040SR } from './Form1040SR';
export { default as Form1040NR } from './Form1040NR';
// Re-export step components for Form1040
export { PersonalInfoStep as Form1040PersonalInfoStep, IncomeStep as Form1040IncomeStep, DeductionsStep as Form1040DeductionsStep, TaxCalculationStep as Form1040TaxCalculationStep, PaymentsStep as Form1040PaymentsStep, ReviewStep as Form1040ReviewStep } from './Form1040';
// Re-export step components for Form1040SR
export { PersonalInfoStep as Form1040SRPersonalInfoStep, IncomeStep as Form1040SRIncomeStep, DeductionsStep as Form1040SRDeductionsStep, TaxCalculationStep as Form1040SRTaxCalculationStep, PaymentsStep as Form1040SRPaymentsStep, ReviewStep as Form1040SRReviewStep } from './Form1040SR';
// Re-export step components for Form1040NR
export { PersonalInfoStep as Form1040NRPersonalInfoStep, ResidencyStep as Form1040NRResidencyStep, IncomeStep as Form1040NRIncomeStep, DeductionsStep as Form1040NRDeductionsStep, TaxCalculationStep as Form1040NRTaxCalculationStep, PaymentsStep as Form1040NRPaymentsStep, ReviewStep as Form1040NRReviewStep } from './Form1040NR';
// Form registry for dynamic loading
export const AVAILABLE_FORMS = {
    '1040': {
        component: 'Form1040',
        name: 'Form 1040',
        description: 'U.S. Individual Income Tax Return',
        status: 'DONE'
    },
    '1040SR': {
        component: 'Form1040SR',
        name: 'Form 1040-SR',
        description: 'U.S. Tax Return for Seniors',
        status: 'DONE'
    },
    '1040NR': {
        component: 'Form1040NR',
        name: 'Form 1040-NR',
        description: 'U.S. Nonresident Alien Income Tax Return',
        status: 'DONE'
    }
};
