import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { UsersDataContext } from "./../../context/ProductDataContext";
import YesOrNo from "./YesOrNo";

export default function AdminItems(props) {
  const [show, setShow] = useState(false);
  const { Users, setUsers } = useContext(UsersDataContext);

  const deleteUserHandler = () => {
    if (JSON.parse(localStorage.getItem("user"))?.id === props.id) {
      setShow((prevState) => (prevState = !prevState));
    } else {
      setUsers(Users.filter((item) => item.id !== props.id));
      setShow((prevState) => (prevState = !prevState));
    }
  };

  const openYesOrNoModal = () => {
    setShow((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <YesOrNo
        title={`You Want Delete *${props?.username}*?`}
        desc={`Are you sure about deleting the desired product?`}
        button={true}
        func={deleteUserHandler}
        show={show}
        setShow={setShow}
      />
      <tr className="odd:bg-gray-200 bg-gray-50 even:bg-gray-100 border-b">
        <th scope="row" className="px-6 py-4 font-bold text-black">
          <p className="">{props?.username}</p>
        </th>
        <td className="px-6 py-4 text-black font-bold">
          <p className="">{props?.firsname}</p>
          <p className="text-gray-400">{props?.lastname}</p>
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
            onClick={
              JSON.parse(localStorage.getItem("user"))?.id !== props?.id &&
              openYesOrNoModal
            }
          >
            <TrashIcon className="w-5" />
          </button>
        </td>
      </tr>
    </>
  );
}
