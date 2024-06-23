import { useRoutes } from "react-router-dom";
import { routers } from "./routes";
import UserProvider from "./context/UserContext";
import ShowSideBarProvider from "./context/ShowSideBarContext";
import ShowYesOrNoProvider from "./context/ShowYesOrNoContext";
import UsersDataProvider from "./context/UsersDataContext";
import ProductDataProvider from "./context/ProductDataContext";
import { UsersData, productsData } from "./data/data";
import { useEffect } from "react";
import useEncrypted from "./hooks/useEncrypted";
import useDecrypted from "./hooks/useDecrypted";
import UserAccProvider from "./context/UserAccContex";

function App() {
  const router = useRoutes(routers);
  console.log(useDecrypted("user"));
  useEffect(() => {
    if (
      !localStorage.getItem("usersData") ||
      !localStorage.getItem("productsData")
    ) {
      if (!localStorage.getItem("usersData")) {
        useEncrypted(UsersData, "usersData");
      } else if (!localStorage.getItem("productsData")) {
        useEncrypted(productsData, "productsData");
      }
    }
  }, []);

  return (
    <UserProvider>
      <UserAccProvider>
        <ShowYesOrNoProvider>
          <UsersDataProvider>
            <ProductDataProvider>
              <ShowSideBarProvider>{router}</ShowSideBarProvider>
            </ProductDataProvider>
          </UsersDataProvider>
        </ShowYesOrNoProvider>
      </UserAccProvider>
    </UserProvider>
  );
}

export default App;
