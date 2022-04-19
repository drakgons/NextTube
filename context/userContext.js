import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [page, setPage] = useState("");
  const [menu, setMenu] = useState(false);

  const contextValue = {
    page,
    setPage,
    menu,
    setMenu,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
