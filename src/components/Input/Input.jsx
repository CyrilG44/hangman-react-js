import React from 'react';
import './Input.css';
// without css module as input is also part of global.css

const Input = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`input ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
