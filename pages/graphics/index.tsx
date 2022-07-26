import { getSession } from "next-auth/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  parseLabels,
  getMontshAmount,
} from "../../components/Graphics/graphics";
import InvoiceGraphics from "../../components/Graphics/InvoiceGraphics";
import AppLayout from "../../components/Layout/AppLayout";
import { PanelCard } from "../../components/Panel/PanelCard";
import Title from "../../components/Text/Title";
import { getUserInvoices } from "../../services/invoices";

const Graphics = ({ session }) => {
  const [allInvoices, setAllInvoices] = useState([]);

  useEffect(() => {
    getUserInvoices(session.user.id).then((res) => setAllInvoices(res.data));
  }, []);

  const labels = parseLabels();
  const invoices = getMontshAmount(allInvoices);
  return (
    <AppLayout session={session}>
      <Head>
        <title>Invoiceapp</title>
      </Head>

      <div className="w-full ">
        <PanelCard size="med">
          <Title className="p-4">Yearly invoiced</Title>
          <InvoiceGraphics
            labels={labels}
            invoices={invoices}
          ></InvoiceGraphics>
        </PanelCard>
      </div>
    </AppLayout>
  );
};

export default Graphics;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};
