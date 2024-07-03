import { Link } from "react-router-dom";
import { calculateDiscountPercentage } from "../../Utils";

export default function Product(props) {
  const discount = calculateDiscountPercentage(props.price, props.offerPrice);

  return (
    <Link
      to={`/shop/product${props.id}`}
      className="group col-span-12 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all sm:col-span-6 md:col-span-4 rounded-lg mb-10 mx-3 p-3 bg-white shadow-lg"
    >
      <div className="w-full p-5 relative">
        <img src={props.img} alt="" className="w-full object-cover" />
        {discount ? (
          <span className="bg-red-600 text-white absolute px-2 py-1 rounded-xl text-sm sm:text-[18px] -top-2 -right-2">% {discount}</span>
        ) : null}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <p className="text-lg sm:text-sm text-left font-bold block">{props.ename}</p>
        <p className="text-lg sm:text-sm text-right font-bold block">{props.name}</p>
        <div className="flex justify-between">
          <div className={`flex justify-end text-lg sm:text-sm font-bold ${props.offerPrice ? "line-through text-zinc-400" : ""}`}>
            <p>{props.price.toLocaleString("EN")}</p>
            <p>تومان</p>
          </div>
          {props.offerPrice ? (
            <div className="flex justify-end mb-2 text-lg sm:text-sm font-bold">
              <p>{props.offerPrice.toLocaleString("EN")}</p>
              <p>تومان</p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="w-full border-t-[1px] group-hover:border-red-600 mt-2 text-red-600 font-bold py-3 flex items-center justify-center">
          مشاهده و خرید
        </div>
      </div>
    </Link>
  );
}
