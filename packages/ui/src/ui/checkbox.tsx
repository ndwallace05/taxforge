import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  className?: string;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  className = '', 
  label,
  id,
  ...props 
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className="
          h-4 w-4 text-blue-600 border-gray-300 rounded
          focus:ring-blue-500 focus:ring-2
          disabled:opacity-50 disabled:cursor-not-allowed
        "
        {...props}
      />
      {label && (
        <label 
          htmlFor={checkboxId} 
          className="ml-2 text-sm text-gray-700 cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
};