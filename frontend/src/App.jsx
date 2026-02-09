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
import { ToastContainer, toast } from 'react-toastify';

{/*...............................................Importing Workers things................................................*/ }
import Index from './pages/workers/Index'
import WorkerDashboard from './pages/workers/WorkersDashboard'
import WorkerRegistration from './pages/workers/WorkersRegistration'
import LoginPage from './pages/workers/WorkerLogin'
import Signup from './pages/workers/WorkerSignUp'
{/*.......................................................................................................................*/ }

const App = () => {

  const location = useLocation()
  const pathname = location.pathname

  const loginpage = pathname.startsWith('/login')

  const WorkersPage = pathname.startsWith('/workers')

  const ProductPage = pathname.startsWith('/product')

  const whiteBgRoute = ['/eventList', '/about', '/contactUs']

  {/*404 Page not found*/ }

  const userRoutes = [
    '/',
    '/eventList',
    '/about',
    '/contactUs',
    '/login'
  ];

  const isUserRoute =
    userRoutes.includes(pathname) ||
    pathname.startsWith('/product/');

  const isNotFoundPage = !isUserRoute && !WorkersPage;

  return (
    <>

      <ScrollToTop />
      <SoftBackdrop />
      <Lenis />
      <ToastContainer />

      {!loginpage && !WorkersPage && !isNotFoundPage && <Navbar />}

      <div>
        {/*//..............................Routes for Users.........................................................*/}
        {!WorkersPage && (

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/eventList' element={<EventList />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        )}

        {!loginpage && !WorkersPage && !ProductPage && !isNotFoundPage && <Footer

          whiteBg={

            whiteBgRoute.includes(pathname)

          }
        />}

        {/*//....................................................................................................................//*/}

        {/*//..............................Routes for Workers.........................................................*/}

        <div>
          {WorkersPage && (

            <Routes>
              <Route path='/workers/home' element={<HomePage />} />
              <Route path='/workers/index' element={<Index />} />
              <Route path='/workers/dashboard' element={<WorkerDashboard />} />
              <Route path='/workers/registration' element={<WorkerRegistration />} />
              <Route path='/workers/login' element={<LoginPage />} />
              <Route path='/workers/signup' element={<Signup />} />
            </Routes>

          )}

        </div>

        {/*//....................................................................................................................//*/}
      </div>
    </>
  )
}

export default App