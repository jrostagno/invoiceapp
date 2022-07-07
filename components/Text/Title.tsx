import React from "react";

const Title = ({ className, children }) => {
  return (
    <h1 className={`${className || ""} text-2xl text-orange-800 font-bold`}>
      {children}
    </h1>
  );
};

export default Title;
