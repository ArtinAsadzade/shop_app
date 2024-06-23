import { createContext, useState, useEffect } from "react";
import useDecrypted from "../hooks/useDecrypted";

export const UsersDataContext = createContext();

export default function UsersDataProvider({ children }) {
  const [users, setUsers] = useState(null);

  const decryptedData = useDecrypted("usersData");

  useEffect(() => {
    setUsers(decryptedData);
  }, [decryptedData, users]);

  return (
    <UsersDataContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersDataContext.Provider>
  );
}
