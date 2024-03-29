import React, { FC } from "react";
import { InvoiceProps, Invoices } from "../../types";

interface InvoiceTableProps {
  list: Invoices;
  cells: { (element: InvoiceProps): JSX.Element }[];
  columns: string[];
}

const InvoiceTable: FC<InvoiceTableProps> = ({ list, cells, columns }) => {
  return (
    <div className="w-full max-h-[27.3rem]">
      <table className="w-full border-b table-fixed dark:border-none">
        <thead className="z-10 text-xs font-thin bg-gray-200 sm:text-base text-slate-800 dark:text-white dark:bg-slate-900 dark:border-b dark:border-green-600">
          <tr>
            {columns.map((el, i) => (
              <th key={i} className="p-1 py-3  sm:p-3 sm:py-6">
                {el}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="w-full border-b divide-y dark:divide-gray-900 dark:border-none">
          {list?.map((element, i) => (
            <tr key={i}>
              {cells.map((cell, i) => (
                <td
                  key={i}
                  className="p-3 text-xs truncate border-t sm:text-sm dark:border-none"
                >
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
