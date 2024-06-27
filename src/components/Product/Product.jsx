import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 2xl:col-span-2 rounded-lg mb-10 mx-3 p-3 bg-white shadow-lg">
      <div className="w-full p-5">
        <img src={props.img} alt="" className="w-full object-cover" />
      </div>
      <div className="flex flex-col w-full">
        <p className="text-sm font-bold opacity-90 mb-5 block">{props.name}</p>
        <div className="flex justify-between">
          <div
            className={`flex justify-end text-sm font-bold opacity-80 ${
              props.offerPrice ? "line-through text-zinc-400" : ""
            }`}
          >
            <p>{props.price}</p>
            <p>تومان</p>
          </div>
          {props.offerPrice ? (
            <div className="flex justify-end mb-2 text-sm font-bold opacity-80">
              <p>{props.offerPrice}</p>
              <p>تومان</p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="w-full border-t-[1px] mt-2 text-red-600 font-bold py-3 flex items-center justify-center">
          <Link to={""} className="">
            مشاهده و خرید
          </Link>
        </div>
      </div>
    </div>
  );
}
