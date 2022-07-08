import React, { FC } from "react";
import NavBar from "../NavBar";

interface AppLayoutProps {
  children: React.ReactNode;
  guest?: string;
}

const AppLayout: FC<AppLayoutProps> = ({ children, guest }) => {
  return (
    <div className="h-full min-w-full min-h-screen bg-orange-50">
      <NavBar guest={guest}></NavBar>
      <main className="p-14">{children}</main>
    </div>
  );
};

export default AppLayout;
