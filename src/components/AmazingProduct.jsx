export default function AmazingProduct(props) {
  return (
    props.price - props.offerPrice > 50000 && (
      <div className="md:w-1/4 lg:w-1/6 w-1/2 flex-shrink-0 my-5 cursor-grab mx-3 bg-white p-3 px-4 rounded-xl">
        <img src={props.img} alt="" className=" transition my-3 hover:scale-110" />
        <h1 className="text-right my-4 text-md text-zinc-400">{props.name}</h1>
        <h4 className="text-left text-xl">{props.offerPrice}</h4>
        <p className="text-md text-zinc-400 mt-3 line-through text-left">{props.price}</p>
        <div className="flex mr-auto my-3 justify-center items-center rounded-lg px-10 text-red-600 w-1/4 text-md">
          <p className="m-2">11</p>:<p className="m-2">22</p>:<p className="m-2">33</p>
        </div>
      </div>
    )
  );
}
