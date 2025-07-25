import React from 'react';
interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
    steps?: string[];
    showLabels?: boolean;
    showPercentage?: boolean;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'stepped' | 'minimal';
    color?: 'blue' | 'green' | 'purple' | 'indigo';
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export declare const FormProgressBar: React.FC<{
    currentStep: number;
    steps: string[];
    className?: string;
}>;
export declare const SimpleProgressBar: React.FC<{
    percentage: number;
    label?: string;
    className?: string;
    color?: 'blue' | 'green' | 'purple' | 'indigo';
}>;
export default ProgressBar;
//# sourceMappingURL=ProgressBar.d.ts.map