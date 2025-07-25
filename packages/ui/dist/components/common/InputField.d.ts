import React from 'react';
interface InputFieldProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'date';
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    helpText?: string;
    placeholder?: string;
    className?: string;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    autoComplete?: string;
    readonly?: boolean;
    lineNumber?: string;
    validation?: {
        pattern?: RegExp;
        message?: string;
    };
}
export declare const InputField: React.FC<InputFieldProps>;
export default InputField;
//# sourceMappingURL=InputField.d.ts.map