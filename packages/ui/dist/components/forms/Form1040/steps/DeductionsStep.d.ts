import React from 'react';
import { Form1040Data } from '../../../../store/slices/form1040Slice';
interface DeductionsStepProps {
    data: Form1040Data;
    onChange: (field: keyof Form1040Data, value: any) => void;
    readonly?: boolean;
    errors: Record<string, string>;
}
export declare const DeductionsStep: React.FC<DeductionsStepProps>;
export default DeductionsStep;
//# sourceMappingURL=DeductionsStep.d.ts.map