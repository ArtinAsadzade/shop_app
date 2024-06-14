import { createContext, useState } from "react";

export const UsersDataContext = createContext();

export default function UsersDataProvider({ children }) {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("usersData"))
  );

  return (
    <UsersDataContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersDataContext.Provider>
  );
}
