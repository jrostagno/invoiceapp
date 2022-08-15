import React from "react";
import { InfoLabels } from "../../types";

const InfoLabels: React.FC<InfoLabels> = ({ children, className }) => {
  return (
    <label
      className={`${
        className || ""
      } sm:text-xl text-sm font-medium text-gray-600 dark:text-gray-400 dark:opacity-60`}
    >
      {children}
    </label>
  );
};

export default InfoLabels;
