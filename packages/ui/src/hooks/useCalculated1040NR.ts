import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectForm1040NRData, selectForm1040NRCalculatedFields } from '../store/slices/form1040NRSlice';

export interface Calculated1040NRValues {
  // Effectively Connected Income
  totalEffectivelyConnectedIncome: number;
  adjustedGrossIncome: number;
  totalAdjustments: number;
  taxableIncome: number;
  
  // Tax Calculations
  federalIncomeTax: number;
  totalTax: number;
  totalPayments: number;
  
  // Schedule NEC (Not Effectively Connected)
  totalNECIncome: number;
  necTax: number;
  
  // Refund/Owed
  overpaidAmount: number;
  amountOwed: number;
  refundAmount: number;
  
  // Nonresident Specific
  substantialPresenceDays: number;
  isSubstantialPresenceTest: boolean;
  treatyBenefitsApplicable: boolean;
  standardDeductionAllowed: number;
  
  // Tax Planning
  effectiveTaxRate: number;
  marginalTaxRate: number;
  
  // Validation
  hasEffectivelyConnectedIncome: boolean;
  hasNonEffectivelyConnectedIncome: boolean;
  requiresScheduleNEC: boolean;
  requiresScheduleOI: boolean;
}

export const useCalculated1040NR = (): Calculated1040NRValues => {
  const formData = useSelector(selectForm1040NRData);
  const calculatedFields = useSelector(selectForm1040NRCalculatedFields);

  return useMemo(() => {
    const calculated = { ...calculatedFields };
    
    // Effectively Connected Income (Line 9)
    const totalEffectivelyConnectedIncome = 
      formData['1040NR_line_1a'] +
      formData['1040NR_line_1b'] +
      formData['1040NR_line_1c'] +
      formData['1040NR_line_1d'] +
      formData['1040NR_line_1e'] +
      formData['1040NR_line_1f'] +
      formData['1040NR_line_1g'] +
      formData['1040NR_line_1h'];
    
    // Total Adjustments (Line 11)
    const totalAdjustments = 
      formData['1040NR_line_10a'] +
      formData['1040NR_line_10b'] +
      formData['1040NR_line_10c'] +
      formData['1040NR_line_10d'] +
      formData['1040NR_line_10e'] +
      formData['1040NR_line_10f'] +
      formData['1040NR_line_10g'] +
      formData['1040NR_line_10h'] +
      formData['1040NR_line_10i'] +
      formData['1040NR_line_10j'] +
      formData['1040NR_line_10k'] +
      formData['1040NR_line_10l'];
    
    // Adjusted Gross Income (Line 12)
    const adjustedGrossIncome = Math.max(0, totalEffectivelyConnectedIncome - totalAdjustments);
    
    // Standard deduction (very limited for nonresidents)
    const standardDeductionAllowed = getStandardDeduction(formData['1040NR_filing_status']);
    
    // Taxable Income (Line 15)
    const totalDeductions = Math.max(formData['1040NR_line_13'], standardDeductionAllowed);
    const taxableIncome = Math.max(0, adjustedGrossIncome - totalDeductions - formData['1040NR_line_14']);
    
    // Federal Income Tax (Line 16)
    const federalIncomeTax = calculateTax(taxableIncome, formData['1040NR_filing_status']);
    
    // Schedule NEC Income (Not Effectively Connected)
    const totalNECIncome = 
      formData['scheduleNEC_line_1'] +
      formData['scheduleNEC_line_2'] +
      formData['scheduleNEC_line_3'] +
      formData['scheduleNEC_line_4'];
    
    // Tax on NEC income (30% rate, subject to treaty reduction)
    const necTaxRate = formData['scheduleOI_treaty_benefits'] ? 0.15 : 0.30; // Simplified treaty rate
    const necTax = totalNECIncome * necTaxRate;
    
    // Total Tax (Line 18)
    const totalTax = federalIncomeTax + formData['1040NR_line_17'] + necTax;
    
    // Total Tax after Credits (Line 20)
    const totalTaxAfterCredits = Math.max(0, totalTax - formData['1040NR_line_19']);
    
    // Total Payments (Line 24)
    const totalPayments = 
      formData['1040NR_line_21'] +
      formData['1040NR_line_22'] +
      formData['1040NR_line_23'];
    
    // Overpaid/Owed calculations
    const overpaidAmount = Math.max(0, totalPayments - totalTaxAfterCredits);
    const amountOwed = Math.max(0, totalTaxAfterCredits - totalPayments);
    const refundAmount = formData['1040NR_line_26'] || overpaidAmount;
    
    // Substantial Presence Test
    const substantialPresenceDays = 
      formData['scheduleOI_days_present_current_year'] +
      (formData['scheduleOI_days_present_prior_year_1'] / 3) +
      (formData['scheduleOI_days_present_prior_year_2'] / 6);
    
    const isSubstantialPresenceTest = substantialPresenceDays >= 183;
    
    // Treaty Benefits
    const treatyBenefitsApplicable = 
      formData['scheduleOI_treaty_benefits'] && 
      formData['scheduleOI_treaty_country_oi'] !== '';
    
    // Tax Rates
    const totalIncome = totalEffectivelyConnectedIncome + totalNECIncome;
    const effectiveTaxRate = totalIncome > 0 ? (totalTaxAfterCredits / totalIncome) * 100 : 0;
    const marginalTaxRate = getMarginalTaxRate(taxableIncome, formData['1040NR_filing_status']);
    
    // Validation flags
    const hasEffectivelyConnectedIncome = totalEffectivelyConnectedIncome > 0;
    const hasNonEffectivelyConnectedIncome = totalNECIncome > 0;
    const requiresScheduleNEC = hasNonEffectivelyConnectedIncome;
    const requiresScheduleOI = 
      treatyBenefitsApplicable || 
      formData['scheduleOI_scholarship_income'] > 0 ||
      formData['1040NR_days_in_us'] > 0;
    
    return {
      totalEffectivelyConnectedIncome,
      adjustedGrossIncome,
      totalAdjustments,
      taxableIncome,
      federalIncomeTax,
      totalTax: totalTaxAfterCredits,
      totalPayments,
      totalNECIncome,
      necTax,
      overpaidAmount,
      amountOwed,
      refundAmount,
      substantialPresenceDays,
      isSubstantialPresenceTest,
      treatyBenefitsApplicable,
      standardDeductionAllowed,
      effectiveTaxRate,
      marginalTaxRate,
      hasEffectivelyConnectedIncome,
      hasNonEffectivelyConnectedIncome,
      requiresScheduleNEC,
      requiresScheduleOI,
    };
  }, [formData, calculatedFields]);
};

// Helper functions
function getStandardDeduction(filingStatus: string): number {
  // Nonresidents generally cannot claim standard deduction
  // except in very limited circumstances (e.g., married to US citizen/resident)
  switch (filingStatus) {
    case 'married_filing_separately':
      return 0; // Generally not allowed
    case 'single':
      return 0; // Generally not allowed
    case 'qualifying_surviving_spouse':
      return 0; // Generally not allowed
    default:
      return 0;
  }
}

function calculateTax(taxableIncome: number, filingStatus: string): number {
  if (taxableIncome <= 0) return 0;
  
  // 2024 Tax Brackets (same as residents)
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
  
  const brackets = taxBrackets[filingStatus as keyof typeof taxBrackets] || taxBrackets.single;
  let tax = 0;
  
  for (const bracket of brackets) {
    if (taxableIncome > bracket.min) {
      const taxableInBracket = Math.min(taxableIncome - bracket.min, bracket.max - bracket.min);
      tax += taxableInBracket * bracket.rate;
    }
  }
  
  return Math.round(tax);
}

function getMarginalTaxRate(taxableIncome: number, filingStatus: string): number {
  if (taxableIncome <= 0) return 0;
  
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
    married_filing_separately: [
      { min: 0, max: 11600, rate: 10 },
      { min: 11600, max: 47150, rate: 12 },
      { min: 47150, max: 100525, rate: 22 },
      { min: 100525, max: 191950, rate: 24 },
      { min: 191950, max: 243725, rate: 32 },
      { min: 243725, max: 365600, rate: 35 },
      { min: 365600, max: Infinity, rate: 37 },
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
  
  const brackets = taxBrackets[filingStatus as keyof typeof taxBrackets] || taxBrackets.single;
  
  for (const bracket of brackets) {
    if (taxableIncome > bracket.min && taxableIncome <= bracket.max) {
      return bracket.rate;
    }
  }
  
  return brackets[brackets.length - 1].rate; // Highest bracket
}