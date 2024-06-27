import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export const encrypted = (data, key) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    import.meta.env.VITE_SECRET_KEY
  ).toString();
  localStorage.setItem(key, encryptedData);
};

export const decrypted = (key) => {
  const [decryptedData, setDecryptedData] = useState();

  useEffect(() => {
    const encryptedData = localStorage.getItem(key);
    if (encryptedData) {
      try {
        const bytes = CryptoJS.AES.decrypt(
          encryptedData,
          import.meta.env.VITE_SECRET_KEY
        );
        const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setDecryptedData(data);
      } catch (error) {
        setDecryptedData([]);
      }
    }
  }, [key]);

  return decryptedData;
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

export const checkUserNameExists = (userName) => {
  const decryptedData = decrypted("usersData");

  return decryptedData
    ? decryptedData.some((user) => userName === user.userName)
    : false;
};

export const checkUserEmailExists = (email) => {
  const decryptedData = decrypted("usersData");

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
