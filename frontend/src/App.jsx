import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/users/Home'
import Navbar from './components/users/Navbar'
import HomePage from './pages/workers/HomePage'
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

{/*................................................Importing Event Management Thing........................................*/ }

import EventMain from './pages/event-management/Main'
import EventHome from './pages/event-management/Home'
import Add from './pages/event-management/Add'
import Booking from './pages/event-management/Booking'
import Events from './pages/event-management/Events'
import Clients from './pages/event-management/Clients'
import Reports from './pages/event-management/Reports'
import Vendors from './pages/event-management/Vendors'

{/*.........................................................................................................................*/ }

const App = () => {

  const location = useLocation()
  const pathname = location.pathname

  const loginpage = pathname === '/login' || pathname === '/otp'

  const WorkersPage = pathname.startsWith('/workers')

  const ProductPage = pathname.startsWith('/product')

  const EventManagementPage = pathname.startsWith('/event-management')

  const whiteBgRoute = ['/eventList', '/about', '/contactUs']

  const hideNavbar = loginpage || WorkersPage || EventManagementPage
  const hideFooter = loginpage || WorkersPage || ProductPage || EventManagementPage

  return (
    <>

      <ScrollToTop />
      <SoftBackdrop />
      <Lenis />
      <ToastContainer />

      {/*User Navbar*/}

      {!hideNavbar && <Navbar />}

      {/*Event Management Navbar*/}

      {EventManagementPage && <EventMain />}

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

        <Route path='/workers/home' element={<HomePage />} />
        <Route path='/workers/index' element={<Index />} />
        <Route path='/workers/dashboard' element={<WorkerDashboard />} />
        <Route path='/workers/registration' element={<WorkerRegistration />} />
        <Route path='/workers/login' element={<LoginPage />} />
        <Route path='/workers/signup' element={<Signup />} />

        {/*................................Event Management Routes....................................................*/}

        <Route path='/event-management/home' element={<EventHome />} />
        <Route path='/event-management/add' element={<Add />} />
        <Route path='/event-management/booking' element={<Booking />} />
        <Route path='/event-management/clients' element={<Clients />} />
        <Route path='/event-management/events' element={<Events />} />
        <Route path='/event-management/reports' element={<Reports />} />
        <Route path='/event-management/vendors' element={< Vendors />} />

        {/*............................... 404 Page not Found Route................................................. */}

        <Route path='*' element={<NotFound />} />

      </Routes>

      {!hideFooter && <Footer whiteBg={whiteBgRoute.includes(pathname)} />}

    </>
  )
}

export default App