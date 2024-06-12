import { PlusIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
import AdminItems from "../components/AdminItems";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://encms-back.liara.run/api/${"admins"}`,
    })
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        setErr(null);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [data, isPending, err]);

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
                      UserName / Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      FirstName / LastName
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <AdminItems key={item.id} {...item} />
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
