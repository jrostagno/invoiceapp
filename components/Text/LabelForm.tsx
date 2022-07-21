import React from "react";

interface LabelsProps {
  className: string;
  children: React.ReactNode;
}

const LabelForm: React.FC<LabelsProps> = ({ className, children }) => {
  return (
    <label
      className={`${
        className || ""
      } text-gray-700 dark:text-slate-200  w-full text-base`}
    >
      {children}
    </label>
  );
};

export default LabelForm;
