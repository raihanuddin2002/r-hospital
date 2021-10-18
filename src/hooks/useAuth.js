import React from 'react';
import useFirebase from './useFirebase';

const useAuth = () => {
    return (
        useFirebase()
    );
};

export default useAuth;