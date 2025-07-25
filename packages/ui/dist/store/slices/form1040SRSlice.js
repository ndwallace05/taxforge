import { createSlice } from '@reduxjs/toolkit';
// Initial state with proper defaults
const initialData = {
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
const initialState = {
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
const getStandardDeduction = (filingStatus, age65OrOlder, spouseAge65OrOlder, blind, spouseBlind) => {
    const baseDeductions = {
        single: 14600,
        married_filing_jointly: 29200,
        married_filing_separately: 14600,
        head_of_household: 21900,
        qualifying_surviving_spouse: 29200,
    };
    let deduction = baseDeductions[filingStatus] || 0;
    // Additional amounts for seniors (65+) and blind
    const additionalAmount = 1550; // 2024 amount
    if (age65OrOlder)
        deduction += additionalAmount;
    if (spouseAge65OrOlder && (filingStatus === 'married_filing_jointly' || filingStatus === 'qualifying_surviving_spouse')) {
        deduction += additionalAmount;
    }
    if (blind)
        deduction += additionalAmount;
    if (spouseBlind && (filingStatus === 'married_filing_jointly' || filingStatus === 'qualifying_surviving_spouse')) {
        deduction += additionalAmount;
    }
    return deduction;
};
// Age verification utility
const isAge65OrOlder = (dateOfBirth) => {
    if (!dateOfBirth)
        return false;
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
const calculateTax = (taxableIncome, filingStatus) => {
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
    const brackets = taxBrackets[filingStatus] || taxBrackets.single;
    let tax = 0;
    let remainingIncome = taxableIncome;
    for (const bracket of brackets) {
        if (remainingIncome <= 0)
            break;
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
        updateField: (state, action) => {
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
                state.data['1040SR_standard_deduction_lookup'] = getStandardDeduction(state.data['1040SR_filing_status'], state.data['1040SR_age_65_or_older'], state.data['1040SR_spouse_age_65_or_older'], state.data['1040SR_blind'], state.data['1040SR_spouse_blind']);
                state.data['1040SR_line_12'] = state.data['1040SR_standard_deduction_lookup'];
            }
            // Recalculate dependent fields
            state.calculatedFields = calculateDependentFields(state.data);
        },
        updateMultipleFields: (state, action) => {
            Object.entries(action.payload).forEach(([field, value]) => {
                if (field in state.data) {
                    state.data[field] = value;
                }
            });
            state.isDirty = true;
            state.calculatedFields = calculateDependentFields(state.data);
        },
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },
        completeStep: (state, action) => {
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
        setErrors: (state, action) => {
            state.errors = action.payload;
            state.isValid = Object.keys(action.payload).length === 0;
        },
    },
});
// Helper function to calculate dependent fields
const calculateDependentFields = (data) => {
    const calculated = {};
    // Line 1e: Total wages
    calculated['1040SR_line_1e'] = (data['1040SR_line_1a'] || 0) + (data['1040SR_line_1b'] || 0) + (data['1040SR_line_1c'] || 0);
    // Line 9: Total income
    calculated['1040SR_line_9'] = (calculated['1040SR_line_1e'] +
        (data['1040SR_line_2b'] || 0) +
        (data['1040SR_line_3b'] || 0) +
        (data['1040SR_line_4b'] || 0) +
        (data['1040SR_line_5b'] || 0) +
        (data['1040SR_line_6b'] || 0) +
        (data['1040SR_line_7'] || 0) +
        (data['1040SR_line_8'] || 0));
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
    calculated['1040SR_line_29'] = ((data['1040SR_line_25a'] || 0) +
        (data['1040SR_line_25b'] || 0) +
        (data['1040SR_line_25c'] || 0) +
        (data['1040SR_line_25d'] || 0) +
        (data['1040SR_line_26'] || 0) +
        (data['1040SR_line_27'] || 0) +
        (data['1040SR_line_28'] || 0));
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
export const { updateField, updateMultipleFields, setCurrentStep, completeStep, saveForm, resetForm, setErrors, } = form1040SRSlice.actions;
// Selectors
export const selectForm1040SRData = (state) => state.form1040SR.data;
export const selectForm1040SRErrors = (state) => state.form1040SR.errors;
export const selectForm1040SRCurrentStep = (state) => state.form1040SR.currentStep;
export const selectForm1040SRCompletedSteps = (state) => state.form1040SR.completedSteps;
export const selectForm1040SRCalculatedFields = (state) => state.form1040SR.calculatedFields;
export const selectForm1040SRIsValid = (state) => state.form1040SR.isValid;
export const selectForm1040SRIsDirty = (state) => state.form1040SR.isDirty;
export const selectForm1040SRLastSaved = (state) => state.form1040SR.lastSaved;
export const selectForm1040SRIsComplete = (state) => {
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
        const value = data[field];
        return value !== '' && value !== null && value !== undefined;
    }) && data['1040SR_age_65_or_older'] === true; // Must be 65 or older
};
export default form1040SRSlice.reducer;
