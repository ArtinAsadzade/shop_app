import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function BasketLoginNav() {
  return (
    <>
      <div className="order-4 lg:flex">
        <div className="cursor-pointer justify-center lg:justify-start flex items-center h-10 leading-10 px-3 mx-1 transition rounded-xl hover:bg-red-50">
          <UserIcon className="w-5 ml-2 text-red-600" />
          <p className="text-sm opacity-95">ورود | ثبت نام</p>
          <ChevronDownIcon className="w-4 text-red-600 mx-1" />
        </div>
        <div className="cursor-pointer justify-center lg:justify-start flex items-center h-10 leading-10 px-3 mx-1 transition rounded-xl hover:bg-red-50">
          <ShoppingCartIcon className="w-5 ml-2 text-red-600" />
          <p className="text-sm opacity-95">سبد خرید</p>
          <ChevronDownIcon className="w-4 text-red-600 mx-1" />
        </div>
      </div>
    </>
  );
}
