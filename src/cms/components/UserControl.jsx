import { useNavigate } from "react-router-dom";

export default function UserControl({ showControl }) {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        showControl ? "flex" : "hidden"
      } w-52 flex-col justify-start transition-all z-20 absolute py-2 bg-black top-16 right-0 rounded-lg text-white`}
    >
      <button
        className="p-2 font-bold hover:opacity-70 transition-opacity"
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
}
