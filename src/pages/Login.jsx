import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import YesOrNo from "./../components/YesOrNo";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { checkUserEmailExists, checkUserNameExists, userLogin } from "../Utils";
import useEncrypted from "../hooks/useEncrypted";
import { motion } from "framer-motion";
import Toast from "../components/Toast";
import LogionComponent from "../components/LoginSignUp/LogionComponent";
import SignUpComponent from "../components/LoginSignUp/SignUpComponent";

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
  const isLogin = userLogin(value.email, value.password);
  const isUserNameTaken = checkUserNameExists(value.userName);
  const isEmailTaken = checkUserEmailExists(value.email);

  const navigate = useNavigate();

  const showAndHidePasswordHandler = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const handleValueChanges = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = useCallback(() => {
    if (loginView) {
      if (isLogin) {
        useEncrypted(isLogin, "user");
        navigate("/home");
      } else {
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
      if (isEmailTaken) {
        console.log(isEmailTaken);
      } else if (isUserNameTaken) {
        console.log(isUserNameTaken);
      }
    }
  }, [isEmailTaken, isLogin, isUserNameTaken, loginView, navigate]);

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
        title="میتونید با کاربر تست وارد بشید (ادمین)"
        desc="نام کاربری: Test User || رمز عبور: 123"
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
      <div className="flex items-center justify-center min-h-screen bg-gray-200 px-4 py-12 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <motion.div
            key={loginView ? "login" : "signup"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
              {loginView ? "وارد حساب کاربری خود شوید" : "ثبت نام کنید"}
            </h2>
            <form className="space-y-6" onSubmit={formSubmitHandler}>
              {loginView ? (
                <LogionComponent
                  email={value.email}
                  password={value.password}
                  handleValueChanges={handleValueChanges}
                  showAndHidePasswordHandler={showAndHidePasswordHandler}
                  showPassword={showPassword}
                />
              ) : (
                <SignUpComponent
                  firstName={value.firstName}
                  lastName={value.lastName}
                  userName={value.userName}
                  email={value.email}
                  password={value.password}
                  passwordRepeat={value.passwordRepeat}
                  handleValueChanges={handleValueChanges}
                  showAndHidePasswordHandler={showAndHidePasswordHandler}
                  showPassword={showPassword}
                />
              )}
              <div>
                <button
                  type="button"
                  onClick={submitHandler}
                  className="w-full flex justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {loginView ? "ورود" : "ثبت نام"}
                </button>
              </div>
              <div className="text-center text-sm">
                {loginView ? "حساب کاربری نداری؟" : "حساب کاربری داری؟"}{" "}
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={changeLoginSignUpHandler}
                >
                  {loginView ? "یکی بساز" : "وارد شو"}
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
