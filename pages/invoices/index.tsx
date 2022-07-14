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

const Dashboard: NextPage = ({ session }) => {
  const router = useRouter();
  const [user, setUser] = useState({
    userName: "",
    userPhoto: "",
    userEmail: "",
  });
  const [category, setCategory] = useState(0);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getCategories();
    getAllInvoices();

    setUser({
      userName: session.user.name,
      userPhoto: session.user.image,
      userEmail: session.user.email,
    });
  }, []);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled) {
      editCategoryAmount({
        amount: category,
        email: session.user.email,
        name: session.user.name,
      });
    } else {
      postCategoryAmount({
        amount: category,
        email: session.user.email,
        name: session.user.name,
      });
    }
  };

  const getAllInvoices = () => {
    fetch("/api/invoice")
      .then((res) => res.json())
      .then((res) => {
        setInvoices(
          res.data.filter((invoice) => invoice.email === session.user.email)
        );
      });
  };

  const getCategories = () => {
    fetch("/api/category-amount")
      .then((res) => res.json())
      .then((res) => {
        const userAmount = res.data.find(
          (category) => category.email === session.user.email
        );

        if (userAmount) {
          setIsDisabled(true);
          setCurrentAmount(userAmount);
        } else {
          setIsDisabled(false);
        }
      });
  };

  const editCategoryAmount = async (newAmount) => {
    try {
      const res = await fetch(`/api/category-amount/${currentAmount._id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newAmount),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const postCategoryAmount = async (amount) => {
    try {
      const res = await fetch("/api/category-amount", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(amount),
      });

      const data = await res.json();
      if (data.success) {
        setIsDisabled(true);
      }
    } catch (error) {
      console.log(error);
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
            <InfoCard></InfoCard>
          </PanelCard>
        </div>
        <div className="w-full">
          <PanelCard size="lg">
            <YearlyInvoice
              label="Yearly Invoice"
              amount={currentAmount.amount}
            ></YearlyInvoice>
          </PanelCard>
          <PanelCard size="lg">
            <YearlyInvoice
              label="Annual billing allowed"
              amount={currentAmount.amount}
            ></YearlyInvoice>
          </PanelCard>
          <PanelTable size="lg">
            <Invoices session={session}></Invoices>
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

  return {
    props: {
      session,
    },
  };
};
