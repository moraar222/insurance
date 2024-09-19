import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: React.FC<CheckboxProps> = ({ className, ...props }) => {
  return (
    <input
      type="checkbox"
      className={`form-checkbox h-4 w-4 text-primary focus:ring focus:ring-opacity-50 ${className}`}
      {...props}
    />
  );
};
