import React, { useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import { PanelTable } from "../Panel/PanelCard";
import InvoiceTable from "./InvoiceTable";
import DialogModal from "../Modal/Dialog";
import ModalAddInvoice from "../Modal/ModalAddInvoice";

const InvoicePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PanelTable size="full">
      <InvoiceTable></InvoiceTable>
      <div className="flex justify-end">
        <ButtonPrimary onClick={() => setIsOpen(true)} className="mx-6 mt-6">
          Add invoice
        </ButtonPrimary>
      </div>
      <DialogModal
        size="sm"
        modal={<ModalAddInvoice></ModalAddInvoice>}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      ></DialogModal>
    </PanelTable>
  );
};

export default InvoicePanel;
