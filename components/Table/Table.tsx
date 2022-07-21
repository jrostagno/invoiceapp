import React from "react";
const InvoiceTable = ({ list, cells, columns }) => {
  return (
    <table className="w-full table-auto file:placeholder:border-b dark:border-none">
      <thead className="top-0 dark:border-b dark:border-green-600">
        <tr>
          {columns.map((el, i) => (
            <th key={i} className="p-3">
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border-b  dark:border-none">
        {list?.map((element, i) => (
          <tr key={i}>
            {cells.map((cell, i) => (
              <td key={i} className="p-3 border-t dark:border-none">
                {cell(element)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
