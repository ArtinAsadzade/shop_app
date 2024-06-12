import { createContext, useState } from "react";
import { UsersData } from "../data/data";

export const UsersDataContext = createContext();

export default function UsersDataProvider({ children }) {
  const [users, setUsers] = useState(UsersData);
  // JSON.parse(localStorage.getItem("usersData"))

  return (
    <UsersDataContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersDataContext.Provider>
  );
}
