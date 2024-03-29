import React, { FC } from "react";
import { PanelCardsProps, PanelTableProps, Size } from "../../types";

function calcSize(size: Size) {
  switch (size) {
    case "sm":
      return "max-w-sm";
    case "md":
      return "max-w-xl";
    case "lg":
      return "max-w-2xl";
    case "full":
      return "max-w-full";
    case "xl":
      return "max-w-3xl";
    default:
      return "max-w-xl";
  }
}

export const PanelCard: FC<PanelCardsProps> = ({
  className,
  children,
  size,
}) => {
  return (
    <div
      className={` ${className || ""} ${calcSize(
        size
      )}  sm:px-6 px-2 mx-auto my-8 py-6 mb-4 bg-white border rounded-md shadow-md dark:bg-[#1e293b] dark:border-0`}
    >
      {children}
    </div>
  );
};

export const PanelTable: FC<PanelTableProps> = ({ children, size }) => {
  return (
    <div
      className={`${calcSize(
        size
      )}  py-6 mx-auto my-8 pt-0 mb-4 bg-white border dark:text-slate-40  rounded-md shadow-md dark:bg-[#1e293b] dark:border-0`}
    >
      {children}
    </div>
  );
};
