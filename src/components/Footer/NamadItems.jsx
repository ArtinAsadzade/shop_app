export default function NamadItems(props) {
  return (
    <a href={props.link}>
      <img className="w-24" src={props.img} alt="" />
    </a>
  );
}
