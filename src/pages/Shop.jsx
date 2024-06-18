import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CategoryItem from "../components/CategoryItem";
import useCategory from "../hooks/useCategory";
import useBrand from "../hooks/useBrand";
import BrandItem from "../components/BrandItem";
import { useContext, useState } from "react";
import { orderedData } from "../data/data";
import Product from "../components/Product/Product";
import { ProductDataContext } from "../context/ProductDataContext";

export default function Shop() {
  const [categorys] = useCategory();
  const [brands] = useBrand();
  const { products } = useContext(ProductDataContext);
  const [ordered] = useState(orderedData);
  return (
    <>
      <Header />
      <div className="mx-auto px-3">
        <div className="bg-white shadow-xl my-5 lg:my-10 rounded-xl md:rounded-2xl p-3 md:p-5">
          <div className="bg-white mx-5 rounded-2xl mb-4 grid">
            <h2 className="text-xl font-semibold text-gray-800">
              جستجو محصولات
            </h2>
          </div>
          <div className="md:flex">
            <div className="md:w-4/12 lg:w-3/12">
              <div className="bg-white mx-5 mb-4 px-3 py-3 border rounded-xl">
                <h2 className="opacity-80 mb-1">دسته بندی:</h2>
                {categorys.map((item) => (
                  <CategoryItem key={item.id} {...item} />
                ))}
              </div>
              <div className="bg-white mx-5 mb-4 px-3 py-3 border rounded-xl">
                <h2 className="opacity-80 mb-1">برند:</h2>
                {brands.map((item) => (
                  <BrandItem key={item.id} {...item} />
                ))}
              </div>
            </div>
            <div className="md:w-8/12 lg:w-9/12">
              <div className="bg-white mx-1 rounded-2xl grid place-items-start w-full border-b p-3">
                <div className="opacity-90 text-sm mb-2">مرتب سازی:</div>
                <div className="flex flex-wrap gap-5 justify-start items-center">
                  {ordered.map((item) => (
                    <p
                      className="opacity-70 text-xs hover:text-red-500 transition cursor-pointer"
                      key={item.id}
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 px-1 rounded-2xl py-5">
                {products.map((item) => (
                  <Product key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
