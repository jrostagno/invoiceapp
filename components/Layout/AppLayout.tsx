import React, { FC } from "react";
import NavBar1 from "../../components/NavBar/NavBar1";
import Footer from "../Footer/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children, session }) => {
  return (
    <div className="flex flex-col h-full min-w-full min-h-screen bg-gray-100 dark:bg-gradient-to-t from-slate-800 to-slate-900">
      <NavBar1 session={session}></NavBar1>
      <main className="flex-grow p-14">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default AppLayout;
