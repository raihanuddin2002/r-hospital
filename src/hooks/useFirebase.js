import React, { useEffect } from 'react';
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Atuhentication/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    // State
    const [user,setUser] = useState('');
    const [error,setError] = useState('');

    // google sign In
    const signInWithGoogle = () => {
      
        const googleProvider = new GoogleAuthProvider();
    
        return signInWithPopup(auth, googleProvider);
    
    }

    // Log Out 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser('');
          }).catch((error) => {
            setError(error);
          });
    }

    // Observe 
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              const uid = user.uid;
              // ...
            } else {
              setError('');
            }
          });
    },[]);
    return {
        user,
        error,
        signInWithGoogle,
        logOut
    }
       
};

export default useFirebase;

