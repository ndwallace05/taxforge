import React from 'react';
import { Form1040SRData } from '../../../store/slices/form1040SRSlice';
interface Form1040SRProps {
    onSave?: (data: Form1040SRData) => void;
    onSubmit?: (data: Form1040SRData) => void;
    readonly?: boolean;
    className?: string;
}
export declare const Form1040SR: React.FC<Form1040SRProps>;
export default Form1040SR;
//# sourceMappingURL=Form1040SR.d.ts.map