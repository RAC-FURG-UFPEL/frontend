import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const RequireAuth = ( { allowedRole }) => {
    const { auth } = useAuth()
    const location = useLocation()

    return (
        auth?.roles?.find(roles => allowedRole?.includes(roles))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/entrar" state={{ from: location }} replace />
    )
}

export default RequireAuth