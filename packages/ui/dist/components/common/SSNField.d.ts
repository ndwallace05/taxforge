import React from 'react';
interface SSNFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    helpText?: string;
    className?: string;
    lineNumber?: string;
    showMasked?: boolean;
    allowEdit?: boolean;
}
export declare const SSNField: React.FC<SSNFieldProps>;
export default SSNField;
//# sourceMappingURL=SSNField.d.ts.map