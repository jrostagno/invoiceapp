import React from "react";
import { FaRegTrashAlt, FaPen, FaDownload } from "react-icons/fa";

const InvoiceTable = () => {
  const column: Array<string> = [
    "Date",
    "Client",
    "Invoice type",
    "Total",
    "Actions",
  ];

  interface InvoiceTypes {
    listElement: {
      date: string;
      client: string;
      type: string;
      amount: number;
      action: any;
    }[];
  }

  const list: InvoiceTypes["listElement"] = [
    {
      date: "06/07/2022",
      client: "Final consumer",
      type: "C",
      amount: 2000000,
      action: <FaRegTrashAlt></FaRegTrashAlt>,
    },
    {
      date: "06/07/2022",
      client: "Final consumer",
      type: "C",
      amount: 2000000,
      action: <FaRegTrashAlt></FaRegTrashAlt>,
    },
    {
      date: "06/07/2022",
      client: "Final consumer",
      type: "C",
      amount: 2000000,
      action: <FaRegTrashAlt></FaRegTrashAlt>,
    },
    {
      date: "06/07/2022",
      client: "Final consumer",
      type: "C",
      amount: 2000000,
      action: <FaRegTrashAlt></FaRegTrashAlt>,
    },
  ];

  const actions = [
    <button key="delete">
      <FaRegTrashAlt></FaRegTrashAlt>
    </button>,
    <button key="edit">
      <FaPen></FaPen>
    </button>,
    <button key="dowload">
      <FaDownload></FaDownload>
    </button>,
  ];

  const cells = [
    (element) => <h1 className="text-center">{element.date}</h1>,
    (element) => <h1 className="text-center">{element.client}</h1>,
    (element) => <h1 className="text-center">{element.type}</h1>,
    (element) => <h1 className="text-center">{element.amount}</h1>,

    (element) => (
      <div className="flex justify-evenly">
        {actions.map((action) => action)}
      </div>
    ),
  ];

  return (
    <table className="w-full table-auto">
      <thead className="top-0">
        <tr>
          {column.map((el, i) => (
            <th key={i} className="p-3">
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border-b">
        {list.map((element, i) => (
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
