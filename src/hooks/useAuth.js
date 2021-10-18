import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useFirebase from './useFirebase';

const useAuth = () => {
    return (
        useContext(AuthContext)
    );
};

export default useAuth;