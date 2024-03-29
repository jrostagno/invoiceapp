import React from "react";
import { NumLabelsProps } from "../../types";

const NumLabels: React.FC<NumLabelsProps> = ({ children, className }) => {
  return (
    <label
      className={`${className || ""} sm:text-xl text-base  
       "text-slate-600 dark:text-slate-400 dark:opacity-60"
       `}
    >
      {children}
    </label>
  );
};

export default NumLabels;
