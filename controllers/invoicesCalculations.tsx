import moment from "moment";
import { getLabelsMonts, montly } from "../components/Graphics/graphics";
import { Invoices } from "../types";

export const currentYearAmount = (invoices: Invoices) => {
  let totalAmount = 0;

  let lastYearMonth = getLabelsMonts();

  for (let i = 0; i < invoices.length; i++) {
    let invoiceMonth = montly(new Date(invoices[i].date).getMonth() + 1);
    let invoiceYear = new Date(invoices[i].date).getFullYear().toString();

    for (let j = 0; j < lastYearMonth.length; j++) {
      let month = lastYearMonth[j].split("-")[0];
      let year = lastYearMonth[j].split("-")[1];

      if (month === invoiceMonth && year === invoiceYear) {
        totalAmount += invoices[i].amount;
      }
    }
  }

  return totalAmount;
};

export const currentMonthAmount = (invoices: Invoices) => {
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

export const lastMonthAmount = (invoices: Invoices) => {
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
