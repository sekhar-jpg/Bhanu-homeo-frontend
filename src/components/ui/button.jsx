import React from 'react';

const Button = (props) => {
  return (
    <button {...props} className="bg-blue-500 text-white font-bold py-2 px-4 rounded" />
  );
};

export { Button };
