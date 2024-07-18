import { useCallback, useContext } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import { orderingData } from "../data/data";
import { decrypted } from "../Utils";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { FilterContext } from "../context/FiltersContext";
import FilterBrands from "../components/Filters/FilterBrands";
import FilterOrdering from "../components/Filters/FilterOrdering";
import { OrderingContext } from "../context/OrderingContext";

export default function Shop() {
  const { ordering, setOrdering } = useContext(OrderingContext);
  const { filter } = useContext(FilterContext);
  const decryptedData = decrypted("productsData");

  const changeOrderingProducts = useCallback(
    (activeOrdering) => {
      if (ordering === activeOrdering) {
        setOrdering("");
      } else {
        setOrdering(activeOrdering);
      }
    },
    [ordering, setOrdering]
  );

  return (
    <>
      <Header />
      <div className="mx-auto bg-slate-100 my-5 px-3">
        <div className="container grid grid-cols-12">
          <div className="flex w-full py-5 text-primary col-span-12 lg:col-span-3">
            <FilterBrands />
            <FilterOrdering />
          </div>
          <div className="grid grid-cols-12 col-span-12 lg:col-span-9">
            <div className="hidden lg:flex col-span-12 bg-white p-2 m-4 rounded-lg">
              <AdjustmentsVerticalIcon className="w-12 mx-1 bg-slate-100 text-primary p-2 rounded-md" />
              <div className={`w-full flex items-center gap-6 px-3 text-[14px] text-zinc-500 font-bold bg-slate-100 mx-3 rounded-md`}>
                {orderingData.map((item) => (
                  <p
                    key={item.id}
                    className={`cursor-pointer select-none ${ordering === item.title ? " text-primary" : ""}`}
                    onClick={() => changeOrderingProducts(item.title)}
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            {filter.brand[0]
              ? decryptedData.filter((item) => filter.brand.includes(item.brand)).map((item) => <Product key={item.id} {...item} />)
              : decryptedData.map((item) => <Product key={item.id} {...item} />)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
