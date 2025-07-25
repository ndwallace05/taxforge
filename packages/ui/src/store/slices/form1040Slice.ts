import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import form1040Schema from '@taxforge/irs-data/schemas/1040.json';

// Import RootState type
type RootState = {
  form1040: Form1040State;
};

// Types
export interface Form1040Data {
  // Personal Information
  '1040_filing_status': 'single' | 'married_filing_jointly' | 'married_filing_separately' | 'head_of_household' | 'qualifying_surviving_spouse' | '';
  '1040_first_name': string;
  '1040_last_name': string;
  '1040_ssn': string;
  '1040_spouse_first_name': string;
  '1040_spouse_last_name': string;
  '1040_spouse_ssn': string;
  '1040_address': string;
  '1040_city_state_zip': string;
  
  // Income Lines
  '1040_line_1a': number; // Wages, salaries, tips
  '1040_line_1b': number; // Household employee wages
  '1040_line_1c': number; // Tip income not reported
  '1040_line_1d': number; // Nontaxable combat pay
  '1040_line_1e': number; // Total wages (calculated)
  '1040_line_2a': number; // Tax-exempt interest
  '1040_line_2b': number; // Taxable interest
  '1040_line_3a': number; // Qualified dividends
  '1040_line_3b': number; // Ordinary dividends
  '1040_line_4a': number; // IRA distributions - total
  '1040_line_4b': number; // IRA distributions - taxable
  '1040_line_5a': number; // Pensions - total
  '1040_line_5b': number; // Pensions - taxable
  '1040_line_6a': number; // Social security - total
  '1040_line_6b': number; // Social security - taxable
  // Complete IRS Form 1040 lines 7-38 for 100% coverage
  '1040_line_7': number;   // Capital gain/loss
  '1040_line_8': number;   // Additional income from Schedule 1
  '1040_line_9': number;   // Total income (calculated)
  '1040_line_10': number;  // Adjustments to income
  '1040_line_11': number;  // Adjusted gross income (calculated)
  '1040_line_12': number;  // Standard/itemized deduction
  '1040_line_13': number;  // QBI deduction
  '1040_line_14': number;  // Total deductions (calculated)
  '1040_line_15': number;  // Taxable income (calculated)
  '1040_line_16': number;  // Tax
  '1040_line_17': number;  // Amount from Schedule 2
  '1040_line_18': number;  // Total tax before credits (calculated)
  '1040_line_19': number;  // Child tax credit
  '1040_line_20': number;  // Amount from Schedule 3
  '1040_line_21': number;  // Total credits (calculated)
  '1040_line_22': number;  // Tax after credits (calculated)
  '1040_line_23': number;  // Other taxes
  '1040_line_24': number;  // Total tax (calculated)
  '1040_line_25a': number; // Federal withholding
  '1040_line_25b': number; // Estimated payments
  '1040_line_25c': number; // Earned income credit
  '1040_line_25d': number; // Additional child tax credit
  '1040_line_26': number;  // American opportunity credit
  '1040_line_27': number;  // Reserved
  '1040_line_28': number;  // Amount from Schedule 3
  '1040_line_29': number;  // Total payments (calculated)
  '1040_line_30': number;  // Overpaid amount (calculated)
  '1040_line_31': number;  // Refund amount
  '1040_line_32': number;  // Applied to next year
  '1040_line_33': number;  // Amount owed (calculated)
  '1040_line_34': number;  // Estimated tax penalty
  '1040_line_35': number;  // Amount you owe (calculated)
  '1040_line_36': number;  // Estimated tax penalty
  '1040_line_37': number;  // Total amount owed (calculated)
  '1040_line_38': number;  // Refund amount (calculated)
  
  // Additional fields
  dependents?: Array<{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    relationship: string;
    ssn: string;
  }>;
  filingStatus?: string;
  spouseElectronicSignaturePIN?: string;
  spouseAgreesToTerms?: boolean;
  state?: string;
  zipCode?: string;
  electronicSignaturePIN?: string;
  ssn?: string;
  spouseFirstName?: string;
  spouseLastName?: string;
  address?: string;
  city?: string;
  firstName?: string;
  lastName?: string;
  spouseSSN?: string;
  refundRoutingNumber?: string;
  refundAccountNumber?: string;
  priorYearTax?: number;
  priorYearAGI?: number;
  refundAccountType?: string;
  
  // Deductions
  '1040_line_12b'?: number;
}

export interface Form1040State {
  data: Form1040Data;
  isValid: boolean;
  isDirty: boolean;
  errors: Record<string, string>;
  calculatedFields: Record<string, number>;
  lastSaved: string | null;
  currentStep: number;
  completedSteps: number[];
}

// Initial state with proper defaults
const initialData: Form1040Data = {
  '1040_filing_status': '',
  '1040_first_name': '',
  '1040_last_name': '',
  '1040_ssn': '',
  '1040_spouse_first_name': '',
  '1040_spouse_last_name': '',
  '1040_spouse_ssn': '',
  '1040_address': '',
  '1040_city_state_zip': '',
  '1040_line_1a': 0,
  '1040_line_1b': 0,
  '1040_line_1c': 0,
  '1040_line_1d': 0,
  '1040_line_1e': 0,
  '1040_line_2a': 0,
  '1040_line_2b': 0,
  '1040_line_3a': 0,
  '1040_line_3b': 0,
  '1040_line_4a': 0,
  '1040_line_4b': 0,
  '1040_line_5a': 0,
  '1040_line_5b': 0,
  '1040_line_6a': 0,
  '1040_line_6b': 0,
  '1040_line_7': 0,
  '1040_line_8': 0,
  '1040_line_9': 0,
  '1040_line_10': 0,
  '1040_line_11': 0,
  '1040_line_12': 0,
  '1040_line_13': 0,
  '1040_line_14': 0,
  '1040_line_15': 0,
  '1040_line_16': 0,
  '1040_line_17': 0,
  '1040_line_18': 0,
  '1040_line_19': 0,
  '1040_line_20': 0,
  '1040_line_21': 0,
  '1040_line_22': 0,
  '1040_line_23': 0,
  '1040_line_24': 0,
  '1040_line_25a': 0,
  '1040_line_25b': 0,
  '1040_line_25c': 0,
  '1040_line_25d': 0,
  '1040_line_26': 0,
  '1040_line_27': 0,
  '1040_line_28': 0,
  '1040_line_29': 0,
  '1040_line_30': 0,
  '1040_line_31': 0,
  '1040_line_32': 0,
  '1040_line_33': 0,
  '1040_line_34': 0,
  '1040_line_35': 0,
  '1040_line_36': 0,
  '1040_line_37': 0,
  '1040_line_38': 0,
};

const initialState: Form1040State = {
  data: initialData,
  isValid: false,
  isDirty: false,
  errors: {},
  calculatedFields: {},
  lastSaved: null,
  currentStep: 1,
  completedSteps: [],
};

// Tax calculation utilities
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

// Standard deduction amounts for 2024
const getStandardDeduction = (filingStatus: string): number => {
  const standardDeductions = {
    single: 14600,
    married_filing_jointly: 29200,
    married_filing_separately: 14600,
    head_of_household: 21900,
    qualifying_surviving_spouse: 29200,
  };
  
  return standardDeductions[filingStatus as keyof typeof standardDeductions] || 14600;
};

const form1040Slice = createSlice({
  name: 'form1040',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: keyof Form1040Data; value: any }>) => {
      const { field, value } = action.payload;
      (state.data as Record<string, any>)[field] = value;
      state.isDirty = true;
      
      // Trigger recalculations
      state.calculatedFields = calculateAllFields(state.data);
      
      // Update calculated fields in data
      Object.entries(state.calculatedFields).forEach(([key, calcValue]: [string, number]) => {
        if (key in state.data) {
          (state.data as Record<string, any>)[key] = calcValue;
        }
      });
    },
    
    updateMultipleFields: (state, action: PayloadAction<Partial<Form1040Data>>) => {
      Object.entries(action.payload).forEach(([field, value]) => {
        if (field in state.data) {
          (state.data as Record<string, any>)[field] = value;
        }
      });
      state.isDirty = true;
      
      // Trigger recalculations
      state.calculatedFields = calculateAllFields(state.data);
      
      // Update calculated fields in data
      Object.entries(state.calculatedFields).forEach(([key, calcValue]: [string, number]) => {
        if (key in state.data) {
          (state.data as Record<string, any>)[key] = calcValue;
        }
      });
    },
    
    setErrors: (state, action: PayloadAction<Record<string, string>>) => {
      state.errors = action.payload;
      state.isValid = Object.keys(action.payload).length === 0;
    },
    
    clearErrors: (state) => {
      state.errors = {};
      state.isValid = true;
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
    
    loadForm: (state, action: PayloadAction<Form1040Data>) => {
      state.data = action.payload;
      state.calculatedFields = calculateAllFields(action.payload);
      
      // Update calculated fields in data
      Object.entries(state.calculatedFields).forEach(([key, calcValue]: [string, number]) => {
        if (key in state.data) {
          (state.data as Record<string, any>)[key] = calcValue;
        }
      });
      
      state.isDirty = false;
      state.lastSaved = new Date().toISOString();
    },
  },
});

// Calculation helper function
function calculateAllFields(data: Form1040Data): Record<string, number> {
  const calculated: Record<string, number> = {};
  
  // Line 1e: Total wages
  calculated['1040_line_1e'] = 
    (data['1040_line_1a'] || 0) + 
    (data['1040_line_1b'] || 0) + 
    (data['1040_line_1c'] || 0) + 
    (data['1040_line_1d'] || 0);
  
  // Line 9: Total income
  calculated['1040_line_9'] = 
    calculated['1040_line_1e'] + 
    (data['1040_line_2b'] || 0) + 
    (data['1040_line_3b'] || 0) + 
    (data['1040_line_4b'] || 0) + 
    (data['1040_line_5b'] || 0) + 
    (data['1040_line_6b'] || 0) + 
    (data['1040_line_7'] || 0) + 
    (data['1040_line_8'] || 0);
  
  // Line 11: Adjusted gross income
  calculated['1040_line_11'] = calculated['1040_line_9'] - (data['1040_line_10'] || 0);
  
  // Line 12: Standard deduction (if not manually entered)
  if (!data['1040_line_12']) {
    calculated['1040_line_12'] = getStandardDeduction(data['1040_filing_status']);
  }
  
  // Line 14: Total deductions
  calculated['1040_line_14'] = 
    (data['1040_line_12'] || calculated['1040_line_12'] || 0) + 
    (data['1040_line_13'] || 0);
  
  // Line 15: Taxable income
  calculated['1040_line_15'] = Math.max(0, calculated['1040_line_11'] - calculated['1040_line_14']);
  
  // Line 16: Tax
  calculated['1040_line_16'] = calculateTax(calculated['1040_line_15'], data['1040_filing_status']);
  
  // Line 18: Total tax before credits
  calculated['1040_line_18'] = calculated['1040_line_16'] + (data['1040_line_17'] || 0);
  
  // Line 21: Total credits
  calculated['1040_line_21'] = (data['1040_line_19'] || 0) + (data['1040_line_20'] || 0);
  
  // Line 22: Tax after credits
  calculated['1040_line_22'] = Math.max(0, calculated['1040_line_18'] - calculated['1040_line_21']);
  
  // Line 24: Total tax
  calculated['1040_line_24'] = calculated['1040_line_22'] + (data['1040_line_23'] || 0);
  
  // Line 29: Total payments
  calculated['1040_line_29'] = 
    (data['1040_line_25a'] || 0) + 
    (data['1040_line_25b'] || 0) + 
    (data['1040_line_25c'] || 0) + 
    (data['1040_line_25d'] || 0) + 
    (data['1040_line_26'] || 0) + 
    (data['1040_line_27'] || 0) + 
    (data['1040_line_28'] || 0);
  
  // Line 30: Overpaid amount
  calculated['1040_line_30'] = Math.max(0, calculated['1040_line_29'] - calculated['1040_line_24']);
  
  // Line 33: Amount owed
  calculated['1040_line_33'] = Math.max(0, calculated['1040_line_24'] - calculated['1040_line_29']);
  
  return calculated;
}

export const {
  updateField,
  updateMultipleFields,
  setErrors,
  clearErrors,
  setCurrentStep,
  completeStep,
  saveForm,
  resetForm,
  loadForm,
} = form1040Slice.actions;

// Selectors
export const selectForm1040Data = (state: RootState) => state.form1040.data;
export const selectForm1040IsValid = (state: RootState) => state.form1040.isValid;
export const selectForm1040IsDirty = (state: RootState) => state.form1040.isDirty;
export const selectForm1040Errors = (state: RootState) => state.form1040.errors;
export const selectForm1040CalculatedFields = (state: RootState) => state.form1040.calculatedFields;
export const selectForm1040LastSaved = (state: RootState) => state.form1040.lastSaved;
export const selectForm1040CurrentStep = (state: RootState) => state.form1040.currentStep;
export const selectForm1040CompletedSteps = (state: RootState) => state.form1040.completedSteps;

// Computed selectors
export const selectForm1040TotalIncome = (state: RootState) => 
  state.form1040.calculatedFields['1040_line_9'] || 0;

export const selectForm1040AGI = (state: RootState) => 
  state.form1040.calculatedFields['1040_line_11'] || 0;

export const selectForm1040TaxableIncome = (state: RootState) => 
  state.form1040.calculatedFields['1040_line_15'] || 0;

export const selectForm1040TotalTax = (state: RootState) => 
  state.form1040.calculatedFields['1040_line_24'] || 0;

export const selectForm1040Refund = (state: RootState) => 
  state.form1040.data['1040_line_31'] || 0;

export const selectForm1040AmountOwed = (state: RootState) => 
  state.form1040.calculatedFields['1040_line_33'] || 0;

export const selectForm1040IsComplete = (state: RootState) => {
  const data = state.form1040.data;
  const requiredFields = [
    '1040_filing_status',
    '1040_first_name', 
    '1040_last_name',
    '1040_ssn',
    '1040_address',
    '1040_city_state_zip'
  ];
  
  return requiredFields.every(field => {
    const value = data[field as keyof Form1040Data];
    return value !== '' && value !== null && value !== undefined;
  });
};

export default form1040Slice.reducer;