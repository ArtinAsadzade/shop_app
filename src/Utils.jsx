import { useContext } from "react";
import { UsersDataContext } from "./context/UsersDataContext";
export const userLogin = (userName, userPassword) => {
  const { users } = useContext(UsersDataContext);

  return users ? (
    users.some(
      (user) =>
        userPassword === user.password &&
        (user.gmail === userName || user.userName === userName)
    )
  ) : (
    <></>
  );
};
