import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function LastOffer() {
  return (
    <div className="container">
      <div className="flex justify-between px-5 py-5 rounded-xl md:px-10 items-center mt-3 mb-5 bg-white">
        <h2 className="text-sm lg:text-lg border-b-2 border-red-600 ">آخرین پیشنهاد</h2>
        <Link to="/shop" className="flex text-red-600 text-sm">
          دیدن همه <ArrowLeftIcon className="w-4" />
        </Link>
      </div>
      <div className="xl:flex">
        <div className="sm:flex xl:w-1/3 my-8 w-auto">
          <img src="../../public/images/samsunTablet.webp" alt="samsun tablet" className="sm:w-1/2 xl:w-full w-full rounded-xl" />
          <img src="../../public/images/a34.webp" alt="a34" className="sm:w-1/2 xl:hidden w-full rounded-xl" />
        </div>
        <div className="xl:w-2/3 w-full border-2 border-gray-300 bg-white rounded-xl justify-center md:flex md:items-center md:flex-wrap">
          <img src="../../public/images/laptop.webp" alt="" className="rounded-md md:w-1/3 " />
          <div className="md:w-2/3 text-center p-3">
            <div className="mb-8">
              <h3 className="text-3xl">LapTop</h3>
              <p className="text-zinc-400 text-md">لپتاپ اچ پی 200p</p>
            </div>
            <div>
              <h4 className="text-2xl text-center my-3 text-bold">20,000,000</h4>
              <p className="text-zinc-400 text-sm mt-1 line-through text-center">27,000,000</p>
            </div>
            <div className="m-4 grid grid-cols-2 justify-items-center">
              <p className="flex m-2">
                <CheckCircleIcon className="w-5 text-green-500 m-1" /> لورم لورم لورم
              </p>
              <p className="flex m-2">
                <CheckCircleIcon className="w-5 text-green-500 m-1" /> لورم لورم لورم
              </p>
              <p className="flex m-2">
                <CheckCircleIcon className="w-5 text-green-500 m-1" /> لورم لورم لورم
              </p>
              <p className="flex m-2">
                <CheckCircleIcon className="w-5 text-green-500 m-1" /> لورم لورم لورم
              </p>
            </div>
            <div className="flex mx-auto my-3 justify-center items-center rounded-md p-2 bg-red-100 text-red-600 w-1/4 text-bold">
              <p className="m-1">11</p>:<p className="m-1">22</p>:<p className="m-1">33</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
