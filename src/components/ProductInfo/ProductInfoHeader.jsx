import { BuildingStorefrontIcon, CheckIcon, PaperAirplaneIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function ProductInfoHeader({ productData, activeColor, setActiveColor }) {
  return (
    <div className="md:w-1/2 flex flex-col gap-5 p-3">
      <div>
        <div className="w-full flex flex-col justify-centersm:border-b-[1px] border-primary font-bold my-3 pb-3">
          <h1 className="text-center sm:text-left">{productData.ename}</h1>
          <h1 className="text-center sm:text-right">{productData.name}</h1>
        </div>
        <div className="font-bold hidden sm:block">
          <p>درباره محصول :</p>
          <p className="text-zinc-400 my-2">{productData.desc}</p>
        </div>
      </div>
      <div className="flex justify-between py-4 font-bold items-center">
        <h3>انتخاب رنگ :</h3>
        <div className="flex items-center h-full">
          {productData?.colors?.map((color) => (
            <div
              key={color}
              onClick={() => setActiveColor(color)}
              style={{ background: color, boxShadow: `0px 0px 0px 1px ${color}` }}
              className={`h-full p-[12px] flex justify-center cursor-pointer items-center rounded-full mx-[5px] border-2 ${
                color === activeColor ? "border-white" : "border-transparent"
              }`}
            >
              {color === activeColor ? <CheckIcon className="w-4 absolute text-white font-bold" /> : <></>}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:hidden flex flex-1 gap-3 font-bold text-zinc-600 flex-wrap">
        <div className="flex gap-1 items-center">
          <BuildingStorefrontIcon className="w-4" />
          <p>نام فروشنده: آرتی کام</p>
        </div>
        <div className="flex gap-1 items-center">
          <ShieldCheckIcon className="w-4" />
          <p>گارانتی: 18 ماه زرین خدمات</p>
        </div>
        <div className="flex gap-1 items-center">
          <PaperAirplaneIcon className="w-4" />
          <p>ارسال توسط: انبار تهران</p>
        </div>
      </div>
    </div>
  );
}
