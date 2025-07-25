import { jsx as _jsx } from "react/jsx-runtime";
export const Alert = ({ children, variant = 'info', className = '' }) => {
    const variantClasses = {
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error'
    };
    return (_jsx("div", { className: `alert ${variantClasses[variant]} ${className}`, children: children }));
};
export const AlertDescription = ({ children, className = '' }) => {
    return (_jsx("div", { className: className, children: children }));
};
