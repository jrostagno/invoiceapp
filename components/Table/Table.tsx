import React from "react";
const InvoiceTable = ({ list, cells, columns }) => {
  return (
    <div className="w-full overflow-auto max-h-[27.3rem]">
      <table className="w-full border-b table-fixed dark:border-none">
        <thead className="sticky z-10 bg-slate-900 dark:border-b dark:border-green-600">
          <tr>
            {columns.map((el, i) => (
              <th key={i} className="p-3 py-6">
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full border-b divide-y dark:divide-gray-900 dark:border-none">
          {list?.map((element, i) => (
            <tr key={i}>
              {cells.map((cell, i) => (
                <td key={i} className="p-3 text-sm border-t dark:border-none">
                  {cell(element)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
