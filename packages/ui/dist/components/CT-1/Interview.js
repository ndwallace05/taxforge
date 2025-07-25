import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, selectCT } from -1;
Values, selectCT - 1E;
rrors;
from;
'../../store/slices/ct-1Slice';
-1;
InterviewProps;
{
    onComplete ?  : () => void ;
}
export const CT;
-1;
Interview: React.FC < CT - 1;
InterviewProps > ;
({ onComplete }) => {
    const dispatch = useDispatch();
    const values = useSelector(selectCT - 1, Values);
    const errors = useSelector(selectCT - 1E, rrors);
    const handleInputChange = (field, value) => {
        dispatch(setValue({ field, value: parseFloat(value) || 0 }));
    };
    return (_jsxs("div", { className: "max-w-2xl mx-auto p-6", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Form CT-1 Interview" }), _jsx("div", { className: "space-y-4", children: _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Sample Input Field" }), _jsx("input", { type: "number", className: "w-full p-2 border rounded", onChange: (e) => handleInputChange('sample_field', e.target.value), "aria-label": "Sample input for Form CT-1" })] }) }), _jsx("button", { onClick: onComplete, className: "mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700", children: "Complete Interview" })] }));
};
export default CT - 1;
Interview;
