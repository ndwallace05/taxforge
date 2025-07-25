import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useSelector } from 'react-redux';
import { select944 } from -XValues;
from;
'../../store/slices/944-xSlice';
interface;
944 - XFormProps;
{
    printMode ?  : boolean;
}
export const ;
944 - XForm;
React.FC < 944 - XFormProps > ;
({ printMode = false }) => {
    const values = useSelector(select944 - XValues);
    return (_jsxs("div", { className: `form-944-x ${printMode ? 'print-mode' : ''}`, children: [_jsxs("div", { className: "form-header", children: [_jsx("h1", { children: "Form 944-X" }), _jsx("p", { children: "Department of the Treasury - Internal Revenue Service" })] }), _jsx("div", { className: "form-body", children: _jsxs("div", { className: "form-line", children: [_jsx("span", { className: "line-number", children: "1" }), _jsx("span", { className: "line-description", children: "Sample line description" }), _jsx("span", { className: "line-value", children: values.sample_field || '' })] }) }), _jsx("style", { jsx: true, children: `
        .form-944-x {
          font-family: 'Times New Roman', serif;
          max-width: 8.5in;
          margin: 0 auto;
          background: white;
        }
        
        @media print {
          .form-944-x {
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
export default 944 - XForm;
