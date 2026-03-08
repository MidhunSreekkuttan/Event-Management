import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { EventManagementContext } from '../../../context/EventManagementContext'
import Loader from '../../Loading'

export const LoginOutlet = () => {

    const { isLoggedIn, authLoading } = useContext(EventManagementContext)
    console.log(isLoggedIn);

    if (authLoading) {
        return <Loader />
    } else {
        return isLoggedIn ? <Outlet /> : <Navigate to='/event-management/login' />
    }

}
