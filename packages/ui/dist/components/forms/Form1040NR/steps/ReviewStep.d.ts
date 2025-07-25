import React from 'react';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';
export interface ReviewStepProps {
    data: any;
    calculated: Calculated1040NRValues;
    errors: string[];
    readOnly?: boolean;
    onPrevious: () => void;
    onSubmit?: () => void;
}
export declare const ReviewStep: React.FC<ReviewStepProps>;
export default ReviewStep;
//# sourceMappingURL=ReviewStep.d.ts.map