import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
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
    // currently login user auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => {
            return unsubscribe()
        }
    }, [])
    //log Out
    const logOut = () => {
        return signOut(auth)
    }
    const info = {
        user,
        signup,
        updateUser,
        emailVerification,
        loginUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;