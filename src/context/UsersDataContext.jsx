import { createContext, useState, useEffect } from "react";
import useDecrypted from "../hooks/useDecrypted";

export const UsersDataContext = createContext();

export default function UsersDataProvider({ children }) {
  const [users, setUsers] = useState(null);

  const [decryptedUsers] = useDecrypted("usersData");

  useEffect(() => {
    setUsers(decryptedUsers);
    console.log(users);
  }, [decryptedUsers]);

  return (
    <UsersDataContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersDataContext.Provider>
  );
}
