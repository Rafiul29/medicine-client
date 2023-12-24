import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const AuthRoute = ({ children }) => {
  
  const location=useLocation();
  //get user from localstorage
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const isLoggedIn = user?.token ? true : false;
  
  if (!isLoggedIn) return  <Navigate to="/login" state={{ from: location }} replace />;
  return <>{children}</>;
};

export default AuthRoute;