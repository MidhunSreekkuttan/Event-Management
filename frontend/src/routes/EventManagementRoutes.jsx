import { EventManagementContext } from '../context/EventManagementContext'
import { lazy, Suspense, useContext } from 'react'
import Loader from '../components/Loading'
import { Navigate, Outlet, Route } from 'react-router-dom'
import EventManagementLayout from '../layouts/EventManagementLayout'
import BookingDetails from '../pages/event-management/BookingDetails'
import ResetPassword from '../pages/event-management/login/ResetPassword'

const Login = lazy(() => import('../pages/event-management/login/Login'))
const Otp = lazy(() => import('../pages/event-management/login/Otp'))
const Home = lazy(() => import('../pages/event-management/Home'))
const Add = lazy(() => import('../pages/event-management/Add'))
const Booking = lazy(() => import('../pages/event-management/Booking'))
const Events = lazy(() => import('../pages/event-management/Events'))
const StayingPage = lazy(() => import('../pages/event-management/StayingPage'))
const Registeration = lazy(() => import('../pages/event-management/Registeration'))
const Waiting = lazy(() => import('../pages/event-management/Waiting'))
const Approval = lazy(() => import('../pages/event-management/Approval'))
const NeedWorker = lazy(() => import('../pages/event-management/NeedWorker'))

const EventManagementRoutes = () => {

  const { userData, authLoading } = useContext(EventManagementContext)

  //adding protected route
  const protectedRoute = () => {

    if (authLoading) {

      return <Loader />

    } else {

      return userData?.isAdminVerified === 'pending'.toLowerCase() ? <Navigate to='/event-management/staying' /> : <Outlet />

    }

  }

  return (

    <>

      <Route path='/event-management/login' element={
        <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      } />
      <Route path='/event-management/otp' element={
        <Suspense fallback={<Loader />}>
          <Otp />
        </Suspense>
      } />
      <Route path='/event-management/resetPassword' element={
        <Suspense fallback={<Loader />}>
          <ResetPassword />
        </Suspense>
      } />

      <Route path='/event-management' element={<EventManagementLayout />}>

        <Route path='staying' element={
          <Suspense fallback={<Loader />}>
            <StayingPage />
          </Suspense>
        } />
        <Route path='registeration' element={
          <Suspense fallback={<Loader />}>
            <Registeration />
          </Suspense>
        } />
        <Route path='waiting' element={
          <Suspense fallback={<Loader />}>
            <Waiting />
          </Suspense>
        } />
        <Route path='approval' element={
          <Suspense fallback={<Loader />}>
            <Approval />
          </Suspense>
        } />

        <Route element={protectedRoute()}>

          <Route path='home' element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          } />
          <Route path='add' element={
            <Suspense fallback={<Loader />}>
              <Add />
            </Suspense>
          } />
          <Route path='add/:id' element={
            <Suspense fallback={<Loader />}>
              <Add />
            </Suspense>
          } />
          <Route path='booking' element={
            <Suspense fallback={<Loader />}>
              <Booking />
            </Suspense>
          } />
          <Route path='bookingDetails/:bookingid' element={
            <Suspense fallback={<Loader />}>
              <BookingDetails />
            </Suspense>
          } />

          <Route path='needWorker/:workerId' element={
            <Suspense fallback={<Loader />}>
              <NeedWorker />
            </Suspense>
          } />

          <Route path='events' element={
            <Suspense fallback={<Loader />}>
              <Events />
            </Suspense>
          } />

        </Route>

      </Route>

    </>

  )
}

export default EventManagementRoutes