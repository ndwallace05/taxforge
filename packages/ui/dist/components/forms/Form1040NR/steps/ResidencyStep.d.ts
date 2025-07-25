import React from 'react';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';
export interface ResidencyStepProps {
    data: any;
    calculated: Calculated1040NRValues;
    errors: string[];
    readOnly?: boolean;
    onNext: () => void;
    onPrevious: () => void;
}
export declare const ResidencyStep: React.FC<ResidencyStepProps>;
export default ResidencyStep;
//# sourceMappingURL=ResidencyStep.d.ts.map