import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [page, setPage] = useState("");
  const contextValue = {
    page,
    setPage,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
