import { ChevronDownIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

export default function BasketLoginNav() {
  return (
    <>
      <div className="hidden lg:flex">
        <div className="flex items-center h-10 px-3 mx-1 transition rounded-xl hover:bg-red-50 cursor-pointer">
          <UserIcon className="w-5 ml-2 text-red-600" />
          <p className="text-sm text-slate-600">ورود | ثبت نام</p>
          <ChevronDownIcon className="w-4 text-red-600 mx-1" />
        </div>
        <div className="flex items-center h-10 px-3 mx-1 transition rounded-xl hover:bg-red-50 cursor-pointer">
          <ShoppingCartIcon className="w-5 ml-2 text-red-600" />
          <p className="text-sm text-slate-600">سبد خرید</p>
          <ChevronDownIcon className="w-4 text-red-600 mx-1" />
        </div>
      </div>
    </>
  );
}
