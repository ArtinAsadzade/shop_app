import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function BasketLoginNav() {
  return (
    <>
      <div className="mt-0 mb-3 text-center space-y-5">
        <div className="cursor-pointer md:flex justify-center align-middle lg:inline-block py-2 px-4 text-sm text-neutral-800 rounded-xl hover:text-neutral-700 hover:bg-red-100 transition">
          <UserIcon className="w-5 ml-2 text-red-600" />
          <p className="text-sm text-slate-600">ورود | ثبت نام</p>
          <ChevronDownIcon className="w-4 text-red-600 mx-1" />
        </div>
        <div className="cursor-pointer md:flex justify-center align-middle lg:inline-block py-2 px-4 text-sm text-neutral-800 rounded-xl hover:text-neutral-700 hover:bg-red-100 transition">
          <ShoppingCartIcon className="w-5 ml-2 text-red-600" />
          <p className="text-sm text-slate-600">سبد خرید</p>
          <ChevronDownIcon className="w-4 text-red-600 mx-1" />
        </div>
      </div>
    </>
  );
}
