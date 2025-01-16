import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const googleProvider= new GoogleAuthProvider();
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUpGoogleUser=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo,
        })
    }
    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("current user", currentUser)
            if (currentUser) {

            }
            else {

            }
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        signUpUser,
        logInUser,
        updateUser,
        signOutUser,
        signUpGoogleUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;