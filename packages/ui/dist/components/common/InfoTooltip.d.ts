import React from 'react';
interface InfoTooltipProps {
    content: string | React.ReactNode;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
    maxWidth?: string;
    delay?: number;
}
export declare const InfoTooltip: React.FC<InfoTooltipProps>;
export declare const HelpTooltip: React.FC<Omit<InfoTooltipProps, 'children'>>;
export declare const WarningTooltip: React.FC<Omit<InfoTooltipProps, 'children'>>;
export declare const ErrorTooltip: React.FC<Omit<InfoTooltipProps, 'children'>>;
export declare const InfoIcon: React.FC<Omit<InfoTooltipProps, 'children'>>;
export default InfoTooltip;
//# sourceMappingURL=InfoTooltip.d.ts.map