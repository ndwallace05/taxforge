import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Button = ({ children, onClick, type = 'button', disabled = false, loading = false, variant = 'primary', size = 'md', fullWidth = false, leftIcon, rightIcon, className = '', ariaLabel, }) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'secondary':
                return 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300';
            case 'outline':
                return 'bg-white text-blue-700 hover:bg-blue-50 focus:ring-blue-500 border border-blue-300';
            case 'ghost':
                return 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500';
            case 'danger':
                return 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border border-transparent';
            case 'success':
                return 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 border border-transparent';
            case 'primary':
            default:
                return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent';
        }
    };
    const getSizeClasses = () => {
        switch (size) {
            case 'xs':
                return 'px-2.5 py-1.5 text-xs';
            case 'sm':
                return 'px-3 py-2 text-sm';
            case 'lg':
                return 'px-4 py-2 text-base';
            case 'xl':
                return 'px-6 py-3 text-base';
            case 'md':
            default:
                return 'px-4 py-2 text-sm';
        }
    };
    const getIconSize = () => {
        switch (size) {
            case 'xs':
                return 'h-3 w-3';
            case 'sm':
                return 'h-4 w-4';
            case 'lg':
            case 'xl':
                return 'h-5 w-5';
            case 'md':
            default:
                return 'h-4 w-4';
        }
    };
    const isDisabled = disabled || loading;
    return (_jsxs("button", { type: type, onClick: onClick, disabled: isDisabled, "aria-label": ariaLabel, className: `
        inline-flex items-center justify-center font-medium rounded-md
        focus:outline-none focus:ring-2 focus:ring-offset-2
        transition-all duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `, children: [loading && (_jsxs("svg", { className: `animate-spin -ml-1 mr-2 ${getIconSize()}`, fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })), !loading && leftIcon && (_jsx("span", { className: `${children ? 'mr-2' : ''} ${getIconSize()}`, children: leftIcon })), children, !loading && rightIcon && (_jsx("span", { className: `${children ? 'ml-2' : ''} ${getIconSize()}`, children: rightIcon }))] }));
};
// Specialized button components
export const PrimaryButton = (props) => (_jsx(Button, { ...props, variant: "primary" }));
export const SecondaryButton = (props) => (_jsx(Button, { ...props, variant: "secondary" }));
export const OutlineButton = (props) => (_jsx(Button, { ...props, variant: "outline" }));
export const DangerButton = (props) => (_jsx(Button, { ...props, variant: "danger" }));
export const SuccessButton = (props) => (_jsx(Button, { ...props, variant: "success" }));
// Form-specific buttons
export const SubmitButton = (props) => (_jsx(Button, { ...props, type: "submit", variant: "primary" }));
export const CancelButton = (props) => (_jsx(Button, { ...props, variant: "outline" }));
export const SaveButton = (props) => (_jsx(Button, { ...props, variant: "success", leftIcon: _jsxs("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: [_jsx("path", { d: "M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6a1 1 0 10-2 0v5.586l-1.293-1.293z" }), _jsx("path", { d: "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" })] }) }));
export const NextButton = (props) => (_jsx(Button, { ...props, variant: "primary", rightIcon: _jsx("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }) }));
export const PreviousButton = (props) => (_jsx(Button, { ...props, variant: "outline", leftIcon: _jsx("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", clipRule: "evenodd" }) }) }));
export const EditButton = (props) => (_jsx(Button, { ...props, variant: "outline", leftIcon: _jsx("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" }) }) }));
export const DeleteButton = (props) => (_jsx(Button, { ...props, variant: "danger", leftIcon: _jsxs("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: [_jsx("path", { fillRule: "evenodd", d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z", clipRule: "evenodd" }), _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" })] }) }));
export const DownloadButton = (props) => (_jsx(Button, { ...props, variant: "outline", leftIcon: _jsx("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z", clipRule: "evenodd" }) }) }));
export const PrintButton = (props) => (_jsx(Button, { ...props, variant: "outline", leftIcon: _jsx("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z", clipRule: "evenodd" }) }) }));
export default Button;
