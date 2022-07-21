import React, { FC } from "react";

interface ButtonDangerProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const ButtonDanger: FC<ButtonDangerProps> = ({
  className,
  children,
  disabled = false,
  ...props
}) => {
  const btnStyles: string =
    "block px-3 py-1 mt-2  text-sm border border-red-400  rounded-md tracking-widest focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150";

  return (
    <button
      className={`${className || ""} ${
        disabled ? "opacity-25 cursor-not-allowed" : ""
      } bg-white text-red-400 dark:bg-red-400 dark:opacity-60 dark:text-slate-900 dark:hover:text-slate-200 dark:hover:bg-[#1e293b]  ${btnStyles}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonDanger;
