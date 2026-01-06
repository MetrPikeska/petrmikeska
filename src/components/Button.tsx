import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({ children, variant = 'primary', onClick, type = 'button' }: ButtonProps) {
  const baseStyles = 'px-8 py-4 border-2 transition-colors tracking-wide';
  
  const variantStyles = {
    primary: 'bg-neutral-900 border-neutral-900 text-white hover:bg-neutral-700 hover:border-neutral-700',
    secondary: 'bg-transparent border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
}
