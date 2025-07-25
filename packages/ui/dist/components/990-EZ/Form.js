import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useSelector } from 'react-redux';
import { select990 } from -EZValues;
from;
'../../store/slices/990-ezSlice';
interface;
990 - EZFormProps;
{
    printMode ?  : boolean;
}
export const ;
990 - EZForm;
React.FC < 990 - EZFormProps > ;
({ printMode = false }) => {
    const values = useSelector(select990 - EZValues);
    return (_jsxs("div", { className: `form-990-ez ${printMode ? 'print-mode' : ''}`, children: [_jsxs("div", { className: "form-header", children: [_jsx("h1", { children: "Form 990-EZ" }), _jsx("p", { children: "Department of the Treasury - Internal Revenue Service" })] }), _jsx("div", { className: "form-body", children: _jsxs("div", { className: "form-line", children: [_jsx("span", { className: "line-number", children: "1" }), _jsx("span", { className: "line-description", children: "Sample line description" }), _jsx("span", { className: "line-value", children: values.sample_field || '' })] }) }), _jsx("style", { jsx: true, children: `
        .form-990-ez {
          font-family: 'Times New Roman', serif;
          max-width: 8.5in;
          margin: 0 auto;
          background: white;
        }
        
        @media print {
          .form-990-ez {
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
export default 990 - EZForm;
