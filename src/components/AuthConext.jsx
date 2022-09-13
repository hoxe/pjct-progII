import React, { Children, createContext } from "react";

import { getAuth } from "firebase/auth";

import Firebase from "./firebase.jsx";

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const auth = getAuth(Firebase);

  const value ={
    auth
  }

return(
    <AuthContext.Provider
    value={value}
    >
        {children}
    </AuthContext.Provider>
)
}
