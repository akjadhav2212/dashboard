import React from 'react';

const WarningMessage = ({ message }) => {
  return (
    <div className="bg-red-100 border  px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Message!</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default WarningMessage;