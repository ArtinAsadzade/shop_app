import { useState } from "react";
import { navData } from "../data/data";
import NavItems from "../components/NavItems";
import Logo from "./Logo";
import BasketLoginNav from "./BasketLoginNav";

export default function Nav() {
  const [navItems] = useState(navData);
  return (
    <>
      <nav className="fixed z-20 lg:hidden top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-5 px-6 bg-white border-r overflow-y-auto">
        <Logo />
        <ul className="space-y-3">
          <li className="border-b">
            <BasketLoginNav />
          </li>
          {navItems.map((item) => (
            <NavItems key={item.id} {...item} />
          ))}
        </ul>
      </nav>
    </>
  );
}
