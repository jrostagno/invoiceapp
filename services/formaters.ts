export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const dateFormater = (date: string) => {
  return new Date(date).toLocaleDateString();
};
