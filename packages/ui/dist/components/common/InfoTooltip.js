import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
export const InfoTooltip = ({ content, children, position = 'top', className = '', maxWidth = '300px', delay = 300, }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const tooltipRef = useRef(null);
    const triggerRef = useRef(null);
    const showTooltip = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        const id = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        setTimeoutId(id);
    };
    const hideTooltip = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setIsVisible(false);
    };
    const getPositionClasses = () => {
        const baseClasses = 'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg';
        switch (position) {
            case 'top':
                return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
            case 'bottom':
                return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 mt-2`;
            case 'left':
                return `${baseClasses} right-full top-1/2 transform -translate-y-1/2 mr-2`;
            case 'right':
                return `${baseClasses} left-full top-1/2 transform -translate-y-1/2 ml-2`;
            default:
                return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
        }
    };
    const getArrowClasses = () => {
        const baseClasses = 'absolute w-2 h-2 bg-gray-900 transform rotate-45';
        switch (position) {
            case 'top':
                return `${baseClasses} top-full left-1/2 -translate-x-1/2 -mt-1`;
            case 'bottom':
                return `${baseClasses} bottom-full left-1/2 -translate-x-1/2 -mb-1`;
            case 'left':
                return `${baseClasses} left-full top-1/2 -translate-y-1/2 -ml-1`;
            case 'right':
                return `${baseClasses} right-full top-1/2 -translate-y-1/2 -mr-1`;
            default:
                return `${baseClasses} top-full left-1/2 -translate-x-1/2 -mt-1`;
        }
    };
    // Handle click outside to close tooltip
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current &&
                triggerRef.current &&
                !tooltipRef.current.contains(event.target) &&
                !triggerRef.current.contains(event.target)) {
                hideTooltip();
            }
        };
        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isVisible]);
    // Handle escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                hideTooltip();
            }
        };
        if (isVisible) {
            document.addEventListener('keydown', handleEscape);
            return () => {
                document.removeEventListener('keydown', handleEscape);
            };
        }
    }, [isVisible]);
    return (_jsxs("div", { className: `relative inline-block ${className}`, children: [_jsx("div", { ref: triggerRef, onMouseEnter: showTooltip, onMouseLeave: hideTooltip, onFocus: showTooltip, onBlur: hideTooltip, onClick: () => setIsVisible(!isVisible), className: "cursor-help", tabIndex: 0, role: "button", "aria-describedby": isVisible ? 'tooltip' : undefined, children: children }), isVisible && (_jsxs("div", { ref: tooltipRef, id: "tooltip", role: "tooltip", className: getPositionClasses(), style: { maxWidth }, children: [content, _jsx("div", { className: getArrowClasses() })] }))] }));
};
// Predefined tooltip variants for common use cases
export const HelpTooltip = (props) => (_jsx(InfoTooltip, { ...props, children: _jsx("svg", { className: "h-4 w-4 text-gray-400 hover:text-gray-600", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }) }));
export const WarningTooltip = (props) => (_jsx(InfoTooltip, { ...props, children: _jsx("svg", { className: "h-4 w-4 text-yellow-400 hover:text-yellow-600", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }) }));
export const ErrorTooltip = (props) => (_jsx(InfoTooltip, { ...props, children: _jsx("svg", { className: "h-4 w-4 text-red-400 hover:text-red-600", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }) }));
export const InfoIcon = (props) => (_jsx(InfoTooltip, { ...props, children: _jsx("svg", { className: "h-4 w-4 text-blue-400 hover:text-blue-600", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }) }));
export default InfoTooltip;
