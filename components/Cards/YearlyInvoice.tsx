import React from "react";
import { YearlyInvoiceProps } from "../../types";

import NumLabels from "../Text/NumLabels";

const YearlyInvoice: React.FC<YearlyInvoiceProps> = ({ amount, label }) => {
  return (
    <div className="flex justify-between">
      <label className="text-2xl text-red-800 dark:text-red-400 dark:text-opacity-70">
        {label}
      </label>
      <NumLabels
        className={`${parseFloat(amount) < 0 ? "text-red-500" : ""}`}
      >{`${amount} `}</NumLabels>
    </div>
  );
};

export default YearlyInvoice;

//text-[#e2e8f0]
