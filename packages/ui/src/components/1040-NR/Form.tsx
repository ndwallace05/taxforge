import React from 'react';
import { useSelector } from 'react-redux';
import { select1040-NRValues } from '../../store/slices/1040-nrSlice';

interface 1040-NRFormProps {
  printMode?: boolean;
}

export const 1040-NRForm: React.FC<1040-NRFormProps> = ({ printMode = false }) => {
  const values = useSelector(select1040-NRValues);

  return (
    <div className={`form-1040-nr ${printMode ? 'print-mode' : ''}`}>
      <div className="form-header">
        <h1>Form 1040-NR</h1>
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
        .form-1040-nr {
          font-family: 'Times New Roman', serif;
          max-width: 8.5in;
          margin: 0 auto;
          background: white;
        }
        
        @media print {
          .form-1040-nr {
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

export default 1040-NRForm;
