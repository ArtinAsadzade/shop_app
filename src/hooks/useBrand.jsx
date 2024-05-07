import { useState } from "react";
import { brandsData } from "../data/data";

export default function useBrand() {
  const [brand, setBrand] = useState(brandsData);

  return [brand, setBrand];
}
