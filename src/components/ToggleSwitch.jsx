import React from 'react';

const ToggleSwitch = ({ label, id, checked, onChange, ...props }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-text-light">{label}</span>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          {...props}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
        />
        <label
          htmlFor={id}
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
    </div>
  );
};

export default ToggleSwitch; 