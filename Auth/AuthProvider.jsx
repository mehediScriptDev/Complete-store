import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useState,useEffect } from "react";
import { auth } from "../Firebase/firebase.init";
import Loading from "../src/Components/Loading";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
const provider = new GoogleAuthProvider();

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const googlelogin =()=>{
    setLoading(true)
    return signInWithPopup(auth,provider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  if(loading){
    return <Loading></Loading>
  }

  const logginOUt = () =>{
    return signOut(auth);
  }
  const info = {
    user,
    logginOUt,
    loading,
    setUser,
    createUser,
    googlelogin
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
