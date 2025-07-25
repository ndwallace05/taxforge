import React from 'react';
interface CheckboxFieldProps {
    label: string;
    name: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    helpText?: string;
    description?: string;
    className?: string;
    lineNumber?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'card' | 'switch';
}
export declare const CheckboxField: React.FC<CheckboxFieldProps>;
export default CheckboxField;
//# sourceMappingURL=CheckboxField.d.ts.map