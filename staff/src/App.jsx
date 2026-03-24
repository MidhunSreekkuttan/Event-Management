import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Events from './pages/Events'
import Clients from './pages/Clients'
import Report from './pages/Report'
import Settings from './pages/Settings'
import EventDetailPage from './pages/EventDetailPage';
import EventsDetailPage from './pages/EventsDetailPage';
import ClientDetails from './pages/ClientDetails';
import Login from './pages/Login';
import { useContext } from 'react';
import { StaffContext } from './context/staffContext';
import Loader from './components/LoadingPage';

const App = () => {

  const { isLoggedIn, loading } = useContext(StaffContext)

  const { pathname } = useLocation()

  const hider = pathname === '/login'

  const protectedROute = () => {

    if (loading) {

      return <Loader />

    } else {

      return isLoggedIn ? <Outlet /> : <Navigate to='/login' />

    }

  }

  return (
    <div className='min-h-screen bg-blue-100'>

      <>

        {!hider && <Navbar />}

        <div className='flex w-full'>

          {!hider && <SideBar />}
          <ToastContainer />

          <Routes>

            <Route element={protectedROute()}>
              <Route path='/' element={<DashBoard />} />
              <Route path='/enquiry-details/:enquiryId' element={<EventDetailPage />} />
              <Route path='/events' element={<Events />} />
              <Route path='/clients' element={<Clients />} />
              <Route path='/clientDetails/:clientId' element={<ClientDetails />} />
              <Route path='/report' element={<Report />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/eventDetails/:eventId' element={<EventsDetailPage />} />
              <Route path='/login' element={<Login />} />
            </Route>

          </Routes>

        </div>

      </>
    </div>
  )
}

export default App