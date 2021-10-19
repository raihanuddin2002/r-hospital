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
    
        return signInWithPopup(auth, googleProvider);
    
    }

    // Sign in with email & password
    const signInEmailAndPassword = () => {
       
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

    
        const {signUpUser} = useObserver();
        
        console.log(signUpUser)
        useEffect( () => {
          setUser(signUpUser);
        },[signUpUser])
    // // Observe 
    //   useEffect( () => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           setUser(user)
    //           const uid = user.uid;
    //           // ...
    //         } else {
    //           setError('');
    //         }
    //         setIsLoading(false);
    //       });
    // },[]);

    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        signInEmailAndPassword,
        onAuthStateChanged,
        logOut
        
    }
       
};

export default useFirebase;

