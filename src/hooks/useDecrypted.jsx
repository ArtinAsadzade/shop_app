import React, { useState } from "react";

export default function useDecrypted(data) {
  const [data, setData] = useState(data);
  const [decryptedData, setDecryptedData] = useState(null);
  const encryptedData = localStorage.getItem("usersData");
  const salt = import.meta.env.VITE_SECRET_KEY;
  const bytes = CryptoJS.AES.decrypt(encryptedData, salt);
  setDecryptedData(JSON.parse(bytes.toString(CryptoJS.enc.Utf8)));
  console.log("Decrypted Data:", decryptedData);

  return [decryptedData, setDecryptedData];
}
