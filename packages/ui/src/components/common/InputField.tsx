import React, { useState } from 'react';
import { InfoTooltip } from './InfoTooltip';

interface InputFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'date';
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  helpText?: string;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoComplete?: string;
  readonly?: boolean;
  lineNumber?: string;
  validation?: {
    pattern?: RegExp;
    message?: string;
  };
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  disabled = false,
  required = false,
  error,
  helpText,
  placeholder,
  className = '',
  maxLength,
  minLength,
  pattern,
  autoComplete,
  readonly = false,
  lineNumber,
  validation,
}) => {
  const [validationError, setValidationError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const validateInput = (inputValue: string) => {
    if (validation && validation.pattern) {
      if (!validation.pattern.test(inputValue) && inputValue.length > 0) {
        setValidationError(validation.message || 'Invalid format');
        return false;
      }
    }
    setValidationError('');
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    validateInput(inputValue);
    onChange(inputValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    validateInput(value);
  };

  const displayError = error || validationError;
  const isReadonly = readonly || disabled;

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label */}
      <div className="flex items-center space-x-2">
        <label 
          htmlFor={name} 
          className={`block text-sm font-medium ${
            displayError ? 'text-red-700' : 'text-gray-700'
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        
        {lineNumber && (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
            {lineNumber}
          </span>
        )}
        
        {helpText && (
          <InfoTooltip content={helpText}>
            <svg className="h-4 w-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </InfoTooltip>
        )}
      </div>

      {/* Input Field */}
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={isReadonly}
          required={required}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          autoComplete={autoComplete}
          className={`
            block w-full px-3 py-2 border rounded-md shadow-sm
            focus:ring-2 focus:ring-offset-0 focus:outline-none
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
            ${displayError 
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }
            ${readonly ? 'bg-gray-100 cursor-not-allowed' : ''}
            ${isFocused ? 'ring-2' : ''}
          `}
          aria-describedby={`${name}-error ${name}-help`}
          aria-invalid={!!displayError}
        />
        
        {/* Character count for fields with maxLength */}
        {maxLength && isFocused && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <span className={`text-xs ${
              value.length > maxLength * 0.8 ? 'text-yellow-600' : 'text-gray-400'
            }`}>
              {value.length}/{maxLength}
            </span>
          </div>
        )}
      </div>

      {/* Error Message */}
      {displayError && (
        <p id={`${name}-error`} className="text-sm text-red-600 flex items-center">
          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          {displayError}
        </p>
      )}

      {/* Help Text */}
      {helpText && !displayError && (
        <p id={`${name}-help`} className="text-sm text-gray-500">
          {helpText}
        </p>
      )}
    </div>
  );
};

export default InputField;