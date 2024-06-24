import { useContext, useEffect, useState } from "react";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { ShowSideBarContext } from "./../../context/ShowSideBarContext";
import YesOrNo from "../../components/YesOrNo";
import { useNavigate } from "react-router-dom";
import useDecrypted from "../../hooks/useDecrypted";

export default function TopBar() {
  const [show, setShow] = useState(false);
  const { setShowSideBar } = useContext(ShowSideBarContext);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const decryptedData = useDecrypted("user");

  useEffect(() => {
    if (decryptedData) {
      setLoading(false);
      setUser(decryptedData);
    }
  }, [decryptedData]);

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
      {loading ? (
        <>Loade</>
      ) : (
        <div className="flex justify-between p-3 items-center shadow-sm shadow-black">
          <div className="flex justify-evenly items-center">
            <ArrowRightStartOnRectangleIcon
              onClick={openModalHandler}
              className="w-7 md:w-9 text-black cursor-pointer mx-2"
            />
            <div className="flex justify-center px-2 border-r-[1px] items-center">
              <img
                src={user.profile || "/Profile/Default.webp"}
                alt="Profile Pic"
                className="bg-black rounded-full w-8 md:w-10 cursor-pointer border-[1px]"
              />
              <p className="text-lg opacity-95 mx-3">
                {user.firstName} {user.lastName}
              </p>
            </div>
          </div>
          <div>
            <h1 className="hidden md:block font-extrabold text-lg md:text-xl text-gray-600">
              Admin Panel
            </h1>
            <Bars3Icon
              className="block md:hidden w-8 cursor-pointer"
              onClick={showHamburgerHandler}
            />
          </div>
        </div>
      )}
    </>
  );
}
