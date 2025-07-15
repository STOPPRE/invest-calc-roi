import React from 'react';

const Input = ({ label, id, value, onChange, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-light">{label}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        {...props}
        className="mt-1 block w-full px-3 py-2 bg-surface border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary sm:text-sm"
      />
    </div>
  );
};

export default Input; 