import { createContext, useState, useEffect } from "react";
import useDecrypted from "../hooks/useDecrypted";

export const UserAccContex = createContext();

export default function UserAccProvider({ children }) {
  const [user, setUser] = useState(null);

  const decryptedData = useDecrypted("user");

  useEffect(() => {
    setUser(decryptedData);
  }, [decryptedData, user]);

  return (
    <UserAccContex.Provider value={{ user, setUser }}>
      {children}
    </UserAccContex.Provider>
  );
}
