import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";

export default function ModalContainer({ children, open, setOpen, className }) {
  const showHandler = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);
  return (
    <div
      className={`w-full h-screen fixed top-0 z-50 left-0  backdrop-blur-sm flex justify-center items-center overflow-y-visible  transition-all duration-500 ${
        open ? "opacity-500 visible" : "opacity-0 invisible"
      }`}
    >
      <div className={`bg-white w-full rounded-lg p-10 container ${className ? className : ""}`}>
        <XMarkIcon className="w-5 sm:w-8 mr-auto cursor-pointer" onClick={showHandler} />
        {children}
      </div>
    </div>
  );
}
