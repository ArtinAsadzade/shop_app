export default function NamadItems(props) {
  return (
    <a href={props.link}>
      <img className="w-20 h-auto" src={props.img} alt="" />
    </a>
  );
}
