import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allContext = useAuth();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;