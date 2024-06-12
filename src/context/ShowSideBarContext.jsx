import { createContext, useState } from "react";

export const ShowSideBarContext = createContext();

export default function ShowSideBarProvider({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <ShowSideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </ShowSideBarContext.Provider>
  );
}
