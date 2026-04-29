import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'px-8 py-3 font-semibold rounded transition-colors w-full sm:w-auto text-sm md:text-base';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-red-700 shadow-md shadow-red-500/20',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
    navPrimary: 'px-6 py-2.5 text-[15px] font-semibold text-white bg-primary rounded hover:bg-red-700 transition-colors shadow-md shadow-red-500/20',
    cardAction: 'px-6 py-2 bg-primary text-white text-sm font-semibold rounded mt-auto hover:bg-red-700 transition-colors'
  };

  return (
    <button className={`${variants[variant] || baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
