import { useRoutes } from "react-router-dom";
import { routes } from "./router";
import UserProvider from "./context/UserContext";
import ShowSideBarProvider from "./context/ShowSideBarContext";
import ShowYesOrNoProvider from "./context/ShowYesOrNoContext";
import UsersDataProvider from "./context/UsersDataContext";
import UserAccProvider from "./context/UserAccContext";
import ProductDataProvider from "./context/ProductDataContext";

function App() {
  // const { userFind } = useContext(UserAccContext);

  const router = useRoutes(routes);
  // localStorage.setItem("user", JSON.stringify(userFind));

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
