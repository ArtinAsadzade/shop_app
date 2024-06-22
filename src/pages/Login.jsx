import { useState } from "react";
import { useNavigate } from "react-router-dom";
import YesOrNo from "./../components/YesOrNo";
import { useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { userLogin } from "../Utils";

// JSON.parse(localStorage.getItem("user"))

export default function Login() {
  const [show, setShow] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("" || "Test User");
  const [userPassword, setUserPassword] = useState("" || "123");

  const isLogin = userLogin(userName, userPassword);

  const showAndHidePasswordHandler = () => {
    setShowPassword((prevState) => (prevState = !prevState));
  };

  const navigate = useNavigate();

  const setUserNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };

  let userAcc = JSON.parse(localStorage.getItem("usersData"))?.find(
    (user) =>
      userPassword === user.password &&
      (user.gmail === userName || user.userName === userName)
  );

  const submitHandler = () => {
    if (isLogin) {
      localStorage.setItem("user", JSON.stringify(userAcc));
      navigate("/home");
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
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
      <div className="w-full h-svh flex bg-gray-200 min-h-full px-6 py-12 lg:px-8">
        <div className="w-full h-full flex flex-col p-8 backdrop-brightness-150 lg:w-1/2 rounded-md mx-2">
          <div className="w-full h-full flex items-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center my-10 text-2xl font-bold tracking-tight text-gray-900 p-1">
                به حساب کاربری خود وارد شوید{" "}
              </h2>
              <form className="space-y-6" onSubmit={formSubmitHandler}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    نام کاربری یا ایمیل
                  </label>
                  <div className="mt-2">
                    <input
                      value={userName}
                      onChange={setUserNameHandler}
                      id="email"
                      name="email"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-4 pl-7 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
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
                    {showPassword ? (
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
                      value={userPassword}
                      onChange={setPasswordHandler}
                      id="password"
                      name="password"
                      type={!showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 p-4 pl-7 placeholder:text-red-400 focus:ring-2 outline-none focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 border-none"
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={submitHandler}
                    className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    ورود
                  </button>
                </div>
                <h4 className="">
                  حساب کاربری نداری؟{" "}
                  <span className="text-red-500 cursor-pointer">یکی بساز</span>
                </h4>
              </form>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full hidden lg:flex rounded-md mx-2">
          <img
            src="/Vectors/LoginGif.gif"
            alt=""
            className="rounded-md flex-1"
          />
        </div>
      </div>
    </>
  );
}
