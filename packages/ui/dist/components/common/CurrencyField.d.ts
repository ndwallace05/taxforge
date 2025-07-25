import React from 'react';
interface CurrencyFieldProps {
    label: string;
    name: string;
    value?: number;
    onChange: (value: number) => void;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    helpText?: string;
    placeholder?: string;
    className?: string;
    lineNumber?: string;
    min?: number;
    max?: number;
    validation?: {
        min?: number;
        max?: number;
        message?: string;
    };
    highlight?: boolean;
    important?: boolean;
    calculation?: string;
    readonly?: boolean;
}
export declare const CurrencyField: React.FC<CurrencyFieldProps>;
export default CurrencyField;
//# sourceMappingURL=CurrencyField.d.ts.map