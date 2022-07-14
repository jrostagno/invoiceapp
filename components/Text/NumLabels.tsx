import React from "react";

interface NumLabelsProps {
  children: React.ReactNode;
  className?: string;
}

const NumLabels: React.FC<NumLabelsProps> = ({ children, className }) => {
  return (
    <label className={`${className || ""} text-xl text-slate-600`}>
      {children}
    </label>
  );
};

export default NumLabels;
