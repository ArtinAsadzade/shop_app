import {
  CheckBadgeIcon,
  EyeIcon,
  EyeSlashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";
import { decrypted, encrypted, validateSignUp } from "../../Utils";

export default function SignUpComponent({
  firstName,
  lastName,
  userName,
  email,
  password,
  passwordRepeat,
  handleValueChanges,
  showAndHidePasswordHandler,
  showPassword,
  setValue,
  value,
  setShowToast,
  setToast,
  setLoginView,
}) {
  const [perm, setPerm] = useState(false);
  const decryptedData = decrypted("usersData");
  const validateSignUpResult = validateSignUp(value);

  const submitHandler = useCallback(() => {
    let newUser = null;
    let toastMessage = { msg: "", icon: null };

    if (validateSignUpResult === true) {
      newUser = {
        id: decryptedData.length + 1,
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        profile: "",
        perm: perm ? 1 : 0,
      };
      toastMessage = {
        msg: "حساب کاربری با موفقیت ساخته شد",
        icon: <CheckBadgeIcon className="w-5 text-green-500" />,
      };
      setShowToast(true);
      setToast(toastMessage);
      setLoginView(true);
      setValue({
        userName: "",
        email: userName,
        lastName: "",
        firstName: "",
        password: password,
        passwordRepeat: "",
      });
      setPerm(false);
    } else {
      toastMessage = {
        msg: validateSignUpResult,
        icon: <XMarkIcon className="w-5 text-red-600" />,
      };
      setShowToast(true);
      setToast(toastMessage);
    }

    if (newUser) {
      encrypted([...decryptedData, newUser], "usersData");
    }
  }, [
    validateSignUpResult,
    decryptedData,
    userName,
    firstName,
    lastName,
    password,
    email,
    perm,
    setShowToast,
    setToast,
    setLoginView,
    setValue,
  ]);

  return (
    <div className="px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            نام
          </label>
          <div className="mt-2">
            <input
              value={firstName}
              onChange={handleValueChanges}
              id="firstName"
              name="firstName"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              placeholder="نام خود را وارد کنید"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            نام خانوادگی
          </label>
          <div className="mt-2">
            <input
              value={lastName}
              onChange={handleValueChanges}
              id="lastName"
              name="lastName"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
              placeholder="نام خانوادگی خود را وارد کنید"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="userName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          نام کاربری
        </label>
        <div className="mt-2">
          <input
            value={userName}
            onChange={handleValueChanges}
            id="userName"
            name="userName"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
            placeholder="نام کاربری خود را وارد کنید"
          />
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ایمیل
        </label>
        <div className="mt-2">
          <input
            value={email}
            onChange={handleValueChanges}
            id="email"
            name="email"
            type="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
            placeholder="ایمیل خود را وارد کنید"
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
        <div className="mt-2 relative">
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
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 p-4 pl-10 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <label
            htmlFor="passwordRepeat"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            تکرار رمز عبور
          </label>
        </div>
        <div className="mt-2 relative">
          <input
            value={passwordRepeat}
            onChange={handleValueChanges}
            id="passwordRepeat"
            name="passwordRepeat"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 p-4 pl-10 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
            placeholder="تکرار رمز عبور خود را وارد کنید"
          />
        </div>
      </div>
      <div className="flex items-center space-x-3 mt-4">
        <label
          htmlFor="perm"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          آیا میخواهید ادمین باشید؟
        </label>
        <input
          checked={perm}
          onChange={(e) => setPerm(e.target.checked)}
          id="perm"
          name="perm"
          type="checkbox"
          className="h-4 w-4 mx-10 rounded-md border-gray-300 text-red-600 checked:bg-red-500 checked:border-red-500"
        />
      </div>

      <div className="my-4">
        <button
          type="button"
          onClick={submitHandler}
          className="w-full flex justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          ثبت نام
        </button>
      </div>
    </div>
  );
}
