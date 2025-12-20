import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';

const googleProvider =  new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    };

    const updateUserProfile = (name, photo) => {
        if(auth.currentUser) {
            return updateProfile(auth.currentUser,{
                displayName: name,
                photoURL: photo
            })
        }
        else return
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () =>
            unsubscribe()
    }, []);



    const AuthData = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        updateUserProfile
    }

    return <AuthContext value={AuthData}>
        {children}
    </AuthContext>
};
export default AuthProvider;