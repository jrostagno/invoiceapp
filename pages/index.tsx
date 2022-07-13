import type { NextPage } from "next";
import Head from "next/head";

import AppLayout from "../components/Layout/AppLayout";
import { useRouter } from "next/router";

import LabelForm from "../components/Text/LabelForm";
import InputForm from "../components/input/InputForm";
import { PanelCard } from "../components/Panel/PanelCard";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import Subtitle from "../components/Text/Subtitle";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  const { data: session, status } = useSession();

  if (status !== "loading" && status === "authenticated") {
    router.push("/invoices");
  }

  return (
    <AppLayout>
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
            <div className="flex flex-col justify-center gap-2 px-4">
              <ButtonPrimary
                onClick={() => router.push("/api/auth/signin")}
                className="w-full text-white bg-black"
              >
                Register with GitHub
              </ButtonPrimary>
            </div>
          </form>
        </PanelCard>
      </div>
    </AppLayout>
  );
};

export default Home;
