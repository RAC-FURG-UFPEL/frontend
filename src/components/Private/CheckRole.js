import { Children } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const CheckRole = ({ allowedRole, children }) => {
    const { auth } = useAuth()
    const location = useLocation()

    if (auth?.roles?.find(roles => allowedRole?.includes(roles))) {
        return children
    } else {
        return null
    }
}

export default CheckRole