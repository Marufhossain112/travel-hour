import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContext } from "../Contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <button className="btn btn-outline btn-circle loading"></button>
      </div>
    );
  }

  // if there is no user
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  // if any user found
  return children;
};

export default PrivateRoute;
