import { useRoutes } from "react-router-dom";
import { routers } from "./routes";
import UserProvider from "./context/UserContext";
import ShowSideBarProvider from "./context/ShowSideBarContext";
import ShowYesOrNoProvider from "./context/ShowYesOrNoContext";
import UsersDataProvider from "./context/UsersDataContext";
import UserAccProvider from "./context/UserAccContext";
import ProductDataProvider from "./context/ProductDataContext";
import { UsersData, productsData } from "./data/data";
import { useEffect } from "react";
import CryptoJS from "crypto-js";

function App() {
  const router = useRoutes(routers);
  // useEffect(() => {
  //   if (
  //     !localStorage.getItem("usersData") ||
  //     !localStorage.getItem("productsData")
  //   ) {
  //     if (!localStorage.getItem("usersData")) {
  //       localStorage.setItem(
  //         "usersData",
  //         CryptoJS.AES.encrypt(
  //           JSON.stringify(UsersData),
  //           import.meta.env.VITE_SECRET_KEY
  //         ).toString()
  //       );
  //     } else if (!localStorage.getItem("productsData")) {
  //       localStorage.setItem("productsData", JSON.stringify(productsData));
  //     }
  //   }
  // }, []);

  return (
    <UserProvider>
      <ShowYesOrNoProvider>
        <UsersDataProvider>
          <UserAccProvider>
            <ProductDataProvider>
              <ShowSideBarProvider>{router}</ShowSideBarProvider>
            </ProductDataProvider>
          </UserAccProvider>
        </UsersDataProvider>
      </ShowYesOrNoProvider>
    </UserProvider>
  );
}

export default App;
