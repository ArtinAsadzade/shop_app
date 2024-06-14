import { useContext } from "react";
import { UsersDataContext } from "./../context/UsersDataContext";
export const userLogin = (userName, userPassword) => {
  const { users } = useContext(UsersDataContext);
  console.log(users);

  return users ? (
    users.some(
      (user) =>
        userPassword === user.password &&
        user.perm &&
        (user.gmail === userName || user.userName === userName)
    )
  ) : (
    <></>
  );
};
