export default function SocialItems(props) {
  return (
    <a
      href={props.link}
      className="mr-1 flex h-16 w-16 items-center justify-center p-2"
    >
      <img src={props.img} alt="" />
    </a>
  );
}
