import React from "react";

const Subtitle = ({ className, children }) => {
  return (
    <h2
      className={`${className || ""} text-orange-500 text-base font-semibold`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
