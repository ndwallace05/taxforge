import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, select706-GS(D)Values, select706-GS(D)Errors } from '../../store/slices/706-gs(d)Slice';

interface 706-GS(D)InterviewProps {
  onComplete?: () => void;
}

export const 706-GS(D)Interview: React.FC<706-GS(D)InterviewProps> = ({ onComplete }) => {
  const dispatch = useDispatch();
  const values = useSelector(select706-GS(D)Values);
  const errors = useSelector(select706-GS(D)Errors);

  const handleInputChange = (field: string, value: string) => {
    dispatch(setValue({ field, value: parseFloat(value) || 0 }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Form 706-GS(D) Interview</h1>
      
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
            aria-label="Sample input for Form 706-GS(D)"
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

export default 706-GS(D)Interview;
