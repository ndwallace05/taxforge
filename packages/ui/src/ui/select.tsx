import React, { useState, useRef, useEffect } from 'react';

interface SelectProps {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface SelectValueProps {
  placeholder?: string;
  className?: string;
}

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

const SelectContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  disabled?: boolean;
}>({} as any);

export const Select: React.FC<SelectProps> = ({ 
  children, 
  value, 
  onValueChange, 
  disabled = false,
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SelectContext.Provider value={{ value, onValueChange, isOpen, setIsOpen, disabled }}>
      <div ref={selectRef} className={`relative ${className}`}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children, className = '' }) => {
  const { isOpen, setIsOpen, disabled } = React.useContext(SelectContext);

  return (
    <button
      type="button"
      onClick={() => !disabled && setIsOpen(!isOpen)}
      disabled={disabled}
      className={`
        flex items-center justify-between w-full px-3 py-2 text-left
        border border-gray-300 rounded-md shadow-sm bg-white
        focus:outline-none focus:ring-blue-500 focus:border-blue-500
        disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
      <svg
        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

export const SelectValue: React.FC<SelectValueProps> = ({ placeholder = 'Select...', className = '' }) => {
  const { value } = React.useContext(SelectContext);
  
  return (
    <span className={`${!value ? 'text-gray-400' : ''} ${className}`}>
      {value || placeholder}
    </span>
  );
};

export const SelectContent: React.FC<SelectContentProps> = ({ children, className = '' }) => {
  const { isOpen } = React.useContext(SelectContext);

  if (!isOpen) return null;

  return (
    <div className={`
      absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg
      max-h-60 overflow-auto
      ${className}
    `}>
      {children}
    </div>
  );
};

export const SelectItem: React.FC<SelectItemProps> = ({ children, value, className = '' }) => {
  const { onValueChange, setIsOpen, value: selectedValue } = React.useContext(SelectContext);
  const isSelected = selectedValue === value;

  return (
    <div
      onClick={() => {
        onValueChange?.(value);
        setIsOpen(false);
      }}
      className={`
        px-3 py-2 cursor-pointer hover:bg-gray-100
        ${isSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-900'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};