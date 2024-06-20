import { Link } from "react-router-dom";

export default function SearchProduct(props) {
  return (
    <Link to={"/"} className="flex items-center bg-white my-2 p-2 rounded-xl">
      <img className="w-14 rounded-lg ml-2" src={props.img} alt="" />
      <p className="text-xs opacity-70">{props.name}</p>
    </Link>
  );
}
