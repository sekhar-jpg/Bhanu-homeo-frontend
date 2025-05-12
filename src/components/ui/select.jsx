import React from 'react';

const Select = ({ children, ...props }) => {
  return (
    <select {...props} className="border rounded p-2 w-full">
      {children}
    </select>
  );
};

export { Select };
