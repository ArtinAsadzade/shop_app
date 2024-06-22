import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import YesOrNo from "../../components/YesOrNo";
import { ProductDataContext } from "../../context/ProductDataContext";

export default function ProductItems(props) {
  const [show, setShow] = useState(false);
  const { products, setProducts } = useContext(ProductDataContext);

  const deleteUserHandler = () => {
    setProducts(products.filter((product) => product.id !== props.id));
  };

  useEffect(() => {
    localStorage.setItem("productsData", JSON.stringify(products));
  }, [products]);

  const openYesOrNoModal = () => {
    setShow((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <YesOrNo
        title={`شما می خواهید محصول  *${props?.name}* را حذف کنید؟`}
        desc={`آیا از حذف محصول مورد نظر مطمئن هستید؟`}
        button={true}
        func={deleteUserHandler}
        show={show}
        setShow={setShow}
      />
      <tr className="odd:bg-gray-200 bg-gray-50 even:bg-gray-100 border-b">
        <td
          scope="row"
          className="px-6 py-4 font-bold text-black flex text-right"
        >
          <img
            src={props.img || "/Profile/Default.webp"}
            alt=""
            className="w-16 mr-5"
          />
        </td>
        <td className="px-6 py-4 text-black font-bold text-right">
          <p className="">{props?.name}</p>
        </td>
        <td className="px-6 py-4 text-black font-bold text-center">
          <div className="flex flex-col mx-4">
            <p className="">{props?.price}</p>
            {props?.offerPrice ? (
              <p className="text-gray-400">{props?.offerPrice}</p>
            ) : (
              <></>
            )}
          </div>
        </td>
        <td className="py-4 text-left">
          <button
            href="#"
            className="font-medium text-gray-500 mx-2 hover:underline"
          >
            <PencilSquareIcon className="w-5" />
          </button>
          <button
            href="#"
            className={`font-medium text-gray-500 mx-2 hover:underline`}
            onClick={openYesOrNoModal}
          >
            <TrashIcon className="w-5" />
          </button>
        </td>
      </tr>
    </>
  );
}
