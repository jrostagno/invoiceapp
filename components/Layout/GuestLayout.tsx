import Head from "next/head";
import React, { FC } from "react";
import NavBar from "../NavBar";

interface GuestLayoutProps {
  children: React.ReactNode;
}
const GuestLayout: FC<GuestLayoutProps> = ({ children }) => {
  return (
    <div className="min-w-full min-h-screen bg-orange-50">
      <Head>
        <title>Invoiceapp</title>
      </Head>
      <NavBar guest></NavBar>
      <div className="font-sans antialiased">{children}</div>
    </div>
  );
};

export default GuestLayout;
