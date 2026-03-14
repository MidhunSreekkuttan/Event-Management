import { useContext } from 'react'
import { EventManagementContext } from '../context/EventManagementContext'
import Loader from '../components/Loading'
import { Navigate, Outlet } from 'react-router-dom'

const EventManagementProtectedRoute = () => {

  const { isLoggedIn, authLoading } = useContext(EventManagementContext)
  console.log(isLoggedIn);

  if (authLoading) {
    return <Loader />
  } else {
    return isLoggedIn ? <Outlet /> : <Navigate to='/event-management/login' />
  }

}

export default EventManagementProtectedRoute