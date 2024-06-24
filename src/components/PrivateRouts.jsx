import { Navigate, Outlet, useNavigate } from "react-router-dom";
import TopBar from "../cms/components/TopBar";
import SideBar from "../cms/components/SideBar";
import { useEffect, useState } from "react";
import useDecrypted from "../hooks/useDecrypted";

export default function PrivateRouts() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const decryptedData = useDecrypted("user");

  useEffect(() => {
    if (decryptedData) {
      setLoading(false);
      setUser(decryptedData);
    }
  }, [decryptedData]);

  return (
    <>
      {loading ? (
        <>loade</>
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
