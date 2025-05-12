import React from 'react';

const Textarea = (props) => {
  return (
    <textarea {...props} className="border rounded p-2 w-full" />
  );
};

export { Textarea };
