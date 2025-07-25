import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Progress = ({ value, max = 100, className = '', showPercentage = false }) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    return (_jsxs("div", { className: `progress-bar ${className}`, children: [_jsx("div", { className: "progress-fill", style: { width: `${percentage}%` }, role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": max }), showPercentage && (_jsxs("span", { className: "text-xs text-gray-600 mt-1", children: [Math.round(percentage), "%"] }))] }));
};
