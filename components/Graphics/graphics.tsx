import moment from "moment";

export const montly = (month) => {
  switch (month) {
    case 1:
      return "jan";

    case 2:
      return "feb";

    case 3:
      return "mar";
    case 4:
      return "apr";
    case 5:
      return "may";
    case 6:
      return "jun";
    case 7:
      return "jul";
    case 8:
      return "aug";
    case 9:
      return "sep";
    case 10:
      return "oct";
    case 11:
      return "nov";
    case 12:
      return "dic";

    default:
      return "";
  }
};

export const getLabelsMonts = () => {
  const months = [
    moment().format("MMM").toLowerCase().concat(`-${new Date().getFullYear()}`),
  ];

  for (let i = 1; i < 12; i++) {
    months.push(
      `${montly(
        Number(moment().subtract(i, "months").calendar().split("/")[0])
      )}-${moment().subtract(i, "months").calendar().split("/")[2]}`
    );
  }
  return months.reverse();
};

export const parseInvoices = (invoices) => {
  const parseInvoices = invoices.map((invoice) => {
    invoice["year"] = new Date(invoice.date).getFullYear();
    invoice["month"] = montly(new Date(invoice.date).getMonth() + 1);

    return invoice;
  });

  return parseInvoices;
};

export const parseLabels = () => {
  let labels = getLabelsMonts().map((label) => {
    return `${label.split("-")[0]}-${label.split("-")[1][2]}${
      label.split("-")[1][2]
    }`;
  });

  return labels;
};

export const getMontshAmount = (allinvoices) => {
  const invoices = parseInvoices(allinvoices);

  const labels = getLabelsMonts();

  let amount = [];
  let sum = 0;

  for (let i = 0; i < labels.length; i++) {
    sum = 0;
    for (let j = 0; j < invoices.length; j++) {
      if (
        labels[i].split("-")[0] === invoices[j].month &&
        Number(labels[i].split("-")[1]) === invoices[j].year
      ) {
        sum += invoices[j].amount;
      }
    }
    amount.push(sum);
  }
  return amount;
};
