import React from "react";

const InputForm = ({ disabled = false, ...props }) => {
  return (
    <input
      className="w-full p-2 text-sm font-normal text-orange-500 placeholder-gray-400 border border-orange-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      disabled={disabled}
      {...props}
    />
  );
};

export default InputForm;
