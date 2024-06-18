import { Navigate, Outlet, useNavigate } from "react-router-dom";
import TopBar from "../cms/components/TopBar";
import SideBar from "../cms/components/SideBar";
import { useEffect } from "react";

export default function PrivateRouts() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <>
      {JSON.parse(localStorage.getItem("user"))?.perm ? (
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
