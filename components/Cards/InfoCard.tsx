import PagesManifestPlugin from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import React from "react";
import { PanelCard } from "../Panel/PanelCard";
import SubPanelInfo from "../Panel/SubPanelInfo";
import InfoLabels from "../Text/InfoLabels";
import NumLabels from "../Text/NumLabels";

const InfoCard = () => {
  return (
    <PanelCard size="full">
      <div className="flex flex-col gap-2 p-3">
        <SubPanelInfo>
          <InfoLabels>Invoice limits</InfoLabels>
          <NumLabels>$ 20000</NumLabels>
        </SubPanelInfo>
        <SubPanelInfo>
          <InfoLabels>Current month invoicing</InfoLabels>
          <NumLabels>$ 20000</NumLabels>
        </SubPanelInfo>
        <SubPanelInfo>
          <InfoLabels>Last month invoncing</InfoLabels>
          <NumLabels>$ 20000</NumLabels>
        </SubPanelInfo>
      </div>
    </PanelCard>
  );
};

export default InfoCard;
