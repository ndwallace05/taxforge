import React from 'react';
import { InfoTooltip } from './InfoTooltip';

interface FormSectionProps {
  title: string;
  description?: string;
  lineNumbers?: string;
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  helpText?: string;
  required?: boolean;
  error?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  lineNumbers,
  children,
  className = '',
  collapsible = false,
  defaultExpanded = true,
  helpText,
  required = false,
  error,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  const toggleExpanded = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>
      {/* Section Header */}
      <div 
        className={`px-6 py-4 border-b border-gray-200 ${
          collapsible ? 'cursor-pointer hover:bg-gray-50' : ''
        }`}
        onClick={toggleExpanded}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {title}
                  {required && <span className="text-red-500 ml-1">*</span>}
                </h3>
                {lineNumbers && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Lines {lineNumbers}
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
              {description && (
                <p className="mt-1 text-sm text-gray-600">{description}</p>
              )}
              {error && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {error}
                </p>
              )}
            </div>
          </div>
          
          {collapsible && (
            <div className="flex items-center">
              <svg 
                className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Section Content */}
      {(!collapsible || isExpanded) && (
        <div className="px-6 py-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default FormSection;