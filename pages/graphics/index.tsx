import { getSession } from "next-auth/react";
import Head from "next/head";
import React, { FC, useEffect, useState } from "react";
import {
  parseLabels,
  getMontshAmount,
} from "../../components/Graphics/graphics";
import InvoiceGraphics from "../../components/Graphics/InvoiceGraphics";
import AppLayout from "../../components/Layout/AppLayout";
import { PanelCard } from "../../components/Panel/PanelCard";
import Title from "../../components/Text/Title";
import { getUserInvoices } from "../../services/invoices";
import { Session } from "../../types";

interface GraphicsProps {
  session: Session;
}

const Graphics: FC<GraphicsProps> = ({ session }) => {
  const [allInvoices, setAllInvoices] = useState([]);

  useEffect(() => {
    getUserInvoices(session.user.id).then((res) => setAllInvoices(res.data));
  }, [session.user.id]);

  const labels = parseLabels();

  const invoices = getMontshAmount(allInvoices);

  return (
    <AppLayout session={session}>
      <Head>
        <title>Invoiceapp</title>
      </Head>

      <div className="w-full ">
        <PanelCard size="md">
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

export const getServerSideProps = async (context: any) => {
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
