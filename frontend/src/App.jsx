import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/users/Home'
import Navbar from './components/users/Navbar'
import HomePage from './pages/workers/HomePage'
import EventList from './pages/users/EventList'
import About from './pages/users/About'
import ContactUs from './pages/users/ContactUs'
import Login from './pages/users/Login'
import SoftBackdrop from './components/users/background/SoftBackdrop'
import Lenis from './components/users/background/Lenis'
import Footer from './components/users/Footer'

const App = () => {

  const loginpage = useLocation().pathname.startsWith('/login')

  const WorkersPage = useLocation().pathname.startsWith('/workers')

  return (
    <>

      <SoftBackdrop />
      <Lenis />

      {!loginpage && !WorkersPage && <Navbar />}

      <div>
        {/*//..............................Routes for Users.........................................................*/}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/eventList' element={<EventList />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
        </Routes>

        {!loginpage && !WorkersPage && <Footer />}

        {/*//....................................................................................................................//*/}

        {/*//..............................Routes for Workers.........................................................*/}

        <div>
          <Routes>
            <Route path='/workers/home' element={<HomePage />} />
          </Routes>
        </div>

        {/*//....................................................................................................................//*/}
      </div>
    </>
  )
}

export default App