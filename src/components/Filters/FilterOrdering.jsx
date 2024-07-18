import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { useCallback, useContext, useState } from "react";
import ModalContainer from "../../helper/ModalContainer";
import { orderingData } from "../../data/data";
import { OrderingContext } from "../../context/OrderingContext";

export default function FilterOrdering() {
  const { ordering, setOrdering } = useContext(OrderingContext);
  const [show, setShow] = useState(false);

  const showFiltersHandler = () => {
    setShow(!show);
  };

  const changeOrderingProducts = useCallback(
    (activeOrdering) => {
      if (ordering === activeOrdering) {
        setOrdering("");
      } else {
        setOrdering(activeOrdering);
      }
    },
    [ordering, setOrdering]
  );

  return (
    <>
      <div
        className="w-full cursor-pointer hover:shadow-md transition-all bg-white mx-3 p-2 rounded-lg flex items-center justify-center lg:hidden"
        onClick={showFiltersHandler}
      >
        <AdjustmentsVerticalIcon className="w-5 mx-1" />
        مرتب سازی
      </div>

      <ModalContainer open={show} setOpen={setShow}>
        <div className="w-full flex flex-wrap gap-3 justify-evenly mt-5">
          {orderingData.map((item) => (
            <div
              key={item.id}
              onClick={() => changeOrderingProducts(item.title)}
              className={`w-2/5 backdrop:fil bg-slate-100 shadow-md bg-opacity-80 font-bold text-primary cursor-pointer rounded-md backdrop-blur-sm p-2 text-center transition-all duration-100 select-none ${
                ordering === item.title ? "border-primary border-2" : ""
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </ModalContainer>
    </>
  );
}
