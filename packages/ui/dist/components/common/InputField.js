import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { InfoTooltip } from './InfoTooltip';
export const InputField = ({ label, name, type = 'text', value, onChange, disabled = false, required = false, error, helpText, placeholder, className = '', maxLength, minLength, pattern, autoComplete, readonly = false, lineNumber, validation, }) => {
    const [validationError, setValidationError] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const validateInput = (inputValue) => {
        if (validation && validation.pattern) {
            if (!validation.pattern.test(inputValue) && inputValue.length > 0) {
                setValidationError(validation.message || 'Invalid format');
                return false;
            }
        }
        setValidationError('');
        return true;
    };
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        validateInput(inputValue);
        onChange(inputValue);
    };
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
        validateInput(value);
    };
    const displayError = error || validationError;
    const isReadonly = readonly || disabled;
    return (_jsxs("div", { className: `space-y-2 ${className}`, children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("label", { htmlFor: name, className: `block text-sm font-medium ${displayError ? 'text-red-700' : 'text-gray-700'}`, children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), lineNumber && (_jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800", children: lineNumber })), helpText && (_jsx(InfoTooltip, { content: helpText, children: _jsx("svg", { className: "h-4 w-4 text-gray-400 cursor-help", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }) }))] }), _jsxs("div", { className: "relative", children: [_jsx("input", { type: type, id: name, name: name, value: value, onChange: handleInputChange, onFocus: handleFocus, onBlur: handleBlur, disabled: isReadonly, required: required, placeholder: placeholder, maxLength: maxLength, minLength: minLength, pattern: pattern, autoComplete: autoComplete, className: `
            block w-full px-3 py-2 border rounded-md shadow-sm
            focus:ring-2 focus:ring-offset-0 focus:outline-none
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
            ${displayError
                            ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}
            ${readonly ? 'bg-gray-100 cursor-not-allowed' : ''}
            ${isFocused ? 'ring-2' : ''}
          `, "aria-describedby": `${name}-error ${name}-help`, "aria-invalid": !!displayError }), maxLength && isFocused && (_jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: _jsxs("span", { className: `text-xs ${value.length > maxLength * 0.8 ? 'text-yellow-600' : 'text-gray-400'}`, children: [value.length, "/", maxLength] }) }))] }), displayError && (_jsxs("p", { id: `${name}-error`, className: "text-sm text-red-600 flex items-center", children: [_jsx("svg", { className: "h-4 w-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }), displayError] })), helpText && !displayError && (_jsx("p", { id: `${name}-help`, className: "text-sm text-gray-500", children: helpText }))] }));
};
export default InputField;
