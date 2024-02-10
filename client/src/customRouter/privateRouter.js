import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ children }) => {
    const firstLogin = localStorage.getItem('firstlogin')
    if (!firstLogin) {
        return <Navigate to="/" />
    }
    return children
}

export default PrivateRouter