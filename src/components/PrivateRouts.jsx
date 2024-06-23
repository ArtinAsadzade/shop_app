import { Navigate, Outlet, useNavigate } from "react-router-dom";
import TopBar from "../cms/components/TopBar";
import SideBar from "../cms/components/SideBar";
import { useEffect, useMemo } from "react";
import useDecrypted from "../hooks/useDecrypted";

export default function PrivateRouts() {
  const navigate = useNavigate();
  const user = useMemo(() => useDecrypted("user"), []);

  useEffect(() => {
    if (!user) navigate("/home");
  }, [navigate, user]);

  return (
    <>
      {user?.perm ? (
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
