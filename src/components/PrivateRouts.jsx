import { Navigate, Outlet, useNavigate } from "react-router-dom";
import TopBar from "../cms/components/TopBar";
import SideBar from "../cms/components/SideBar";
import { useContext, useEffect } from "react";
import { UserAccContex } from "../context/UserAccContex";

export default function PrivateRouts() {
  const navigate = useNavigate();
  const { user } = useContext(UserAccContex);

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
