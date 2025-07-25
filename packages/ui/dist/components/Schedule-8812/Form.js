import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useSelector } from 'react-redux';
import { selectSchedule } from -8812;
Values;
from;
'../../store/slices/schedule-8812Slice';
-8812;
FormProps;
{
    printMode ?  : boolean;
}
export const Schedule;
-8812;
Form: React.FC < Schedule - 8812;
FormProps > ;
({ printMode = false }) => {
    const values = useSelector(selectSchedule - 8812, Values);
    return (_jsxs("div", { className: `form-schedule-8812 ${printMode ? 'print-mode' : ''}`, children: [_jsxs("div", { className: "form-header", children: [_jsx("h1", { children: "Form Schedule-8812" }), _jsx("p", { children: "Department of the Treasury - Internal Revenue Service" })] }), _jsx("div", { className: "form-body", children: _jsxs("div", { className: "form-line", children: [_jsx("span", { className: "line-number", children: "1" }), _jsx("span", { className: "line-description", children: "Sample line description" }), _jsx("span", { className: "line-value", children: values.sample_field || '' })] }) }), _jsx("style", { jsx: true, children: `
        .form-schedule-8812 {
          font-family: 'Times New Roman', serif;
          max-width: 8.5in;
          margin: 0 auto;
          background: white;
        }
        
        @media print {
          .form-schedule-8812 {
            margin: 0;
            box-shadow: none;
          }
        }
        
        .form-header {
          text-align: center;
          border-bottom: 2px solid black;
          padding: 1rem;
        }
        
        .form-line {
          display: flex;
          padding: 0.25rem;
          border-bottom: 1px solid #ccc;
        }
        
        .line-number {
          width: 2rem;
          font-weight: bold;
        }
        
        .line-description {
          flex: 1;
          padding: 0 1rem;
        }
        
        .line-value {
          width: 6rem;
          text-align: right;
          border-bottom: 1px solid black;
        }
      ` })] }));
};
export default Schedule - 8812;
Form;
