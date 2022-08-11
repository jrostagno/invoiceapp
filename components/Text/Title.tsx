import React from "react";
import { Title } from "../../types";

const Title: React.FC<Title> = ({ className, children }) => {
  return (
    <h1 className={`${className || ""} text-2xl text-orange-800 font-bold`}>
      {children}
    </h1>
  );
};

export default Title;
