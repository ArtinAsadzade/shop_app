import { XMarkIcon } from "@heroicons/react/24/outline";
import { adminPageLinksData } from "./../../data/data";
import SideBarItems from "./SideBarItems";
import { ShowSideBarContext } from "./../../context/ShowSideBarContext";
import { useContext } from "react";

export default function SideBar() {
  const { showSideBar, setShowSideBar } = useContext(ShowSideBarContext);

  const showHamburgerHandler = () => {
    setShowSideBar((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <div
        className={`${
          showSideBar ? "block" : ""
        }hidden fixed top-0 sm:sticky bg-white h-screen sm:flex flex-col w-1/3 md:w-1/6 overflow-y-auto`}
      >
        <XMarkIcon
          className="block sm:hidden w-6 my-3 mx-2 cursor-pointer"
          onClick={showHamburgerHandler}
        />
        <div className="sticky top-0 h-svh">
          {adminPageLinksData.map((item) => (
            <SideBarItems key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
