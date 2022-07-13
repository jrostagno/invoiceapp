import React from "react";
import { Dialog } from "@headlessui/react";
import LabelForm from "../Text/LabelForm";
import InputForm from "../input/InputForm";
import Selector from "../input/Selector";
import { invoicesType, supplierOptions } from "../../lib/formConst";
import ButtonDanger from "../Button/ButtonDanger";
import ButtonPrimary from "../Button/ButtonPrimary";
import { FaDownload } from "react-icons/fa";

const ModalAddInvoice = ({
  setIsOpen,
  isEdit,
  setIsEdit,
  form,
  setForm,
  supplier,
  setSupplier,
  invoiceType,
  setInvoiceType,
  errorMessage,
  handleSubmit,
  handleOnChange,
  setErrorMessage,
}) => {
  return (
    <>
      <div
        className={`w-full py-6 overflow-hidden inline-block text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl`}
      >
        <Dialog.Title
          as="h3"
          className="p-4 px-6 text-lg font-medium leading-6 text-orange-700 border-b"
        >
          {!isEdit ? "Add Invoice" : "Edit Invoice"}
        </Dialog.Title>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full p-4">
            <div className="w-full">
              <div className="flex flex-col p-4">
                <LabelForm htmlFor="date">Date</LabelForm>
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
                <LabelForm htmlFor="supplier">Supplier</LabelForm>
                <Selector
                  name="supplier"
                  placeholder="Select supplier"
                  id="supplier"
                  options={supplierOptions || ""}
                  handleChange={(supplier) => setSupplier(supplier)}
                  value={supplier}
                />
              </div>
              <div className="flex flex-col p-4">
                <LabelForm
                  className="p-2 border rounded-md cursor-pointer"
                  htmlFor="pdf"
                >
                  <div className="flex items-center justify-evenly">
                    Upload PDF <FaDownload></FaDownload>
                  </div>
                  <InputForm hidden name="pdf" id="pdf" autoFocus type="file" />
                </LabelForm>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col p-4">
                <LabelForm htmlFor="amount">Amount</LabelForm>
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
                <LabelForm htmlFor="invoiceType">Invoice Type</LabelForm>
                <Selector
                  id="invoiceType"
                  placeholder="Select invoice type"
                  name="invoiceType"
                  options={invoicesType || ""}
                  handleChange={(type) => setInvoiceType(type)}
                  value={invoiceType}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end px-12 mt-24">
            <ButtonDanger
              onClick={() => {
                setIsOpen(false);
                setIsEdit(false);
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
