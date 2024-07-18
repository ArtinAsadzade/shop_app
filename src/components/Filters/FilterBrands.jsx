import { ChevronRightIcon, FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { decrypted, extractBrands } from "../../Utils";
import { useContext, useState } from "react";
import { FilterContext } from "../../context/FiltersContext";
import ModalContainer from "../../helper/ModalContainer";

export default function FilterBrands() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { filter, setFilter } = useContext(FilterContext);
  const decryptedData = decrypted("productsData");
  const brands = extractBrands(decryptedData);

  const openHandler = () => {
    setOpen(!open);
  };

  const showFiltersHandler = () => {
    setShow(!show);
  };

  const addNewFilterHandler = (brand) => {
    setFilter((prev) => {
      if (prev.brand.includes(brand)) {
        return {
          ...prev,
          brand: prev.brand.filter((item) => item !== brand),
        };
      } else {
        return {
          ...prev,
          brand: [...prev.brand, brand],
        };
      }
    });
  };

  return (
    <>
      <div className={`hidden w-full  transition-all duration-300 bg-white mx-3 sticky top-0 p-2 rounded-lg flex-col lg:flex gap-3`}>
        <div className="w-full rounded-lg flex flex-col gap-1 font-bold sticky start-0 top-0">
          <div className="flex justify-between p-2 cursor-pointer rounded-lg shadow-lg items-center" onClick={openHandler}>
            برند ها
            <ChevronRightIcon className={`w-5 transition-all duration-300 ${open ? "rotate-90" : "rotate-0"} `} />
          </div>
          <div className={`flex-col gap-5 transition-all duration-300 overflow-hidden ${open ? "h-full" : "h-0"}`}>
            {brands.map((brand) => (
              <div
                key={brand}
                onClick={() => addNewFilterHandler(brand)}
                className={`w-full backdrop:fil bg-slate-100 shadow-md bg-opacity-80 my-2 font-bold text-primary cursor-pointer rounded-md backdrop-blur-sm p-2 text-center transition-all duration-100 select-none ${
                  filter.brand.includes(brand) ? "border-primary border-2" : ""
                }`}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full cursor-pointer hover:shadow-md transition-all bg-white mx-3 p-2 rounded-lg flex items-center justify-center lg:hidden"
        onClick={showFiltersHandler}
      >
        <FunnelIcon className="w-5 mx-1" />
        فیلتر
      </div>
      <ModalContainer open={show} setOpen={setShow}>
        <div className="w-full flex flex-wrap gap-3 justify-evenly mt-5">
          {brands.map((brand) => (
            <div
              key={brand}
              onClick={() => addNewFilterHandler(brand)}
              className={`w-2/5 backdrop:fil bg-slate-100 shadow-md bg-opacity-80 font-bold text-primary cursor-pointer rounded-md backdrop-blur-sm p-2 text-center transition-all duration-100 select-none ${
                filter.brand.includes(brand) ? "border-primary border-2" : ""
              }`}
            >
              {brand}
            </div>
          ))}
        </div>
      </ModalContainer>
    </>
  );
}
