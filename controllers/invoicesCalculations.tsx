import moment from "moment";

export const currentYearlyAmount = (invoices) => {
  let totalAmount = 0;

  for (let i = 0; i < invoices.length; i++) {
    let time = moment(invoices.date, "YYYYMMDD").fromNow().split(" ");

    if (time[1] !== "year" && time[0] !== "in") {
      totalAmount += invoices[i].amount;
    }
  }
  return totalAmount;
};

export const currentMonthAmount = (invoices) => {
  let totalAmount = 0;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  for (let i = 0; i < invoices.length; i++) {
    let dateInvoice = new Date(invoices[i].date);
    let yearInvoice = new Date(invoices[i].date).getFullYear();
    let monthInvoice = dateInvoice.getMonth();
    if (currentMonth === monthInvoice && currentYear === yearInvoice) {
      totalAmount += invoices[i].amount;
    }
  }

  return totalAmount;
};

export const lastMonthAmount = (invoices) => {
  let totalAmount = 0;

  const today = new Date();
  const currentMonth = today.getMonth();

  for (let i = 0; i < invoices.length; i++) {
    let dateInvoice = new Date(invoices[i].date);

    let monthInvoice = dateInvoice.getMonth();

    if (currentMonth - 1 === monthInvoice) {
      totalAmount += invoices[i].amount;
    }
  }

  return totalAmount;
};
