import type { NextPage } from "next";
import Head from "next/head";
import { useSession, getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import AppLayout from "../../components/Layout/AppLayout";
import CategoryCard from "../../components/Cards/CategoryCard";
import InfoCard from "../../components/Cards/InfoCard";
import YearlyInvoice from "../../components/Cards/YearlyInvoice";

import Invoices from "../../components/Invoices/Invoices";
import conectarDB from "../../lib/dbConnect";
import Invoice from "../../models/Invoice";
import { useEffect, useState } from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary";

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

  useEffect(() => {
    fetch("/api/category-amount")
      .then((res) => res.json())
      .then((res) => setCurrentAmount(res.data[0]));
    if (currentAmount) {
      setIsDisabled(true);
    }
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
      });
    } else {
      postCategoryAmount({
        amount: category,
      });
    }
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
      <div className="flex flex-col justify-around sm:flex-row">
        <div className="w-[34rem]">
          <CategoryCard
            handleChange={handleChange}
            category={category}
            currentAmount={currentAmount}
            handleSubmit={handleSubmit}
            isDisabled={isDisabled}
          ></CategoryCard>
          <InfoCard></InfoCard>
        </div>
        <div className="w-[43rem]">
          <YearlyInvoice></YearlyInvoice>
          <Invoices></Invoices>
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
