import {
  CheckBadgeIcon,
  EyeIcon,
  EyeSlashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useEffect } from "react";
import { encrypted, userLogin } from "../../Utils";
import { useNavigate } from "react-router-dom";

export default function LoginComponent({
  email,
  password,
  handleValueChanges,
  showAndHidePasswordHandler,
  showPassword,
  setShowToast,
  setToast,
}) {
  const navigate = useNavigate();
  const isLogin = userLogin(email, password);
  useEffect(() => {}, []);

  const submitHandler = useCallback(() => {
    let toastMessage = { msg: "", icon: null };

    if (isLogin) {
      toastMessage = {
        msg: "ورود موفقیت آمیز بود",
        icon: <CheckBadgeIcon className="w-5 text-green-500" />,
      };
      encrypted(isLogin, "user");
      setShowToast(true);
      setToast(toastMessage);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } else {
      toastMessage = {
        msg: "نام کاربری یا رمز عبور اشتباه است",
        icon: <XMarkIcon className="w-5 text-red-600" />,
      };
      setShowToast(true);
      setToast(toastMessage);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  }, [isLogin, setShowToast, setToast, navigate]);

  return (
    <div className="px-4 sm:px-0">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          نام کاربری یا ایمیل
        </label>
        <div className="mt-2">
          <input
            value={email}
            onChange={handleValueChanges}
            id="email"
            name="email"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
            placeholder="نام کاربری یا ایمیل خود را وارد کنید"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            رمز عبور
          </label>
        </div>
        <div className="mt-3 relative">
          {!showPassword ? (
            <EyeSlashIcon
              className="w-5 h-5 absolute left-2 top-2.5 cursor-pointer"
              onClick={showAndHidePasswordHandler}
            />
          ) : (
            <EyeIcon
              className="w-5 h-5 absolute left-2 top-2.5 cursor-pointer"
              onClick={showAndHidePasswordHandler}
            />
          )}
          <input
            value={password}
            onChange={handleValueChanges}
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 p-4 pl-10 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </div>
      </div>
      <div className="my-4">
        <button
          type="button"
          onClick={submitHandler}
          className="w-full flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          ورود
        </button>
      </div>
    </div>
  );
}
