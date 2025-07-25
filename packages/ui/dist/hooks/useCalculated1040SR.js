import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectForm1040SRData, selectForm1040SRCalculatedFields } from '../store/slices/form1040SRSlice';
/**
 * Hook for calculating Form 1040-SR dependent fields
 * Provides real-time calculations for tax computations
 */
export const useCalculated1040SR = () => {
    const formData = useSelector(selectForm1040SRData);
    const calculatedFields = useSelector(selectForm1040SRCalculatedFields);
    return useMemo(() => {
        const calculated = { ...calculatedFields };
        // Line 1e: Total wages (1a + 1b + 1c)
        calculated['1040SR_line_1e'] = ((formData['1040SR_line_1a'] || 0) +
            (formData['1040SR_line_1b'] || 0) +
            (formData['1040SR_line_1c'] || 0));
        // Line 9: Total income
        calculated['1040SR_line_9'] = (calculated['1040SR_line_1e'] +
            (formData['1040SR_line_2b'] || 0) + // Taxable interest
            (formData['1040SR_line_3b'] || 0) + // Ordinary dividends
            (formData['1040SR_line_4b'] || 0) + // IRA distributions (taxable)
            (formData['1040SR_line_5b'] || 0) + // Pensions (taxable)
            (formData['1040SR_line_6b'] || 0) + // Social security (taxable)
            (formData['1040SR_line_7'] || 0) + // Capital gain/loss
            (formData['1040SR_line_8'] || 0) // Additional income
        );
        // Line 11: Adjusted gross income (AGI)
        calculated['1040SR_line_11'] = Math.max(0, calculated['1040SR_line_9'] - (formData['1040SR_line_10'] || 0));
        // Line 14: Total deductions
        calculated['1040SR_line_14'] = ((formData['1040SR_line_12'] || 0) + // Standard/itemized deduction
            (formData['1040SR_line_13'] || 0) // QBI deduction
        );
        // Line 15: Taxable income
        calculated['1040SR_line_15'] = Math.max(0, calculated['1040SR_line_11'] - calculated['1040SR_line_14']);
        // Line 16: Tax (using tax brackets)
        calculated['1040SR_line_16'] = calculateTax(calculated['1040SR_line_15'], formData['1040SR_filing_status']);
        // Line 18: Total tax before credits
        calculated['1040SR_line_18'] = (calculated['1040SR_line_16'] +
            (formData['1040SR_line_17'] || 0) // Amount from Schedule 2
        );
        // Line 21: Total credits
        calculated['1040SR_line_21'] = ((formData['1040SR_line_19'] || 0) + // Child tax credit
            (formData['1040SR_line_20'] || 0) // Amount from Schedule 3
        );
        // Line 22: Tax after credits
        calculated['1040SR_line_22'] = Math.max(0, calculated['1040SR_line_18'] - calculated['1040SR_line_21']);
        // Line 24: Total tax
        calculated['1040SR_line_24'] = (calculated['1040SR_line_22'] +
            (formData['1040SR_line_23'] || 0) // Other taxes
        );
        // Line 29: Total payments
        calculated['1040SR_line_29'] = ((formData['1040SR_line_25a'] || 0) + // Federal withholding
            (formData['1040SR_line_25b'] || 0) + // Estimated payments
            (formData['1040SR_line_25c'] || 0) + // Earned income credit
            (formData['1040SR_line_25d'] || 0) + // Additional child tax credit
            (formData['1040SR_line_26'] || 0) + // American opportunity credit
            (formData['1040SR_line_27'] || 0) + // Reserved
            (formData['1040SR_line_28'] || 0) // Amount from Schedule 3
        );
        // Line 30: Overpaid amount (if payments > tax)
        calculated['1040SR_line_30'] = Math.max(0, calculated['1040SR_line_29'] - calculated['1040SR_line_24']);
        // Line 33: Amount owed (if tax > payments)
        calculated['1040SR_line_33'] = Math.max(0, calculated['1040SR_line_24'] - calculated['1040SR_line_29']);
        // Line 35: Amount you owe (including penalties)
        calculated['1040SR_line_35'] = (calculated['1040SR_line_33'] +
            (formData['1040SR_line_34'] || 0) // Estimated tax penalty
        );
        // Line 37: Total amount owed
        calculated['1040SR_line_37'] = (calculated['1040SR_line_35'] +
            (formData['1040SR_line_36'] || 0) // Additional penalty
        );
        // Line 38: Refund amount (after applied amounts)
        calculated['1040SR_line_38'] = Math.max(0, calculated['1040SR_line_30'] -
            (formData['1040SR_line_31'] || 0) - // Refund amount
            (formData['1040SR_line_32'] || 0) // Applied to next year
        );
        // Additional senior-specific calculations
        // Standard deduction with senior adjustments
        calculated['1040SR_standard_deduction_with_adjustments'] = getStandardDeductionForSeniors(formData['1040SR_filing_status'], formData['1040SR_age_65_or_older'], formData['1040SR_spouse_age_65_or_older'], formData['1040SR_blind'], formData['1040SR_spouse_blind']);
        // Social Security taxability calculation (common for seniors)
        calculated['1040SR_social_security_taxable_amount'] = calculateSocialSecurityTaxable(formData['1040SR_line_6a'] || 0, // Total SS benefits
        calculated['1040SR_line_11'] || 0, // AGI
        formData['1040SR_filing_status']);
        // Effective tax rate
        calculated['1040SR_effective_tax_rate'] = calculated['1040SR_line_11'] > 0
            ? (calculated['1040SR_line_24'] / calculated['1040SR_line_11']) * 100
            : 0;
        // Marginal tax rate
        calculated['1040SR_marginal_tax_rate'] = getMarginalTaxRate(calculated['1040SR_line_15'], formData['1040SR_filing_status']);
        return calculated;
    }, [formData, calculatedFields]);
};
// Tax calculation function (2024 tax brackets)
const calculateTax = (taxableIncome, filingStatus) => {
    if (taxableIncome <= 0)
        return 0;
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
// Standard deduction calculation for seniors (2024)
const getStandardDeductionForSeniors = (filingStatus, age65OrOlder, spouseAge65OrOlder, blind, spouseBlind) => {
    const baseDeductions = {
        single: 14600,
        married_filing_jointly: 29200,
        married_filing_separately: 14600,
        head_of_household: 21900,
        qualifying_surviving_spouse: 29200,
    };
    let deduction = baseDeductions[filingStatus] || 0;
    // Additional amounts for seniors (65+) and blind (2024 amounts)
    const additionalAmount = 1550;
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
// Social Security taxability calculation (important for seniors)
const calculateSocialSecurityTaxable = (totalSSBenefits, agi, filingStatus) => {
    if (totalSSBenefits <= 0)
        return 0;
    // Provisional income = AGI + 50% of SS benefits + tax-exempt interest
    const provisionalIncome = agi + (totalSSBenefits * 0.5);
    // Thresholds for 2024
    const thresholds = {
        single: { first: 25000, second: 34000 },
        married_filing_jointly: { first: 32000, second: 44000 },
        married_filing_separately: { first: 0, second: 0 },
        head_of_household: { first: 25000, second: 34000 },
        qualifying_surviving_spouse: { first: 25000, second: 34000 },
    };
    const threshold = thresholds[filingStatus] || thresholds.single;
    if (provisionalIncome <= threshold.first) {
        return 0; // No SS benefits taxable
    }
    else if (provisionalIncome <= threshold.second) {
        // Up to 50% of benefits may be taxable
        return Math.min(totalSSBenefits * 0.5, (provisionalIncome - threshold.first) * 0.5);
    }
    else {
        // Up to 85% of benefits may be taxable
        const fiftyPercentAmount = Math.min(totalSSBenefits * 0.5, (threshold.second - threshold.first) * 0.5);
        const eightyFivePercentAmount = Math.min(totalSSBenefits * 0.85, fiftyPercentAmount + ((provisionalIncome - threshold.second) * 0.85));
        return Math.max(fiftyPercentAmount, eightyFivePercentAmount);
    }
};
// Get marginal tax rate
const getMarginalTaxRate = (taxableIncome, filingStatus) => {
    if (taxableIncome <= 0)
        return 0;
    const taxBrackets = {
        single: [
            { min: 0, max: 11600, rate: 10 },
            { min: 11600, max: 47150, rate: 12 },
            { min: 47150, max: 100525, rate: 22 },
            { min: 100525, max: 191950, rate: 24 },
            { min: 191950, max: 243725, rate: 32 },
            { min: 243725, max: 609350, rate: 35 },
            { min: 609350, max: Infinity, rate: 37 },
        ],
        married_filing_jointly: [
            { min: 0, max: 23200, rate: 10 },
            { min: 23200, max: 94300, rate: 12 },
            { min: 94300, max: 201050, rate: 22 },
            { min: 201050, max: 383900, rate: 24 },
            { min: 383900, max: 487450, rate: 32 },
            { min: 487450, max: 731200, rate: 35 },
            { min: 731200, max: Infinity, rate: 37 },
        ],
        married_filing_separately: [
            { min: 0, max: 11600, rate: 10 },
            { min: 11600, max: 47150, rate: 12 },
            { min: 47150, max: 100525, rate: 22 },
            { min: 100525, max: 191950, rate: 24 },
            { min: 191950, max: 243725, rate: 32 },
            { min: 243725, max: 365600, rate: 35 },
            { min: 365600, max: Infinity, rate: 37 },
        ],
        head_of_household: [
            { min: 0, max: 16550, rate: 10 },
            { min: 16550, max: 63100, rate: 12 },
            { min: 63100, max: 100500, rate: 22 },
            { min: 100500, max: 191950, rate: 24 },
            { min: 191950, max: 243700, rate: 32 },
            { min: 243700, max: 609350, rate: 35 },
            { min: 609350, max: Infinity, rate: 37 },
        ],
        qualifying_surviving_spouse: [
            { min: 0, max: 23200, rate: 10 },
            { min: 23200, max: 94300, rate: 12 },
            { min: 94300, max: 201050, rate: 22 },
            { min: 201050, max: 383900, rate: 24 },
            { min: 383900, max: 487450, rate: 32 },
            { min: 487450, max: 731200, rate: 35 },
            { min: 731200, max: Infinity, rate: 37 },
        ],
    };
    const brackets = taxBrackets[filingStatus] || taxBrackets.single;
    for (const bracket of brackets) {
        if (taxableIncome >= bracket.min && taxableIncome < bracket.max) {
            return bracket.rate;
        }
    }
    return brackets[brackets.length - 1].rate; // Highest bracket
};
export default useCalculated1040SR;
