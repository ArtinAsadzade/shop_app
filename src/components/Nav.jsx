import { useState } from "react";
import { navData } from "../data/data";
import NavItems from "../components/NavItems";
import Logo from "./Logo";
import BasketLoginNav from "./BasketLoginNav";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav({ showNavBar, hamburgerHandler }) {
  const [navItems] = useState(navData);
  return (
    <>
      <nav
        className={`fixed z-20 lg:hidden top-0 right-0 bottom-0 flex-col w-5/6 max-w-sm py-5 px-6 bg-white border-r overflow-y-auto ${
          showNavBar ? "flex" : "hidden"
        }`}
      >
        <XMarkIcon className="w-7 text-red-600" onClick={hamburgerHandler} />
        <ul className="space-y-3">
          <li className="border-b w-full  ">
            <Logo />
            <BasketLoginNav />
          </li>
          {navItems.map((item) => !item.active && <NavItems key={item.id} {...item} />)}
        </ul>
      </nav>
      <nav className="hidden lg:flex container">
        <ul className="flex">
          {navItems.map((item) => (
            <NavItems key={item.id} {...item} />
          ))}
        </ul>
      </nav>
    </>
  );
}
