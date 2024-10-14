import React, { createContext, useEffect,useContext, useState } from 'react';

import Cookies from 'js-cookie'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() =>{
    const token = Cookies.get('authToken');
    if(token){
      setIsAuthenticated(true)
    }
  }, [])
  
  const login = (token) => {
    Cookies.set('authToken', token, {expires: 7});
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('authToken');
    setIsAuthenticated(false);
  };
  return (
    // Passing the object to the value property
    // makes the variable and functions avaible (state) available to 
    // its children
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};