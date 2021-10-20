import { useEffect } from 'react';
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
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
          })
    }

    const {signUpUser} = useObserver();
    useEffect( () => {
      setUser(signUpUser);
    },[signUpUser]);

   

    return {
        user,
        error,
        signInWithGoogle,
        onAuthStateChanged,
        logOut,
        
    }
       
};

export default useFirebase;

