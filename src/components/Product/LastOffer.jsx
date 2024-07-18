import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { calculateDiscountPercentage, lastOfferProductHandler } from "../../Utils";

export default function LastOffer() {
  const bigOfferProduct = lastOfferProductHandler();
  const discount = calculateDiscountPercentage(bigOfferProduct.price, bigOfferProduct.offerPrice);

  return (
    <div className="container">
      <div className="flex justify-between px-5 py-5 rounded-xl items-center mt-3 mb-5 bg-white">
        <h2 className="text-sm lg:text-lg border-b-2 border-primary ">آخرین پیشنهاد</h2>
        <Link to="/shop" className="flex items-center  text-primary text-sm">
          دیدن همه <ArrowLeftIcon className="w-4 mt-1" />
        </Link>
      </div>
      <div className="xl:flex">
        <div className="sm:flex xl:w-1/3 my-8 w-auto">
          <img src="/images/samsunTablet.webp" alt="samsun tablet" className="sm:w-1/2 xl:w-full w-full rounded-xl" />
          <img src="/images/a34.webp" alt="a34" className="sm:w-1/2 xl:hidden w-full rounded-xl" />
        </div>
        <Link
          to={`/shop/product${bigOfferProduct.id}`}
          className="xl:w-2/3 w-full border-2 border-gray-300 bg-white flex flex-col items-center justify-center rounded-xl md:flex md:items-center md:flex-row"
        >
          <img src={bigOfferProduct.img} alt="" className="rounded-md md:w-1/3" />
          <div className="md:w-2/3 text-center p-3">
            <div className="mb-8">
              <h3 className="text-3xl">{bigOfferProduct.name}</h3>
              <p className="text-zinc-400 text-md">{bigOfferProduct.ename}</p>
            </div>
            <div>
              <h4 className="text-2xl text-center my-3 font-bold">{bigOfferProduct.offerPrice.toLocaleString("EN")}</h4>
              <div className="flex justify-center items-center">
                <span className="text-primary text-sm font-bold mx-1">%{discount}</span>
                <p className="text-zinc-400 text-sm mt-1 font-bold line-through text-center mx-1">{bigOfferProduct.price.toLocaleString("EN")}</p>
              </div>
            </div>
            <div className="m-4 grid grid-cols-2 justify-items-center">
              {bigOfferProduct?.propertys?.map((property) => (
                <p className="flex m-2" key={property}>
                  <CheckCircleIcon className="w-5 text-green-500 m-1 font-bold" /> {property.desc}
                </p>
              ))}
            </div>
            <div className="flex mx-auto my-3 justify-center items-center rounded-md p-2 bg-red-100 text-primary w-1/4 font-bold">
              <p className="m-1">11</p>:<p className="m-1">22</p>:<p className="m-1">33</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
