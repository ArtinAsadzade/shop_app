export default function BrandItem(props) {
  return (
    <div className="flex items-center rounded-lg hover:bg-gray-100 opacity-80">
      <input id={props.id + "brand"} type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 mr-3" />
      <label htmlFor={props.id + "brand"} className="w-full text-xs text-gray-900 rounded pr-1 py-2">
        {props.title}
      </label>
    </div>
  );
}
