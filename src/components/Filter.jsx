import { ChevronRightIcon, FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { decrypted, extractBrands } from "../Utils";
import { useCallback, useContext, useState } from "react";
import { FilterContext } from "../context/FiltersContext";
import ModalContainer from "../helper/ModalContainer";

export default function Filter() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const { filter, setFilter } = useContext(FilterContext);
  const decryptedData = decrypted("productsData");
  const brands = extractBrands(decryptedData);

  const openHandler = () => {
    setOpen(!open);
  };

  const showFiltersHandler = () => {
    setShowFilters(!showFilters);
  };

  const addNewBrandHandler = useCallback(
    (e, title) => {
      if (e.target.checked) {
        setFilter({
          brand: [...filter.brand, title],
        });
      } else if (!e.target.checked) {
        setFilter({
          brand: filter.brand.filter((item) => item !== title),
        });
      }
    },
    [filter.brand, setFilter]
  );

  return (
    <>
      <ModalContainer open={show} setOpen={setShow} className={" flex justify-center items-center flex-col"}>
        <div
          className={`lg:w-full h-full transition-all duration-300 bg-white mx-3 p-2 rounded-lg -mr-96 lg:m-0 flex flex-col lg:flex lg:visible gap-3 ${
            showFilters ? "fixed right-0 top-0 z-50 mr-0 w-1/2" : "invisible hidden"
          }`}
        >
          <div className="w-full rounded-lg flex flex-col gap-1 font-bold">
            <XMarkIcon className="w-7 m-3 lg:hidden cursor-pointer text-red-600" onClick={showFiltersHandler} />
            <div className="flex justify-between p-2 cursor-pointer rounded-lg shadow-lg bg-slate-100 items-center" onClick={openHandler}>
              برند ها
              <ChevronRightIcon className={`w-5 transition-all duration-300 ${open ? "rotate-90" : "rotate-0"} `} />
            </div>
            <div className={`flex-col gap-1 transition-all duration-300 overflow-hidden ${open ? "h-full" : "h-0"}`}>
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="flex select-none cursor-pointer justify-between items-center font-bold my-1 text-zinc-600 bg-slate-100 p-2 rounded-lg"
                >
                  <input className="h-full" type="checkbox" onChange={(e) => addNewBrandHandler(e, brand)} id={brand} value={brand} />
                  <label className="w-full h-full text-left cursor-pointer" htmlFor={brand}>
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ModalContainer>
      <div
        className="w-full cursor-pointer hover:shadow-md transition-all bg-white mx-3 p-2 rounded-lg flex items-center justify-center lg:hidden"
        onClick={showFiltersHandler}
      >
        <FunnelIcon className="w-5 mx-1" />
        فیلتر
      </div>
    </>
  );
}
