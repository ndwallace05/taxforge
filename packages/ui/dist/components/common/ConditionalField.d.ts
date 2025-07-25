import React from 'react';
interface ConditionalFieldProps {
    condition: boolean;
    children: React.ReactNode;
    fallback?: React.ReactNode;
    animate?: boolean;
    className?: string;
}
export declare const ConditionalField: React.FC<ConditionalFieldProps>;
export declare const ConditionalSection: React.FC<{
    condition: boolean;
    title: string;
    children: React.ReactNode;
    className?: string;
}>;
export declare const ConditionalAlert: React.FC<{
    condition: boolean;
    type?: 'info' | 'warning' | 'error' | 'success';
    title?: string;
    children: React.ReactNode;
    className?: string;
}>;
export declare const ConditionalHelp: React.FC<{
    condition: boolean;
    children: React.ReactNode;
    className?: string;
}>;
export declare const useConditionalField: (initialCondition?: boolean) => {
    condition: boolean;
    setCondition: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: () => void;
    show: () => void;
    hide: () => void;
};
export default ConditionalField;
//# sourceMappingURL=ConditionalField.d.ts.map