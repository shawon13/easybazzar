import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //sign up
    const signup = (email, password) => {
        setLoading(true);
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
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // currently login user auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
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
        loading,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;