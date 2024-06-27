import useDecrypted from "./hooks/useDecrypted";
export const userLogin = (userName, userPassword) => {
  const decryptedData = useDecrypted("usersData");

  return decryptedData ? (
    decryptedData.find(
      (user) =>
        userPassword === user.password &&
        (user.email === userName || user.userName === userName)
    )
  ) : (
    <></>
  );
};

export const checkUserNameExists = (userName) => {
  const decryptedData = useDecrypted("usersData");

  return decryptedData
    ? decryptedData.some((user) => userName === user.userName)
    : false;
};

export const checkUserEmailExists = (email) => {
  const decryptedData = useDecrypted("usersData");

  return decryptedData
    ? decryptedData.some((user) => email === user.email)
    : false;
};

export const validateSignUp = (values) => {
  const { userName, email, password, passwordRepeat } = values;

  if (password !== passwordRepeat) {
    return "رمزهای عبور با هم مطابقت ندارند.";
  }

  if (checkUserNameExists(userName)) {
    return "نام کاربری از قبل موجود است.";
  }

  if (checkUserEmailExists(email)) {
    return "ایمیل از قبل موجود است.";
  }
  return true;
};
