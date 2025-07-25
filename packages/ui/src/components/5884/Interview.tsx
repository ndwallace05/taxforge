import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, select5884Values, select5884Errors } from '../../store/slices/5884Slice';

interface 5884InterviewProps {
  onComplete?: () => void;
}

export const 5884Interview: React.FC<5884InterviewProps> = ({ onComplete }) => {
  const dispatch = useDispatch();
  const values = useSelector(select5884Values);
  const errors = useSelector(select5884Errors);

  const handleInputChange = (field: string, value: string) => {
    dispatch(setValue({ field, value: parseFloat(value) || 0 }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Form 5884 Interview</h1>
      
      <div className="space-y-4">
        {/* Dynamic form fields would be generated here based on schema */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Sample Input Field
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            onChange={(e) => handleInputChange('sample_field', e.target.value)}
            aria-label="Sample input for Form 5884"
          />
        </div>
      </div>
      
      <button
        onClick={onComplete}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Complete Interview
      </button>
    </div>
  );
};

export default 5884Interview;
