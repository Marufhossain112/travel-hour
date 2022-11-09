
import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../Contexts/AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user } = useContext(MyContext);
  const location = useLocation();

// if there is no user
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  // if any user found
  return children;
};

export default PrivateRoute;