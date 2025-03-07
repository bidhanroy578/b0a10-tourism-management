import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { AuthContext } from "./Contexts";
import PropTypes from "prop-types";
import auth from "../firebase/config";
import { useEffect, useState } from "react";
const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(email, password);
    };
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const logout = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => logout();
    }, []);

    const datas = {
        user,
        loading,
        logout,
        registerWithEmail,
        loginWithGoogle,
        loginWithEmail,
    };

    return <AuthContext.Provider value={datas}>{children}</AuthContext.Provider>;
};
AuthContextProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthContextProvider;
