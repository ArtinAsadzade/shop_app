import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect } from "react";

export default function ModalContainer({ children, open, setOpen, className }) {
  const showHandler = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [open]);

  return (
    <div
      className={`w-full h-screen fixed top-0 z-50 left-0 p-3 backdrop-blur-sm flex justify-center items-center overflow-y-visible transition-all duration-500 ${
        open ? "opacity-500 visible" : "opacity-0 invisible"
      }`}
    >
      <div className={`bg-white w-full shadow-lg rounded-lg p-10 container relative ${className ? className : ""}`}>
        <XMarkIcon className="w-8 mr-auto cursor-pointer absolute top-4 left-4" onClick={showHandler} />
        {children}
      </div>
    </div>
  );
}
