import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { UserAccContext } from "./../../context/UserAccContext";
import YesOrNo from "./YesOrNo";

export default function UsersItem(props) {
  const [show, setShow] = useState(false);
  const { userFind } = useContext(UserAccContext);

  const deleteUserHandler = () => {};

  const openYesOrNoModal = () => {
    setShow((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <YesOrNo
        title={`You Want Delete *${props?.userName}*?`}
        desc={`Are you sure about deleting the desired product?`}
        button={true}
        func={deleteUserHandler}
        show={show}
        setShow={setShow}
      />
      <tr className="odd:bg-gray-200 bg-gray-50 even:bg-gray-100 border-b">
        <th
          scope="row"
          className="px-6 py-4 font-bold text-black flex text-left"
        >
          <img
            src={props.profile || "/Profile/Default.jpg"}
            alt=""
            className="w-10 bg-black rounded-full mr-5"
          />
          <div className="flex flex-col">
            <p className="">{props?.userName}</p>
            <p className="text-gray-400">{props?.email}</p>
          </div>
        </th>
        <td className="px-6 py-4 text-black font-bold text-center">
          <button className=" uppercase bg-blue-500 px-3 py-2 rounded-lg cursor-default">
            {props?.perm === 0
              ? "Member"
              : props?.perm === 1
              ? "Admin"
              : props?.perm === 2
              ? "Owner"
              : "Admin"}
          </button>
        </td>
        <td className="px-6 py-4 text-right">
          <button
            href="#"
            className="font-medium text-gray-500 mx-2 hover:underline"
          >
            <PencilSquareIcon className="w-5" />
          </button>
          <button
            href="#"
            className="font-medium text-gray-500 mx-2 hover:underline"
            onClick={userFind?.id !== props?.id && openYesOrNoModal}
          >
            <TrashIcon className="w-5" />
          </button>
        </td>
      </tr>
    </>
  );
}
