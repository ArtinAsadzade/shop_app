import AmazingProduct from "./AmazingProduct";
import useProducts from "../hooks/useProducts";

export default function AmzingOffer() {
  const [products] = useProducts();

  return (
    <div className="container px-2 py-5 rounded-xl mt-10 mb-5 bg-red-500 shadow-lg">
      <div className="w-full flex overflow-x-auto touch-pan-x cursor-grab">
        <div className="md:w-1/4 lg:w-1/6 w-1/3 flex-shrink-0 mx-3">
          <img className="m-auto" src="/images/FeaturedPromos.svg" alt="" />
          <img className="m-auto" src="/images/boxBg.webp" alt="" />
        </div>
        {products.map((item) => (
          <AmazingProduct key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
