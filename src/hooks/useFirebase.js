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
    const [isLoading, setIsLoading] = useState(true);

    // google sign In
    const signInWithGoogle = () => {
      
        const googleProvider = new GoogleAuthProvider();
    
        return signInWithPopup(auth, googleProvider);
    
    }

    // Log Out 
    const logOut = () => {
        signOut(auth).then(() => {

          }).catch((error) => {
            setError(error);
          })
          .finally( () => {
              setIsLoading(false);
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
            setIsLoading(false);
          });
    },[]);
    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        logOut
        
    }
       
};

export default useFirebase;

