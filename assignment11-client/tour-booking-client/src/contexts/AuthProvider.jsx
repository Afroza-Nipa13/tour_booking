import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const sighInUser =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  const updateUser =(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
  }

  const logOutUser=()=>{
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubsCribe= onAuthStateChanged(auth,(currentUser)=>{
       
            setUser(currentUser)
            setLoading(false)
            // console.log("user in authProvider", currentUser)
            
})
    return ()=>{
        unSubsCribe()
    } 

  },[])

  const authData={
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    sighInUser,
    updateUser,
    logOutUser,
    googleSignIn
    
  }
    
        return <AuthContext value={authData}>{children}</AuthContext>
;
};

export default AuthProvider;