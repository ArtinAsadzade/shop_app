// import { useContext } from "react";
// import { userLogin } from "../Utils";
// import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
// import TopBar from "../components/TopBar";
// import SideBar from "../components/SideBar";
// import { useEffect } from "react";

// export default function PrivateRouts() {
//   const { userName, userPassword } = useContext(UserContext);
//   const isLogin = userLogin(userName, userPassword);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!JSON.parse(localStorage.getItem("user"))) {
//       navigate("/");
//     }
//   }, [navigate]);

//   return (
//     <>
//       {isLogin ? (
//         <>
//           <TopBar />{" "}
//           <div className="flex mt-[2px]">
//             <SideBar /> <Outlet />
//           </div>
//         </>
//       ) : (
//         <Navigate to={"/"} />
//       )}
//     </>
//   );
// }
