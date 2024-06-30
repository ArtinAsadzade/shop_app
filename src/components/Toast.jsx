import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Toast({ icon, msg, show, setShow }) {
  const hideToast = () => {
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [setShow, show]);

  return createPortal(
    <div
      id="toast-default"
      className={`flex items-center justify-between w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg fixed top-2 right-2 shadow ${
        show ? "opacity-100 visible animate-slide-in-right" : "opacity-0 invisible animate-slide-out-right"
      }`}
      role="alert"
    >
      <button
        type="button"
        className="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={hideToast}
      >
        <XMarkIcon className="w-5" />
      </button>
      <div className="ms-3 text-sm font-normal">{msg}</div>
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-slate-200 rounded-lg ">{icon}</div>
    </div>,
    document.getElementById("modals-parent")
  );
}
