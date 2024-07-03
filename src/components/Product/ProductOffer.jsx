import { Link } from "react-router-dom";
import { calculateDiscountPercentage } from "../../Utils";

export default function ProductOffer(props) {
  const discount = calculateDiscountPercentage(props.price, props.offerPrice);
  return (
    !!props.offerPrice &&
    !!props.count && (
      <Link
        to={`/shop/product${props.id}`}
        className="relative md:w-1/3 rounded-lg sm:w-1/3 lg:w-1/6 w-1/2 bg-white shadow-lg flex-shrink-0 my-5 p-5 hover:scale-105 hover:shadow-2xl transition-all cursor-pointer mx-3"
      >
        <img src={props.img} alt="" className=" transition my-3" />

        <h1 className="text-center text-md font-bold">{props.name}</h1>

        <div className="flex justify-center items-center">
          {discount ? <span className="text-zinc-400 rounded-xl text-sm sm:text-[18px] font-bold mx-2">{discount}%</span> : null}
          <p className="text-sm text-zinc-400 mt-1 line-through text-center font-bold">{props.price.toLocaleString("EN")}</p>
        </div>
        <h4 className="text-md text-center text-bold font-bold">{props.offerPrice.toLocaleString("EN")}</h4>
      </Link>
    )
  );
}
