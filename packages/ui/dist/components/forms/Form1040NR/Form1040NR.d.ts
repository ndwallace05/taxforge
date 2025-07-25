import React from 'react';
export interface Form1040NRProps {
    onSubmit?: (data: any) => void;
    onSave?: (data: any) => void;
    initialData?: any;
    readOnly?: boolean;
    showProgress?: boolean;
    autoSave?: boolean;
    autoSaveInterval?: number;
}
export declare const Form1040NR: React.FC<Form1040NRProps>;
export default Form1040NR;
//# sourceMappingURL=Form1040NR.d.ts.map