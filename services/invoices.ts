export const getUserInvoices = (userId) => {
  const data = fetch(`/api/userinvoices/${userId}`, { method: "GET" }).then(
    (res) => res.json()
  );
  return data;
};

export const getCalculation = (userId) => {
  const data = fetch(`/api/calculation/${userId}`, { method: "GET" }).then(
    (res) => res.json()
  );
  return data;
};

export const getUserCategory = (userId) => {
  const data = fetch(`/api/category/${userId}`, { method: "GET" }).then((res) =>
    res.json()
  );

  return data;
};

export const editCategoryAmount = async (newAmount, userId) => {
  try {
    const res = await fetch(`/api/category-amount/${userId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newAmount),
    });
  } catch (error) {
    console.log(error);
  }
};
export const postCategoryAmount = async (amount) => {
  try {
    const data = await fetch("/api/category-amount", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(amount),
    }).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postInvoice = async (invoice) => {
  try {
    const data = await fetch("/api/invoice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invoice),
    }).then((res) => res.json());

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editInvoice = async (invoice, id) => {
  try {
    const res = await fetch(`/api/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invoice),
    });
  } catch (error) {
    console.log(error);
  }
};

export const invoiceDelete = async (id) => {
  try {
    await fetch(`/api/${id}`, { method: "DELETE" });
  } catch (error) {
    console.log(error);
  }
};

export const getInvoicesById = async (id) => {
  try {
    const data = await fetch(`/api/${id}`, { method: "GET" }).then((res) =>
      res.json()
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
