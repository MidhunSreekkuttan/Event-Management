import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/event-management/Navbar';

const EventManagementLayout = () => {

  const { pathname } = useLocation()

  const hideNavbar =
    pathname === "/event-management/login" ||
    pathname === "/event-management/otp";

  return (
    <>

      {!hideNavbar && <Navbar />}
      <Outlet />

    </>
  )
}

export default EventManagementLayout