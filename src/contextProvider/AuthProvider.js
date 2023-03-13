import React, { useState, createContext } from 'react'

const AuthProvider = (props) => {
    const [userInfo, setuserInfo] = useState({
        user: ""
    })
    return (
        <AuthContext.Provider value={{ userInfo, setuserInfo }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export const AuthContext = createContext();
export default AuthProvider
