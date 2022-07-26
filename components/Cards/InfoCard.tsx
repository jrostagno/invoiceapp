import moment from "moment";
import PagesManifestPlugin from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import React from "react";
import { PanelCard } from "../Panel/PanelCard";
import SubPanelInfo from "../Panel/SubPanelInfo";
import InfoLabels from "../Text/InfoLabels";
import NumLabels from "../Text/NumLabels";

const InfoCard = ({ invoiceLimit, currentMonth, lastMonth }) => {
  return (
    <div className="flex flex-col gap-2 p-3">
      <SubPanelInfo>
        <InfoLabels>Invoice limits</InfoLabels>
        <NumLabels>{invoiceLimit}</NumLabels>
      </SubPanelInfo>
      <SubPanelInfo>
        <InfoLabels>
          {`  Current month invoicing
          (${moment().subtract(0, "month").format("MMM YYYY")} ) `}
        </InfoLabels>
        <NumLabels>{currentMonth}</NumLabels>
      </SubPanelInfo>
      <SubPanelInfo>
        <InfoLabels>
          {" "}
          {`  Last month invoicing
          (${moment().subtract(1, "month").format("MMM YYYY")} ) `}
        </InfoLabels>
        <NumLabels>{lastMonth}</NumLabels>
      </SubPanelInfo>
    </div>
  );
};

export default InfoCard;
