import React from 'react';
interface CalculatedFieldProps {
    label: string;
    value: number;
    lineNumber?: string;
    calculation?: string;
    className?: string;
    highlight?: boolean;
    important?: boolean;
    error?: string;
    helpText?: string;
    prefix?: string;
    suffix?: string;
    showZero?: boolean;
    format?: 'currency' | 'number' | 'percentage';
    precision?: number;
}
export declare const CalculatedField: React.FC<CalculatedFieldProps>;
export declare const TaxCalculatedField: React.FC<Omit<CalculatedFieldProps, 'format' | 'important'>>;
export declare const PercentageCalculatedField: React.FC<Omit<CalculatedFieldProps, 'format'>>;
export declare const NumberCalculatedField: React.FC<Omit<CalculatedFieldProps, 'format'>>;
export default CalculatedField;
//# sourceMappingURL=CalculatedField.d.ts.map