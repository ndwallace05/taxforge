import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export const ConditionalField = ({ condition, children, fallback = null, animate = true, className = '', }) => {
    if (!animate) {
        return condition ? _jsx(_Fragment, { children: children }) : _jsx(_Fragment, { children: fallback });
    }
    return (_jsxs("div", { className: `transition-all duration-300 ease-in-out ${className}`, children: [_jsx("div", { className: `
          overflow-hidden transition-all duration-300 ease-in-out
          ${condition
                    ? 'max-h-screen opacity-100 transform translate-y-0'
                    : 'max-h-0 opacity-0 transform -translate-y-2'}
        `, children: condition && (_jsx("div", { className: "pt-2", children: children })) }), !condition && fallback && (_jsx("div", { className: "transition-all duration-300 ease-in-out", children: fallback }))] }));
};
// Specialized conditional components for common use cases
export const ConditionalSection = ({ condition, title, children, className = '' }) => {
    return (_jsx(ConditionalField, { condition: condition, className: className, children: _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 border-b border-gray-200 pb-2", children: title }), children] }) }));
};
export const ConditionalAlert = ({ condition, type = 'info', title, children, className = '' }) => {
    const getAlertStyles = () => {
        switch (type) {
            case 'warning':
                return 'bg-yellow-50 border-yellow-200 text-yellow-800';
            case 'error':
                return 'bg-red-50 border-red-200 text-red-800';
            case 'success':
                return 'bg-green-50 border-green-200 text-green-800';
            case 'info':
            default:
                return 'bg-blue-50 border-blue-200 text-blue-800';
        }
    };
    const getIcon = () => {
        switch (type) {
            case 'warning':
                return (_jsx("svg", { className: "h-5 w-5 text-yellow-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }));
            case 'error':
                return (_jsx("svg", { className: "h-5 w-5 text-red-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }));
            case 'success':
                return (_jsx("svg", { className: "h-5 w-5 text-green-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }));
            case 'info':
            default:
                return (_jsx("svg", { className: "h-5 w-5 text-blue-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }));
        }
    };
    return (_jsx(ConditionalField, { condition: condition, className: className, children: _jsx("div", { className: `rounded-md border p-4 ${getAlertStyles()}`, children: _jsxs("div", { className: "flex", children: [_jsx("div", { className: "flex-shrink-0", children: getIcon() }), _jsxs("div", { className: "ml-3", children: [title && (_jsx("h3", { className: "text-sm font-medium mb-1", children: title })), _jsx("div", { className: "text-sm", children: children })] })] }) }) }));
};
export const ConditionalHelp = ({ condition, children, className = '' }) => {
    return (_jsx(ConditionalField, { condition: condition, className: className, children: _jsx("div", { className: "bg-gray-50 border border-gray-200 rounded-md p-3", children: _jsxs("div", { className: "flex items-start space-x-2", children: [_jsx("svg", { className: "h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }), _jsx("div", { className: "text-sm text-gray-600", children: children })] }) }) }));
};
// Hook for managing conditional field state
export const useConditionalField = (initialCondition = false) => {
    const [condition, setCondition] = React.useState(initialCondition);
    const toggle = () => setCondition(!condition);
    const show = () => setCondition(true);
    const hide = () => setCondition(false);
    return {
        condition,
        setCondition,
        toggle,
        show,
        hide,
    };
};
export default ConditionalField;
