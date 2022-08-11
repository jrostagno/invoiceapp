import Head from "next/head";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import AppLayout from "../../components/Layout/AppLayout";
import CategoryCard from "../../components/Cards/CategoryCard";
import InfoCard from "../../components/Cards/InfoCard";
import YearlyInvoice from "../../components/Cards/YearlyInvoice";
import Invoices from "../../components/Invoices/Invoices";
import React, { FormEvent, useEffect, useState } from "react";
import { PanelCard, PanelTable } from "../../components/Panel/PanelCard";
import dbConnect from "../../lib/dbConnect";
import { formatNumber } from "../../services/formaters";
import AddCategoryLimit from "../../components/Cards/AddCategoryLimit";
import { getUserInvoices } from "../../services/invoices";
import { getCalculation } from "../../services/calculations";
import {
  editCategoryAmount,
  getUserCategory,
  postCategoryAmount,
} from "../../services/categories";
import { InvoiceProps, Session } from "../../types";

export interface DashboardProps {
  session: Session;
}

export interface UserCategoryProps {
  amount: number;
  _id: string;
}

export interface YearlyInvoiceProps {
  currentMonth: number;
  lastMonthAmount: number;
  yearly: number;
}

export type setInvoiceProps = InvoiceProps[];

const Dashboard: React.FC<DashboardProps> = ({ session }) => {
  const router = useRouter();

  const [category, setCategory] = useState(0);
  const [userCategory, setUserCategory] = useState<UserCategoryProps>({
    amount: 0,
    _id: "",
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [invoices, setInvoices] = useState<setInvoiceProps>([]);
  const [yearlyInvoiced, setYearlyInvoiced] = useState<YearlyInvoiceProps>({
    currentMonth: 0,
    lastMonthAmount: 0,
    yearly: 0,
  });

  useEffect(() => {
    getUserInvoices(session.user.id).then((res) => setInvoices(res.data));
    getCalculation(session.user.id).then((res) => setYearlyInvoiced(res.data));
    getUserCategory(session.user.id).then((res) => {
      if (res.success) {
        setUserCategory(res.data[0]);
        setIsDisabled(true);
      }
    });
  }, [session.user.id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(Number(event.target.value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDisabled) {
      await editCategoryAmount(
        {
          amount: category,
          userId: session.user._id,
        },
        userCategory?._id
      );
      getUserCategory(session.user.id)
        .then((res) => {
          setUserCategory(res.data[0]);
        })
        .then(() => setCategory(0));
    } else {
      await postCategoryAmount({
        amount: category,
        userId: session.user.id,
      }).then((data) => {
        if (data.success) {
          setIsDisabled(true);
        }
      });
      getUserCategory(session.user.id).then((res) =>
        setUserCategory(res.data[0])
      );
    }
  };

  return (
    <AppLayout session={session}>
      <Head>
        <title>Invoiceapp</title>
      </Head>
      <div className="flex flex-col-reverse gap-4 md:flex-row">
        <div className="w-full">
          {!isDisabled && <AddCategoryLimit></AddCategoryLimit>}
          <PanelCard size="lg">
            <CategoryCard
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isDisabled={isDisabled}
              category={category}
            ></CategoryCard>
          </PanelCard>

          <PanelCard className={!isDisabled ? "hidden" : ""} size="lg">
            <YearlyInvoice
              label="Remaining amount "
              amount={formatNumber(
                userCategory?.amount - yearlyInvoiced.yearly
              )}
            ></YearlyInvoice>
          </PanelCard>
          <PanelCard className={!isDisabled ? "hidden" : ""} size="lg">
            <YearlyInvoice
              label="Annual billing allowed"
              amount={formatNumber(userCategory?.amount) || "0"}
            ></YearlyInvoice>
          </PanelCard>
          <PanelCard className={!isDisabled ? "hidden" : ""} size="lg">
            <InfoCard
              invoiceLimit={formatNumber(userCategory.amount) || "0"}
              currentMonth={formatNumber(yearlyInvoiced.currentMonth)}
              lastMonth={formatNumber(yearlyInvoiced.lastMonthAmount)}
            ></InfoCard>
          </PanelCard>
        </div>
        <div className={!isDisabled ? "hidden" : "w-full"}>
          <PanelCard size="lg">
            <YearlyInvoice
              label="Yearly Invoice (last 12 months)"
              amount={formatNumber(yearlyInvoiced.yearly)}
            ></YearlyInvoice>
          </PanelCard>
          <PanelTable size="lg">
            <Invoices
              setYearlyInvoiced={setYearlyInvoiced}
              setInvoices={setInvoices}
              invoices={invoices}
              session={session}
            ></Invoices>
          </PanelTable>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  await dbConnect();

  return {
    props: {
      session,
    },
  };
};
