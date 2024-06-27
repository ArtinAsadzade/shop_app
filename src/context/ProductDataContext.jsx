import { createContext, useEffect, useState } from "react";
import useDecrypted from "../hooks/useDecrypted";

export const ProductDataContext = createContext();

export default function ProductDataProvider({ children }) {
  const [products, setProducts] = useState(null);

  const decryptedData = useDecrypted("productsData");

  useEffect(() => {
    setProducts(decryptedData);
  }, [decryptedData]);

  return (
    <ProductDataContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductDataContext.Provider>
  );
}
