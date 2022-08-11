import React from "react";
import { LabelsProps } from "../../types";

const LabelForm: React.FC<LabelsProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label
      className={`${
        className || ""
      } text-gray-700 dark:text-slate-200  w-full text-base`}
      {...props}
    >
      {children}
    </label>
  );
};

export default LabelForm;
