import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAccContext } from "../../context/UserAccContext";

export default function BasketLoginNav() {
  const navigate = useNavigate();
  const [subMenu, setSubMenu] = useState(false);
  const { userAcc } = useContext(UserAccContext);

  const loginPageHandler = useCallback(() => {
    if (!localStorage.getItem("user")) {
      navigate("/loginRegister");
    }
  }, [navigate]);

  const openSubMenuHandler = useCallback(() => {
    setSubMenu((prevState) => (prevState = !prevState));
  });

  return (
    <>
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
              <p className="text-sm opacity-95" onClick={openSubMenuHandler}>
                {userAcc.userName}
              </p>
              <ChevronDownIcon className="w-4 text-red-600 mx-1" />
              <div
                className={`${
                  subMenu ? "block" : "hidden"
                } absolute top-20 text-black`}
              >
                <div className="bg-red-300 text-black">پروفایل</div>
                <div className="bg-red-300 text-black"></div>
                {userAcc.perm ? (
                  <div className="bg-red-300 text-black">پنل ادمین </div>
                ) : (
                  <></>
                )}
                <div className="bg-red-300 text-black">خروج </div>
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
