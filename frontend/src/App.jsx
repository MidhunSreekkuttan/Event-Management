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

  const whiteBgRoute = ['/eventList', '/about', '/contactUs']

  return (
    <>

      <ScrollToTop />
      <SoftBackdrop />
      <Lenis />

      {!loginpage && !WorkersPage && <Navbar />}

      <div>
        {/*//..............................Routes for Users.........................................................*/}
        {!WorkersPage && (

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/eventList' element={<EventList />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/login' element={<Login />} />
          </Routes>

        )}

        {!loginpage && !WorkersPage && <Footer whiteBg={whiteBgRoute.includes(pathname)} />}

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