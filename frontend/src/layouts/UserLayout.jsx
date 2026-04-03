import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/users/Navbar';
import Footer from '../components/users/Footer';

const UserLayout = () => {

  const { pathname } = useLocation()

  const whiteBgRoute = ["/eventList", "/about", "/contactUs"];

  const hideNavbar =
    pathname === '/login' ||
    pathname === '/otp' ||
    pathname.startsWith("/receipt") ||
    pathname.startsWith('/adBooking/')

  const hideFooter =
    pathname === '/login' ||
    pathname === "/about" ||
    pathname.startsWith('/adBooking/') ||
    pathname === "/booking" ||
    pathname === "/response" ||
    pathname.startsWith("/product/") ||
    pathname === '/otp' ||
    pathname.startsWith('/response-Details/') ||
    pathname.startsWith("/receipt")

  return (
    <>

      {!hideNavbar && <Navbar />}
      <Outlet />
      {!hideFooter && <Footer whiteBg={whiteBgRoute.includes(pathname)} />}

    </>
  )
}

export default UserLayout