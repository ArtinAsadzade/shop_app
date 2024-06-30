import { Navigate, Outlet } from "react-router-dom";
import TopBar from "../cms/components/TopBar";
import SideBar from "../cms/components/SideBar";
import { useEffect, useState } from "react";
import { decrypted } from "../Utils";

export default function PrivateRouts() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const decryptedData = decrypted("user");

  useEffect(() => {
    if (decryptedData) {
      setLoading(false);
      setUser(decryptedData);
    }
  }, [decryptedData]);

  return (
    <>
      {loading ? (
        <>loading</>
      ) : user.perm ? (
        <>
          <TopBar />{" "}
          <div className="flex mt-[2px]">
            <SideBar /> <Outlet />
          </div>
        </>
      ) : (
        <Navigate to={"/home"} />
      )}
    </>
  );
}
