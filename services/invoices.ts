//GET INVOICES
export const getUserInvoices = (userId) => {
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
export const getInvoicesById = async (id) => {
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
export const postInvoice = async (invoice) => {
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
export const editInvoice = async (invoice, id) => {
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
export const invoiceDelete = async (id) => {
  try {
    await fetch(`/api/${id}`, { method: "DELETE" });
  } catch (error) {
    throw error;
  }
};
