import Link from "next/link";
import React from "react";
import { CategoryCardProps } from "../../types";
import ButtonPrimary from "../Button/ButtonPrimary";

const CategoryCard: React.FC<CategoryCardProps> = ({
  handleChange,
  handleSubmit,
  isDisabled,
  category,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <label className="text-sm text-gray-500 sm:text-lg dark:text-green-300 dark:opacity-60">
          Category Limit
        </label>
        <Link href="https://www.afip.gob.ar/monotributo/categorias.asp">
          <a target="_blank">
            <h3 className="mr-2 text-xs text-gray-600 sm:text-sm dark:text-gray-300 dark:opacity-60 dark:hover:text-red-400 hover:text-red-400 hover:animate-bounce">
              All categories
            </h3>
          </a>
        </Link>
      </div>
      <input
        required
        className={`w-full h-8 p-2 mt-2 border ${
          isDisabled ? "bg-gray-200" : "bg-white"
        } rounded-md dark:text-slate-700 font-semibold focus:outline-none hover:border-gray-300 focus:border-none`}
        type="number"
        placeholder="amount"
        value={category || ""}
        onChange={handleChange}
      ></input>

      <div className="flex justify-end">
        <ButtonPrimary onClick={() => handleSubmit}>
          {isDisabled ? "Edit" : "Save"}
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default CategoryCard;
