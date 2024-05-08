import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

export default function NavItems(props) {
  const userLocation = useLocation();
  return (
    <li
      className={`relative flex ${
        userLocation.pathname.toLowerCase() === props.link
          ? "border-b-2 border-red-600"
          : ""
      }${
        userLocation.pathname.toLowerCase() === "/" && props.active
          ? "border-b-2 border-red-600"
          : ""
      }`}
    >
      <Link
        to="/home"
        className={`flex justify-between items-center h-10 leading-10 text-sm opacity-90 px-3 cursor-pointer no-underline w-full hover:no-underline duration-100 mx-1 transition rounded-xl hover:bg-red-100`}
      >
        {props.title}
        {props.subPage && (
          <ChevronDownIcon className="w-3 mx-0.5 text-red-600" />
        )}
      </Link>
    </li>
  );
}
