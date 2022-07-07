import React from "react";

const SubPanelInfo = ({ children }) => {
  return (
    <div className="flex justify-between p-2 px-4 bg-orange-100 rounded-md">
      {children}
    </div>
  );
};

export default SubPanelInfo;
