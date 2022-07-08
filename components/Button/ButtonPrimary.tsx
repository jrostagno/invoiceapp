import React, { FC } from "react";

interface ButtonsPrimaryProps {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const btnStyles: string =
  "px-3 py-1 mt-2 text-sm border border-transparent  rounded-md tracking-widest focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150";

const ButtonPrimary: FC<ButtonsPrimaryProps> = ({
  className,
  children,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`${className || ""} ${
        disabled ? "opacity-25 cursor-not-allowed" : ""
      } text-white bg-orange-600 ${btnStyles}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
