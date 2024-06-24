import CryptoJS from "crypto-js";
import { useState, useEffect } from "react";

const useDecrypted = (key) => {
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
        console.error(`Error decrypting data: ${error.message}`);
        setDecryptedData([]);
      }
    }
  }, [key]);

  return decryptedData;
};

export default useDecrypted;
