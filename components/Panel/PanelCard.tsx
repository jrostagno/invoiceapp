import React, { FC } from "react";

type Size = "sm" | "med" | "large" | "full" | "xlarge";

function calcSize(size: Size) {
  switch (size) {
    case "sm":
      return "max-w-sm";
    case "med":
      return "max-w-xl";
    case "large":
      return "max-w-2xl";
    case "full":
      return "max-w-full";
    case "xlarge":
      return "max-w-3xl";
    default:
      return "max-w-xl";
  }
}

interface PanelCardsProps {
  className?: string;
  children: React.ReactNode;
  size: Size;
}
interface PanelTableProps {
  children: React.ReactNode;
  size: Size;
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
      )}  px-6 mx-auto my-8 py-6 mb-4 bg-white border rounded-md shadow-md`}
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
      )}  py-6 mb-4 bg-white border rounded-md shadow-md`}
    >
      {children}
    </div>
  );
};
