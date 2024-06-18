import {
  ChevronDownIcon,
  ChevronUpIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAccContext } from "../../context/UserAccContext";
import YesOrNo from "../YesOrNo";

export default function BasketLoginNav() {
  const navigate = useNavigate();
  const [subMenu, setSubMenu] = useState(false);
  const [openYseOrNO, setOpenYseOrNO] = useState(false);
  const { userAcc } = useContext(UserAccContext);

  const loginPageHandler = useCallback(() => {
    if (!localStorage.getItem("user")) {
      navigate("/loginRegister");
    } else {
      setSubMenu((prevState) => (prevState = !prevState));
    }
  }, [navigate]);

  const logOutHandler = () => {
    localStorage.removeItem("user");
    setSubMenu(false);
    navigate("/loginRegister");
  };

  const openYesOrNoHandler = () => {
    setOpenYseOrNO((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <YesOrNo
        title="خروج !"
        desc="آیا مطمن هستید که میخواهید از حساب خود خارج شوید ؟"
        func={logOutHandler}
        show={openYseOrNO}
        setShow={setOpenYseOrNO}
        button
      />

      <div className="order-4 lg:flex">
        <div
          className="cursor-pointer justify-center relative lg:justify-start flex items-center h-10 leading-10 px-3 mx-1 transition rounded-xl hover:bg-red-50"
          onClick={loginPageHandler}
        >
          <UserIcon className="w-5 ml-2 text-red-600" />
          {!localStorage.getItem("user") ? (
            <p className="text-sm opacity-95">ورود | ثبت نام</p>
          ) : (
            <>
              <p className="text-sm opacity-95">
                {userAcc.firstName} {userAcc.lastName}
              </p>
              {subMenu ? (
                <ChevronUpIcon className="w-4 text-red-600 mx-1" />
              ) : (
                <ChevronDownIcon className="w-4 text-red-600 mx-1" />
              )}
              <div
                className={`${
                  subMenu ? "block" : "hidden"
                } z-50 absolute top-12 left-0 text-black bg-white shadow-md px-1 text-center flex flex-col justify-center items-center w-full rounded-xl`}
              >
                <div className="cursor-pointer justify-center relative lg:justify-center flex items-center text-center h-10 leading-10 mx-1 w-full my-2 transition rounded-xl hover:bg-red-50">
                  پروفایل
                </div>
                <div className="cursor-pointer justify-center relative lg:justify-center flex items-center text-center h-10 leading-10 mx-1 w-full my-2 transition rounded-xl hover:bg-red-50">
                  پنل کاربری
                </div>
                {userAcc.perm ? (
                  <div className="cursor-pointer justify-center relative lg:justify-center flex items-center text-center h-10 leading-10 mx-1 w-full my-2 transition rounded-xl hover:bg-red-50">
                    پنل ادمین{" "}
                  </div>
                ) : (
                  <></>
                )}
                <div
                  className="cursor-pointer justify-center relative lg:justify-center flex items-center text-center h-10 leading-10 mx-1 w-full my-2 transition rounded-xl hover:bg-red-50"
                  onClick={openYesOrNoHandler}
                >
                  خروج{" "}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="cursor-pointer justify-center lg:justify-start flex items-center h-10 leading-10 px-3 mx-1 transition rounded-xl hover:bg-red-50">
          <ShoppingCartIcon className="w-5 ml-2 text-red-600" />
          <p className="text-sm opacity-95">سبد خرید</p>
          <ChevronDownIcon className="w-4 text-red-600 mx-1" />
        </div>
      </div>
    </>
  );
}
