import React from "react";

interface InfoLabels {
  children: React.ReactNode;
  className?: string;
}
const InfoLabels: React.FC<InfoLabels> = ({ children, className }) => {
  return (
    <label className={`${className || ""} text-2xl font-medium text-gray-600`}>
      {children}
    </label>
  );
};

export default InfoLabels;
