import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useSelector } from 'react-redux';
import { select709 } from -AValues;
from;
'../../store/slices/709-aSlice';
interface;
709 - AFormProps;
{
    printMode ?  : boolean;
}
export const ;
709 - AForm;
React.FC < 709 - AFormProps > ;
({ printMode = false }) => {
    const values = useSelector(select709 - AValues);
    return (_jsxs("div", { className: `form-709-a ${printMode ? 'print-mode' : ''}`, children: [_jsxs("div", { className: "form-header", children: [_jsx("h1", { children: "Form 709-A" }), _jsx("p", { children: "Department of the Treasury - Internal Revenue Service" })] }), _jsx("div", { className: "form-body", children: _jsxs("div", { className: "form-line", children: [_jsx("span", { className: "line-number", children: "1" }), _jsx("span", { className: "line-description", children: "Sample line description" }), _jsx("span", { className: "line-value", children: values.sample_field || '' })] }) }), _jsx("style", { jsx: true, children: `
        .form-709-a {
          font-family: 'Times New Roman', serif;
          max-width: 8.5in;
          margin: 0 auto;
          background: white;
        }
        
        @media print {
          .form-709-a {
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
export default 709 - AForm;
