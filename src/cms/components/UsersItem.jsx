import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import YesOrNo from "../../components/YesOrNo";
import { UsersDataContext } from "../../context/UsersDataContext";
import { UserAccContex } from "../../context/UserAccContex";

export default function UsersItem(props) {
  const [show, setShow] = useState(false);
  const { users, setUsers } = useContext(UsersDataContext);
  const { user } = useContext(UserAccContex);

  const deleteUserHandler = () => {
    setUsers(users.filter((user) => user.id !== props.id));
  };

  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(users));
  }, [users]);

  const openYesOrNoModal = () => {
    if (user.id !== props?.id && user.perm > props?.perm) {
      setShow((prevState) => (prevState = !prevState));
    }
  };

  return (
    <>
      <YesOrNo
        title={`شما می خواهید کاربر  *${props?.userName}* را حذف کنید؟`}
        desc={`آیا از حذف کاربر مورد نظر مطمئن هستید؟`}
        button={true}
        func={deleteUserHandler}
        show={show}
        setShow={setShow}
      />
      <tr className="odd:bg-gray-200 bg-gray-50 even:bg-gray-100 border-b">
        <td
          scope="row"
          className="px-6 py-4 font-bold text-black flex text-right"
        >
          <img
            src={props.profile || "/Profile/Default.webp"}
            alt=""
            className="w-10 bg-black rounded-full mr-5"
          />
          <div className="flex flex-col mx-4">
            <p className="">{props?.userName}</p>
            <p className="text-gray-400">{props?.email}</p>
          </div>
        </td>
        <td className="px-6 py-4 text-black font-bold text-right">
          <p className="">
            {props?.firstName} {props?.lastName}
          </p>
        </td>
        <td className="px-6 py-4 text-black font-bold text-center">
          <button className=" uppercase bg-blue-500 text-white px-3 py-2 rounded-lg cursor-default">
            {props?.perm === 0
              ? "کاربر"
              : props?.perm === 1
              ? "منیجر"
              : props?.perm === 2
              ? "مدیر"
              : "منیجر"}
          </button>
        </td>
        <td className="py-4 text-left">
          <button
            href="#"
            className="font-medium text-gray-500 mx-2 hover:underline"
          >
            <PencilSquareIcon className="w-5" />
          </button>
          <button
            href="#"
            className={`font-medium text-gray-500 mx-2 hover:underline ${
              user.id === props?.id || user.perm < props?.perm
                ? "opacity-40 cursor-no-drop"
                : ""
            }`}
            onClick={openYesOrNoModal}
          >
            <TrashIcon className="w-5" />
          </button>
        </td>
      </tr>
    </>
  );
}
