import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { InfoTooltip } from './InfoTooltip';
export const SelectField = ({ label, name, value, onChange, options, disabled = false, required = false, error, helpText, placeholder = 'Select an option...', className = '', lineNumber, allowEmpty = true, emptyLabel = 'Select...', }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleSelectChange = (e) => {
        onChange(e.target.value);
    };
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    return (_jsxs("div", { className: `space-y-2 ${className}`, children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("label", { htmlFor: name, className: `block text-sm font-medium ${error ? 'text-red-700' : 'text-gray-700'}`, children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), lineNumber && (_jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800", children: lineNumber })), helpText && (_jsx(InfoTooltip, { content: helpText, children: _jsx("svg", { className: "h-4 w-4 text-gray-400 cursor-help", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }) }))] }), _jsxs("div", { className: "relative", children: [_jsxs("select", { id: name, name: name, value: value, onChange: handleSelectChange, onFocus: handleFocus, onBlur: handleBlur, disabled: disabled, required: required, className: `
            block w-full px-3 py-2 border rounded-md shadow-sm
            focus:ring-2 focus:ring-offset-0 focus:outline-none
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
            appearance-none bg-white
            ${error
                            ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
                            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}
            ${isFocused ? 'ring-2' : ''}
          `, "aria-describedby": `${name}-error ${name}-help`, "aria-invalid": !!error, children: [allowEmpty && (_jsx("option", { value: "", disabled: !allowEmpty, children: placeholder || emptyLabel })), options.map((option) => (_jsx("option", { value: option.value, disabled: option.disabled, title: option.description, children: option.label }, option.value)))] }), _jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: _jsx("svg", { className: "h-5 w-5 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })] }), value && options.find(opt => opt.value === value)?.description && (_jsx("div", { className: "text-sm text-gray-600 bg-blue-50 p-2 rounded border border-blue-200", children: _jsxs("div", { className: "flex items-start space-x-2", children: [_jsx("svg", { className: "h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }), _jsx("span", { children: options.find(opt => opt.value === value)?.description })] }) })), error && (_jsxs("p", { id: `${name}-error`, className: "text-sm text-red-600 flex items-center", children: [_jsx("svg", { className: "h-4 w-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }), error] })), helpText && !error && (_jsx("p", { id: `${name}-help`, className: "text-sm text-gray-500", children: helpText }))] }));
};
// Predefined select fields for common tax form uses
export const FilingStatusSelect = (props) => {
    const filingStatusOptions = [
        { value: 'single', label: 'Single', description: 'You are unmarried or legally separated' },
        { value: 'marriedFilingJointly', label: 'Married Filing Jointly', description: 'You are married and filing a joint return' },
        { value: 'marriedFilingSeparately', label: 'Married Filing Separately', description: 'You are married but filing separate returns' },
        { value: 'headOfHousehold', label: 'Head of Household', description: 'You are unmarried and pay more than half the cost of keeping up a home' },
        { value: 'qualifyingWidow', label: 'Qualifying Widow(er)', description: 'Your spouse died and you meet certain conditions' },
    ];
    return _jsx(SelectField, { ...props, options: filingStatusOptions });
};
export const StateSelect = (props) => {
    const stateOptions = [
        { value: 'AL', label: 'Alabama' },
        { value: 'AK', label: 'Alaska' },
        { value: 'AZ', label: 'Arizona' },
        { value: 'AR', label: 'Arkansas' },
        { value: 'CA', label: 'California' },
        { value: 'CO', label: 'Colorado' },
        { value: 'CT', label: 'Connecticut' },
        { value: 'DE', label: 'Delaware' },
        { value: 'FL', label: 'Florida' },
        { value: 'GA', label: 'Georgia' },
        { value: 'HI', label: 'Hawaii' },
        { value: 'ID', label: 'Idaho' },
        { value: 'IL', label: 'Illinois' },
        { value: 'IN', label: 'Indiana' },
        { value: 'IA', label: 'Iowa' },
        { value: 'KS', label: 'Kansas' },
        { value: 'KY', label: 'Kentucky' },
        { value: 'LA', label: 'Louisiana' },
        { value: 'ME', label: 'Maine' },
        { value: 'MD', label: 'Maryland' },
        { value: 'MA', label: 'Massachusetts' },
        { value: 'MI', label: 'Michigan' },
        { value: 'MN', label: 'Minnesota' },
        { value: 'MS', label: 'Mississippi' },
        { value: 'MO', label: 'Missouri' },
        { value: 'MT', label: 'Montana' },
        { value: 'NE', label: 'Nebraska' },
        { value: 'NV', label: 'Nevada' },
        { value: 'NH', label: 'New Hampshire' },
        { value: 'NJ', label: 'New Jersey' },
        { value: 'NM', label: 'New Mexico' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'ND', label: 'North Dakota' },
        { value: 'OH', label: 'Ohio' },
        { value: 'OK', label: 'Oklahoma' },
        { value: 'OR', label: 'Oregon' },
        { value: 'PA', label: 'Pennsylvania' },
        { value: 'RI', label: 'Rhode Island' },
        { value: 'SC', label: 'South Carolina' },
        { value: 'SD', label: 'South Dakota' },
        { value: 'TN', label: 'Tennessee' },
        { value: 'TX', label: 'Texas' },
        { value: 'UT', label: 'Utah' },
        { value: 'VT', label: 'Vermont' },
        { value: 'VA', label: 'Virginia' },
        { value: 'WA', label: 'Washington' },
        { value: 'WV', label: 'West Virginia' },
        { value: 'WI', label: 'Wisconsin' },
        { value: 'WY', label: 'Wyoming' },
        { value: 'DC', label: 'District of Columbia' },
    ];
    return _jsx(SelectField, { ...props, options: stateOptions });
};
export default SelectField;
