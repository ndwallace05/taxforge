import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { InfoTooltip } from './InfoTooltip';
export const SSNField = ({ label, name, value, onChange, disabled = false, required = false, error, helpText, className = '', lineNumber, showMasked = false, allowEdit = true, }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showValue, setShowValue] = useState(!showMasked);
    const [validationError, setValidationError] = useState('');
    // Format SSN as XXX-XX-XXXX
    const formatSSN = (ssn) => {
        // Remove all non-digits
        const digits = ssn.replace(/\D/g, '');
        // Apply formatting
        if (digits.length <= 3) {
            return digits;
        }
        else if (digits.length <= 5) {
            return `${digits.slice(0, 3)}-${digits.slice(3)}`;
        }
        else {
            return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 9)}`;
        }
    };
    // Mask SSN as XXX-XX-1234 (show last 4 digits)
    const maskSSN = (ssn) => {
        const digits = ssn.replace(/\D/g, '');
        if (digits.length === 9) {
            return `XXX-XX-${digits.slice(5)}`;
        }
        else if (digits.length > 5) {
            return `XXX-XX-${digits.slice(5)}`;
        }
        else {
            return 'XXX-XX-XXXX';
        }
    };
    // Validate SSN format
    const validateSSN = (ssn) => {
        const digits = ssn.replace(/\D/g, '');
        if (digits.length === 0) {
            setValidationError('');
            return true;
        }
        if (digits.length !== 9) {
            setValidationError('SSN must be 9 digits');
            return false;
        }
        // Check for invalid SSN patterns
        if (digits === '000000000' ||
            digits === '123456789' ||
            digits.startsWith('000') ||
            digits.startsWith('666') ||
            digits.startsWith('9')) {
            setValidationError('Invalid SSN format');
            return false;
        }
        setValidationError('');
        return true;
    };
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const digits = inputValue.replace(/\D/g, '');
        // Limit to 9 digits
        if (digits.length <= 9) {
            const formattedValue = formatSSN(digits);
            validateSSN(digits);
            onChange(digits); // Store raw digits
        }
    };
    const handleFocus = () => {
        setIsFocused(true);
        if (showMasked) {
            setShowValue(true);
        }
    };
    const handleBlur = () => {
        setIsFocused(false);
        validateSSN(value);
        if (showMasked && !isFocused) {
            setShowValue(false);
        }
    };
    const toggleVisibility = () => {
        setShowValue(!showValue);
    };
    const displayValue = () => {
        if (!showValue && showMasked && value.length >= 5) {
            return maskSSN(value);
        }
        return formatSSN(value);
    };
    const displayError = error || validationError;
    const isReadonly = !allowEdit || disabled;
    return (_jsxs("div", { className: `space-y-2 ${className}`, children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("label", { htmlFor: name, className: `block text-sm font-medium ${displayError ? 'text-red-700' : 'text-gray-700'}`, children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), lineNumber && (_jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800", children: lineNumber })), helpText && (_jsx(InfoTooltip, { content: helpText, children: _jsx("svg", { className: "h-4 w-4 text-gray-400 cursor-help", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }) }))] }), _jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", id: name, name: name, value: displayValue(), onChange: handleInputChange, onFocus: handleFocus, onBlur: handleBlur, disabled: isReadonly, required: required, placeholder: "XXX-XX-XXXX", maxLength: 11, autoComplete: "off", className: `
            block w-full px-3 py-2 border rounded-md shadow-sm font-mono
            focus:ring-2 focus:ring-offset-0 focus:outline-none
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
            ${displayError
                            ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}
            ${isReadonly ? 'bg-gray-100 cursor-not-allowed' : ''}
            ${isFocused ? 'ring-2' : ''}
          `, "aria-describedby": `${name}-error ${name}-help`, "aria-invalid": !!displayError }), showMasked && value.length >= 5 && (_jsx("button", { type: "button", onClick: toggleVisibility, className: "absolute inset-y-0 right-0 pr-3 flex items-center", tabIndex: -1, children: showValue ? (_jsxs("svg", { className: "h-5 w-5 text-gray-400 hover:text-gray-600", fill: "currentColor", viewBox: "0 0 20 20", children: [_jsx("path", { fillRule: "evenodd", d: "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z", clipRule: "evenodd" }), _jsx("path", { d: "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" })] })) : (_jsxs("svg", { className: "h-5 w-5 text-gray-400 hover:text-gray-600", fill: "currentColor", viewBox: "0 0 20 20", children: [_jsx("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }), _jsx("path", { fillRule: "evenodd", d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", clipRule: "evenodd" })] })) })), value.length === 9 && (_jsx("div", { className: "absolute inset-y-0 right-8 flex items-center", children: _jsx("svg", { className: "h-4 w-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) }))] }), value.length > 0 && (_jsxs("div", { className: "text-xs text-gray-500 flex items-center space-x-1", children: [_jsx("svg", { className: "h-3 w-3 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z", clipRule: "evenodd" }) }), _jsx("span", { children: "Your SSN is encrypted and secure" })] })), displayError && (_jsxs("p", { id: `${name}-error`, className: "text-sm text-red-600 flex items-center", children: [_jsx("svg", { className: "h-4 w-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }), displayError] })), helpText && !displayError && (_jsx("p", { id: `${name}-help`, className: "text-sm text-gray-500", children: helpText }))] }));
};
export default SSNField;
