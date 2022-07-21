import React from "react";

interface InfoLabels {
  children: React.ReactNode;
  className?: string;
}
const InfoLabels: React.FC<InfoLabels> = ({ children, className }) => {
  return (
    <label
      className={`${
        className || ""
      } text-xl font-medium text-gray-600 dark:text-gray-400 dark:opacity-60`}
    >
      {children}
    </label>
  );
};

export default InfoLabels;
