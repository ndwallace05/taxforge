import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Checkbox = ({ className = '', label, id, ...props }) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    return (_jsxs("div", { className: `flex items-center ${className}`, children: [_jsx("input", { type: "checkbox", id: checkboxId, className: "\n          h-4 w-4 text-blue-600 border-gray-300 rounded\n          focus:ring-blue-500 focus:ring-2\n          disabled:opacity-50 disabled:cursor-not-allowed\n        ", ...props }), label && (_jsx("label", { htmlFor: checkboxId, className: "ml-2 text-sm text-gray-700 cursor-pointer", children: label }))] }));
};
