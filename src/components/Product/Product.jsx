export default function Product(props) {
  return (
    <div className="my-2 py-2 md:p-3 border rounded-xl flex items-center sm:inline hover:shadow-lg transition">
      <div className="image-box sm:mb-6">
        <img
          src={props.img}
          alt=""
          className="hover:scale-105 transition rounded-md sm:rounded-3xl w-24 sm:w-full mx-auto"
        />
      </div>
      <div className="flex flex-col w-full">
        <p className="text-xs sm:text-sm opacity-90 mb-5">{props.name}</p>
        {props.offerPrice ? (
          <div className="flex justify-end mb-2 text-sm opacity-80 pl-3 md:pl-0">
            <p>{props.offerPrice}</p>
            <p>تومان</p>
          </div>
        ) : (
          <></>
        )}
        <div
          className={`flex justify-end text-xs opacity-75 pl-3 md:pl-0 ${
            props.offerPrice ? "line-through" : ""
          }`}
        >
          <p>{props.price}</p>
          <p>تومان</p>
        </div>
      </div>
    </div>
  );
}
