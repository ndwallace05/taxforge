import { jsx as _jsx } from "react/jsx-runtime";
export const Card = ({ children, className = '' }) => {
    return (_jsx("div", { className: `card ${className}`, children: children }));
};
export const CardHeader = ({ children, className = '' }) => {
    return (_jsx("div", { className: `card-header ${className}`, children: children }));
};
export const CardContent = ({ children, className = '' }) => {
    return (_jsx("div", { className: `card-body ${className}`, children: children }));
};
export const CardTitle = ({ children, className = '' }) => {
    return (_jsx("h3", { className: `text-lg font-semibold ${className}`, children: children }));
};
