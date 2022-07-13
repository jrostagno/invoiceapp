import React from "react";
import { PanelCard } from "../Panel/PanelCard";
import NumLabels from "../Text/NumLabels";

const YearlyInvoice = () => {
  return (
    <PanelCard size="full">
      <div className="flex justify-between">
        <label className="text-2xl text-red-800 ">Yearly invoicing</label>
        <NumLabels>$2000000</NumLabels>
      </div>
    </PanelCard>
  );
};

export default YearlyInvoice;
