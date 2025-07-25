import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, select8027Values, select8027Errors } from '../../store/slices/8027Slice';

interface 8027InterviewProps {
  onComplete?: () => void;
}

export const 8027Interview: React.FC<8027InterviewProps> = ({ onComplete }) => {
  const dispatch = useDispatch();
  const values = useSelector(select8027Values);
  const errors = useSelector(select8027Errors);

  const handleInputChange = (field: string, value: string) => {
    dispatch(setValue({ field, value: parseFloat(value) || 0 }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Form 8027 Interview</h1>
      
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
            aria-label="Sample input for Form 8027"
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

export default 8027Interview;
