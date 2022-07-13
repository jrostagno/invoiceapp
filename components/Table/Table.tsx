import React from "react";
const InvoiceTable = ({ list, cells, columns }) => {
  return (
    <table className="w-full table-auto">
      <thead className="top-0">
        <tr>
          {columns.map((el, i) => (
            <th key={i} className="p-3">
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border-b">
        {list?.map((element, i) => (
          <tr key={i}>
            {cells.map((cell, i) => (
              <td key={i} className="p-3 border-t">
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
