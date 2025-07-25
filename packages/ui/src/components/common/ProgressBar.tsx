import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps?: string[];
  showLabels?: boolean;
  showPercentage?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'stepped' | 'minimal';
  color?: 'blue' | 'green' | 'purple' | 'indigo';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  steps = [],
  showLabels = true,
  showPercentage = true,
  className = '',
  size = 'md',
  variant = 'default',
  color = 'blue',
}) => {
  const percentage = Math.round((currentStep / totalSteps) * 100);
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-1';
      case 'lg':
        return 'h-3';
      case 'md':
      default:
        return 'h-2';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-500',
          text: 'text-green-600',
          ring: 'ring-green-500',
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          text: 'text-purple-600',
          ring: 'ring-purple-500',
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-500',
          text: 'text-indigo-600',
          ring: 'ring-indigo-500',
        };
      case 'blue':
      default:
        return {
          bg: 'bg-blue-500',
          text: 'text-blue-600',
          ring: 'ring-blue-500',
        };
    }
  };

  const colorClasses = getColorClasses();

  if (variant === 'minimal') {
    return (
      <div className={`space-y-2 ${className}`}>
        {showPercentage && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Progress
            </span>
            <span className={`text-sm font-medium ${colorClasses.text}`}>
              {percentage}%
            </span>
          </div>
        )}
        
        <div className={`w-full bg-gray-200 rounded-full ${getSizeClasses()}`}>
          <div
            className={`${colorClasses.bg} ${getSizeClasses()} rounded-full transition-all duration-300 ease-out`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }

  if (variant === 'stepped') {
    return (
      <div className={`space-y-4 ${className}`}>
        {showPercentage && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of {totalSteps}
            </span>
            <span className={`text-sm font-medium ${colorClasses.text}`}>
              {percentage}% Complete
            </span>
          </div>
        )}
        
        <div className="flex items-center">
          {Array.from({ length: totalSteps }, (_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            const stepLabel = steps[index] || `Step ${stepNumber}`;
            
            return (
              <React.Fragment key={stepNumber}>
                <div className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div
                    className={`
                      flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-medium
                      transition-all duration-200
                      ${
                        isCompleted
                          ? `${colorClasses.bg} border-transparent text-white`
                          : isCurrent
                          ? `border-2 ${colorClasses.ring} ${colorClasses.text} bg-white ring-4 ring-opacity-20`
                          : 'border-gray-300 text-gray-500 bg-white'
                      }
                    `}
                  >
                    {isCompleted ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      stepNumber
                    )}
                  </div>
                  
                  {/* Step Label */}
                  {showLabels && (
                    <span
                      className={`
                        mt-2 text-xs font-medium text-center max-w-20
                        ${
                          isCompleted || isCurrent
                            ? colorClasses.text
                            : 'text-gray-500'
                        }
                      `}
                    >
                      {stepLabel}
                    </span>
                  )}
                </div>
                
                {/* Connector Line */}
                {stepNumber < totalSteps && (
                  <div
                    className={`
                      flex-1 h-0.5 mx-2 transition-all duration-300
                      ${
                        isCompleted
                          ? colorClasses.bg
                          : 'bg-gray-300'
                      }
                    `}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            Progress
          </span>
          {showLabels && steps[currentStep - 1] && (
            <span className="text-sm text-gray-500">
              - {steps[currentStep - 1]}
            </span>
          )}
        </div>
        
        {showPercentage && (
          <span className={`text-sm font-medium ${colorClasses.text}`}>
            {percentage}%
          </span>
        )}
      </div>
      
      {/* Progress Bar */}
      <div className={`w-full bg-gray-200 rounded-full ${getSizeClasses()}`}>
        <div
          className={`
            ${colorClasses.bg} ${getSizeClasses()} rounded-full transition-all duration-500 ease-out
            relative overflow-hidden
          `}
          style={{ width: `${percentage}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
        </div>
      </div>
      
      {/* Step Indicators */}
      {showLabels && steps.length > 0 && (
        <div className="flex justify-between text-xs text-gray-500">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            
            return (
              <span
                key={index}
                className={`
                  transition-colors duration-200
                  ${
                    isCompleted || isCurrent
                      ? colorClasses.text + ' font-medium'
                      : 'text-gray-400'
                  }
                `}
              >
                {step}
              </span>
            );
          })}
        </div>
      )}
      
      {/* Current Step Info */}
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>
          Step {currentStep} of {totalSteps}
        </span>
        <span>
          {totalSteps - currentStep} steps remaining
        </span>
      </div>
    </div>
  );
};

// Specialized progress bars for common use cases
export const FormProgressBar: React.FC<{
  currentStep: number;
  steps: string[];
  className?: string;
}> = ({ currentStep, steps, className }) => {
  return (
    <ProgressBar
      currentStep={currentStep}
      totalSteps={steps.length}
      steps={steps}
      variant="stepped"
      showLabels={true}
      showPercentage={true}
      className={className}
    />
  );
};

export const SimpleProgressBar: React.FC<{
  percentage: number;
  label?: string;
  className?: string;
  color?: 'blue' | 'green' | 'purple' | 'indigo';
}> = ({ percentage, label, className, color = 'blue' }) => {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));
  const currentStep = Math.round((clampedPercentage / 100) * 100);
  
  return (
    <ProgressBar
      currentStep={currentStep}
      totalSteps={100}
      variant="minimal"
      showLabels={false}
      showPercentage={true}
      color={color}
      className={className}
    />
  );
};

export default ProgressBar;