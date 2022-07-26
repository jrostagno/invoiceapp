import React from "react";
import { PanelCard } from "../Panel/PanelCard";
import NumLabels from "../Text/NumLabels";

const YearlyInvoice = ({ amount, label }) => {
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
