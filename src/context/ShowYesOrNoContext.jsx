import { createContext, useState } from "react";

export const ShowYesOrNoContext = createContext();

function ShowYesOrNoProvider({ children }) {
  const [show, setShow] = useState(false);

  return (
    <ShowYesOrNoContext.Provider value={{ show, setShow }}>
      {children}
    </ShowYesOrNoContext.Provider>
  );
}
export default ShowYesOrNoProvider;
