import { useRoutes } from "react-router-dom";
import { routers } from "./routes";
import ShowSideBarProvider from "./context/ShowSideBarContext";
import ShowYesOrNoProvider from "./context/ShowYesOrNoContext";
import UsersDataProvider from "./context/UsersDataContext";
import ProductDataProvider from "./context/ProductDataContext";
import { UsersData, productsData } from "./data/data";
import { useEffect } from "react";
import { decrypted, encrypted } from "./Utils";

function App() {
  const router = useRoutes(routers);

  useEffect(() => {
    if (
      !localStorage.getItem("usersData") ||
      !localStorage.getItem("productsData")
    ) {
      if (!localStorage.getItem("usersData")) {
        encrypted(UsersData, "usersData");
      } else if (!localStorage.getItem("productsData")) {
        encrypted(productsData, "productsData");
      }
    }
  }, []);

  return (
    <ShowYesOrNoProvider>
      <UsersDataProvider>
        <ProductDataProvider>
          <ShowSideBarProvider>{router}</ShowSideBarProvider>
        </ProductDataProvider>
      </UsersDataProvider>
    </ShowYesOrNoProvider>
  );
}

export default App;
