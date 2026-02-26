import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/users/Home'
import Navbar from './components/users/Navbar'
import EventList from './pages/users/EventList'
import About from './pages/users/About'
import ContactUs from './pages/users/ContactUs'
import Login from './pages/users/login/Login'
import SoftBackdrop from './components/users/background/SoftBackdrop'
import Lenis from './components/users/background/Lenis'
import Footer from './components/users/Footer'
import ScrollToTop from './components/users/background/ScrollToTop'
import NotFound from './pages/users/NotFound'
import Product from './pages/users/Product'
import { ToastContainer } from 'react-toastify';
import Otp from './pages/users/login/Otp'

{/*...............................................Importing Workers things................................................*/ }
import Index from './pages/workers/Index'
import WorkerDashboard from './pages/workers/WorkersDashboard'
import WorkerRegistration from './pages/workers/WorkersRegistration'
import LoginPage from './pages/workers/WorkerLogin'
import Signup from './pages/workers/WorkerSignUp'
import WorkersOtp from './pages/workers/Otp'

{/*................................................Importing Event Management Thing........................................*/ }

import EventHome from './pages/event-management/Home'
import Add from './pages/event-management/Add'
import Booking from './pages/event-management/Booking'
import Events from './pages/event-management/Events'
import Clients from './pages/event-management/Clients'
import Reports from './pages/event-management/Reports'
import Vendors from './pages/event-management/Vendors'
import EventLogin from './pages/event-management/login/Login'
import EventManagementProtected from './components/event-management/EventProtected'
import EventOtp from './pages/event-management/login/Otp'
import EventNavbar from './components/event-management/Navbar'
import SideBar from './components/event-management/SideBar'
import { useEffect, useState } from 'react'

{/*.........................................................................................................................*/ }

const App = () => {

  const location = useLocation()
  const pathname = location.pathname

  const navigate = useNavigate()

  const loginpage = pathname === '/login' || pathname === '/otp'

  const WorkersPage = pathname.startsWith('/workers')

  const ProductPage = pathname.startsWith('/product')

  const EventManagementPage = pathname.startsWith('/event-management')

  const whiteBgRoute = ['/eventList', '/about', '/contactUs']

  const [state, setState] = useState(true);

  // ✅ never navigate inside render
  useEffect(() => {
    if (pathname.startsWith('/event-management')) {

      if (state === false) {
        navigate("/event-management/add", { replace: true });
      }
    }

  }, [state, navigate]);

  // hide Event management session
  const userU1 = pathname.endsWith('/')
  const userU2 = pathname.endsWith('/eventList')
  const userU3 = pathname.endsWith('/about')
  const userU4 = pathname.endsWith('/contactUs')
  const userU5 = pathname.endsWith('/product/:productId')
  const hideEventOtp = pathname.endsWith('/event-management/otp')
  //....


  const hideEventMangement = loginpage || WorkersPage || ProductPage || userU1 || userU2 || userU3 || userU4 || userU5 || hideEventOtp
  const hideNavbar = loginpage || WorkersPage || EventManagementPage
  const hideFooter = loginpage || WorkersPage || ProductPage || EventManagementPage

  const hideEventlogin = pathname.startsWith('/event-management/login')

  const [token, setToken] = useState(localStorage.getItem('EventManagementLogin') ? localStorage.getItem('EventManagementLogin') : '')

  useEffect(() => {
    localStorage.setItem('EventManagementLogin', token)
  }, [token])

  return (
    <>

      <ScrollToTop />
      <SoftBackdrop />
      <Lenis />
      <ToastContainer />

      {/*User Navbar*/}

      {!hideNavbar && <Navbar />}

      {/*Event Management Navbar*/}

      {!hideEventMangement && !hideEventlogin && hideNavbar && <EventNavbar setToken={setToken} />}

      <Routes>
        {/*//..............................Routes for Users.........................................................*/}

        <Route path='/' element={<Home />} />
        <Route path='/eventList' element={<EventList />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/otp' element={<Otp />} />

        {/*//..............................Routes for Workers.........................................................*/}

        <Route path='/workers/index' element={<Index />} />
        <Route path='/workers/dashboard' element={<WorkerDashboard />} />
        <Route path='/workers/registration' element={<WorkerRegistration />} />
        <Route path='/workers/login' element={<LoginPage />} />
        <Route path='/workers/signup' element={<Signup />} />
        <Route path='/workers/otp' element={<WorkersOtp />} />

        {/*................................Event Management Routes....................................................*/}

        <Route path='/event-management/login' element={<EventLogin />} />

        <Route element={<EventManagementProtected />}>
          <Route path='/event-management/home' element={<EventHome />} />
          <Route path='/event-management/add' element={<Add token={token} />} />
          <Route path='/event-management/booking' element={<Booking token={token} />} />
          <Route path='/event-management/clients' element={<Clients token={token} />} />
          <Route path='/event-management/events' element={<Events token={token} />} />
          <Route path='/event-management/reports' element={<Reports token={token} />} />
          <Route path='/event-management/vendors' element={< Vendors token={token} />} />
          <Route path='/event-management/otp' element={<EventOtp />} />
        </Route>

        {/*............................... 404 Page not Found Route................................................. */}

        <Route path='*' element={<NotFound />} />

      </Routes>

      {!hideFooter && <Footer whiteBg={whiteBgRoute.includes(pathname)} />}

    </>
  )
}

export default App