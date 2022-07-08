import React, { FC } from "react";

function calcSize(s: Size) {
  switch (s) {
    case "xs":
      return "max-w-xs";
    case "sm":
      return "max-w-2xl";
    case "med":
      return "max-w-4xl";
    case "full":
      return "max-w-full";
    case "lg":
      return "max-w-6xl";
    default:
      return "max-w-7xl";
  }
}

type Size = "xs" | "sm" | "med" | "lg" | "full";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  size: Size;
  color?: string;
}

export const Panel: FC<PanelProps> = ({
  children,
  className,
  size = "lg",
  color = "bg-white",
}) => (
  <div
    className={`${
      className || ""
    } ${color} shadow-md rounded-none sm:rounded-lg ${calcSize(
      size
    )} mx-auto p-6 my-8 sm:p-6 sm:my-8`}
  >
    {children}
  </div>
);
