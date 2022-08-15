import React, { FC } from "react";
import { useSession, signIn, getProviders, getSession } from "next-auth/react";
import AppLayout from "../components/Layout/AppLayout";
import Head from "next/head";
import { PanelCard } from "../components/Panel/PanelCard";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import InfoLabels from "../components/Text/InfoLabels";
import { Providers } from "../types";

interface SignInProps {
  providers: Providers;
}

const SignIn: FC<SignInProps> = ({ providers }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status !== "loading" && status === "authenticated") {
    router.push("/invoices");
  }

  return (
    <AppLayout>
      <Head>
        <title>InvoiceApp-login</title>
      </Head>
      <div className="min-h-screen">
        <div className="flex flex-col justify-center mt-14 sm:ml-16">
          <h1 className="font-semibold text-slate-500 dark:text-green-600 font-['Open_Sans'] text-5xl sm:text-7xl">
            InvoiceApp
          </h1>
          <p className="mt-8 text-2xl sm:mt-0 sm:text-3xl text-slate-600 dark:text-slate-500">
            An easy way to take control of your invoices...
          </p>
        </div>
        <PanelCard className="mt-32" size="sm">
          <InfoLabels className="flex justify-center p-3 tracking-widest">
            Login
          </InfoLabels>
          <div className="flex flex-col gap-4 p-6">
            {Object.values(providers).map((element) => (
              <button
                className="p-4 tracking-widest transition duration-150 ease-in-out bg-gray-100 border rounded-md shadow-md cursor-pointer dark:hover:bg-[#1e293b] focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                key={element.name}
                onClick={() => signIn(element.id)}
              >
                <div className="flex items-center justify-evenly">
                  <h1 className="text-base font-medium text-gray-500 transition duration-150 ease-in-out sm:text-lg hover:text-green-400">
                    Sing in {element.name}
                  </h1>
                  {element.id === "github" ? (
                    <FaGithub
                      className=" dark:text-green-400"
                      style={{ fontSize: "2.5em" }}
                    />
                  ) : (
                    <FcGoogle
                      className="text-green-400"
                      style={{ fontSize: "2.5em" }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </PanelCard>
      </div>
    </AppLayout>
  );
};

export default SignIn;

export const getServerSideProps = async (context: any) => {
  const { req, res } = context;

  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, { Location: "/" });

    res.end();
    return;
  }

  return {
    props: {
      session,
      providers: await getProviders(),
    },
  };
};
