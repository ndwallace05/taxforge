import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
const SelectContext = React.createContext({});
export const Select = ({ children, value, onValueChange, disabled = false, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (_jsx(SelectContext.Provider, { value: { value, onValueChange, isOpen, setIsOpen, disabled }, children: _jsx("div", { ref: selectRef, className: `relative ${className}`, children: children }) }));
};
export const SelectTrigger = ({ children, className = '' }) => {
    const { isOpen, setIsOpen, disabled } = React.useContext(SelectContext);
    return (_jsxs("button", { type: "button", onClick: () => !disabled && setIsOpen(!isOpen), disabled: disabled, className: `
        flex items-center justify-between w-full px-3 py-2 text-left
        border border-gray-300 rounded-md shadow-sm bg-white
        focus:outline-none focus:ring-blue-500 focus:border-blue-500
        disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
        ${className}
      `, children: [children, _jsx("svg", { className: `w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }));
};
export const SelectValue = ({ placeholder = 'Select...', className = '' }) => {
    const { value } = React.useContext(SelectContext);
    return (_jsx("span", { className: `${!value ? 'text-gray-400' : ''} ${className}`, children: value || placeholder }));
};
export const SelectContent = ({ children, className = '' }) => {
    const { isOpen } = React.useContext(SelectContext);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: `
      absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg
      max-h-60 overflow-auto
      ${className}
    `, children: children }));
};
export const SelectItem = ({ children, value, className = '' }) => {
    const { onValueChange, setIsOpen, value: selectedValue } = React.useContext(SelectContext);
    const isSelected = selectedValue === value;
    return (_jsx("div", { onClick: () => {
            onValueChange?.(value);
            setIsOpen(false);
        }, className: `
        px-3 py-2 cursor-pointer hover:bg-gray-100
        ${isSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-900'}
        ${className}
      `, children: children }));
};
