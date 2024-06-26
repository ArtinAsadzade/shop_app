import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import YesOrNo from "./../components/YesOrNo";
import { useEffect } from "react";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { checkUserEmailExists, checkUserNameExists, userLogin } from "../Utils";
import useEncrypted from "../hooks/useEncrypted";
import { UsersDataContext } from "../context/UsersDataContext";
import { motion } from "framer-motion";
import Toast from "../components/Toast";

export default function Login() {
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ icon: "", msg: "" });
  const [value, setValue] = useState({
    userName: "",
    email: "",
    lastName: "",
    firstName: "",
    password: "",
    passwordRepeat: "",
  });
  const [loginView, setLoginView] = useState(true);
  const { users } = useContext(UsersDataContext);
  const isLogin = userLogin(value.email, value.password);
  const isUserNameTaken = checkUserNameExists(value.userName);
  const isEmailTaken = checkUserEmailExists(value.email);

  const navigate = useNavigate();

  const showAndHidePasswordHandler = useCallback(() => {
    setShowPassword((prevState) => (prevState = !prevState));
  }, []);

  const handleValueChanges = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = useCallback(() => {
    if (loginView) {
      let userAcc = users.find(
        (user) =>
          value.password === user.password &&
          (user.gmail === value.email || user.userName === value.email)
      );

      if (isLogin) {
        useEncrypted(userAcc, "user");
        navigate("/home");
      } else if (!isLogin) {
        setShowToast(true);
        setToast({
          msg: "نام کاربری یا رمز شما اشتباه است",
          icon: <XMarkIcon className="w-5 text-red-500" />,
        });

        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
    } else {
      console.log(isEmailTaken);
      if (isEmailTaken) {
        console.log(isEmailTaken);
      } else if (isUserNameTaken) {
        console.log(isUserNameTaken);
      }
    }
  }, [
    isEmailTaken,
    isLogin,
    isUserNameTaken,
    loginView,
    navigate,
    users,
    value.email,
    value.password,
  ]);

  const changeLoginSignUpHandler = useCallback(() => {
    setLoginView(!loginView);
  }, [loginView]);

  const formSubmitHandler = useCallback((e) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <>
      <YesOrNo
        title={`میتونید با کاربر تست وارد بشید (ادمین)`}
        desc={`نام کاربری: Test User || رمز عبور: 123`}
        button={false}
        show={show}
        setShow={setShow}
      />
      <Toast
        show={showToast}
        setShow={setShowToast}
        icon={toast.icon}
        msg={toast.msg}
      />
      <div className="w-full h-screen flex bg-gray-200 min-h-full px-6 py-12 lg:px-8">
        <div className="w-full h-full flex flex-col p-8 backdrop-brightness-150 rounded-md mx-2">
          <div className="w-full h-full flex items-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-lg ">
              <motion.div
                key={loginView ? "login" : "signup"}
                initial={{ opacity: 100, y: 50 }}
                animate={{ opacity: 100, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="bg-white"
              >
                <h2 className="text-center my-10 text-2xl font-bold tracking-tight text-gray-900 p-1">
                  {loginView ? "وارد حساب کاربری خود شوید" : "ثبت نام کنید"}
                </h2>
                <form className="space-y-6" onSubmit={formSubmitHandler}>
                  {loginView ? (
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        نام کاربری یا ایمیل
                      </label>
                      <div className="mt-2">
                        <input
                          value={value.email}
                          onChange={handleValueChanges}
                          id="email"
                          name="email"
                          type="text"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            نام{" "}
                          </label>
                          <div className="mt-2">
                            <input
                              value={value.firstName}
                              onChange={handleValueChanges}
                              id="firstName"
                              name="firstName"
                              type="text"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            نام خانوادگی{" "}
                          </label>
                          <div className="mt-2">
                            <input
                              value={value.lastName}
                              onChange={handleValueChanges}
                              id="lastName"
                              name="lastName"
                              type="text"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="userName"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          نام کاربری
                        </label>
                        <div className="mt-2">
                          <input
                            value={value.userName}
                            onChange={handleValueChanges}
                            id="userName"
                            name="userName"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          ایمیل
                        </label>
                        <div className="mt-2">
                          <input
                            value={value.email}
                            onChange={handleValueChanges}
                            id="email"
                            name="email"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {loginView ? (
                    <div>
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
                            className="w-4 absolute left-2 top-2.5 cursor-pointer"
                            onClick={showAndHidePasswordHandler}
                          />
                        ) : (
                          <EyeIcon
                            className="w-4 absolute left-2 top-2.5 cursor-pointer"
                            onClick={showAndHidePasswordHandler}
                          />
                        )}
                        <input
                          value={value.password}
                          onChange={handleValueChanges}
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 p-4 pl-7 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 border-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
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
                              className="w-4 absolute left-2 top-2.5 cursor-pointer"
                              onClick={showAndHidePasswordHandler}
                            />
                          ) : (
                            <EyeIcon
                              className="w-4 absolute left-2 top-2.5 cursor-pointer"
                              onClick={showAndHidePasswordHandler}
                            />
                          )}
                          <input
                            value={value.password}
                            onChange={handleValueChanges}
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 p-4 pl-7 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 border-none"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="passwordRepeat"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            تکرار رمز عبور{" "}
                          </label>
                        </div>
                        <div className="mt-3 relative">
                          <input
                            value={value.passwordRepeat}
                            onChange={handleValueChanges}
                            id="passwordRepeat"
                            name="passwordRepeat"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 p-4 pl-7 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 border-none"
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div>
                    <button
                      onClick={submitHandler}
                      className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {loginView ? "ورود" : "ثبت نام"}
                    </button>
                  </div>
                  <h4 className="">
                    {loginView ? "حساب کاربری نداری؟" : "حساب کاربری داری؟"}{" "}
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={changeLoginSignUpHandler}
                    >
                      {loginView ? "یکی بساز" : "وارد شو"}
                    </span>
                  </h4>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
