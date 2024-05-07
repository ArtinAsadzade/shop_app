export default function SocialItems(props) {
  return (
    <a href={props.link} className="mr-1 flex h-12 w-12 items-center justify-center p-2">
      <img src={props.img} alt="" />
    </a>
  );
}
