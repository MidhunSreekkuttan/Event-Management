import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Events from './pages/Events'
import Clients from './pages/Clients'
import Report from './pages/Report'
import Settings from './pages/Settings'
import EventDetailPage from './pages/EventDetailPage';
import EventsDetailPage from './pages/EventsDetailPage';
import ClientDetails from './pages/ClientDetails';

const App = () => {
  return (
    <div className='min-h-screen bg-blue-100'>

      <>

        <Navbar />

        <div className='flex w-full'>

          <SideBar />
          <ToastContainer />

          <Routes>

            <Route path='/' element={<DashBoard />} />
            <Route path='/enquiry-details/:enquiryId' element={<EventDetailPage />} />
            <Route path='/events' element={<Events />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/clientDetails/:clientId' element={<ClientDetails />} />
            <Route path='/report' element={<Report />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/eventDetails/:eventId' element={<EventsDetailPage />} />

          </Routes>

        </div>

      </>
    </div>
  )
}

export default App