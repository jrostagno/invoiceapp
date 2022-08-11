import moment from "moment";

import React from "react";
import { InfoCardProps } from "../../types";

import SubPanelInfo from "../Panel/SubPanelInfo";
import InfoLabels from "../Text/InfoLabels";
import NumLabels from "../Text/NumLabels";

const InfoCard: React.FC<InfoCardProps> = ({
  invoiceLimit,
  currentMonth,
  lastMonth,
}) => {
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
