export const formatNumber = (number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "ARS",
  }).format(number);
};

export const dateFormater = (date) => {
  return new Date(date).toLocaleDateString();
};
