import React, { useEffect, useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import { PanelTable } from "../Panel/PanelCard";
import Table from "../Table/Table";
import DialogModal from "../Modal/Dialog";
import ModalAddInvoice from "../Modal/ModalAddInvoice";
import { FaRegTrashAlt, FaPen, FaDownload } from "react-icons/fa";
import { parse } from "path";

const Invoices = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [allInvoices, setAllInvoices] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [invoiceId, setInvoiceId] = useState("");

  const [form, setForm] = useState({
    date: "",
    amount: "",
  });

  const [invoiceType, setInvoiceType] = useState("");
  const [supplier, setSupplier] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => {
    fetch("/api/invoice")
      .then((res) => res.json())
      .then((res) => setAllInvoices(res.data));
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      editInvoice(
        {
          date: form.date,
          amount: form.amount,
          supplier: supplier.value,
          invoiceType: invoiceType.value,
          email: session.user.email,
          name: session.user.name,
        },
        invoiceId
      );
    } else {
      postInvoice({
        date: form.date,
        amount: form.amount,
        supplier: supplier.value,
        invoiceType: invoiceType.value,
        email: session.user.email,
        name: session.user.name,
      });
    }
    getAllInvoices();

    setIsEdit(false);
    setIsOpen(false);
  };

  const getAllInvoices = () => {
    fetch("/api/invoice")
      .then((res) => res.json())
      .then((res) => setAllInvoices(res.data));
  };

  const postInvoice = async (invoice) => {
    try {
      const res = await fetch("/api/invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invoice),
      });

      const data = await res.json();

      if (!data.success) {
        for (const key in data.error.errors) {
          let error = data.error.errors[key];

          setErrorMessage((oldMessage) => [
            ...oldMessage,
            { message: error.message },
          ]);
        }
      }
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editInvoice = async (invoice, id) => {
    try {
      const res = await fetch(`/api/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invoice),
      });
      getAllInvoices();
    } catch (error) {
      console.log(error);
    }
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
      onclick: (element) => invoiceDelete(element._id),
    },
    {
      name: "edit",
      icon: <FaPen />,
      onclick: (element) => {
        setIsOpen(true);
        setIsEdit(true);
        setInvoiceId(element._id);
        getInvoicesById(element._id);
      },
    },
    {
      name: "dowload",
      icon: <FaDownload />,
      onclick: (element) => console.log(element),
    },
  ];

  const invoiceDelete = async (id) => {
    try {
      await fetch(`/api/${id}`, { method: "DELETE" });
      getAllInvoices();
    } catch (error) {
      console.log(error);
    }
  };

  const getInvoicesById = async (id) => {
    try {
      await fetch(`/api/${id}`, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          setForm({ date: data.data.date, amount: data.data.amount });
          setInvoiceType({
            label: data.data.invoiceType,
            value: data.data.invoiceType,
          });
          setSupplier({ label: data.data.supplier, value: data.data.supplier });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const cells = [
    (element) => <h1 className="text-center">{element.date}</h1>,
    (element) => <h1 className="text-center">{element.supplier}</h1>,
    (element) => <h1 className="text-center">{element.invoiceType}</h1>,
    (element) => <h1 className="text-center">{element.amount}</h1>,

    (element) => (
      <div className="flex justify-evenly">
        {actions.map((invoice, index) => (
          <button key={index} onClick={() => invoice.onclick(element)}>
            {invoice.icon}
          </button>
        ))}
      </div>
    ),
  ];

  const parseAllInvoices = allInvoices.map((el) => {
    el.date = el.date.slice(0, 10);

    return el;
  });

  const userInvoices = parseAllInvoices.filter(
    (invoices) => invoices.email === session.user.email
  );

  const handleAddInvoice = () => {
    setIsOpen(true);
    setForm({ date: "", amount: "" });
    setInvoiceType("");
    setSupplier("");
  };

  return (
    <>
      <Table columns={columns} list={userInvoices} cells={cells}></Table>
      <div className="flex justify-end">
        <ButtonPrimary onClick={() => handleAddInvoice()} className="mx-6 mt-6">
          Add invoice
        </ButtonPrimary>
      </div>
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
    </>
  );
};

export default Invoices;
