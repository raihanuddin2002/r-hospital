import React, { useEffect } from 'react';
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,createUserWithEmailAndPassword,signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Atuhentication/firebase.init";
import useObserver from './useObserver';

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
        if(user.email === undefined){
          setIsLoading(true);
        }else{
          setIsLoading(false);
        }
        return signInWithPopup(auth, googleProvider);
    
    }

    // Log Out 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser('');
          }).catch((error) => {
            setError(error);
          })
          .finally( () => {
            setIsLoading(false);
          });
    }

    const {signUpUser,isSignUpLoading} = useObserver();
    useEffect( () => {
      setUser(signUpUser);
      if(user.email === undefined){
        setIsLoading(true);
      }else{
        setIsLoading(false);
      }
      //setIsLoading(isSignUpLoading);
    },[signUpUser]);

   

    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        onAuthStateChanged,
        logOut
        
    }
       
};

export default useFirebase;

