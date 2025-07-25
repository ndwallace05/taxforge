import React from 'react';
interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
    description?: string;
}
interface SelectFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    disabled?: boolean;
    required?: boolean;
    error?: string;
    helpText?: string;
    placeholder?: string;
    className?: string;
    lineNumber?: string;
    allowEmpty?: boolean;
    emptyLabel?: string;
}
export declare const SelectField: React.FC<SelectFieldProps>;
export declare const FilingStatusSelect: React.FC<Omit<SelectFieldProps, 'options'>>;
export declare const StateSelect: React.FC<Omit<SelectFieldProps, 'options'>>;
export default SelectField;
//# sourceMappingURL=SelectField.d.ts.map