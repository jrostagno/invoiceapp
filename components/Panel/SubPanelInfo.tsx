import React, { FC } from "react";

interface SubPanelInfoTypes {
  children: React.ReactNode;
}
const SubPanelInfo: FC<SubPanelInfoTypes> = ({ children }) => {
  return (
    <div className="flex justify-between p-2 px-4 bg-gray-100 rounded-md  dark:bg-[#1e293b] dark:border-0">
      {children}
    </div>
  );
};

export default SubPanelInfo;
