import React from 'react';
import { useSelector } from 'react-redux';
import { select5498-ESAValues } from '../../store/slices/5498-esaSlice';

interface 5498-ESAFormProps {
  printMode?: boolean;
}

export const 5498-ESAForm: React.FC<5498-ESAFormProps> = ({ printMode = false }) => {
  const values = useSelector(select5498-ESAValues);

  return (
    <div className={`form-5498-esa ${printMode ? 'print-mode' : ''}`}>
      <div className="form-header">
        <h1>Form 5498-ESA</h1>
        <p>Department of the Treasury - Internal Revenue Service</p>
      </div>
      
      <div className="form-body">
        {/* Form fields would be rendered here based on schema */}
        <div className="form-line">
          <span className="line-number">1</span>
          <span className="line-description">Sample line description</span>
          <span className="line-value">{values.sample_field || ''}</span>
        </div>
      </div>
      
      <style jsx>{`
        .form-5498-esa {
          font-family: 'Times New Roman', serif;
          max-width: 8.5in;
          margin: 0 auto;
          background: white;
        }
        
        @media print {
          .form-5498-esa {
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
      `}</style>
    </div>
  );
};

export default 5498-ESAForm;
