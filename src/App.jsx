import { useRoutes } from "react-router-dom";
import { routers } from "./routes";
import ShowSideBarProvider from "./context/ShowSideBarContext";
import ShowYesOrNoProvider from "./context/ShowYesOrNoContext";
import UsersDataProvider from "./context/UsersDataContext";
import ProductDataProvider from "./context/ProductDataContext";
import { UsersData, productsData } from "./data/data";
import { useCallback, useEffect, useState } from "react";
import { encrypted } from "./Utils";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import YesOrNo from "./components/YesOrNo";
import FilterProvider from "./context/FiltersContext";

function App() {
  const [show, setShow] = useState(false);
  const router = useRoutes(routers);

  useEffect(() => {
    if (!localStorage.getItem("usersData") || !localStorage.getItem("productsData")) {
      if (!localStorage.getItem("usersData")) {
        encrypted(UsersData, "usersData");
        setTimeout(() => {
          location.reload();
        }, 2000);
      } else if (!localStorage.getItem("productsData")) {
        encrypted(productsData, "productsData");
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    } else {
      setShow(true);
    }
  }, []);

  const resetDataHandler = useCallback(() => {
    localStorage.removeItem("usersData");
    localStorage.removeItem("productsData");
    location.reload();
  }, []);

  return (
    <ShowYesOrNoProvider>
      <UsersDataProvider>
        <ProductDataProvider>
          <ShowSideBarProvider>
            <FilterProvider>
              <YesOrNo
                desc={`در صورت پیش اومدن هرگون مشکل مانند لود نشدن محصولات(مشخصات, قیمت و...), لو نشدن کاربر ها و... از دکمه ریست سمت چپ صفحه استفاده کنید!`}
                button={false}
                show={show}
                setShow={setShow}
              />
              <div className="fixed z-50 p-2 rounded-sm left-0 top-36 bg-red-500 cursor-pointer" onClick={resetDataHandler}>
                <ArrowPathIcon className="w-5 text-white " />
              </div>
              {router}
            </FilterProvider>
          </ShowSideBarProvider>
        </ProductDataProvider>
      </UsersDataProvider>
    </ShowYesOrNoProvider>
  );
}

export default App;
