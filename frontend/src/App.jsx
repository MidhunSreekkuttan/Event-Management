import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/users/Home'
import Navbar from './components/users/Navbar'
import HomePage from './pages/workers/HomePage'
import EventList from './pages/users/EventList'
import About from './pages/users/About'
import ContactUs from './pages/users/ContactUs'
import Login from './pages/users/Login'

{/*...............................................Importing Workers things................................................*/ }
import Index from './pages/workers/Index'
import WorkerDashboard from './pages/workers/WorkersDashboard'
import WorkerRegistration from './pages/workers/WorkersRegistration'
{/*.......................................................................................................................*/ }

const App = () => {

  const loginpage = useLocation().pathname.startsWith('/login')

  const WorkersPage = useLocation().pathname.startsWith('/workers')

  return (
    <>
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

        {/*//....................................................................................................................//*/}

        {/*//..............................Routes for Workers.........................................................*/}

        <div>
          <Routes>
            <Route path='/workers/home' element={<HomePage />} />
            <Route path='/workers/index' element={<Index />} />
            <Route path='/workers/dashboard' element={<WorkerDashboard />} />
            <Route path='/workers/registration' element={<WorkerRegistration />} />
          </Routes>
        </div>

        {/*//....................................................................................................................//*/}
      </div>
    </>
  )
}

export default App