import React from "react";
function calcSize(size: string) {
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

export const PanelCard = ({ className, children, size }) => {
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

export const PanelTable = ({ children, size }) => {
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
