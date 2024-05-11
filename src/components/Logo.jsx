import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <Link to="/" className="p-1 cursor-pointer lg:hidden">
        <h1 className="font-extrabold text-center text-red-600 text-lg lg:text-xl">
          Articom.ir
        </h1>
      </Link>
      <Link to="/" className="p-1 cursor-pointer hidden lg:block">
        <h1 className="font-extrabold text-red-600 text-lg lg:text-xl">
          Articom.ir
        </h1>
      </Link>
    </>
  );
}
