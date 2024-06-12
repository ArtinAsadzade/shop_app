import { PlusIcon } from "@heroicons/react/24/outline";
import ProductsItem from "../components/ProductsItem";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProductDataContext } from "../context/ProductDataContext";

export default function Products() {
  const { products } = useContext(ProductDataContext);

  return (
    <div className="w-full min-h-svh bg-slate-200 px-5 py-10">
      <div className="w-full flex justify-between items-center bg-white m-auto p-3 rounded-lg">
        <h1 className="font-bold border-b-2">Manage Products</h1>
        <Link
          to={"/products/newProduct"}
          className="p-2 bg-blue-500 mx-3 rounded-lg flex text-white items-center justify-center"
        >
          Add Product
          <PlusIcon className="font-bold w-5 mx-1" />
        </Link>
      </div>
      <div className="w-full m-auto my-10 rounded-lg">
        <div className="w-full shadow-md rounded-lg grid grid-cols-12 justify-items-center font-bold text-[#7d889e] bg-gray-200 border-b-2 px-10 py-2">
          <div className="col-span-3 justify-start w-full flex">Image</div>
          <div className="col-span-3">Name</div>
          <div className="col-span-3">Price</div>
          <div className="col-span-3 justify-end w-full flex">Action</div>
        </div>

        <div>
          {products.map((item) => (
            <ProductsItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
