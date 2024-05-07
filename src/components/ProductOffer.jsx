export default function ProductOffer(props) {
  return (
    props.offerPrice &&
    props.count && (
      <div className="md:w-1/4 lg:w-1/6 w-1/3 flex-shrink-0 my-5 cursor-pointer mx-3 bg-white bg">
        <img src={props.img} alt="" className=" transition my-3 hover:scale-110" />
        <h1 className="text-center text-md">{props.name}</h1>
        <p className="text-sm text-zinc-400 mt-1 line-through text-center">{props.price}</p>
        <h4 className="text-md text-center text-bold">{props.offerPrice}</h4>
      </div>
    )
  );
}
