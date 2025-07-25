import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, select706 } from -DValues, select706 - DErrors;
from;
'../../store/slices/706-dSlice';
interface;
706 - DInterviewProps;
{
    onComplete ?  : () => void ;
}
export const ;
706 - DInterview;
React.FC < 706 - DInterviewProps > ;
({ onComplete }) => {
    const dispatch = useDispatch();
    const values = useSelector(select706 - DValues);
    const errors = useSelector(select706 - DErrors);
    const handleInputChange = (field, value) => {
        dispatch(setValue({ field, value: parseFloat(value) || 0 }));
    };
    return (_jsxs("div", { className: "max-w-2xl mx-auto p-6", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Form 706-D Interview" }), _jsx("div", { className: "space-y-4", children: _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Sample Input Field" }), _jsx("input", { type: "number", className: "w-full p-2 border rounded", onChange: (e) => handleInputChange('sample_field', e.target.value), "aria-label": "Sample input for Form 706-D" })] }) }), _jsx("button", { onClick: onComplete, className: "mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700", children: "Complete Interview" })] }));
};
export default 706 - DInterview;
