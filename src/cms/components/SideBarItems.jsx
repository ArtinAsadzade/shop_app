import { NavLink } from "react-router-dom";

export default function SideBarItems(props) {
  return (
    <div className="w-full flex items-start flex-col p-2 ">
      <p className="text-gray-600 font-bold text-sm">{props.title}</p>
      {props.infos.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          className={({ isActive }) =>
            `w-full p-1 rounded-md flex mx-2 px-2 items-center my-1 justify-start gap-2 ${
              isActive ? "bg-red-200" : "hover:bg-red-100 transition-all"
            }`
          }
        >
          <span className="[&>*]:w-full [&>*]:h-full w-5 h-5">{item.icon}</span>
          <p>{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
}
