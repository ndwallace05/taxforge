import { jsx as _jsx } from "react/jsx-runtime";
export const Input = ({ className = '', ...props }) => {
    return (_jsx("input", { className: `
        block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
        placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500
        disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
        ${className}
      `, ...props }));
};
