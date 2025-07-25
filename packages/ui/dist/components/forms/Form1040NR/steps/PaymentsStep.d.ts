import React from 'react';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';
export interface PaymentsStepProps {
    data: any;
    calculated: Calculated1040NRValues;
    errors: string[];
    readOnly?: boolean;
    onNext: () => void;
    onPrevious: () => void;
}
export declare const PaymentsStep: React.FC<PaymentsStepProps>;
export default PaymentsStep;
//# sourceMappingURL=PaymentsStep.d.ts.map