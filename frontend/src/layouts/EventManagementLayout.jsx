import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/event-management/Navbar';
import { useContext } from 'react';
import { EventManagementContext } from '../context/EventManagementContext';
import Loader from '../components/Loading';

const EventManagementLayout = () => {

  const { pathname } = useLocation()

  const { isLoggedIn, authLoading } = useContext(EventManagementContext)

  const hideNavbar =
    pathname === "/event-management/login" ||
    pathname === "/event-management/otp" ||
    pathname === '/event-management/staying' ||
    pathname === '/event-management/registeration' ||
    pathname === '/event-management/waiting'

  if (authLoading) {

    return <Loader />

  } else {

    if (!isLoggedIn) {

      return <Navigate to='/event-management/login' />

    }

    return (

      <div>

        {!hideNavbar && <Navbar />}
        <Outlet />

      </div>

    )

  }

}

export default EventManagementLayout