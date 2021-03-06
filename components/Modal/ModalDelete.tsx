import React from "react";
import { Dialog } from "@headlessui/react";
import ButtonDanger from "../Button/ButtonDanger";
import ButtonPrimary from "../Button/ButtonPrimary";

const ModalDelete = ({ setIsOpen, setIsDelete, handleDeleteInvoice }) => {
  return (
    <div>
      <Dialog.Title
        as="h3"
        className="p-4 px-6 text-lg font-medium leading-6 text-center text-orange-700 border-b"
      >
        Are you want to delete this ?
      </Dialog.Title>
      <div className="flex items-center justify-center gap-4 p-4 mt-10">
        <ButtonDanger
          onClick={() => {
            setIsOpen(false);
          }}
          className="mr-2"
        >
          Cancel
        </ButtonDanger>
        <ButtonPrimary onClick={handleDeleteInvoice}>Confirm</ButtonPrimary>
      </div>
    </div>
  );
};

export default ModalDelete;
