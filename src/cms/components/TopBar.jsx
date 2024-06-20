import { useContext, useState } from "react";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { ShowSideBarContext } from "./../../context/ShowSideBarContext";
import YesOrNo from "../../components/YesOrNo";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const [show, setShow] = useState(false);
  const { setShowSideBar } = useContext(ShowSideBarContext);
  const navigate = useNavigate();

  const showHamburgerHandler = () => {
    setShowSideBar((prevState) => (prevState = !prevState));
  };

  const openModalHandler = () => {
    setShow((prevState) => (prevState = !prevState));
  };

  const goToHomePage = () => {
    navigate("/home");
    setShow((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <YesOrNo
        title={"Back To Main Page!"}
        desc={`Are You Sure For Back?`}
        button={true}
        func={goToHomePage}
        show={show}
        setShow={setShow}
      />
      <div className="flex justify-between p-3 items-center shadow-sm shadow-black">
        <div className="flex justify-evenly items-center">
          <ArrowRightStartOnRectangleIcon
            onClick={openModalHandler}
            className="w-8 md:w-10 text-black cursor-pointer mx-2"
          />
          <div className="flex justify-center px-2 border-r-[1px] items-start flex-col">
            <img
              src={
                JSON.parse(localStorage.getItem("user"))?.profile ||
                "/Profile/Default.jpg"
              }
              alt="Profile Pic"
              className="bg-black rounded-full w-8 md:w-10 cursor-pointer border-[1px]"
            />
            <p className="text-md opacity-95">
              {JSON.parse(localStorage.getItem("user"))?.firstName}{" "}
              {JSON.parse(localStorage.getItem("user"))?.lastName}
            </p>
          </div>
        </div>
        <div>
          <h1 className="hidden sm:block font-extrabold text-xl md:text-2xl text-gray-600">
            articom | Admin Panel
          </h1>
          <Bars3Icon
            className="block sm:hidden w-8 cursor-pointer"
            onClick={showHamburgerHandler}
          />
        </div>
      </div>
    </>
  );
}
