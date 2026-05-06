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
    pathname.startsWith('/adBooking/') ||
    pathname.startsWith("/product/") ||
    pathname === '/personal' ||
    pathname === '/cultural' ||
    pathname === '/coorprates' ||
    pathname === '/entertainments' ||
    pathname === '/educational' ||
    pathname === '/bookigOrEnquery' ||
    pathname === '/enjoyTheEvent' ||
    pathname === "/TermsandConditions" ||
    pathname === "/policyAndPrivacy" ||
    pathname === "/BookingORenqury" ||
    pathname === "/resetPassword"

  const hideFooter =
    pathname === '/login' ||
    pathname === "/about" ||
    pathname.startsWith('/adBooking/') ||
    pathname === "/booking" ||
    pathname === "/response" ||
    pathname.startsWith("/product/") ||
    pathname === '/otp' ||
    pathname.startsWith('/response-Details/') ||
    pathname.startsWith("/receipt") ||
    pathname === '/personal' ||
    pathname === '/cultural' ||
    pathname === '/coorprates' ||
    pathname === '/entertainments' ||
    pathname === '/educational' ||
    pathname === '/bookigOrEnquery' ||
    pathname === '/enjoyTheEvent' ||
    pathname === "/TermsandConditions" ||
    pathname === "/policyAndPrivacy" ||
    pathname === "/BookingORenqury" ||
    pathname === "/resetPassword"

  return (
    <>

      {!hideNavbar && <Navbar />}
      <Outlet />
      {!hideFooter && <Footer whiteBg={whiteBgRoute.includes(pathname)} />}

    </>
  )
}

export default UserLayout