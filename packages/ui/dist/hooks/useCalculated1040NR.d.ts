export interface Calculated1040NRValues {
    totalEffectivelyConnectedIncome: number;
    adjustedGrossIncome: number;
    totalAdjustments: number;
    taxableIncome: number;
    federalIncomeTax: number;
    totalTax: number;
    totalPayments: number;
    totalNECIncome: number;
    necTax: number;
    overpaidAmount: number;
    amountOwed: number;
    refundAmount: number;
    substantialPresenceDays: number;
    isSubstantialPresenceTest: boolean;
    treatyBenefitsApplicable: boolean;
    standardDeductionAllowed: number;
    effectiveTaxRate: number;
    marginalTaxRate: number;
    hasEffectivelyConnectedIncome: boolean;
    hasNonEffectivelyConnectedIncome: boolean;
    requiresScheduleNEC: boolean;
    requiresScheduleOI: boolean;
}
export declare const useCalculated1040NR: () => Calculated1040NRValues;
//# sourceMappingURL=useCalculated1040NR.d.ts.map