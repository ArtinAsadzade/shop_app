import { NavLink } from "react-router-dom";

export default function SideBarItems(props) {
  return (
    <div className="w-full flex flex-col p-2">
      <p className="text-gray-600 font-bold text-sm">{props.title}</p>
      {props.infos.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          className={({ isActive }) =>
            `w-full p-1 rounded-md flex items-center justify-start gap-2 ${
              isActive ? "bg-slate-200" : "hover:bg-slate-100 transition-all"
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
