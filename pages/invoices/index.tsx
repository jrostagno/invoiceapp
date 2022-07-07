import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AppLayout from "../../components/Layout/AppLayout";
import CategoryCard from "../../components/Cards/CategoryCard";
import InfoCard from "../../components/Cards/InfoCard";
import YearlyInvoice from "../../components/Cards/YearlyInvoice";
import InvoicePanel from "../../components/Invoices/InvoicePanel";
import MyModal from "../../components/Modal/Dialog";

const Invoices: NextPage = () => {
  return (
    <AppLayout>
      <Head>
        <title>Invoiceapp</title>
      </Head>
      <div className="flex justify-between mt-10">
        <div className="w-[34rem]">
          <CategoryCard></CategoryCard>
          <YearlyInvoice></YearlyInvoice>
          <InfoCard></InfoCard>
        </div>
        <div className="w-[43rem]">
          <InvoicePanel></InvoicePanel>
        </div>
      </div>
    </AppLayout>
  );
};

export default Invoices;
