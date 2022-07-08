import React, { FC } from "react";

interface SubPanelInfoTypes {
  children: React.ReactNode;
}
const SubPanelInfo: FC<SubPanelInfoTypes> = ({ children }) => {
  return (
    <div className="flex justify-between p-2 px-4 bg-orange-100 rounded-md">
      {children}
    </div>
  );
};

export default SubPanelInfo;
