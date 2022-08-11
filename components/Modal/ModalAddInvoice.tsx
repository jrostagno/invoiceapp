import React, { FC, FormEvent } from "react";
import { Dialog } from "@headlessui/react";
import LabelForm from "../Text/LabelForm";
import InputForm from "../input/InputForm";
import { invoicesType, supplierOptions } from "../../lib/formConst";
import ButtonDanger from "../Button/ButtonDanger";
import ButtonPrimary from "../Button/ButtonPrimary";
import { FaDownload } from "react-icons/fa";
import Select from "../input/Select";

interface ModalAddInvoiceProps {
  isEdit: boolean;
  form: { date: string; amount: number };
  handleOnChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const ModalAddInvoice: FC<ModalAddInvoiceProps> = ({
  setIsOpen,
  isEdit,
  form,
  handleSubmit,
  handleOnChange,
}) => {
  return (
    <>
      <div
        className={`w-full py-6 overflow-hidden inline-block text-left align-middle transition-all transform bg-white dark:bg-slate-700 shadow-xl rounded-2xl`}
      >
        <Dialog.Title
          as="h3"
          className="p-4 text-lg font-medium leading-6 text-orange-700 border-b px-14 dark:text-white dark:opacity-90 dark:border-none "
        >
          {!isEdit ? "Add Invoice" : "Edit Invoice"}
        </Dialog.Title>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full p-4">
            <div className="w-full">
              <div className="flex flex-col p-4">
                <LabelForm>Date</LabelForm>
                <InputForm
                  autoFocus
                  id="date"
                  name="date"
                  placeholder="Enter date"
                  type="date"
                  value={form.date || ""}
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex flex-col p-4">
                <LabelForm>Supplier</LabelForm>
                <Select
                  onChange={handleOnChange}
                  name="supplier"
                  options={supplierOptions}
                />
              </div>
              {/* <div className="flex flex-col p-4 cursor-not-allowed">
                <LabelForm className="p-2 border rounded-md cursor-not-allowed">
                  <div className="flex items-center justify-evenly">
                    Upload PDF <FaDownload></FaDownload>
                  </div>
                  <InputForm hidden name="pdf" id="pdf" autoFocus type="file" />
                </LabelForm>
              </div> */}
            </div>
            <div className="w-full">
              <div className="flex flex-col p-4">
                <LabelForm>Amount</LabelForm>
                <InputForm
                  id="amount"
                  autoFocus
                  name="amount"
                  onChange={handleOnChange}
                  type="number"
                  value={form.amount || ""}
                />
              </div>
              <div className="flex flex-col p-4">
                <LabelForm>Invoice Type</LabelForm>
                <Select
                  onChange={handleOnChange}
                  name="invoiceType"
                  options={invoicesType}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end px-12 mt-24">
            <ButtonDanger
              onClick={() => {
                setIsOpen(false);
              }}
              className="mr-2"
            >
              Cancel
            </ButtonDanger>
            <ButtonPrimary type="submit">
              {isEdit ? "Edit" : "Save"}
            </ButtonPrimary>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalAddInvoice;
