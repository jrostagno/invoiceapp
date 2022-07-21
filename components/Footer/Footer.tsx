import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center  bg-slate-50 dark:bg-slate-900">
      <span className="mr-4 text-lg font-bold text-slate-600 dark:text-green-400 ">
        InvoiceApp
      </span>
      &copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;
