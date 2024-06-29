export default function FooterItems(props) {
  return (
    <div className="flex justify-center items-center flex-col rounded-3xl w-32 h-24">
      <img className="w-20" src={props.img} alt="" />
      <p className="text-sm">{props.title}</p>
    </div>
  );
}
