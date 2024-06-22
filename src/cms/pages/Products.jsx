import { PlusIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ProductDataContext } from "../../context/ProductDataContext";
import ProductItems from "../components/ProductsItem";

export default function Products() {
  const { products } = useContext(ProductDataContext);
  console.log(products);

  return (
    <>
      {products && (
        <div className="w-full min-h-svh bg-slate-100 px-5 py-10 overflow-y-hidden">
          <div className="w-full flex justify-between items-center bg-white m-auto p-3 rounded-lg">
            <h1 className="font-bold border-b-2">Manage Members</h1>
            <Link
              to={"/users/addNewUser"}
              className="p-2 bg-blue-500 mx-3 rounded-lg flex text-white items-center justify-center"
            >
              Add Product
              <PlusIcon className="font-bold w-5 mx-1" />
            </Link>
          </div>
          <div className="w-full m-auto my-10 rounded-lg">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-right">
                      عکس
                    </th>
                    <th scope="col" className="px-6 py-3 text-right">
                      نام
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      قیمت نقش
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      عمل
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((item) => (
                    <ProductItems key={item.id} {...item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
}
