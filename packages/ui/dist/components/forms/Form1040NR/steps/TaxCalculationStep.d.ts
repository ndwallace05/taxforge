import React from 'react';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';
export interface TaxCalculationStepProps {
    data: any;
    calculated: Calculated1040NRValues;
    errors: string[];
    readOnly?: boolean;
    onNext: () => void;
    onPrevious: () => void;
}
export declare const TaxCalculationStep: React.FC<TaxCalculationStepProps>;
export default TaxCalculationStep;
//# sourceMappingURL=TaxCalculationStep.d.ts.map