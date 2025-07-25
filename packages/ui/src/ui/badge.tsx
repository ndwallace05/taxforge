import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className = '' 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-100 text-gray-800 border border-gray-200';
      case 'outline':
        return 'bg-transparent text-gray-700 border border-gray-300';
      case 'destructive':
        return 'bg-red-100 text-red-800 border border-red-200';
      case 'default':
      default:
        return 'bg-blue-100 text-blue-800 border border-blue-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getVariantClasses()} ${className}`}>
      {children}
    </span>
  );
};