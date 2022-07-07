import React from "react";

interface buttons {
  className: string;
  disabled: boolean;
}

const btnStyles: string =
  "px-3 py-1 mt-2 text-sm border border-transparent  rounded-md tracking-widest focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150";

const ButtonPrimary = ({
  className,
  type = "submit",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`${className || ""} ${
        disabled ? "opacity-25 cursor-not-allowed" : ""
      } text-white bg-orange-600 ${btnStyles}`}
      disabled={disabled}
      type={type}
      {...props}
    ></button>
  );
};

export default ButtonPrimary;
