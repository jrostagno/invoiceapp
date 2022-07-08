import React from "react";

interface Title {
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<Title> = ({ className, children }) => {
  return (
    <h1 className={`${className || ""} text-2xl text-orange-800 font-bold`}>
      {children}
    </h1>
  );
};

export default Title;
