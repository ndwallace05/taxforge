import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Label = ({ children, className = '', required = false, ...props }) => {
    return (_jsxs("label", { className: `
        block text-sm font-medium text-gray-700 mb-1
        ${className}
      `, ...props, children: [children, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }));
};
