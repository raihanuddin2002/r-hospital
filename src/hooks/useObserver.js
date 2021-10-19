import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useState } from 'react';
import React, { useEffect} from 'react';

const useObserver = () => {
    const auth = getAuth();
    const [signUpUser,setSignUpUser] = useState('');
    const [error,setError] = useState('');
    const [isSignUpLoading, setIsLoading] = useState(true);
     // Observe 
     useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSignUpUser(user);
              // ...
            } else {
              setError('');
            }
            setIsLoading(false);
          });
    },[signUpUser]);
    return {
        signUpUser,
        error,
        isSignUpLoading
    } 
};

export default useObserver;