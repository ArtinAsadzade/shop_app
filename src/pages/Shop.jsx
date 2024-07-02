import { useCallback, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import { orderingData } from "../data/data";
import { decrypted, extractBrands } from "../Utils";
import { AdjustmentsVerticalIcon, FunnelIcon } from "@heroicons/react/24/outline";

export default function Shop() {
  const [ordering, setOrdering] = useState("جدیدترین");
  const decryptedData = decrypted("productsData");
  const brands = extractBrands(decryptedData);

  const changeOrderingProducts = useCallback(
    (activeOrdering) => {
      if (ordering === activeOrdering) {
        setOrdering("");
      } else {
        setOrdering(activeOrdering);
      }
    },
    [ordering]
  );

  return (
    <>
      <Header />
      <div className="mx-auto bg-slate-100 my-5 px-3">
        <div className="container grid grid-cols-12">
          <div className="flex w-full py-5 text-red-600 col-span-12 lg:col-span-3">
            <div className="w-full cursor-pointer hover:shadow-md transition-all bg-white mx-3 p-2 rounded-lg hidden lg:flex flex-col gap-3">
              <h1>برند ها</h1>
              {brands.map((brand) => (
                <div key={brand} className="flex justify-between font-bold text-zinc-600 bg-slate-100 p-2 rounded-lg">
                  <input type="checkbox" id={brand} value={brand} />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>

            <div className="w-full cursor-pointer hover:shadow-md transition-all bg-white mx-3 p-2 rounded-lg flex items-center justify-center lg:hidden">
              <FunnelIcon className="w-5 mx-1" />
              فیلتر
            </div>
            <div className="w-full cursor-pointer hover:shadow-md transition-all bg-white mx-3 p-2 rounded-lg flex items-center justify-center lg:hidden">
              <AdjustmentsVerticalIcon className="w-5 mx-1" />
              مرتب سازی
            </div>
          </div>
          <div className="grid grid-cols-12 col-span-12 lg:col-span-9">
            <div className="hidden lg:flex col-span-12 bg-white p-2 m-4 rounded-lg">
              <AdjustmentsVerticalIcon className="w-12 mx-1 bg-slate-100 text-red-600 p-2 rounded-md" />
              <div className={`w-full flex items-center gap-6 px-3 text-[14px] text-zinc-500 font-bold bg-slate-100 mx-3 rounded-md`}>
                {orderingData.map((item) => (
                  <p
                    key={item.id}
                    className={`cursor-pointer select-none ${ordering === item.title ? " text-red-600" : ""}`}
                    onClick={() => changeOrderingProducts(item.title)}
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            {decryptedData.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
