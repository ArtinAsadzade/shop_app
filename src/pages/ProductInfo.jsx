import { useParams } from "react-router-dom";
import { decrypted } from "../Utils";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { BuildingStorefrontIcon, PaperAirplaneIcon, ShieldCheckIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Loading from "../components/Loading";
import ProductInfoHeader from "../components/ProductInfo/ProductInfoHeader";

export default function ProductInfo() {
  const [activeColor, setActiveColor] = useState("");
  const decryptedData = decrypted("productsData");
  const params = useParams();
  const productData = decryptedData.find((item) => `product${item.id}` === params.productId);

  return (
    <>
      <Header />
      {productData ? (
        <>
          <div className="w-full  mx-auto bg-slate-100 py-3">
            <div className="container">
              <div className="bg-white p-5 rounded-lg shadow-md ">
                <div className="md:flex md:justify-between">
                  <div className="flex justify-center md:w-1/2">
                    <img src={productData.img} alt="" />
                  </div>
                  <ProductInfoHeader productData={productData} activeColor={activeColor} setActiveColor={setActiveColor} />
                  <div className="hidden lg:flex bg-slate-100 w-1/3 rounded-lg flex-col items-center justify-between p-2 md:p-4">
                    <div className="w-full flex flex-col gap-3 font-bold text-zinc-600">
                      <div className="flex gap-1 items-center">
                        <BuildingStorefrontIcon className="w-4" />
                        <p>نام فروشنده: آرتی کام</p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <ShieldCheckIcon className="w-4" />
                        <p>گارانتی: 18 ماه زرین خدمات</p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <PaperAirplaneIcon className="w-4" />
                        <p>ارسال توسط: انبار تهران</p>
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="flex items-center justify-between w-full font-bold text-sm">
                        <p className={`${productData.offerPrice ? "text-zinc-400 line-through text-sm" : "text-black"}`}>
                          {productData.price.toLocaleString("EN")} تومان
                        </p>
                        {productData.offerPrice ? <p>{productData.offerPrice.toLocaleString("EN")} تومان</p> : <></>}
                      </div>
                      <button className="w-full mt-5 flex gap-1 items-center font-bold justify-center bg-primary py-3 px-1 rounded-lg text-white text-sm">
                        <ShoppingCartIcon className="w-5" />
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <h2 className="font-bold mt-16">ویژگی های کالا :</h2>
                  <div className="w-full grid grid-cols-12 gap-5">
                    {productData?.propertys?.map((property) => (
                      <div
                        key={property}
                        className="w-full col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-slate-100 flex flex-1 px-3 py-2 my-3 rounded-md flex-col"
                      >
                        <h1 className="font-bold">{property.title}</h1>
                        <p className="text-zinc-600 text-center my-2">{property.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white font-bold my-5 p-5 rounded-lg shadow-md">
                <p>درباره محصول :</p>
                <p className="text-zinc-400 my-2">{productData.desc}</p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center font-bold fixed bg-white p-5 bottom-0 border-t-[1px] lg:hidden">
              <button className="w-1/2 flex items-center justify-center bg-primary py-3 px-1 rounded-lg text-white text-sm">
                افزودن به سبد خرید <ShoppingCartIcon className="w-5" />
              </button>
              <div className="w-1/2 flex items-center justify-center flex-col font-bold">
                {productData.offerPrice ? <p>{productData.offerPrice.toLocaleString("EN")} تومان</p> : <></>}
                <p className={`${productData.offerPrice ? "text-zinc-400 line-through text-sm" : "text-black"}`}>
                  {productData.price.toLocaleString("EN")} تومان
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
      <div className="pb-20 lg:pb-0">
        <Footer />
      </div>
    </>
  );
}
