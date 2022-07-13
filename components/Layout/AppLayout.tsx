import React, { FC } from "react";
import NavBar1 from "../../components/NavBar/NavBar1";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children, session }) => {
  return (
    <div className="h-full min-w-full min-h-screen bg-gray-50">
      <NavBar1 session={session}></NavBar1>
      <main className="p-14">{children}</main>
    </div>
  );
};

export default AppLayout;
