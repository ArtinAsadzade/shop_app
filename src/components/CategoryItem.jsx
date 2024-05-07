export default function CategoryItem(props) {
  const onChangeHandler = () => {
    console.log(props);
  };
  return (
    <div className="flex items-center rounded-lg hover:bg-gray-100 opacity-80">
      <input
        id={props.id + "cat"}
        onChange={onChangeHandler}
        type="checkbox"
        className="w-4 h-4 bg-gray-100 border-gray-300 mr-3"
      />
      <label htmlFor={props.id + "cat"} className="w-full text-xs text-gray-900 rounded pr-1 py-2">
        {props.title}
      </label>
    </div>
  );
}
