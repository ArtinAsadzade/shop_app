import { useEffect, useState } from "react";
import { navData } from "../../data/data";
import NavItems from "./NavItems";
import Logo from "../Logo";
import BasketLoginNav from "./BasketLoginNav";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav({ showNavBar, hamburgerHandler }) {
  const [navItems] = useState(navData);

  useEffect(() => {
    if (showNavBar) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [showNavBar]);

  return (
    <>
      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 transition-all duration-300 z-50 bg-black bg-opacity-10 backdrop-blur-sm ${
          showNavBar ? "" : "invisible opacity-0"
        } ${showNavBar ? "block" : "invisible opacity-0"}`}
        onClick={hamburgerHandler}
      ></div>
      <nav
        className={`fixed transition-all duration-300 z-50 lg:hidden top-0 right-0 bottom-0 flex-col w-1/2 max-w-sm py-5 px-6 bg-white border-r overflow-y-auto ${
          showNavBar ? "flex visible opacity-100" : "invisible opacity-0 translate-x-96"
        }`}
      >
        <ul className="space-y-3">
          <li className="flex justify-between">
            <Logo />
            <XMarkIcon className="w-7 cursor-pointer text-primary" onClick={hamburgerHandler} />
          </li>
          <li className="border-b w-full py-2">
            <BasketLoginNav />
          </li>
          {navItems.map((item) => !item.active && <NavItems key={item.id} {...item} />)}
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
