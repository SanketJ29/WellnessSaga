import React from 'react';

function Input({ placeholder, name, type }) {
  return (
    <input
      className="border border-black p-2 mb-1 rounded-md w-full shadow appearance-none"
      placeholder={placeholder}
      name={name}
      type={type}
      step="0.0001"
    />
  );
}

export default Input;
