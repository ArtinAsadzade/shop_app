import Nav from "./Nav";
import SearchBar from "./SearchBar";
import BasketLoginNav from "./BasketLoginNav";
import Logo from "../Logo";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [showNavBar, setShowNavBar] = useState(false);
  const hamburgerHandler = () => {
    setShowNavBar((prevState) => (prevState = !prevState));
  };
  return (
    <div>
      <header className="p-5 container">
        <div className="flex items-center flex-wrap lg:flex-row lg:flex-1 justify-between">
          <Bars3Icon
            className="w-7 cursor-pointer lg:hidden text-red-600"
            onClick={hamburgerHandler}
          />
          <Logo />
          <SearchBar />
          <div className="hidden lg:block">
            <BasketLoginNav />
          </div>
        </div>
      </header>
      <Nav showNavBar={showNavBar} hamburgerHandler={hamburgerHandler} />
    </div>
  );
}
