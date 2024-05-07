import { useState } from "react";
import { navData } from "../data/data";
import NavItems from "../components/NavItems";

export default function Nav() {
  const [navItems] = useState(navData);
  return (
    <>
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
