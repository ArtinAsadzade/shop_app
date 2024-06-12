export default function NewProduct() {
  return (
    <div className="w-full h-svh bg-slate-200 px-5 py-10">
      <div className="w-full flex justify-between items-center bg-white m-auto p-3 rounded-lg">
        <h1 className="font-bold border-b-2">Manage Products</h1>
      </div>
      <div className="w-full">
        <form className="my-5 space-y-5">
          <input
            type="text"
            className="bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border focus:border-gray-400 right-2 text-sm rounded-lg block w-full p-2"
            placeholder="Product Name ..."
            required
          />
          <textarea
            id="message"
            rows="4"
            className="bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border focus:border-gray-400 right-2 text-sm rounded-lg block w-full p-2"
            placeholder="Product Desc ..."
          ></textarea>
        </form>
      </div>
    </div>
  );
}
