import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

export default function NavItems(props) {
  const userLocation = useLocation();
  return (
    <li
      className={`${userLocation.pathname.toLowerCase() === props.link ? "border-b-2 border-red-600" : ""}${
        userLocation.pathname.toLowerCase() === "/" && props.active ? "border-b-2 border-red-600" : ""
      }`}
    >
      <Link to="/home" className={`text-slate-600 flex mx-4 my-2 hover:text-red-600 text-sm xl:text-sm`}>
        {props.title}
        {props.subPage && <ChevronDownIcon className="w-3 mx-0.5 text-red-600" />}
      </Link>
    </li>
  );
}
