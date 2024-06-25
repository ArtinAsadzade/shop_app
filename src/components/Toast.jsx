import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Toast({ icon, msg, show, setShow }) {
  const hideToast = () => {
    setShow((prevState) => (prevState = !prevState));
  };
  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [show]);

  return createPortal(
    <div
      className={`w-full h-screen fixed top-0 z-50 left-0  backdrop-blur-sm flex justify-center items-center overflow-y-visible  transition-all duration-500  ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        id="toast-default"
        className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg ">
          {icon}
        </div>
        <div className="ms-3 text-sm font-normal">{msg}</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#toast-default"
          aria-label="Close"
          onClick={hideToast}
        >
          <XMarkIcon className="w-5" />
        </button>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
