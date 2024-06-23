import CryptoJS from "crypto-js";

const useEncrypted = (data, key) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    import.meta.env.VITE_SECRET_KEY
  ).toString();
  localStorage.setItem(key, encryptedData);

  return [encryptedData];
};

export default useEncrypted;
