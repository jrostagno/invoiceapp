import React from "react";

interface SubtitleProps {
  className?: string;
  children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ className, children }) => {
  return (
    <h2
      className={`${className || ""} text-orange-500 text-base font-semibold`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
