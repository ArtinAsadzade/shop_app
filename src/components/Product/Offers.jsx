import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ProductOffer from "./ProductOffer";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDraggable } from "react-use-draggable-scroll";
import { decrypted } from "../../Utils";

export default function Offers() {
  const decryptedData = decrypted("productsData");
  const draggScroll = useRef();
  const { events } = useDraggable(draggScroll);

  return (
    <div className="container px-5 py-5 rounded-xl md:px-10 mt-10 mb-5 bg-white shadow-lg ">
      <div className="flex justify-between bg-white mb-5">
        <h2 className="text-sm lg:text-lg border-b-2 border-primary ">پرتخفیف ترین ها</h2>
        <Link to="/shop" className="flex text-primary text-sm">
          دیدن همه <ArrowLeftIcon className="w-4 mb-1" />
        </Link>
      </div>

      <div className="overflow-x-auto md:overflow-x-hidden cursor-grab" {...events} ref={draggScroll}>
        <div className="w-full flex ">
          {decryptedData?.map((item) => (
            <ProductOffer key={item?.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
