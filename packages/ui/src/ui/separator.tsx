import React from 'react';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ 
  orientation = 'horizontal', 
  className = '' 
}) => {
  const orientationClasses = orientation === 'horizontal' 
    ? 'w-full h-px border-t border-gray-200' 
    : 'h-full w-px border-l border-gray-200';

  return (
    <div 
      className={`${orientationClasses} ${className}`}
      role="separator"
      aria-orientation={orientation}
    />
  );
};