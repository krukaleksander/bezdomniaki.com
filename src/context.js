import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppWrapper = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const useFetch = (url) => {
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      fetchData();
    }, [url]);

    // return { loading, error, data };
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        data,
        useFetch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppWrapper, useGlobalContext };
