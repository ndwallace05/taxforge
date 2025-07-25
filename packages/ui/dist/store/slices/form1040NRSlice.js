import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    data: {
        '1040NR_first_name': '',
        '1040NR_last_name': '',
        '1040NR_ssn_itin': '',
        '1040NR_country_of_residence': '',
        '1040NR_address_us': '',
        '1040NR_address_foreign': '',
        '1040NR_city_state_zip_us': '',
        '1040NR_city_country_foreign': '',
        '1040NR_visa_type': '',
        '1040NR_date_of_entry': '',
        '1040NR_days_in_us': 0,
        '1040NR_treaty_country': '',
        '1040NR_treaty_article': '',
        '1040NR_filing_status': '',
        '1040NR_line_1a': 0,
        '1040NR_line_1b': 0,
        '1040NR_line_1c': 0,
        '1040NR_line_1d': 0,
        '1040NR_line_1e': 0,
        '1040NR_line_1f': 0,
        '1040NR_line_1g': 0,
        '1040NR_line_1h': 0,
        '1040NR_line_2a': 0,
        '1040NR_line_2b': 0,
        '1040NR_line_3a': 0,
        '1040NR_line_3b': 0,
        '1040NR_line_4a': 0,
        '1040NR_line_4b': 0,
        '1040NR_line_5a': 0,
        '1040NR_line_5b': 0,
        '1040NR_line_7': 0,
        '1040NR_line_8': 0,
        '1040NR_line_10a': 0,
        '1040NR_line_10b': 0,
        '1040NR_line_10c': 0,
        '1040NR_line_10d': 0,
        '1040NR_line_10e': 0,
        '1040NR_line_10f': 0,
        '1040NR_line_10g': 0,
        '1040NR_line_10h': 0,
        '1040NR_line_10i': 0,
        '1040NR_line_10j': 0,
        '1040NR_line_10k': 0,
        '1040NR_line_10l': 0,
        '1040NR_line_12': 0,
        '1040NR_line_13': 0,
        '1040NR_line_14': 0,
        '1040NR_line_15': 0,
        '1040NR_line_16': 0,
        '1040NR_line_17': 0,
        '1040NR_line_18': 0,
        '1040NR_line_19': 0,
        '1040NR_line_20': 0,
        '1040NR_line_21': 0,
        '1040NR_line_22': 0,
        '1040NR_line_23': 0,
        '1040NR_line_24': 0,
        '1040NR_line_25': 0,
        '1040NR_line_26': 0,
        '1040NR_line_27': 0,
        'scheduleNEC_line_1': 0,
        'scheduleNEC_line_2': 0,
        'scheduleNEC_line_3': 0,
        'scheduleNEC_line_4': 0,
        'scheduleNEC_line_5': 0,
        'scheduleNEC_line_6': 0,
        'scheduleOI_treaty_benefits': false,
        'scheduleOI_treaty_country_oi': '',
        'scheduleOI_treaty_article_oi': '',
        'scheduleOI_scholarship_income': 0,
        'scheduleOI_days_present_current_year': 0,
        'scheduleOI_days_present_prior_year_1': 0,
        'scheduleOI_days_present_prior_year_2': 0,
        'scheduleOI_substantial_presence_test': false,
        '1040NR_spouse_name': '',
        '1040NR_spouse_ssn_itin': '',
        '1040NR_occupation': '',
        '1040NR_employer_name': '',
        '1040NR_employer_address': '',
    },
    currentStep: 1,
    completedSteps: [],
    errors: {},
    isComplete: false,
    calculatedFields: {},
};
const form1040NRSlice = createSlice({
    name: 'form1040NR',
    initialState,
    reducers: {
        updateField: (state, action) => {
            const { field, value } = action.payload;
            state.data[field] = value;
            // Recalculate dependent fields
            state.calculatedFields = calculateDependentFields(state.data);
            // Clear field-specific errors
            if (state.errors[field]) {
                delete state.errors[field];
            }
        },
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },
        completeStep: (state, action) => {
            if (!state.completedSteps.includes(action.payload)) {
                state.completedSteps.push(action.payload);
            }
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        clearErrors: (state) => {
            state.errors = {};
        },
        setFormComplete: (state, action) => {
            state.isComplete = action.payload;
        },
        resetForm: (state) => {
            return initialState;
        },
        saveForm: (state) => {
            // Auto-save logic can be implemented here
            localStorage.setItem('form1040NR_draft', JSON.stringify(state.data));
        },
        loadForm: (state, action) => {
            state.data = action.payload;
            state.calculatedFields = calculateDependentFields(action.payload);
        },
    },
});
// Helper function to calculate dependent fields
function calculateDependentFields(data) {
    const calculated = {};
    // Total effectively connected income (Line 9)
    calculated['1040NR_line_9'] = (data['1040NR_line_1a'] +
        data['1040NR_line_1b'] +
        data['1040NR_line_1c'] +
        data['1040NR_line_1d'] +
        data['1040NR_line_1e'] +
        data['1040NR_line_1f'] +
        data['1040NR_line_1g'] +
        data['1040NR_line_1h']);
    // Total adjustments (Line 11)
    calculated['1040NR_line_11'] = (data['1040NR_line_10a'] +
        data['1040NR_line_10b'] +
        data['1040NR_line_10c'] +
        data['1040NR_line_10d'] +
        data['1040NR_line_10e'] +
        data['1040NR_line_10f'] +
        data['1040NR_line_10g'] +
        data['1040NR_line_10h'] +
        data['1040NR_line_10i'] +
        data['1040NR_line_10j'] +
        data['1040NR_line_10k'] +
        data['1040NR_line_10l']);
    // Adjusted Gross Income (Line 12)
    calculated['1040NR_line_12'] = Math.max(0, calculated['1040NR_line_9'] - calculated['1040NR_line_11']);
    // Standard deduction for nonresidents (limited)
    calculated['1040NR_standard_deduction'] = getStandardDeduction(data['1040NR_filing_status']);
    // Taxable income (Line 15)
    const totalDeductions = Math.max(data['1040NR_line_13'], calculated['1040NR_standard_deduction']);
    calculated['1040NR_line_15'] = Math.max(0, calculated['1040NR_line_12'] - totalDeductions - data['1040NR_line_14']);
    // Tax calculation (Line 16)
    calculated['1040NR_line_16'] = calculateTax(calculated['1040NR_line_15'], data['1040NR_filing_status']);
    // Schedule NEC calculations
    calculated['scheduleNEC_line_5'] = (data['scheduleNEC_line_1'] +
        data['scheduleNEC_line_2'] +
        data['scheduleNEC_line_3'] +
        data['scheduleNEC_line_4']);
    // Tax on income not effectively connected (30% rate, subject to treaty)
    calculated['scheduleNEC_line_6'] = calculated['scheduleNEC_line_5'] * 0.30;
    // Total tax (Line 18)
    calculated['1040NR_line_18'] = calculated['1040NR_line_16'] + data['1040NR_line_17'] + calculated['scheduleNEC_line_6'];
    // Total tax after credits (Line 20)
    calculated['1040NR_line_20'] = Math.max(0, calculated['1040NR_line_18'] - data['1040NR_line_19']);
    // Total payments (Line 24)
    calculated['1040NR_line_24'] = (data['1040NR_line_21'] +
        data['1040NR_line_22'] +
        data['1040NR_line_23']);
    // Overpaid amount (Line 25)
    calculated['1040NR_line_25'] = Math.max(0, calculated['1040NR_line_24'] - calculated['1040NR_line_20']);
    // Amount owed (Line 27)
    calculated['1040NR_line_27'] = Math.max(0, calculated['1040NR_line_20'] - calculated['1040NR_line_24']);
    // Substantial presence test calculation
    calculated['substantial_presence_days'] = (data['scheduleOI_days_present_current_year'] +
        (data['scheduleOI_days_present_prior_year_1'] / 3) +
        (data['scheduleOI_days_present_prior_year_2'] / 6));
    return calculated;
}
// Standard deduction for nonresidents (very limited)
function getStandardDeduction(filingStatus) {
    // Nonresidents generally cannot claim standard deduction
    // except in very limited circumstances
    return 0;
}
// Tax calculation for nonresidents
function calculateTax(taxableIncome, filingStatus) {
    if (taxableIncome <= 0)
        return 0;
    // 2024 Tax Brackets for nonresidents (same rates as residents)
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
        married_filing_separately: [
            { min: 0, max: 11600, rate: 0.10 },
            { min: 11600, max: 47150, rate: 0.12 },
            { min: 47150, max: 100525, rate: 0.22 },
            { min: 100525, max: 191950, rate: 0.24 },
            { min: 191950, max: 243725, rate: 0.32 },
            { min: 243725, max: 365600, rate: 0.35 },
            { min: 365600, max: Infinity, rate: 0.37 },
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
    for (const bracket of brackets) {
        if (taxableIncome > bracket.min) {
            const taxableInBracket = Math.min(taxableIncome - bracket.min, bracket.max - bracket.min);
            tax += taxableInBracket * bracket.rate;
        }
    }
    return Math.round(tax);
}
export const { updateField, setCurrentStep, completeStep, setErrors, clearErrors, setFormComplete, resetForm, saveForm, loadForm, } = form1040NRSlice.actions;
// Selectors
export const selectForm1040NRData = (state) => state.form1040NR.data;
export const selectForm1040NRCurrentStep = (state) => state.form1040NR.currentStep;
export const selectForm1040NRCompletedSteps = (state) => state.form1040NR.completedSteps;
export const selectForm1040NRErrors = (state) => state.form1040NR.errors;
export const selectForm1040NRIsComplete = (state) => state.form1040NR.isComplete;
export const selectForm1040NRCalculatedFields = (state) => state.form1040NR.calculatedFields;
export default form1040NRSlice.reducer;
