import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const getUserFromLocalStorage = () => {
  let storedUser = JSON.parse(localStorage.getItem('user'))
  if (storedUser === null) {
    storedUser = {
      isLoggedIn: false,
      userInfo: null
    }
  }
  return storedUser
}

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage())
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ state: false, msg: '' });
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({})

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const showError = (state = false, msg = '') => {
    setError({ state, msg })
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser({
      isLoggedIn: false,
      userInfo: null
    })
  }

  return (
    <AppContext.Provider
      value={{
        user,
        isLoading,
        error,
        query,
        results,
        setUser,
        showError,
        setIsLoading,
        setQuery,
        setResults,
        logout
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
