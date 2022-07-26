import React, { useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";

import Table from "../Table/Table";
import DialogModal from "../Modal/Dialog";
import ModalAddInvoice from "../Modal/ModalAddInvoice";
import { FaRegTrashAlt, FaPen, FaDownload } from "react-icons/fa";

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

const Invoices = ({ session, setYearlyInvoiced, invoices, setInvoices }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [invoiceId, setInvoiceId] = useState("");

  const [form, setForm] = useState({
    date: "",
    amount: "",
  });

  const [invoiceType, setInvoiceType] = useState("");
  const [supplier, setSupplier] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await editInvoice(
        {
          date: form.date,
          amount: form.amount,
          supplier: supplier.value,
          invoiceType: invoiceType.value,
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
        supplier: supplier.value,
        invoiceType: invoiceType.value,
        name: session.user.name,
        userId: session.user.id,
      }).then((data) => {
        if (!data.success) {
          for (const key in data.error.errors) {
            let error = data.error.errors[key];

            setErrorMessage((oldMessage) => [
              ...oldMessage,
              { message: error.message },
            ]);
          }
        }
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
      onclick: (element) => {
        setIsOpen(true);
        setIsDelete(true);
        setInvoiceId(element._id);
      },
    },
    {
      name: "edit",
      icon: <FaPen />,
      onclick: (element) => {
        setIsOpen(true);
        setIsDelete(false);
        setIsEdit(true);
        setInvoiceId(element._id);
        getInvoicesById(element._id).then((data) => {
          setForm({ date: data.data.date, amount: data.data.amount });
          setInvoiceType({
            label: data.data.invoiceType,
            value: data.data.invoiceType,
          });
          setSupplier({ label: data.data.supplier, value: data.data.supplier });
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
    setForm({ date: "", amount: "" });
    setInvoiceType("");
    setSupplier("");
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
        list={invoices}
        cells={[
          (element) => (
            <h1 className="text-center">{dateFormater(element.date)}</h1>
          ),
          (element) => <h1 className="text-center">{element.supplier}</h1>,
          (element) => <h1 className="text-center">{element.invoiceType}</h1>,
          (element) => (
            <h1 className="text-center">{formatNumber(element.amount)}</h1>
          ),

          (element) => (
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
        <ButtonPrimary onClick={() => handleAddInvoice()} className="mx-6 mt-6">
          Add invoice
        </ButtonPrimary>
      </div>

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
              setForm={setForm}
              supplier={supplier}
              setSupplier={setSupplier}
              invoiceType={invoiceType}
              setInvoiceType={setInvoiceType}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              isEdit={isEdit}
              setIsOpen={setIsOpen}
              setIsEdit={setIsEdit}
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
