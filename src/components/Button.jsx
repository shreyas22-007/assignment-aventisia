import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button', variant = 'primary' }) => {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-colors border focus:outline-none rounded-lg text-sm px-4 py-2";
  
  const variants = {
    primary: "bg-[var(--color-primary)] hover:bg-indigo-700 text-white border-transparent shadow-sm",
    secondary: "bg-white hover:bg-slate-50 text-slate-700 border-slate-200",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
