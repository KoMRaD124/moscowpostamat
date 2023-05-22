import React from 'react';
import { useSelector } from 'react-redux';
import { redirect,Outlet, Route,Navigate } from 'react-router-dom';


  const AuthRedirect = (props) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    if (isAuthenticated) {
       return <Outlet/>
    } else {
      return <Navigate to="/login" />;
    }
  };


export default AuthRedirect;