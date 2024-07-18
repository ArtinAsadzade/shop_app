import { createContext, useState } from "react";

export const OrderingContext = createContext();

export default function OrderingProvider({ children }) {
  const [ordering, setOrdering] = useState("جدیدترین");
  return <OrderingContext.Provider value={{ ordering, setOrdering }}>{children}</OrderingContext.Provider>;
}
