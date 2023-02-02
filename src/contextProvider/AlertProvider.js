import React, { useState, createContext } from 'react'
const AlertProvider = (props) => {
    const [alert, setAlert] = useState({
        show: false,
        message: 'hello this is success',
        type: 'success'
    })
    const showAlert = (message, status) => {
        setAlert({
            show: true,
            message: message,
            type: status
        })
    }
    const hideAlert = () => {
        setAlert({
            show: false,
            message: '',
            type: 'error'
        })
    }
    return (
        <AlertContext.Provider value={{ alert, showAlert, setAlert, hideAlert }}>
            {props.children}
        </AlertContext.Provider>

    )
}
export default AlertProvider
export const AlertContext = createContext();