import React from 'react';
import { InfoTooltip } from './InfoTooltip';

interface CalculatedFieldProps {
  label: string;
  value: number;
  lineNumber?: string;
  calculation?: string;
  className?: string;
  highlight?: boolean;
  important?: boolean;
  error?: string;
  helpText?: string;
  prefix?: string;
  suffix?: string;
  showZero?: boolean;
  format?: 'currency' | 'number' | 'percentage';
  precision?: number;
}

export const CalculatedField: React.FC<CalculatedFieldProps> = ({
  label,
  value,
  lineNumber,
  calculation,
  className = '',
  highlight = false,
  important = false,
  error,
  helpText,
  prefix = '',
  suffix = '',
  showZero = true,
  format = 'currency',
  precision = 0,
}) => {
  const formatValue = (amount: number): string => {
    if (amount === 0 && !showZero) return '';
    
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: precision,
          maximumFractionDigits: precision,
        }).format(amount);
      
      case 'percentage':
        return new Intl.NumberFormat('en-US', {
          style: 'percent',
          minimumFractionDigits: precision,
          maximumFractionDigits: precision,
        }).format(amount / 100);
      
      case 'number':
      default:
        return new Intl.NumberFormat('en-US', {
          minimumFractionDigits: precision,
          maximumFractionDigits: precision,
        }).format(amount);
    }
  };

  const getValueColor = () => {
    if (error) return 'text-red-600';
    if (important) return 'text-gray-900';
    if (highlight) return 'text-green-600';
    if (value < 0) return 'text-red-600';
    if (value > 0) return 'text-green-600';
    return 'text-gray-600';
  };

  const getBackgroundColor = () => {
    if (error) return 'bg-red-50 border-red-200';
    if (important) return 'bg-blue-50 border-blue-200';
    if (highlight) return 'bg-green-50 border-green-200';
    return 'bg-gray-50 border-gray-200';
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label */}
      <div className="flex items-center space-x-2">
        <label className={`block text-sm font-medium ${
          error ? 'text-red-700' : 'text-gray-700'
        }`}>
          {label}
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
        
        {calculation && (
          <InfoTooltip content={`Calculation: ${calculation}`} position="right">
            <svg className="h-4 w-4 text-blue-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </InfoTooltip>
        )}
      </div>

      {/* Value Display */}
      <div className={`
        relative p-3 border rounded-md
        ${getBackgroundColor()}
        ${important ? 'border-2' : 'border'}
      `}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Calculation Icon */}
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            
            {/* Auto-calculated indicator */}
            <span className="text-xs text-gray-500 font-medium">
              AUTO-CALCULATED
            </span>
          </div>
          
          {/* Value */}
          <div className={`text-right ${
            important ? 'text-xl font-bold' : 'text-lg font-semibold'
          } ${getValueColor()}`}>
            {prefix}
            {formatValue(value)}
            {suffix}
          </div>
        </div>
        
        {/* Calculation Details */}
        {calculation && (
          <div className="mt-2 pt-2 border-t border-gray-200">
            <div className="text-xs text-gray-600 font-mono">
              {calculation}
            </div>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-sm text-red-600 flex items-center">
          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}

      {/* Help Text */}
      {helpText && !error && (
        <p className="text-sm text-gray-500">
          {helpText}
        </p>
      )}
    </div>
  );
};

// Specialized calculated field components
export const TaxCalculatedField: React.FC<Omit<CalculatedFieldProps, 'format' | 'important'>> = (props) => (
  <CalculatedField {...props} format="currency" important={true} />
);

export const PercentageCalculatedField: React.FC<Omit<CalculatedFieldProps, 'format'>> = (props) => (
  <CalculatedField {...props} format="percentage" precision={2} />
);

export const NumberCalculatedField: React.FC<Omit<CalculatedFieldProps, 'format'>> = (props) => (
  <CalculatedField {...props} format="number" />
);

export default CalculatedField;