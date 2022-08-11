import React, { FC } from "react";
import { Invoices, PaginationProps } from "../../types";
import ButtonSecondary from "../Button/ButtonSecondary";

const Pagination: FC<PaginationProps> = ({
  pageNumbers,
  nextPage,
  prevPage,
  currentPage,
}) => {
  return (
    <div className="flex items-center justify-between p-1 px-6 mt-3">
      <h2 className="text-xs font-normal text-gray-400 font-inter">
        Page {currentPage} of {pageNumbers}
      </h2>
      <div className="flex gap-3">
        <ButtonSecondary
          className={`${currentPage === 1 ? "hidden" : "block"}`}
          onClick={() => prevPage()}
        >
          Previous
        </ButtonSecondary>
        <ButtonSecondary
          className={`${currentPage === pageNumbers ? "hidden" : "block"}`}
          onClick={() => nextPage()}
        >
          Next
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default Pagination;
