export default function MessagesComps(props) {
  return (
    <>
      <div className="flex flex-nowrap  p-3 rounded-lg bg-black border-b">
        <h1 className="mx-3">
          <span className="font-bold">From:</span> {props.from}
        </h1>
        <p className="mx-3">
          <span className="font-bold">Message:</span> {props.message}
        </p>
      </div>
    </>
  );
}
