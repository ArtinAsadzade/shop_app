import { useParams } from "react-router-dom";
import { decrypted } from "../../Utils";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CheckIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProductInfo() {
  const [activeColor, setActiveColor] = useState("");
  const decryptedData = decrypted("productsData");
  const params = useParams();
  const productData = decryptedData.find((item) => item.id == params.productId);

  return (
    <>
      <Header />
      {productData ? (
        <>
          <div className="w-full  mx-auto bg-slate-100 p-3">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="flex justify-center">
                <img src={productData.img} alt="" />
              </div>
              <div className="w-full flex flex-col justify-center items-center font-bold my-3">
                <h1>{productData.ename}</h1>
                <h1>{productData.name}</h1>
              </div>
              <div className="flex justify-between py-4 items-center">
                <h3>انتخاب رنگ :</h3>
                <div className="flex items-center h-full">
                  {productData?.colors?.map((color) => (
                    <div
                      key={color}
                      onClick={() => setActiveColor(color)}
                      style={{ background: color, boxShadow: `0px 0px 0px 1px ${color}` }}
                      className={`h-full p-[12px] flex justify-center items-center rounded-full mx-[5px] border-2 ${
                        color === activeColor ? "border-white" : "border-transparent"
                      }`}
                    >
                      {color === activeColor ? <CheckIcon className="w-4 absolute text-white font-bold" /> : <></>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white font-bold p-5 my-5 rounded-lg shadow-md">
              <h2>ویژگی های کالا :</h2>
              <div className="w-full">
                {productData?.propertys?.map((property) => (
                  <div key={property} className="w-full bg-slate-100 flex px-3 py-2 my-3 rounded-md flex-col">
                    <h1 className="font-bold">{property.title}</h1>
                    <p className="text-zinc-400 text-center my-2">{property.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white font-bold p-5 rounded-lg shadow-md">
              <p>درباره محصول :</p>
              <p className="text-zinc-400 my-2">{productData.desc}</p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center font-bold fixed bg-white p-5 bottom-0 border-t-[1px]">
            <button className="w-1/2 flex items-center justify-center bg-red-500 py-3 px-1 rounded-lg text-white text-sm">
              افزودن به سبد خرید <ShoppingCartIcon className="w-5" />
            </button>
            <div className="flex items-center justify-center flex-col">
              {productData.offerPrice ? <p>{productData.offerPrice} تومان</p> : <></>}
              <p className={`${productData.offerPrice ? "text-zinc-400 line-through text-sm" : "text-black"}`}>{productData.price} تومان</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>Loading</div>
        </>
      )}
      <div className="pb-20">
        <Footer />
      </div>
    </>
  );
}
