import React from 'react';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';
export interface IncomeStepProps {
    data: any;
    calculated: Calculated1040NRValues;
    errors: string[];
    readOnly?: boolean;
    onNext: () => void;
    onPrevious: () => void;
}
export declare const IncomeStep: React.FC<IncomeStepProps>;
export default IncomeStep;
//# sourceMappingURL=IncomeStep.d.ts.map