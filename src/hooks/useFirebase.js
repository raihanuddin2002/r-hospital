import { useEffect } from 'react';
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Atuhentication/firebase.init";
import { useHistory } from 'react-router-dom';

initializeAuthentication();

const useFirebase = () => {
    // State
    const [user,setUser] = useState('');
    const [error,setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    const auth = getAuth();
    
    // google sign In
    const signInWithGoogle = () => {
        setIsLoading(true);

       // console.log(redirect_url);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

          .finally( () => {
            setIsLoading(false);
          });
    }

    // Sign up manually
    const signUpManually = (name,email,password) => {
      return createUserWithEmailAndPassword(auth, email, password)
            
    }

    // Log in manually
    const logInManually = (email,password) => {
        setIsLoading(true);
        // Manual Login
        return signInWithEmailAndPassword(auth, email, password)
            .finally( () => {
              setIsLoading(false);
            });
    }

    // Log Out 
    const logOut = () => {
        setIsLoading(true);

        signOut(auth).then(() => {
            setUser('');
          }).catch((error) => {
            setError(error);
          })
          .finally( () => {
            setIsLoading(false);
          });
    }

    //Observer 
     useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
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
        //url,
        signInWithGoogle,
        signUpManually,
        logInManually,
        logOut,
        isLoading
        
    }
       
};

export default useFirebase;

