import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full m-auto text-center p-8">
          <img
            src="/Vectors/404Error2.svg"
            alt=""
            className="w-full md:w-1/3 mx-auto"
          />
          <Link
            to={"home"}
            className="border-black border-2 text-black rounded-lg p-2 hover:opacity-50 transition-opacity"
          >
            Back To Home
            <ArrowUpRightIcon className="w-4 inline mx-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
