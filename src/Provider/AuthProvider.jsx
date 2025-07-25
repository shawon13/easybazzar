import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import app from '../firebase/firebase.config'
import AuthContext from './AuthContext';
import axios from 'axios';
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
    const updateUser = (user, name) => {
        updateProfile(user, {
            displayName: name
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

    //password reset
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    //google login
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //facebook login
    const facebookProvider = new FacebookAuthProvider()
    const facebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    // currently login user auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                const user = { email: currentUser.email };
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        setLoading(false)
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        setLoading(false)
                    })
            }

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
        loading,
        signup,
        updateUser,
        emailVerification,
        loginUser,
        logOut,
        resetPassword,
        googleLogin,
        facebookLogin,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;