import React from 'react';
interface AlertProps {
    children: React.ReactNode;
    variant?: 'info' | 'success' | 'warning' | 'error';
    className?: string;
}
interface AlertDescriptionProps {
    children: React.ReactNode;
    className?: string;
}
export declare const Alert: React.FC<AlertProps>;
export declare const AlertDescription: React.FC<AlertDescriptionProps>;
export {};
//# sourceMappingURL=alert.d.ts.map