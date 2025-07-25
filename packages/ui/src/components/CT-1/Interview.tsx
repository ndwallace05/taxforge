import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, selectCT-1Values, selectCT-1Errors } from '../../store/slices/ct-1Slice';

interface CT-1InterviewProps {
  onComplete?: () => void;
}

export const CT-1Interview: React.FC<CT-1InterviewProps> = ({ onComplete }) => {
  const dispatch = useDispatch();
  const values = useSelector(selectCT-1Values);
  const errors = useSelector(selectCT-1Errors);

  const handleInputChange = (field: string, value: string) => {
    dispatch(setValue({ field, value: parseFloat(value) || 0 }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Form CT-1 Interview</h1>
      
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
            aria-label="Sample input for Form CT-1"
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

export default CT-1Interview;
