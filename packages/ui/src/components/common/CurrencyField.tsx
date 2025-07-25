import React, { useState, useEffect } from 'react';
import { InfoTooltip } from './InfoTooltip';

interface CurrencyFieldProps {
  label: string;
  name: string;
  value?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  helpText?: string;
  placeholder?: string;
  className?: string;
  lineNumber?: string;
  min?: number;
  max?: number;
  validation?: {
    min?: number;
    max?: number;
    message?: string;
  };
  highlight?: boolean;
  important?: boolean;
  calculation?: string;
  readonly?: boolean;
}

export const CurrencyField: React.FC<CurrencyFieldProps> = ({
  label,
  name,
  value = 0,
  onChange,
  disabled = false,
  required = false,
  error,
  helpText,
  placeholder = '0',
  className = '',
  lineNumber,
  min,
  max,
  validation,
  highlight = false,
  important = false,
  calculation,
  readonly = false,
}) => {
  const [displayValue, setDisplayValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Format number as currency for display
  const formatCurrency = (amount: number): string => {
    if (amount === 0) return '';
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.abs(amount));
  };

  // Parse currency string to number
  const parseCurrency = (str: string): number => {
    const cleaned = str.replace(/[^0-9.-]/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  };

  // Update display value when value prop changes
  useEffect(() => {
    if (!isFocused) {
      setDisplayValue(formatCurrency(value));
    }
  }, [value, isFocused]);

  // Validate input
  const validateInput = (inputValue: number) => {
    let errorMessage = '';

    if (validation) {
      if (validation.min !== undefined && inputValue < validation.min) {
        errorMessage = validation.message || `Value must be at least ${validation.min}`;
      } else if (validation.max !== undefined && inputValue > validation.max) {
        errorMessage = validation.message || `Value cannot exceed ${validation.max}`;
      }
    }

    if (min !== undefined && inputValue < min) {
      errorMessage = `Value must be at least ${min}`;
    }
    if (max !== undefined && inputValue > max) {
      errorMessage = `Value cannot exceed ${max}`;
    }

    setValidationError(errorMessage);
    return errorMessage === '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setDisplayValue(inputValue);

    const numericValue = parseCurrency(inputValue);
    validateInput(numericValue);
    onChange(numericValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
    // Show raw number when focused
    setDisplayValue(value === 0 ? '' : value.toString());
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Format as currency when not focused
    setDisplayValue(formatCurrency(value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter, period, minus
    if ([
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Period', 'Minus',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'
    ].includes(e.key)) {
      return;
    }
    
    // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z
    if (e.ctrlKey && ['a', 'c', 'v', 'x', 'z'].includes(e.key.toLowerCase())) {
      return;
    }
    
    // Ensure that it is a number and stop the keypress
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const displayError = error || validationError;
  const isHighlighted = highlight || important;
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
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className={`text-gray-500 sm:text-sm ${
            isHighlighted ? 'font-semibold' : ''
          }`}>
            $
          </span>
        </div>
        
        <input
          type="text"
          id={name}
          name={name}
          value={displayValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          disabled={isReadonly}
          required={required}
          placeholder={placeholder}
          className={`
            block w-full pl-7 pr-3 py-2 border rounded-md shadow-sm text-right
            focus:ring-2 focus:ring-offset-0 focus:outline-none
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
            ${displayError 
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
              : isHighlighted
                ? 'border-green-300 bg-green-50 focus:ring-green-500 focus:border-green-500'
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }
            ${important ? 'font-semibold text-lg' : ''}
            ${readonly ? 'bg-gray-100 cursor-not-allowed' : ''}
          `}
          aria-describedby={`${name}-error ${name}-help`}
          aria-invalid={!!displayError}
        />
        
        {/* Calculation Display */}
        {calculation && !isFocused && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <InfoTooltip content={`Calculation: ${calculation}`} position="left">
              <svg className="h-4 w-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </InfoTooltip>
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

      {/* Value Display for Important Fields */}
      {important && value > 0 && (
        <div className="text-right">
          <span className="text-lg font-bold text-gray-900">
            ${new Intl.NumberFormat('en-US').format(value)}
          </span>
        </div>
      )}
    </div>
  );
};

export default CurrencyField;