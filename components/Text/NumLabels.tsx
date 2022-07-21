import React from "react";

interface NumLabelsProps {
  children: React.ReactNode;
  className?: string;
  warningLimit?: boolean;
}

const NumLabels: React.FC<NumLabelsProps> = ({ children, className }) => {
  return (
    <label
      className={`${className || ""} text-xl  
       "text-slate-600 dark:text-slate-400 dark:opacity-60"
       `}
    >
      {children}
    </label>
  );
};

export default NumLabels;
