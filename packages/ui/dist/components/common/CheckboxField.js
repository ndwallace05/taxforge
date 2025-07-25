import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InfoTooltip } from './InfoTooltip';
export const CheckboxField = ({ label, name, checked, onChange, disabled = false, required = false, error, helpText, description, className = '', lineNumber, size = 'md', variant = 'default', }) => {
    const handleChange = (e) => {
        onChange(e.target.checked);
    };
    const getSizeClasses = () => {
        switch (size) {
            case 'sm':
                return 'h-3 w-3';
            case 'lg':
                return 'h-5 w-5';
            case 'md':
            default:
                return 'h-4 w-4';
        }
    };
    const getLabelSizeClasses = () => {
        switch (size) {
            case 'sm':
                return 'text-xs';
            case 'lg':
                return 'text-base';
            case 'md':
            default:
                return 'text-sm';
        }
    };
    if (variant === 'switch') {
        return (_jsxs("div", { className: `space-y-2 ${className}`, children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("label", { htmlFor: name, className: `block font-medium ${error ? 'text-red-700' : 'text-gray-700'} ${getLabelSizeClasses()}`, children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), lineNumber && (_jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800", children: lineNumber })), helpText && (_jsx(InfoTooltip, { content: helpText, children: _jsx("svg", { className: "h-4 w-4 text-gray-400 cursor-help", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }) }))] }), _jsx("button", { type: "button", role: "switch", "aria-checked": checked, onClick: () => onChange(!checked), disabled: disabled, className: `
              relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent
              transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-50
              ${checked ? 'bg-blue-600' : 'bg-gray-200'}
            `, children: _jsx("span", { className: `
                pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0
                transition duration-200 ease-in-out
                ${checked ? 'translate-x-5' : 'translate-x-0'}
              ` }) })] }), description && (_jsx("p", { className: "text-sm text-gray-500", children: description })), error && (_jsxs("p", { className: "text-sm text-red-600 flex items-center", children: [_jsx("svg", { className: "h-4 w-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }), error] }))] }));
    }
    if (variant === 'card') {
        return (_jsxs("div", { className: `space-y-2 ${className}`, children: [_jsxs("label", { htmlFor: name, className: `
            relative flex cursor-pointer rounded-lg border p-4 focus:outline-none
            ${checked
                        ? 'border-blue-200 bg-blue-50 ring-1 ring-blue-500'
                        : 'border-gray-300 bg-white'}
            ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'}
            ${error ? 'border-red-300 bg-red-50' : ''}
          `, children: [_jsx("input", { type: "checkbox", id: name, name: name, checked: checked, onChange: handleChange, disabled: disabled, required: required, className: "sr-only", "aria-describedby": `${name}-description` }), _jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "flex items-center h-5", children: _jsx("div", { className: `
                flex items-center justify-center rounded border-2
                ${getSizeClasses()}
                ${checked
                                            ? 'border-blue-500 bg-blue-500 text-white'
                                            : 'border-gray-300 bg-white'}
              `, children: checked && (_jsx("svg", { className: "h-3 w-3", fill: "currentColor", viewBox: "0 0 12 12", children: _jsx("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 4-4-1.414-1.414L5 6.586 3.707 5.293z" }) })) }) }), _jsxs("div", { className: "ml-3", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("span", { className: `font-medium ${error ? 'text-red-700' : 'text-gray-900'} ${getLabelSizeClasses()}`, children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), lineNumber && (_jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800", children: lineNumber })), helpText && (_jsx(InfoTooltip, { content: helpText, children: _jsx("svg", { className: "h-4 w-4 text-gray-400 cursor-help", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }) }))] }), description && (_jsx("p", { id: `${name}-description`, className: "text-sm text-gray-500 mt-1", children: description }))] })] })] }), error && (_jsxs("p", { className: "text-sm text-red-600 flex items-center", children: [_jsx("svg", { className: "h-4 w-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }), error] }))] }));
    }
    // Default variant
    return (_jsxs("div", { className: `space-y-2 ${className}`, children: [_jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "flex items-center h-5", children: _jsx("input", { type: "checkbox", id: name, name: name, checked: checked, onChange: handleChange, disabled: disabled, required: required, className: `
              rounded border-gray-300 text-blue-600 shadow-sm
              focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50
              disabled:cursor-not-allowed disabled:opacity-50
              ${getSizeClasses()}
              ${error ? 'border-red-300 text-red-600' : ''}
            `, "aria-describedby": `${name}-description ${name}-error` }) }), _jsxs("div", { className: "ml-3", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("label", { htmlFor: name, className: `font-medium cursor-pointer ${error ? 'text-red-700' : 'text-gray-700'} ${getLabelSizeClasses()}`, children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), lineNumber && (_jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800", children: lineNumber })), helpText && (_jsx(InfoTooltip, { content: helpText, children: _jsx("svg", { className: "h-4 w-4 text-gray-400 cursor-help", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }) }))] }), description && (_jsx("p", { id: `${name}-description`, className: "text-sm text-gray-500 mt-1", children: description }))] })] }), error && (_jsxs("p", { id: `${name}-error`, className: "text-sm text-red-600 flex items-center ml-8", children: [_jsx("svg", { className: "h-4 w-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }), error] })), helpText && !error && (_jsx("p", { className: "text-sm text-gray-500 ml-8", children: helpText }))] }));
};
export default CheckboxField;
