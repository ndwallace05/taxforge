import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export const ProgressBar = ({ currentStep, totalSteps, steps = [], showLabels = true, showPercentage = true, className = '', size = 'md', variant = 'default', color = 'blue', }) => {
    const percentage = Math.round((currentStep / totalSteps) * 100);
    const getSizeClasses = () => {
        switch (size) {
            case 'sm':
                return 'h-1';
            case 'lg':
                return 'h-3';
            case 'md':
            default:
                return 'h-2';
        }
    };
    const getColorClasses = () => {
        switch (color) {
            case 'green':
                return {
                    bg: 'bg-green-500',
                    text: 'text-green-600',
                    ring: 'ring-green-500',
                };
            case 'purple':
                return {
                    bg: 'bg-purple-500',
                    text: 'text-purple-600',
                    ring: 'ring-purple-500',
                };
            case 'indigo':
                return {
                    bg: 'bg-indigo-500',
                    text: 'text-indigo-600',
                    ring: 'ring-indigo-500',
                };
            case 'blue':
            default:
                return {
                    bg: 'bg-blue-500',
                    text: 'text-blue-600',
                    ring: 'ring-blue-500',
                };
        }
    };
    const colorClasses = getColorClasses();
    if (variant === 'minimal') {
        return (_jsxs("div", { className: `space-y-2 ${className}`, children: [showPercentage && (_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm font-medium text-gray-700", children: "Progress" }), _jsxs("span", { className: `text-sm font-medium ${colorClasses.text}`, children: [percentage, "%"] })] })), _jsx("div", { className: `w-full bg-gray-200 rounded-full ${getSizeClasses()}`, children: _jsx("div", { className: `${colorClasses.bg} ${getSizeClasses()} rounded-full transition-all duration-300 ease-out`, style: { width: `${percentage}%` } }) })] }));
    }
    if (variant === 'stepped') {
        return (_jsxs("div", { className: `space-y-4 ${className}`, children: [showPercentage && (_jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("span", { className: "text-sm font-medium text-gray-700", children: ["Step ", currentStep, " of ", totalSteps] }), _jsxs("span", { className: `text-sm font-medium ${colorClasses.text}`, children: [percentage, "% Complete"] })] })), _jsx("div", { className: "flex items-center", children: Array.from({ length: totalSteps }, (_, index) => {
                        const stepNumber = index + 1;
                        const isCompleted = stepNumber < currentStep;
                        const isCurrent = stepNumber === currentStep;
                        const stepLabel = steps[index] || `Step ${stepNumber}`;
                        return (_jsxs(React.Fragment, { children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: `
                      flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-medium
                      transition-all duration-200
                      ${isCompleted
                                                ? `${colorClasses.bg} border-transparent text-white`
                                                : isCurrent
                                                    ? `border-2 ${colorClasses.ring} ${colorClasses.text} bg-white ring-4 ring-opacity-20`
                                                    : 'border-gray-300 text-gray-500 bg-white'}
                    `, children: isCompleted ? (_jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) })) : (stepNumber) }), showLabels && (_jsx("span", { className: `
                        mt-2 text-xs font-medium text-center max-w-20
                        ${isCompleted || isCurrent
                                                ? colorClasses.text
                                                : 'text-gray-500'}
                      `, children: stepLabel }))] }), stepNumber < totalSteps && (_jsx("div", { className: `
                      flex-1 h-0.5 mx-2 transition-all duration-300
                      ${isCompleted
                                        ? colorClasses.bg
                                        : 'bg-gray-300'}
                    ` }))] }, stepNumber));
                    }) })] }));
    }
    // Default variant
    return (_jsxs("div", { className: `space-y-3 ${className}`, children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("span", { className: "text-sm font-medium text-gray-700", children: "Progress" }), showLabels && steps[currentStep - 1] && (_jsxs("span", { className: "text-sm text-gray-500", children: ["- ", steps[currentStep - 1]] }))] }), showPercentage && (_jsxs("span", { className: `text-sm font-medium ${colorClasses.text}`, children: [percentage, "%"] }))] }), _jsx("div", { className: `w-full bg-gray-200 rounded-full ${getSizeClasses()}`, children: _jsx("div", { className: `
            ${colorClasses.bg} ${getSizeClasses()} rounded-full transition-all duration-500 ease-out
            relative overflow-hidden
          `, style: { width: `${percentage}%` }, children: _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" }) }) }), showLabels && steps.length > 0 && (_jsx("div", { className: "flex justify-between text-xs text-gray-500", children: steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isCurrent = stepNumber === currentStep;
                    return (_jsx("span", { className: `
                  transition-colors duration-200
                  ${isCompleted || isCurrent
                            ? colorClasses.text + ' font-medium'
                            : 'text-gray-400'}
                `, children: step }, index));
                }) })), _jsxs("div", { className: "flex justify-between items-center text-xs text-gray-500", children: [_jsxs("span", { children: ["Step ", currentStep, " of ", totalSteps] }), _jsxs("span", { children: [totalSteps - currentStep, " steps remaining"] })] })] }));
};
// Specialized progress bars for common use cases
export const FormProgressBar = ({ currentStep, steps, className }) => {
    return (_jsx(ProgressBar, { currentStep: currentStep, totalSteps: steps.length, steps: steps, variant: "stepped", showLabels: true, showPercentage: true, className: className }));
};
export const SimpleProgressBar = ({ percentage, label, className, color = 'blue' }) => {
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    const currentStep = Math.round((clampedPercentage / 100) * 100);
    return (_jsx(ProgressBar, { currentStep: currentStep, totalSteps: 100, variant: "minimal", showLabels: false, showPercentage: true, color: color, className: className }));
};
export default ProgressBar;
