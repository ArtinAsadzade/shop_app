import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function YesOrNo({ title, desc, func, button, show, setShow }) {
  const handleClick = () => {
    func();
  };
  const hideQuest = () => {
    setShow((prevState) => (prevState = !prevState));
  };
  console.log(show);
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
        className={`w-full max-w-sm p-7 z-40 text-gray-500 bg-white rounded-lg shadow-xl border-2`}
        role="alert"
      >
        <div className="flex">
          <div className="ms-3 text-sm w-full font-normal">
            <span className="mb-1 text-lg font-semibold text-gray-900">
              {title}
            </span>
            <div className="mb-2 text-sm font-normal">{desc}</div>
            {button ? (
              <div className="grid grid-cols-2 w-full gap-2">
                <div>
                  <button
                    className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-gray-700"
                    onClick={handleClick}
                  >
                    Yes
                  </button>
                </div>
                <div>
                  <button
                    className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
                    onClick={hideQuest}
                  >
                    No
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 "
            onClick={hideQuest}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
