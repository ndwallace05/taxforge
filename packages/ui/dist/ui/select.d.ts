import React from 'react';
interface SelectProps {
    children: React.ReactNode;
    value?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    className?: string;
}
interface SelectTriggerProps {
    children: React.ReactNode;
    className?: string;
}
interface SelectValueProps {
    placeholder?: string;
    className?: string;
}
interface SelectContentProps {
    children: React.ReactNode;
    className?: string;
}
interface SelectItemProps {
    children: React.ReactNode;
    value: string;
    className?: string;
}
export declare const Select: React.FC<SelectProps>;
export declare const SelectTrigger: React.FC<SelectTriggerProps>;
export declare const SelectValue: React.FC<SelectValueProps>;
export declare const SelectContent: React.FC<SelectContentProps>;
export declare const SelectItem: React.FC<SelectItemProps>;
export {};
//# sourceMappingURL=select.d.ts.map