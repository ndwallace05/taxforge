import { jsx as _jsx } from "react/jsx-runtime";
export const Separator = ({ orientation = 'horizontal', className = '' }) => {
    const orientationClasses = orientation === 'horizontal'
        ? 'w-full h-px border-t border-gray-200'
        : 'h-full w-px border-l border-gray-200';
    return (_jsx("div", { className: `${orientationClasses} ${className}`, role: "separator", "aria-orientation": orientation }));
};
