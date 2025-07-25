// Form 1040 Components
export { default as Form1040 } from './Form1040';

// Form 1040 Steps
export { default as PersonalInfoStep } from './steps/PersonalInfoStep';
export { default as IncomeStep } from './steps/IncomeStep';
export { default as DeductionsStep } from './steps/DeductionsStep';
export { default as TaxCalculationStep } from './steps/TaxCalculationStep';
export { default as PaymentsStep } from './steps/PaymentsStep';
export { default as ReviewStep } from './steps/ReviewStep';

// Types
export type { Form1040Data } from '../../../store/slices/form1040Slice';