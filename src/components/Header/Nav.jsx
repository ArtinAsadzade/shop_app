import { useState } from "react";
import { navData } from "../../data/data";
import NavItems from "./NavItems";
import Logo from "../Logo";
import BasketLoginNav from "./BasketLoginNav";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav({ showNavBar, hamburgerHandler }) {
  const [navItems] = useState(navData);
  return (
    <>
      {/* Mobile Nav */}
      <nav
        className={`fixed z-50 lg:hidden top-0 right-0 bottom-0 flex-col w-5/6 max-w-sm py-5 px-6 bg-white border-r overflow-y-auto ${
          showNavBar ? "flex" : "hidden"
        }`}
      >
        <XMarkIcon
          className="w-7 cursor-pointer text-red-600"
          onClick={hamburgerHandler}
        />
        <ul className="space-y-3">
          <li className="border-b w-full  ">
            <Logo />
            <BasketLoginNav />
          </li>
          {navItems.map(
            (item) => !item.active && <NavItems key={item.id} {...item} />
          )}
        </ul>
      </nav>
      {/* Lg Nav */}
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
