import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, select2210Values, select2210Errors } from '../../store/slices/2210Slice';

interface 2210InterviewProps {
  onComplete?: () => void;
}

export const 2210Interview: React.FC<2210InterviewProps> = ({ onComplete }) => {
  const dispatch = useDispatch();
  const values = useSelector(select2210Values);
  const errors = useSelector(select2210Errors);

  const handleInputChange = (field: string, value: string) => {
    dispatch(setValue({ field, value: parseFloat(value) || 0 }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Form 2210 Interview</h1>
      
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
            aria-label="Sample input for Form 2210"
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

export default 2210Interview;
