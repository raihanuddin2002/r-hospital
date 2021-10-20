import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useState } from 'react';
import { useEffect} from 'react';

const useObserver = () => {
    const auth = getAuth();
    const [signUpUser,setSignUpUser] = useState('');
    const [error,setError] = useState('');
     // Observe 
     useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSignUpUser(user);
              // ...
            } else {
              setError('');
            }
          });
    },[signUpUser]);
    return {
        signUpUser,
        error
    } 
};

export default useObserver;