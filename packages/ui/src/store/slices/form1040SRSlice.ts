import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Import RootState type
type RootState = {
  form1040SR: Form1040SRState;
};

// Types - Same as Form 1040 but with SR prefix
export interface Form1040SRData {
  // Personal Information
  '1040SR_filing_status': 'single' | 'married_filing_jointly' | 'married_filing_separately' | 'head_of_household' | 'qualifying_surviving_spouse' | '';
  '1040SR_first_name': string;
  '1040SR_last_name': string;
  '1040SR_ssn': string;
  '1040SR_spouse_first_name': string;
  '1040SR_spouse_last_name': string;
  '1040SR_spouse_ssn': string;
  '1040SR_address': string;
  '1040SR_city_state_zip': string;
  '1040SR_date_of_birth': string; // Required for age verification (65+)
  '1040SR_spouse_date_of_birth': string;
  
  // Income Lines - Same as 1040
  '1040SR_line_1a': number; // Wages, salaries, tips
  '1040SR_line_1b': number; // Household employee wages
  '1040SR_line_1c': number; // Tip income not reported
  '1040SR_line_1d': number; // Nontaxable combat pay
  '1040SR_line_1e': number; // Total wages (calculated)
  '1040SR_line_2a': number; // Tax-exempt interest
  '1040SR_line_2b': number; // Taxable interest
  '1040SR_line_3a': number; // Qualified dividends
  '1040SR_line_3b': number; // Ordinary dividends
  '1040SR_line_4a': number; // IRA distributions - total
  '1040SR_line_4b': number; // IRA distributions - taxable
  '1040SR_line_5a': number; // Pensions - total
  '1040SR_line_5b': number; // Pensions - taxable
  '1040SR_line_6a': number; // Social security - total
  '1040SR_line_6b': number; // Social security - taxable
  '1040SR_line_7': number;   // Capital gain/loss
  '1040SR_line_8': number;   // Additional income from Schedule 1
  '1040SR_line_9': number;   // Total income (calculated)
  '1040SR_line_10': number;  // Adjustments to income
  '1040SR_line_11': number;  // Adjusted gross income (calculated)
  '1040SR_line_12': number;  // Standard/itemized deduction
  '1040SR_line_13': number;  // QBI deduction
  '1040SR_line_14': number;  // Total deductions (calculated)
  '1040SR_line_15': number;  // Taxable income (calculated)
  '1040SR_line_16': number;  // Tax
  '1040SR_line_17': number;  // Amount from Schedule 2
  '1040SR_line_18': number;  // Total tax before credits (calculated)
  '1040SR_line_19': number;  // Child tax credit
  '1040SR_line_20': number;  // Amount from Schedule 3
  '1040SR_line_21': number;  // Total credits (calculated)
  '1040SR_line_22': number;  // Tax after credits (calculated)
  '1040SR_line_23': number;  // Other taxes
  '1040SR_line_24': number;  // Total tax (calculated)
  '1040SR_line_25a': number; // Federal withholding
  '1040SR_line_25b': number; // Estimated payments
  '1040SR_line_25c': number; // Earned income credit
  '1040SR_line_25d': number; // Additional child tax credit
  '1040SR_line_26': number;  // American opportunity credit
  '1040SR_line_27': number;  // Reserved
  '1040SR_line_28': number;  // Amount from Schedule 3
  '1040SR_line_29': number;  // Total payments (calculated)
  '1040SR_line_30': number;  // Overpaid amount (calculated)
  '1040SR_line_31': number;  // Refund amount
  '1040SR_line_32': number;  // Applied to next year
  '1040SR_line_33': number;  // Amount owed (calculated)
  '1040SR_line_34': number;  // Estimated tax penalty
  '1040SR_line_35': number;  // Amount you owe (calculated)
  '1040SR_line_36': number;  // Estimated tax penalty
  '1040SR_line_37': number;  // Total amount owed (calculated)
  '1040SR_line_38': number;  // Refund amount (calculated)
  
  // Additional fields
  dependents?: Array<{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    relationship: string;
    ssn: string;
  }>;
  
  // Senior-specific fields
  '1040SR_standard_deduction_lookup': number; // Built-in standard deduction table
  '1040SR_age_65_or_older': boolean;
  '1040SR_spouse_age_65_or_older': boolean;
  '1040SR_blind': boolean;
  '1040SR_spouse_blind': boolean;
  
  // Deductions
  '1040SR_line_12b'?: number;
}

export interface Form1040SRState {
  data: Form1040SRData;
  isValid: boolean;
  isDirty: boolean;
  errors: Record<string, string>;
  calculatedFields: Record<string, number>;
  lastSaved: string | null;
  currentStep: number;
  completedSteps: number[];
}

// Initial state with proper defaults
const initialData: Form1040SRData = {
  '1040SR_filing_status': '',
  '1040SR_first_name': '',
  '1040SR_last_name': '',
  '1040SR_ssn': '',
  '1040SR_spouse_first_name': '',
  '1040SR_spouse_last_name': '',
  '1040SR_spouse_ssn': '',
  '1040SR_address': '',
  '1040SR_city_state_zip': '',
  '1040SR_date_of_birth': '',
  '1040SR_spouse_date_of_birth': '',
  '1040SR_line_1a': 0,
  '1040SR_line_1b': 0,
  '1040SR_line_1c': 0,
  '1040SR_line_1d': 0,
  '1040SR_line_1e': 0,
  '1040SR_line_2a': 0,
  '1040SR_line_2b': 0,
  '1040SR_line_3a': 0,
  '1040SR_line_3b': 0,
  '1040SR_line_4a': 0,
  '1040SR_line_4b': 0,
  '1040SR_line_5a': 0,
  '1040SR_line_5b': 0,
  '1040SR_line_6a': 0,
  '1040SR_line_6b': 0,
  '1040SR_line_7': 0,
  '1040SR_line_8': 0,
  '1040SR_line_9': 0,
  '1040SR_line_10': 0,
  '1040SR_line_11': 0,
  '1040SR_line_12': 0,
  '1040SR_line_13': 0,
  '1040SR_line_14': 0,
  '1040SR_line_15': 0,
  '1040SR_line_16': 0,
  '1040SR_line_17': 0,
  '1040SR_line_18': 0,
  '1040SR_line_19': 0,
  '1040SR_line_20': 0,
  '1040SR_line_21': 0,
  '1040SR_line_22': 0,
  '1040SR_line_23': 0,
  '1040SR_line_24': 0,
  '1040SR_line_25a': 0,
  '1040SR_line_25b': 0,
  '1040SR_line_25c': 0,
  '1040SR_line_25d': 0,
  '1040SR_line_26': 0,
  '1040SR_line_27': 0,
  '1040SR_line_28': 0,
  '1040SR_line_29': 0,
  '1040SR_line_30': 0,
  '1040SR_line_31': 0,
  '1040SR_line_32': 0,
  '1040SR_line_33': 0,
  '1040SR_line_34': 0,
  '1040SR_line_35': 0,
  '1040SR_line_36': 0,
  '1040SR_line_37': 0,
  '1040SR_line_38': 0,
  '1040SR_standard_deduction_lookup': 0,
  '1040SR_age_65_or_older': false,
  '1040SR_spouse_age_65_or_older': false,
  '1040SR_blind': false,
  '1040SR_spouse_blind': false,
};

const initialState: Form1040SRState = {
  data: initialData,
  isValid: false,
  isDirty: false,
  errors: {},
  calculatedFields: {},
  lastSaved: null,
  currentStep: 1,
  completedSteps: [],
};

// Standard Deduction Table for 2024 (Seniors get additional amounts) <mcreference link="https://turbotax.intuit.com/tax-tips/irs-tax-forms/everything-to-know-about-the-1040-sr-form-for-filing-seniors/L10yEzLJf" index="1">1</mcreference>
const getStandardDeduction = (filingStatus: string, age65OrOlder: boolean, spouseAge65OrOlder: boolean, blind: boolean, spouseBlind: boolean): number => {
  const baseDeductions = {
    single: 14600,
    married_filing_jointly: 29200,
    married_filing_separately: 14600,
    head_of_household: 21900,
    qualifying_surviving_spouse: 29200,
  };
  
  let deduction = baseDeductions[filingStatus as keyof typeof baseDeductions] || 0;
  
  // Additional amounts for seniors (65+) and blind
  const additionalAmount = 1550; // 2024 amount
  
  if (age65OrOlder) deduction += additionalAmount;
  if (spouseAge65OrOlder && (filingStatus === 'married_filing_jointly' || filingStatus === 'qualifying_surviving_spouse')) {
    deduction += additionalAmount;
  }
  if (blind) deduction += additionalAmount;
  if (spouseBlind && (filingStatus === 'married_filing_jointly' || filingStatus === 'qualifying_surviving_spouse')) {
    deduction += additionalAmount;
  }
  
  return deduction;
};

// Age verification utility
const isAge65OrOlder = (dateOfBirth: string): boolean => {
  if (!dateOfBirth) return false;
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= 65;
  }
  return age >= 65;
};

// Tax calculation utilities (same as Form 1040)
const calculateTax = (taxableIncome: number, filingStatus: string): number => {
  // 2024 Tax Brackets
  const taxBrackets = {
    single: [
      { min: 0, max: 11600, rate: 0.10 },
      { min: 11600, max: 47150, rate: 0.12 },
      { min: 47150, max: 100525, rate: 0.22 },
      { min: 100525, max: 191950, rate: 0.24 },
      { min: 191950, max: 243725, rate: 0.32 },
      { min: 243725, max: 609350, rate: 0.35 },
      { min: 609350, max: Infinity, rate: 0.37 },
    ],
    married_filing_jointly: [
      { min: 0, max: 23200, rate: 0.10 },
      { min: 23200, max: 94300, rate: 0.12 },
      { min: 94300, max: 201050, rate: 0.22 },
      { min: 201050, max: 383900, rate: 0.24 },
      { min: 383900, max: 487450, rate: 0.32 },
      { min: 487450, max: 731200, rate: 0.35 },
      { min: 731200, max: Infinity, rate: 0.37 },
    ],
    married_filing_separately: [
      { min: 0, max: 11600, rate: 0.10 },
      { min: 11600, max: 47150, rate: 0.12 },
      { min: 47150, max: 100525, rate: 0.22 },
      { min: 100525, max: 191950, rate: 0.24 },
      { min: 191950, max: 243725, rate: 0.32 },
      { min: 243725, max: 365600, rate: 0.35 },
      { min: 365600, max: Infinity, rate: 0.37 },
    ],
    head_of_household: [
      { min: 0, max: 16550, rate: 0.10 },
      { min: 16550, max: 63100, rate: 0.12 },
      { min: 63100, max: 100500, rate: 0.22 },
      { min: 100500, max: 191950, rate: 0.24 },
      { min: 191950, max: 243700, rate: 0.32 },
      { min: 243700, max: 609350, rate: 0.35 },
      { min: 609350, max: Infinity, rate: 0.37 },
    ],
    qualifying_surviving_spouse: [
      { min: 0, max: 23200, rate: 0.10 },
      { min: 23200, max: 94300, rate: 0.12 },
      { min: 94300, max: 201050, rate: 0.22 },
      { min: 201050, max: 383900, rate: 0.24 },
      { min: 383900, max: 487450, rate: 0.32 },
      { min: 487450, max: 731200, rate: 0.35 },
      { min: 731200, max: Infinity, rate: 0.37 },
    ],
  };

  const brackets = taxBrackets[filingStatus as keyof typeof taxBrackets] || taxBrackets.single;
  let tax = 0;
  let remainingIncome = taxableIncome;

  for (const bracket of brackets) {
    if (remainingIncome <= 0) break;
    
    const taxableAtThisBracket = Math.min(remainingIncome, bracket.max - bracket.min);
    tax += taxableAtThisBracket * bracket.rate;
    remainingIncome -= taxableAtThisBracket;
  }

  return Math.round(tax);
};

// Form 1040-SR Slice
const form1040SRSlice = createSlice({
  name: 'form1040SR',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: keyof Form1040SRData; value: any }>) => {
      const { field, value } = action.payload;
      state.data[field] = value;
      state.isDirty = true;
      
      // Auto-calculate age verification
      if (field === '1040SR_date_of_birth') {
        state.data['1040SR_age_65_or_older'] = isAge65OrOlder(value);
      }
      if (field === '1040SR_spouse_date_of_birth') {
        state.data['1040SR_spouse_age_65_or_older'] = isAge65OrOlder(value);
      }
      
      // Auto-calculate standard deduction
      if (['1040SR_filing_status', '1040SR_age_65_or_older', '1040SR_spouse_age_65_or_older', '1040SR_blind', '1040SR_spouse_blind'].includes(field)) {
        state.data['1040SR_standard_deduction_lookup'] = getStandardDeduction(
          state.data['1040SR_filing_status'],
          state.data['1040SR_age_65_or_older'],
          state.data['1040SR_spouse_age_65_or_older'],
          state.data['1040SR_blind'],
          state.data['1040SR_spouse_blind']
        );
        state.data['1040SR_line_12'] = state.data['1040SR_standard_deduction_lookup'];
      }
      
      // Recalculate dependent fields
      state.calculatedFields = calculateDependentFields(state.data);
    },
    
    updateMultipleFields: (state, action: PayloadAction<Partial<Form1040SRData>>) => {
      Object.entries(action.payload).forEach(([field, value]) => {
        if (field in state.data) {
          (state.data as any)[field] = value;
        }
      });
      state.isDirty = true;
      state.calculatedFields = calculateDependentFields(state.data);
    },
    
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    
    completeStep: (state, action: PayloadAction<number>) => {
      if (!state.completedSteps.includes(action.payload)) {
        state.completedSteps.push(action.payload);
      }
    },
    
    saveForm: (state) => {
      state.lastSaved = new Date().toISOString();
      state.isDirty = false;
    },
    
    resetForm: (state) => {
      state.data = initialData;
      state.isValid = false;
      state.isDirty = false;
      state.errors = {};
      state.calculatedFields = {};
      state.lastSaved = null;
      state.currentStep = 1;
      state.completedSteps = [];
    },
    
    setErrors: (state, action: PayloadAction<Record<string, string>>) => {
      state.errors = action.payload;
      state.isValid = Object.keys(action.payload).length === 0;
    },
  },
});

// Helper function to calculate dependent fields
const calculateDependentFields = (data: Form1040SRData): Record<string, number> => {
  const calculated: Record<string, number> = {};
  
  // Line 1e: Total wages
  calculated['1040SR_line_1e'] = (data['1040SR_line_1a'] || 0) + (data['1040SR_line_1b'] || 0) + (data['1040SR_line_1c'] || 0);
  
  // Line 9: Total income
  calculated['1040SR_line_9'] = (
    calculated['1040SR_line_1e'] +
    (data['1040SR_line_2b'] || 0) +
    (data['1040SR_line_3b'] || 0) +
    (data['1040SR_line_4b'] || 0) +
    (data['1040SR_line_5b'] || 0) +
    (data['1040SR_line_6b'] || 0) +
    (data['1040SR_line_7'] || 0) +
    (data['1040SR_line_8'] || 0)
  );
  
  // Line 11: Adjusted gross income
  calculated['1040SR_line_11'] = calculated['1040SR_line_9'] - (data['1040SR_line_10'] || 0);
  
  // Line 14: Total deductions
  calculated['1040SR_line_14'] = (data['1040SR_line_12'] || 0) + (data['1040SR_line_13'] || 0);
  
  // Line 15: Taxable income
  calculated['1040SR_line_15'] = Math.max(0, calculated['1040SR_line_11'] - calculated['1040SR_line_14']);
  
  // Line 16: Tax
  calculated['1040SR_line_16'] = calculateTax(calculated['1040SR_line_15'], data['1040SR_filing_status']);
  
  // Line 18: Total tax before credits
  calculated['1040SR_line_18'] = calculated['1040SR_line_16'] + (data['1040SR_line_17'] || 0);
  
  // Line 21: Total credits
  calculated['1040SR_line_21'] = (data['1040SR_line_19'] || 0) + (data['1040SR_line_20'] || 0);
  
  // Line 22: Tax after credits
  calculated['1040SR_line_22'] = Math.max(0, calculated['1040SR_line_18'] - calculated['1040SR_line_21']);
  
  // Line 24: Total tax
  calculated['1040SR_line_24'] = calculated['1040SR_line_22'] + (data['1040SR_line_23'] || 0);
  
  // Line 29: Total payments
  calculated['1040SR_line_29'] = (
    (data['1040SR_line_25a'] || 0) +
    (data['1040SR_line_25b'] || 0) +
    (data['1040SR_line_25c'] || 0) +
    (data['1040SR_line_25d'] || 0) +
    (data['1040SR_line_26'] || 0) +
    (data['1040SR_line_27'] || 0) +
    (data['1040SR_line_28'] || 0)
  );
  
  // Line 30: Overpaid amount
  calculated['1040SR_line_30'] = Math.max(0, calculated['1040SR_line_29'] - calculated['1040SR_line_24']);
  
  // Line 33: Amount owed
  calculated['1040SR_line_33'] = Math.max(0, calculated['1040SR_line_24'] - calculated['1040SR_line_29']);
  
  // Line 35: Amount you owe
  calculated['1040SR_line_35'] = calculated['1040SR_line_33'] + (data['1040SR_line_34'] || 0);
  
  // Line 37: Total amount owed
  calculated['1040SR_line_37'] = calculated['1040SR_line_35'] + (data['1040SR_line_36'] || 0);
  
  // Line 38: Refund amount
  calculated['1040SR_line_38'] = calculated['1040SR_line_30'] - (data['1040SR_line_31'] || 0) - (data['1040SR_line_32'] || 0);
  
  return calculated;
};

export const {
  updateField,
  updateMultipleFields,
  setCurrentStep,
  completeStep,
  saveForm,
  resetForm,
  setErrors,
} = form1040SRSlice.actions;

// Selectors
export const selectForm1040SRData = (state: RootState) => state.form1040SR.data;
export const selectForm1040SRErrors = (state: RootState) => state.form1040SR.errors;
export const selectForm1040SRCurrentStep = (state: RootState) => state.form1040SR.currentStep;
export const selectForm1040SRCompletedSteps = (state: RootState) => state.form1040SR.completedSteps;
export const selectForm1040SRCalculatedFields = (state: RootState) => state.form1040SR.calculatedFields;
export const selectForm1040SRIsValid = (state: RootState) => state.form1040SR.isValid;
export const selectForm1040SRIsDirty = (state: RootState) => state.form1040SR.isDirty;
export const selectForm1040SRLastSaved = (state: RootState) => state.form1040SR.lastSaved;

export const selectForm1040SRIsComplete = (state: RootState) => {
  const data = state.form1040SR.data;
  const requiredFields = [
    '1040SR_filing_status',
    '1040SR_first_name', 
    '1040SR_last_name',
    '1040SR_ssn',
    '1040SR_address',
    '1040SR_date_of_birth',
  ];
  
  return requiredFields.every(field => {
    const value = data[field as keyof Form1040SRData];
    return value !== '' && value !== null && value !== undefined;
  }) && data['1040SR_age_65_or_older'] === true; // Must be 65 or older
};

export default form1040SRSlice.reducer;