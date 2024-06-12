import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [userName, setUserName] = useState("" || "Test User");
  const [userPassword, setUserPassword] = useState("" || "123");

  return (
    <UserContext.Provider
      value={{ userName, setUserName, userPassword, setUserPassword }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
