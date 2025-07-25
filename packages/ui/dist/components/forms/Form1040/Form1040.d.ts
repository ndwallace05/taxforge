import React from 'react';
import './print.css';
import { Form1040Data } from '../../../store/slices/form1040Slice';
interface Form1040Props {
    onSave?: (data: Form1040Data) => void;
    onSubmit?: (data: Form1040Data) => void;
    readonly?: boolean;
    className?: string;
}
export declare const Form1040: React.FC<Form1040Props>;
export default Form1040;
//# sourceMappingURL=Form1040.d.ts.map