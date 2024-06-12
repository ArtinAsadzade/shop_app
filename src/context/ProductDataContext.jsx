import { createContext, useState } from "react";
import { productsData } from "../data/data";

export const ProductDataContext = createContext();

export default function ProductDataProvider({ children }) {
  const [products, setProducts] = useState(productsData);
  // JSON.parse(localStorage.getItem("productsData"))

  return (
    <ProductDataContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductDataContext.Provider>
  );
}
