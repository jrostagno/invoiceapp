import React, { FC } from "react";

interface SelectProps {
  options: { label: string; value: string }[];
  required?: boolean;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  name: string;
}

const Select: FC<SelectProps> = ({ options, name, onChange, ...props }) => {
  return (
    <select
      id="invoices"
      onChange={onChange}
      name={name}
      className="border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-indigo-300 dark:placeholder-gray-400 dark:text-slate-200 dark:focus:ring-indigo-200 dark:focus:border-indigo-300"
      {...props}
    >
      {options.map((el, i) => (
        <option key={i} value={el.value}>
          {el.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
