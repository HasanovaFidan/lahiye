import React, { useContext } from 'react'
import dataContexts from '../contexts/contexts'
import { Outlet } from 'react-router'



function PrivateRoute() {
    const { userToken } = useContext(dataContexts)
    if (userToken.isAdmin) {
        return (
            <Outlet />
        )
    } else {
        return <Navigate to={'/'} />
    }
}

export default PrivateRoute
