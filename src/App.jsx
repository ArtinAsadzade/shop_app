import { useRoutes } from "react-router-dom";
import { routers } from "./routes";
import ShowSideBarProvider from "./context/ShowSideBarContext";
import ShowYesOrNoProvider from "./context/ShowYesOrNoContext";
import UsersDataProvider from "./context/UsersDataContext";
import ProductDataProvider from "./context/ProductDataContext";
import { UsersData, productsData } from "./data/data";
import { useCallback, useEffect } from "react";
import { decrypted, encrypted } from "./Utils";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

function App() {
  const router = useRoutes(routers);

  useEffect(() => {
    if (!localStorage.getItem("usersData") || !localStorage.getItem("productsData")) {
      if (!localStorage.getItem("usersData")) {
        encrypted(UsersData, "usersData");
      } else if (!localStorage.getItem("productsData")) {
        encrypted(productsData, "productsData");
      }
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
            <div className="fixed z-50 p-2 rounded-sm left-0 top-36 bg-red-500 cursor-pointer" onClick={resetDataHandler}>
              <ArrowPathIcon className="w-5 text-white " />
            </div>
            {router}
          </ShowSideBarProvider>
        </ProductDataProvider>
      </UsersDataProvider>
    </ShowYesOrNoProvider>
  );
}

export default App;
