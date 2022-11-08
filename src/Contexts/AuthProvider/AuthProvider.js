import React, { createContext } from "react";
export const MyContext = createContext();
const AuthProvider = ({ children }) => {
  const info = { user: "name" };
  return <MyContext.Provider value={info}>{children}</MyContext.Provider>;
};

export default AuthProvider;
