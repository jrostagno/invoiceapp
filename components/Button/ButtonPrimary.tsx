import React, { FC } from "react";
import { ButtonsPrimaryProps } from "../../types";

const btnStyles: string =
  "px-3 py-1 mt-2  text-xs sm:text-sm border border-transparent  rounded-md tracking-widest focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150";

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
      } text-white bg-gray-600 hover:bg-gray-100 hover:text-slate-700 dark:bg-green-400 dark:hover:border-green-400  dark:opacity-50 duration-300 ease-in-out delay-150 hover:transition dark:text-slate-900 dark:hover:text-slate-200 dark:hover:bg-[#1e293b] ${btnStyles}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
