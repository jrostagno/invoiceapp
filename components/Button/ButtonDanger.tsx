import React from "react";

const ButtonDanger = ({ className, disabled = false, ...props }) => {
  const btnStyles: string =
    "block px-3 py-1 mt-2  text-sm border border-red-400  rounded-md tracking-widest focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150";

  return (
    <button
      className={`${className || ""} ${
        disabled ? "opacity-25 cursor-not-allowed" : ""
      } bg-white text-red-400  ${btnStyles} text-white`}
      {...props}
    ></button>
  );
};

export default ButtonDanger;
