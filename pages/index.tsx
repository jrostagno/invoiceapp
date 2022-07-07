import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AppLayout from "../components/Layout/AppLayout";
import CategoryCard from "../components/Cards/CategoryCard";
import InfoCard from "../components/Cards/InfoCard";
import YearlyInvoice from "../components/Cards/YearlyInvoice";
import InvoicePanel from "../components/Invoices/InvoicePanel";
import MyModal from "../components/Modal/Dialog";
import LabelForm from "../components/Text/LabelForm";
import InputForm from "../components/input/InputForm";
import { PanelCard } from "../components/Panel/PanelCard";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import Subtitle from "../components/Text/Subtitle";
import GuestLayout from "../components/Layout/GuestLayout";

const Home: NextPage = () => {
  return (
    <AppLayout guest>
      <Head>
        <title>Invoiceapp</title>
      </Head>
      <div className="min-h-screen">
        <PanelCard className="mt-32" size="sm">
          <form>
            <div className="flex flex-col justify-between w-full p-4">
              <LabelForm htmlFor="userName">User name</LabelForm>
              <InputForm
                autoFocus
                required
                id="userName"
                placeholder="User name..."
                type="text"
              />
            </div>
            <div className="flex flex-col justify-between w-full p-4">
              <LabelForm htmlFor="password">Password</LabelForm>
              <InputForm
                autoFocus
                required
                id="password"
                placeholder="password..."
                type="password"
              />
            </div>
            <div className="flex flex-col justify-center gap-2 px-4">
              <ButtonPrimary className="w-full">Login</ButtonPrimary>
              <Subtitle className="mt-2 text-center cursor-pointer">
                I want to register !
              </Subtitle>
            </div>
          </form>
        </PanelCard>
      </div>
    </AppLayout>
  );
};

export default Home;
