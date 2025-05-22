import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
const provider = new GoogleAuthProvider();

  const creatUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const googlelogin =()=>{
    setLoading(true)
    return signInWithPopup(auth,provider);
  }
  const info = {
    user,
    loading,
    setUser,
    creatUser,
    googlelogin
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
