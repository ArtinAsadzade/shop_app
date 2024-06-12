import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import YesOrNo from "./../components/YesOrNo";
import { userLogin } from "./../Utils";
import { UserAccContext } from "../context/UserAccContext";
import { useEffect } from "react";
import UsersData from "../data/UsersData";
import { productsData } from "../data/ProductsData";

// JSON.parse(localStorage.getItem("user"))

export default function Login() {
  const [show, setShow] = useState(true);
  const { userName, setUserName, userPassword, setUserPassword } =
    useContext(UserContext);

  const { userFind } = useContext(UserAccContext);
  const isLogin = userLogin(userName, userPassword);
  const navigate = useNavigate();

  const setUserNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const submitHandler = () => {
    if (isLogin) {
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
        title={`Dont Change Login Value !!!`}
        desc={`UserName: Test User || Pass: 123`}
        button={false}
        show={show}
        setShow={setShow}
      />
      <div className="w-full h-svh flex min-h-full flex-col px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to admin panel
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formSubmitHandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Or UserName
              </label>
              <div className="mt-2">
                <input
                  value={userName}
                  onChange={setUserNameHandler}
                  id="email"
                  name="email"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={userPassword}
                  onChange={setPasswordHandler}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={submitHandler}
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
