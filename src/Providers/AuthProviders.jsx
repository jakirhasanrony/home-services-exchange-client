import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import app from "../Firebase/firebaseConfig";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            setLoading(false);
            // if user exist then issue a token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response: ', res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });
        return () => {
            unSubscribe();
        }

    }, [])

    const authInformation = {
        user,
        loading,
        createUserWithEmail,
        signInWithGoogle,
        userLogOut,
        signIn,



    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProviders;