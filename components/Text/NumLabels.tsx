import React from "react";

interface NumLabelsProps {
  children: React.ReactNode;
  className?: string;
}

const NumLabels: React.FC<NumLabelsProps> = ({ children, className }) => {
  return (
    <label className={`${className || ""} text-2xl text-orange-400`}>
      {children}
    </label>
  );
};

export default NumLabels;