import { useContext } from "react";
import { UsersDataContext } from "./context/UsersDataContext";
export const userLogin = (userName, userPassword) => {
  const { users } = useContext(UsersDataContext);

  return users ? (
    users.find(
      (user) =>
        userPassword === user.password &&
        (user.email === userName || user.userName === userName)
    )
  ) : (
    <></>
  );
};

export const checkUserNameExists = (userName) => {
  const { users } = useContext(UsersDataContext);

  return users ? users.some((user) => userName === user.userName) : <></>;
};

export const checkUserEmailExists = (email) => {
  const { users } = useContext(UsersDataContext);

  return users ? users.some((user) => email === user.email) : <></>;
};
