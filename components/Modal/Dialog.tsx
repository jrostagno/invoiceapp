import React, { FC, Fragment, useRef } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { SizeDialog } from "../../types";

function calcSize(s: SizeDialog) {
  switch (s) {
    case "xs":
      return "max-w-xs";
    case "sm":
      return "max-w-2xl";
    case "md":
      return "max-w-4xl";
    case "full":
      return "max-w-full";
    case "lg":
    default:
      return "max-w-7xl";
  }
}

interface DialogModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  size: SizeDialog;
  modal: JSX.Element;
}

export const DialogModal: FC<DialogModalProps> = ({
  isOpen = false,
  setIsOpen,
  size,
  modal,
}) => {
  const completeButtonRef = useRef(null);
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black/30"
          initialFocus={completeButtonRef}
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              aria-hidden="true"
              className="inline-block h-screen align-middle"
            />
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`inline-block w-full my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl ${calcSize(
                  size
                )}`}
              >
                <div className="flex flex-col p-0 dark:bg-slate-700">
                  {modal}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
