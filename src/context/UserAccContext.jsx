import { createContext, useContext } from "react";
import { UsersData } from "./../data/data";
import { UserContext } from "./UserContext";

export const UserAccContext = createContext();

export default function UserAccProvider({ children }) {
  const { userName, userPassword } = useContext(UserContext);
  let userFind = UsersData.find(
    (user) =>
      userPassword === user.password &&
      (user.gmail === userName || user.userName === userName)
  );

  return (
    <UserAccContext.Provider value={{ userFind }}>
      {children}
    </UserAccContext.Provider>
  );
}
