import React from 'react';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';
export interface DeductionsStepProps {
    data: any;
    calculated: Calculated1040NRValues;
    errors: string[];
    readOnly?: boolean;
    onNext: () => void;
    onPrevious: () => void;
}
export declare const DeductionsStep: React.FC<DeductionsStepProps>;
export default DeductionsStep;
//# sourceMappingURL=DeductionsStep.d.ts.map