import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useSelector } from 'react-redux';
import { selectSchedule } from -EICValues;
from;
'../../store/slices/schedule-eicSlice';
-EICFormProps;
{
    printMode ?  : boolean;
}
export const Schedule;
-EICForm;
React.FC < Schedule - EICFormProps > ;
({ printMode = false }) => {
    const values = useSelector(selectSchedule - EICValues);
    return (_jsxs("div", { className: `form-schedule-eic ${printMode ? 'print-mode' : ''}`, children: [_jsxs("div", { className: "form-header", children: [_jsx("h1", { children: "Form Schedule-EIC" }), _jsx("p", { children: "Department of the Treasury - Internal Revenue Service" })] }), _jsx("div", { className: "form-body", children: _jsxs("div", { className: "form-line", children: [_jsx("span", { className: "line-number", children: "1" }), _jsx("span", { className: "line-description", children: "Sample line description" }), _jsx("span", { className: "line-value", children: values.sample_field || '' })] }) }), _jsx("style", { jsx: true, children: `
        .form-schedule-eic {
          font-family: 'Times New Roman', serif;
          max-width: 8.5in;
          margin: 0 auto;
          background: white;
        }
        
        @media print {
          .form-schedule-eic {
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
export default Schedule - EICForm;
