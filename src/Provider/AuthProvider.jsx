import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config'


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    //sign up
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // name and photoUrl
    const updateUser = (user, name, url) => {
        updateProfile(user, {
            displayName: name, photoURL: url
        })
    }
    //email verification
    const emailVerification = (user) => {
        return sendEmailVerification(user)
    }
    //login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const info = {
        user,
        signup,
        updateUser,
        emailVerification,
        loginUser,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;