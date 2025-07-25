import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, selectW-9Values, selectW-9Errors } from '../../store/slices/w-9Slice';

interface W-9InterviewProps {
  onComplete?: () => void;
}

export const W-9Interview: React.FC<W-9InterviewProps> = ({ onComplete }) => {
  const dispatch = useDispatch();
  const values = useSelector(selectW-9Values);
  const errors = useSelector(selectW-9Errors);

  const handleInputChange = (field: string, value: string) => {
    dispatch(setValue({ field, value: parseFloat(value) || 0 }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Form W-9 Interview</h1>
      
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
            aria-label="Sample input for Form W-9"
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

export default W-9Interview;
