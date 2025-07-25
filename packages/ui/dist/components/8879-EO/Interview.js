import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, select8879 } from -EOValues, select8879 - EOErrors;
from;
'../../store/slices/8879-eoSlice';
interface;
8879 - EOInterviewProps;
{
    onComplete ?  : () => void ;
}
export const ;
8879 - EOInterview;
React.FC < 8879 - EOInterviewProps > ;
({ onComplete }) => {
    const dispatch = useDispatch();
    const values = useSelector(select8879 - EOValues);
    const errors = useSelector(select8879 - EOErrors);
    const handleInputChange = (field, value) => {
        dispatch(setValue({ field, value: parseFloat(value) || 0 }));
    };
    return (_jsxs("div", { className: "max-w-2xl mx-auto p-6", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Form 8879-EO Interview" }), _jsx("div", { className: "space-y-4", children: _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Sample Input Field" }), _jsx("input", { type: "number", className: "w-full p-2 border rounded", onChange: (e) => handleInputChange('sample_field', e.target.value), "aria-label": "Sample input for Form 8879-EO" })] }) }), _jsx("button", { onClick: onComplete, className: "mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700", children: "Complete Interview" })] }));
};
export default 8879 - EOInterview;
