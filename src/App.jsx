import { useRoutes } from "react-router-dom";
import { routers } from "./routes";
import UserProvider from "./context/UserContext";
import ShowSideBarProvider from "./context/ShowSideBarContext";
import ShowYesOrNoProvider from "./context/ShowYesOrNoContext";
import UsersDataProvider from "./context/UsersDataContext";
import UserAccProvider from "./context/UserAccContext";
import ProductDataProvider from "./context/ProductDataContext";

function App() {
  const router = useRoutes(routers);

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
