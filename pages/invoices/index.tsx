import type { NextPage } from "next";
import Head from "next/head";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import AppLayout from "../../components/Layout/AppLayout";
import CategoryCard from "../../components/Cards/CategoryCard";
import InfoCard from "../../components/Cards/InfoCard";
import YearlyInvoice from "../../components/Cards/YearlyInvoice";

import Invoices from "../../components/Invoices/Invoices";

import { useEffect, useState } from "react";

import { PanelCard, PanelTable } from "../../components/Panel/PanelCard";

import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import {
  editCategoryAmount,
  getCalculation,
  getUserCategory,
  getUserInvoices,
  postCategoryAmount,
} from "../../services/invoices";
import { formatNumber } from "../../services/formaters";

const Dashboard: NextPage = ({ session, user }) => {
  const router = useRouter();

  const [category, setCategory] = useState(0);
  const [userCategory, setUserCategory] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [yearlyInvoiced, setYearlyInvoiced] = useState(0);

  useEffect(() => {
    getUserInvoices(user._id).then((res) => setInvoices(res.data));
    getCalculation(user._id).then((res) => setYearlyInvoiced(res.data));
    getUserCategory(user._id).then((res) => {
      if (res.success) {
        setUserCategory(res.data[0]);
        setIsDisabled(true);
      }
    });
  }, []);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled) {
      editCategoryAmount(
        {
          amount: category,
          userId: user._id,
        },
        userCategory._id
      );
      getUserCategory(user._id);
    } else {
      postCategoryAmount({
        amount: category,
        userId: user._id,
      }).then((data) => {
        if (data.success) {
          setIsDisabled(true);
        }
      });
      getUserCategory(user._id);
    }
  };

  return (
    <AppLayout session={session}>
      <Head>
        <title>Invoiceapp</title>
      </Head>
      <div className="flex flex-col justify-around md:flex-row">
        <div className="w-full">
          <PanelCard size="md">
            <CategoryCard
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isDisabled={isDisabled}
            ></CategoryCard>
          </PanelCard>
          <PanelCard size="md">
            <InfoCard
              invoiceLimit={formatNumber(userCategory?.amount) || "0"}
              currentMonth={formatNumber(yearlyInvoiced.currentMonth)}
              lastMonth={formatNumber(yearlyInvoiced.lastMonthAmount)}
            ></InfoCard>
          </PanelCard>
        </div>
        <div className="w-full">
          <PanelCard size="lg">
            <YearlyInvoice
              label="Yearly Invoice"
              amount={formatNumber(yearlyInvoiced.yearly)}
            ></YearlyInvoice>
          </PanelCard>
          <PanelCard size="lg">
            <YearlyInvoice
              label="Annual billing allowed"
              amount={formatNumber(userCategory?.amount) || "0"}
            ></YearlyInvoice>
          </PanelCard>
          <PanelTable size="lg">
            <Invoices
              setYearlyInvoiced={setYearlyInvoiced}
              setInvoices={setInvoices}
              user={user}
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

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  await dbConnect();

  const res = await User.find({});

  const users = res.map((doc) => {
    const user = doc.toObject();
    user._id = `${user._id}`;
    return user;
  });

  const user = users.find((user) => user.email === session.user.email);

  return {
    props: {
      session,
      user,
    },
  };
};
