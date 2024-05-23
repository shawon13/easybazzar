import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase/firebase.config'


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const user = { name: 'shawon' }
    //sign up
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const info = {
        user,
        signup,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;