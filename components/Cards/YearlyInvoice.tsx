import React from "react";
import { CardYearlyInvoiceProps } from "../../types";

import NumLabels from "../Text/NumLabels";

const YearlyInvoice: React.FC<CardYearlyInvoiceProps> = ({ amount, label }) => {
  return (
    <div className="flex justify-between">
      <label className="text-lg tracking-wide text-red-800 sm:text-2xl dark:text-red-400 dark:text-opacity-70">
        {label}
      </label>
      <NumLabels
        className={`${amount.includes("-") ? "text-red-500" : ""}`}
      >{`${amount} `}</NumLabels>
    </div>
  );
};

export default YearlyInvoice;
