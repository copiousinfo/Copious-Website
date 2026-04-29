import React from 'react';

export default function SectionHeading({ children, className = '', dark = true }) {
  const colorClass = dark ? 'text-dark' : 'text-white';

  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${colorClass} ${className}`}>
      {children}
    </h2>
  );
}
