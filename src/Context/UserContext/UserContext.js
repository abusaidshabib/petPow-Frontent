import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubscribe();
    }, [])

    const regUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const googlePopUp = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signInEmPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const allInfo = { googlePopUp, loading, signInEmPass, user, logOut, regUser };

    return (
        <div>
            <AuthContext.Provider value={allInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;