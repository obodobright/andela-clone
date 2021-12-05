import React, { createContext } from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/base";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  console.log("currentUser:", currentUser);
  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
