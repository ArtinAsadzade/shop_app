import { createContext, useState } from "react";

export const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [filter, setFilter] = useState({ brand: [], category: [] });
  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
}
