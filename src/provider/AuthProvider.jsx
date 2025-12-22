import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [roleLoading, setRoleLoading] = useState(true);
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('')

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    };

    const updateUserProfile = (name, photo) => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, {
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

    useEffect(() => {
        if (!user) return;
        axios.get(`http://localhost:3000/users/${user.email}`)
            .then((res) => {
                setRole(res.data.role);
                setStatus(res.data.status)
                setRoleLoading(false)
            })

    }, [user])

    console.log(status);
    
    

    const AuthData = {
        user,
        loading,
        roleLoading,
        role,
        status,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile
    }

    return <AuthContext value={AuthData}>
        {children}
    </AuthContext>
};
export default AuthProvider;