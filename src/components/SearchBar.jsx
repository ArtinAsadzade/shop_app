import { ChevronLeftIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useInput from "../hooks/useInput";
import { productsData } from "../data/data";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";

export default function SearchBar() {
  const [value, setValue] = useInput();
  const [products] = useState(productsData);
  const search = useMemo(() => {
    if (value.length) {
      return products.filter((item) => item.name.includes(value.toLowerCase())).slice(0, 3);
    }
  }, [products, value]);
  return (
    <div className="relative lg:w-1/2 mt-3 w-full">
      <input
        placeholder="جستجو محصول ..."
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="search-input"
        className="pl-10 w-full px-4 py-3 text-sm placeholder:text-red-600 rounded-2xl text-right placeholder:text-sm border-2 border-red-600 focus:outline-none focus:ring-1 ring-red-500 focus:border-red-400"
      />
      <MagnifyingGlassIcon className="w-5 text-red-600 absolute top-1/2 -translate-y-1/2 left-4" />
      {value.length ? (
        <div className="absolute w-full bg-gray-50 shadow-2xl h-auto mt-2 z-50 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 p-3">
            {search.map((item) => (
              <SearchProduct key={item.id} {...item} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 px-3 mb-3">
            {search.map((item) => (
              <Link to="" className="bg-white rounded-xl px-2 py-1 flex items-center text-sm" key={item.id}>
                {item.name} <ChevronLeftIcon className="w-3 mx-1" />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
