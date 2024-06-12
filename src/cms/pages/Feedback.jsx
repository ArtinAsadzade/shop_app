import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import YesOrNo from "../components/YesOrNo";

export default function Feedback() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);
  const [commentId, setCommentId] = useState(null);

  const openYesOrNoModal = (id) => {
    setShow((prevState) => (prevState = !prevState));
    setCommentId(id);
  };

  return (
    <>
      {isPending && <div>Loading ...</div>}
      {err && <div>{err}</div>}
      {data && (
        <div className="w-full min-h-svh bg-slate-100 px-5 py-10 overflow-y-hidden">
          <div className="w-full flex justify-between items-center bg-white m-auto p-3 rounded-lg">
            <h1 className="font-bold border-b-2">Manage Members</h1>
            <Link
              to={"/users/newUser"}
              className="p-2 bg-blue-500 mx-3 rounded-lg flex text-white items-center justify-center"
            >
              Add User
              <PlusIcon className="font-bold w-5 mx-1" />
            </Link>
          </div>
          <div className="w-full m-auto my-10 rounded-lg">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      UserName / Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Body
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr
                      key={item.id}
                      className="odd:bg-gray-200 bg-gray-50 even:bg-gray-100 border-b"
                    >
                      <YesOrNo
                        title={`You Want Delete *${item?.username}*?`}
                        desc={`Are you sure about deleting the desired product?`}
                        button={true}
                        func={deleteFeedbackHandler}
                        show={show}
                        setShow={setShow}
                      />
                      <th
                        scope="row"
                        className="px-6 py-4 font-bold text-black"
                      >
                        <p className="">{item?.userID}</p>
                        <p className="text-gray-400">{item.productID}</p>
                      </th>
                      <td className="px-6 py-4 text-black font-bold">
                        <p className="">{item?.date}</p>
                        <p className="text-gray-400">{item?.hour}</p>
                      </td>
                      <td className="px-6 py-4 text-black font-bold">
                        {item.body}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          href="#"
                          className="font-medium text-gray-500 mx-2 hover:underline"
                        >
                          <PencilSquareIcon className="w-5" />
                        </button>
                        <button
                          href="#"
                          className="font-medium text-gray-500 mx-2 hover:underline"
                          onClick={() => openYesOrNoModal(item.id)}
                        >
                          <TrashIcon className="w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
}
