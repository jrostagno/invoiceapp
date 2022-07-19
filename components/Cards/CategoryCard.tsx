import Link from "next/link";
import React, { useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";

const CategoryCard = ({ handleChange, handleSubmit, isDisabled }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <label className="text-gray-500">Category Limit</label>
        <Link href="https://www.afip.gob.ar/monotributo/categorias.asp">
          <a target="_blank">
            <h3 className="mr-2 text-sm text-gray-600 hover:text-red-400 hover:animate-bounce">
              All categories
            </h3>
          </a>
        </Link>
      </div>
      <input
        required
        className={`w-full h-8 p-2 mt-2 border ${
          isDisabled ? "bg-gray-200" : "bg-white"
        } rounded-md focus:outline-none hover:border-gray-300 focus:border-none`}
        type="number"
        placeholder="amount"
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
