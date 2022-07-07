import React from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import { PanelCard } from "../Panel/PanelCard";

const CategoryCard = () => {
  return (
    <PanelCard size="full">
      <div className="flex justify-between">
        <label className="text-orange-500">Category Limit</label>
        <h3 className="mr-2 text-sm text-orange-600">All categories</h3>
      </div>
      <input
        required
        placeholder="amount..."
        className="w-full h-8 p-2 mt-2 border rounded-md focus:outline-none hover:border-gray-300 focus:border-none"
        type="number"
      ></input>
      <div className="flex justify-end">
        <ButtonPrimary>Save</ButtonPrimary>
      </div>
    </PanelCard>
  );
};

export default CategoryCard;
