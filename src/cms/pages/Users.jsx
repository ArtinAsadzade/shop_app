import { PlusIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
import UsersItem from "../components/UsersItem";
import { useContext } from "react";
import { UsersDataContext } from "./../../context/UsersDataContext";

export default function Users() {
  const { users } = useContext(UsersDataContext);

  return (
    <>
      {users && (
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
              <table className="w-full text-sm text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-right">
                      نام کاربری / ایمیل
                    </th>
                    <th scope="col" className="px-6 py-3 text-right">
                      نام و نام خانوادگی
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      نقش
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      عمل
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((item) => (
                    <UsersItem key={item.id} {...item} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* <div>
              
            </div> */}
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
}
