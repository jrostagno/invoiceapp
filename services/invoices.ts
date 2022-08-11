import { InvoiceProps, Invoices } from "../types";

//GET INVOICES
export const getUserInvoices = (userId: string) => {
  try {
    const data = fetch(`/api/userinvoices/${userId}`, { method: "GET" }).then(
      (res) => res.json()
    );
    return data;
  } catch (error) {
    throw error;
  }
};

// GET INVOICE
export const getInvoicesById = async (id: string) => {
  try {
    const data = await fetch(`/api/${id}`, { method: "GET" }).then((res) =>
      res.json()
    );
    return data;
  } catch (error) {
    throw error;
  }
};

//POST INVOICE
export const postInvoice = async (invoice: InvoiceProps) => {
  try {
    const data = await fetch("/api/invoice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invoice),
    }).then((res) => res.json());

    return data;
  } catch (error) {
    throw error;
  }
};

//EDIT INVOICE

export const editInvoice = async (invoice: InvoiceProps, id: string) => {
  try {
    const res = await fetch(`/api/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invoice),
    });
  } catch (error) {
    throw error;
  }
};

//DELETE INVOICE
export const invoiceDelete = async (id: string) => {
  try {
    await fetch(`/api/${id}`, { method: "DELETE" });
  } catch (error) {
    throw error;
  }
};
