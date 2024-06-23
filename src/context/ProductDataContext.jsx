import { createContext, useState } from "react";
import useDecrypted from "../hooks/useDecrypted";

export const ProductDataContext = createContext();

export default function ProductDataProvider({ children }) {
  const [products, setProducts] = useState(useDecrypted("productsData"));

  return (
    <ProductDataContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductDataContext.Provider>
  );
}
