import React, { useState } from "react";
import Select, { GroupBase, Option, OptionsOrGroups } from "react-select";

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
    color: "white",
  }),
};

interface SelectorProps {
  options: OptionsOrGroups<string, GroupBase<string>>;
  placeholder: string;
  handleChange: () => void;
  id?: string;
  value: string;
}

const Selector: React.FC<SelectorProps> = ({
  options,
  placeholder,
  handleChange,
  value,
  id,
}) => {
  return (
    <Select
      id={id}
      className="text-slate-900"
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      value={value}
      onChange={handleChange}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral50: "white",
        },
      })}
    />
  );
};

export default Selector;
