import React from "react";

const LabelForm = ({ className, children }) => {
  return (
    <label className={`${className || ""} text-orange-700 w-full text-base`}>
      {children}
    </label>
  );
};

export default LabelForm;
