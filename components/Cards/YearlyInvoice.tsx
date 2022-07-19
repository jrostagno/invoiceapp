import React from "react";
import { PanelCard } from "../Panel/PanelCard";
import NumLabels from "../Text/NumLabels";

const YearlyInvoice = ({ amount, label }) => {
  return (
    <div className="flex justify-between">
      <label className="text-2xl text-red-800 ">{label}</label>
      <NumLabels
        className={`${parseFloat(amount) < 0 ? "text-red-500" : ""}`}
      >{`$ ${amount} `}</NumLabels>
    </div>
  );
};

export default YearlyInvoice;
