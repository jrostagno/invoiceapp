import React, { useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import { PanelCard } from "../Panel/PanelCard";

const CategoryCard = ({ handleChange, category, handleSubmit, isDisabled }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <label className="text-gray-500">Category Limit</label>
        <h3 className="mr-2 text-sm text-gray-600">All categories</h3>
      </div>
      <input
        required
        placeholder="amount..."
        className={`w-full h-8 p-2 mt-2 border ${
          isDisabled ? "bg-gray-200" : "bg-white"
        } rounded-md focus:outline-none hover:border-gray-300 focus:border-none`}
        type="number"
        onChange={handleChange}
      ></input>

      <div className="flex justify-end">
        <ButtonPrimary type="submit">
          {isDisabled ? "Edit" : "Save"}
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default CategoryCard;
