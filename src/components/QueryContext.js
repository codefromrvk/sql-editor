import { createContext, useContext, useState } from "react";

export const QueryContext = createContext("dark");

const QueryProvider = ({ children }) => {
  const [queryText, setQueryText] = useState("");
  const [queryNum, setQueryNum] = useState(0);
  const [isResult, setIsResult] = useState(false);

  return (
    <QueryContext.Provider
      value={{
        queryText,
        setQueryText,
        queryNum,
        setQueryNum,
        isResult,
        setIsResult,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

const UseQueryContext = () => useContext(QueryContext);

export { QueryProvider, UseQueryContext };
