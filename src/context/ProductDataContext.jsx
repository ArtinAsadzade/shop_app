import { createContext, useState } from "react";

export const ProductDataContext = createContext();

export default function ProductDataProvider({ children }) {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("productsData"))
  );

  return (
    <ProductDataContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductDataContext.Provider>
  );
}
