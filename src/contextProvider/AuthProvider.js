import React, { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthProvider = (props) => {
    const navigate = useNavigate();
    const [userInfo, setuserInfo] = useState({})
    const updateUserState = () => {

        if (localStorage.getItem('user')) {
            setuserInfo(JSON.parse(localStorage.getItem('user')))
        }
        else {
            navigate('/');
        }
    }
    const handleLogout = (e) => {
        localStorage.clear();
        navigate('/');

    }
    return (
        <AuthContext.Provider value={{ userInfo, setuserInfo, updateUserState, handleLogout }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export const AuthContext = createContext();
export default AuthProvider
