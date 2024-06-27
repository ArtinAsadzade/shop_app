import CryptoJS from "crypto-js";

export const encrypted = (data, key) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    import.meta.env.VITE_SECRET_KEY
  ).toString();
  localStorage.setItem(key, encryptedData);
};

export const decrypted = (key) => {
  const encryptedData = localStorage.getItem(key);
  if (encryptedData) {
    try {
      const bytes = CryptoJS.AES.decrypt(
        encryptedData,
        import.meta.env.VITE_SECRET_KEY
      );
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      return [];
    }
  }
  return [];
};

export const checkUserNameExists = (userName) => {
  const decryptedData = decrypted("usersData");
  return decryptedData.some((user) => userName === user.userName);
};

export const checkUserEmailExists = (email) => {
  const decryptedData = decrypted("usersData");
  return decryptedData.some((user) => email === user.email);
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

export const userLogin = (userName, userPassword) => {
  const decryptedData = decrypted("usersData");

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
