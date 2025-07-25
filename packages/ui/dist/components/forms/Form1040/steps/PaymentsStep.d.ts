import React from 'react';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
interface PaymentsStepProps {
    data: Form1040Data;
    onChange: (field: keyof Form1040Data, value: any) => void;
    readonly?: boolean;
    errors: Record<string, string>;
}
export declare const PaymentsStep: React.FC<PaymentsStepProps>;
export default PaymentsStep;
//# sourceMappingURL=PaymentsStep.d.ts.map