import { ForwardIcon, BackwardIcon } from "@heroicons/react/24/outline";

export default function Slider() {
  return (
    <div className="container w-full p-2 lg:px-10 m-auto cursor-pointer hidden lg:block">
      <div className="relative">
        <img className="rounded-md md:rounded-3xl md:px-2 " src="/images/slide1.gif" alt="banner" />
        <div className="w-10 h-10 bg-white rounded-full bottom-5 right-7 absolute">
          <ForwardIcon className="w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="w-10 h-10 bg-white rounded-full bottom-5 right-20 absolute">
          <BackwardIcon className="w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div className="w-full py-2 m-auto my-10 hidden lg:block">
        <img className="rounded-xl" src="/images/banner.jpg" alt="banner" />
      </div>
    </div>
  );
}
