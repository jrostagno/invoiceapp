import React, { FC, FormEvent, useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";

import Table from "../Table/Table";
import { DialogModal } from "../Modal/Dialog";
import ModalAddInvoice from "../Modal/ModalAddInvoice";
import { FaRegTrashAlt, FaPen } from "react-icons/fa";

import {
  editInvoice,
  getInvoicesById,
  getUserInvoices,
  invoiceDelete,
  postInvoice,
} from "../../services/invoices";
import { dateFormater, formatNumber } from "../../services/formaters";
import ModalDelete from "../Modal/ModalDelete";

import InfoLabels from "../Text/InfoLabels";
import { getCalculation } from "../../services/calculations";
import { Invoices, Session, InvoiceProps, InvoiceElement } from "../../types";
import { YearlyInvoiceProps } from "../../pages/invoices";
import Pagination from "../Pagination/Pagination";

interface InvoicesProps {
  session: Session;
  setYearlyInvoiced: (yearlyInvoiced: YearlyInvoiceProps) => void;
  invoices: Invoices;
  setInvoices: (invoice: Invoices) => void;
}
interface SetFormProps {
  supplier: string;
  invoiceType: string;
  date: string;
  amount: number;
}

const Invoices: FC<InvoicesProps> = ({
  session,
  setYearlyInvoiced,
  invoices,
  setInvoices,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [invoiceId, setInvoiceId] = useState("");

  const [form, setForm] = useState<SetFormProps>({
    date: "",
    amount: 0,
    supplier: "",
    invoiceType: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const listPerPage = 5;
  const indexOfLastList = currentPage * listPerPage;
  const indexOfFirstList = indexOfLastList - listPerPage;
  const currentList = invoices.slice(indexOfFirstList, indexOfLastList);

  const pageNumbers = Math.ceil(invoices.length / listPerPage);

  const nextPage = () => {
    if (currentPage < pageNumbers) {
      let nextPage = currentPage + 1;
      setCurrentPage(nextPage);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      let prevPage = currentPage - 1;
      setCurrentPage(prevPage);
    }
  };

  const handleOnChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isEdit) {
      await editInvoice(
        {
          date: form.date,
          amount: form.amount,
          supplier: form.supplier,
          invoiceType: form.invoiceType,
          name: session.user.name,
          userId: session.user.id,
        },
        invoiceId
      );
      getUserInvoices(session.user.id).then((res) => setInvoices(res.data));
      getCalculation(session.user.id).then((res) =>
        setYearlyInvoiced(res.data)
      );
    } else {
      await postInvoice({
        date: form.date,
        amount: form.amount,
        supplier: form.supplier,
        invoiceType: form.invoiceType,
        name: session.user.name,
        userId: session.user.id,
      });
      getUserInvoices(session.user.id).then((res) => setInvoices(res.data));
      getCalculation(session.user.id).then((res) =>
        setYearlyInvoiced(res.data)
      );
    }
    setIsEdit(false);
    setIsOpen(false);
  };

  const columns: Array<string> = [
    "Date",
    "Client",
    "Invoice type",
    "Total",
    "Actions",
  ];

  const actions = [
    {
      name: "delete",
      icon: <FaRegTrashAlt />,
      onclick: (element: InvoiceElement) => {
        setIsOpen(true);
        setIsDelete(true);
        setInvoiceId(element._id);
      },
    },
    {
      name: "edit",
      icon: <FaPen />,
      onclick: (element: InvoiceElement) => {
        setIsOpen(true);
        setIsDelete(false);
        setIsEdit(true);
        setInvoiceId(element._id);
        getInvoicesById(element._id).then((data) => {
          setForm({
            date: data.data.date,
            amount: data.data.amount,
            invoiceType: data.data.invoiceType,
            supplier: data.data.supplier,
          });
        });
      },
    },
    // {
    //   name: "dowload",
    //   icon: <FaDownload />,
    //   onclick: (element) => console.log(element),
    // },
  ];

  const handleAddInvoice = () => {
    setIsDelete(false);
    setIsOpen(true);
    setForm({ date: "", amount: 0, invoiceType: "", supplier: "" });
  };

  const handleDeleteInvoice = async () => {
    await invoiceDelete(invoiceId);
    getUserInvoices(session.user.id).then((res) => setInvoices(res.data));
    getCalculation(session.user.id).then((res) => setYearlyInvoiced(res.data));
  };
  return (
    <>
      <Table
        columns={columns}
        list={currentList}
        cells={[
          (element: InvoiceProps) => (
            <h1 className="text-center">{dateFormater(element.date)}</h1>
          ),
          (element: InvoiceProps) => (
            <h1 className="text-center">{element.supplier}</h1>
          ),
          (element: InvoiceProps) => (
            <h1 className="text-center">{element.invoiceType}</h1>
          ),
          (element: InvoiceProps) => (
            <h1 className="text-center">{formatNumber(element.amount)}</h1>
          ),

          (element: InvoiceProps) => (
            <div className="flex justify-evenly">
              {actions.map((invoice, index) => (
                <button
                  className="duration-300 ease-in-out delay-150 hover:transition dark:hover:text-green-400"
                  key={index}
                  onClick={() => invoice.onclick(element)}
                >
                  {invoice.icon}
                </button>
              ))}
            </div>
          ),
        ]}
      ></Table>
      {invoices.length === 0 && (
        <div className="flex items-center justify-center w-full p-14">
          <InfoLabels>No invoices loaded yet...</InfoLabels>
        </div>
      )}
      <div className="flex justify-end">
        <ButtonPrimary onClick={() => handleAddInvoice()} className="mx-6 mt-3">
          Add invoice
        </ButtonPrimary>
      </div>
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        pageNumbers={pageNumbers}
        currentPage={currentPage}
      ></Pagination>

      {isDelete ? (
        <DialogModal
          size="xs"
          modal={
            <ModalDelete
              setIsOpen={setIsOpen}
              setIsDelete={setIsDelete}
              handleDeleteInvoice={handleDeleteInvoice}
            ></ModalDelete>
          }
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        ></DialogModal>
      ) : (
        <DialogModal
          size="sm"
          modal={
            <ModalAddInvoice
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              form={form}
              isEdit={isEdit}
              setIsOpen={setIsOpen}
            ></ModalAddInvoice>
          }
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        ></DialogModal>
      )}
    </>
  );
};

export default Invoices;
