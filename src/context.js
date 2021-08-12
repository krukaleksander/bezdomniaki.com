import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppWrapper = ({ children }) => {
  const [greets, setGreets] = useState("Hello!");

  const logGreet = () => console.log(greets);
  const changeGreets = (text) => setGreets(text);

  return (
    <AppContext.Provider
      value={{
        greets,
        logGreet,
        changeGreets,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppWrapper, useGlobalContext };
