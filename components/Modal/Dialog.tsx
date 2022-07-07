import { Fragment, useRef } from "react";

import { Dialog, Transition } from "@headlessui/react";

function calcSize(s) {
  switch (s) {
    case "xs":
      return "max-w-xs";
    case "sm":
      return "max-w-2xl";
    case "med":
      return "max-w-4xl";
    case "full":
      return "max-w-full";
    case "lg":
    default:
      return "max-w-7xl";
  }
}

export default function DialogModal({
  isOpen = false,
  setIsOpen = setIsOpen(false),
  size,
  modal,
}) {
  const completeButtonRef = useRef(null);
  function closeModal() {
    setIsOpen(false);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setIsOpen(false);
    }
  }

  return (
    <div>
      <Transition
        appear
        as={Fragment}
        show={isOpen}
        onKeyPress={handleKeyPress}
      >
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
                <div noValidate className="flex flex-col p-0">
                  {modal}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
