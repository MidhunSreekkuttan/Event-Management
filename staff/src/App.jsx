import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Enquiries from './pages/Enquiries'
import Events from './pages/Events'
import Clients from './pages/Clients'
import Report from './pages/Report'
import Settings from './pages/Settings'

const App = () => {
  return (
    <div className='min-h-screen'>

      <>

        <Navbar />

        <div className='flex gap-5 w-full'>

          <SideBar />

          <Routes>

            <Route path='/staff/dashBoard' element={<DashBoard />} />
            <Route path='/staff/enquiries' element={<Enquiries />} />
            <Route path='/staff/events' element={<Events />} />
            <Route path='/staff/clients' element={<Clients />} />
            <Route path='/staff/report' element={<Report />} />
            <Route path='/staff/settings' element={<Settings />} />

          </Routes>

        </div>

      </>
    </div>
  )
}

export default App