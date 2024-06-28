import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import { decrypted } from "../Utils";
import {
  AdjustmentsVerticalIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

export default function Shop() {
  const decryptedData = decrypted("productsData");

  return (
    <>
      <Header />
      <div className="mx-auto bg-slate-100 my-5 px-3">
        <div className="flex w-full py-5 text-red-600">
          <div className="w-full cursor-pointer hover:shadow-md transition-all bg-white mx-3 p-2 rounded-lg flex items-center justify-center">
            <FunnelIcon className="w-5 mx-1" />
            فیلتر
          </div>
          <div className="w-full cursor-pointer hover:shadow-md transition-all bg-white mx-3 p-2 rounded-lg flex items-center justify-center">
            <AdjustmentsVerticalIcon className="w-5 mx-1" />
            مرتب سازی
          </div>
        </div>
        <div className="grid grid-cols-12">
          {decryptedData.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
