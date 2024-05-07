import { useState } from "react";
import { categorysData } from "../data/data";

export default function useCategory() {
  const [categorys, setCategorys] = useState(categorysData);

  return [categorys, setCategorys];
}
