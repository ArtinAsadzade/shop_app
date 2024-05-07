import { useState } from "react";
import { productsData } from "../data/data";

export default function useProducts() {
  const [products] = useState(productsData);

  return [products];
}
