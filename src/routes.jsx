import Main from "./pages/Main";
import Shop from "./pages/Shop";

export const routes = [
  { path: "/", element: <Main /> },
  { path: "/home", element: <Main /> },
  { path: "/shop", element: <Shop /> },
];
