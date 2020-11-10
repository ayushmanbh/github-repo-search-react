import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ state: false, msg: '' });
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({})

  const showError = (state = false, msg = '') => {
    setError({ state, msg })
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        query,
        results,
        showError,
        setIsLoading,
        setQuery,
        setResults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
