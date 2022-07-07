import React from "react";
import Select from "react-select";

export const customStyles = {
  control: () => ({
    width: "100%",
    height: "2.4rem",
    display: "flex",
    borderWidth: "1px",
    borderColor: "#d1d5db",
    borderRadius: "0.375rem",
    fontSize: "12px",
    fontWeight: "400",
  }),
};

const Selector = ({ options, placeholder, handleChange, value, id = null }) => {
  return (
    <Select
      id={id}
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      value={value}
      handleChange={handleChange}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral50: "#9CA3AF",
        },
      })}
    />
  );
};

export default Selector;
