import React from 'react';

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  showPercentage?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({ 
  value, 
  max = 100, 
  className = '', 
  showPercentage = false 
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={`progress-bar ${className}`}>
      <div 
        className="progress-fill" 
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
      {showPercentage && (
        <span className="text-xs text-gray-600 mt-1">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
};