import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppWrapper = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(null);
  const [categoryArticles, setCategoryArticles] = useState(null);
  const [path, setPath] = useState(window.location.pathname);

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
  };

  const useFetchMenu = (url) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setMenu(json);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [url]);
  };

  const useFetchCategory = (url) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setCategoryArticles(json);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [url]);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        data,
        useFetch,
        menu,
        useFetchMenu,
        categoryArticles,
        useFetchCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppWrapper, useGlobalContext };
