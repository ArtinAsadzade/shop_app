import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ProductOffer from "./ProductOffer";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useDraggable } from "react-use-draggable-scroll";
import { ProductDataContext } from "../../context/ProductDataContext";

export default function Offers() {
  const { products } = useContext(ProductDataContext);
  const draggScroll = useRef();
  const { events } = useDraggable(draggScroll);

  return (
    <div className="container px-5 py-5 rounded-xl md:px-10 mt-10 mb-5 bg-white shadow-lg ">
      <div className="flex justify-between bg-white mb-5">
        <h2 className="text-sm lg:text-lg border-b-2 border-red-600 ">
          پرتخفیف ترین ها
        </h2>
        <Link to="/shop" className="flex text-red-600 text-sm">
          دیدن همه <ArrowLeftIcon className="w-4" />
        </Link>
      </div>

      <div
        className="overflow-x-auto md:overflow-x-hidden cursor-grab"
        {...events}
        ref={draggScroll}
      >
        <div className="w-full flex ">
          {products?.map((item) => (
            <ProductOffer key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
