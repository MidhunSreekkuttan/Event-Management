import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import Loader from '../components/Loading'

const Home = lazy(() => import('../pages/users/Home'))
const EventList = lazy(() => import('../pages/users/EventList'))
const About = lazy(() => import('../pages/users/About'))
const ContactUs = lazy(() => import('../pages/users/ContactUs'))
const Product = lazy(() => import('../pages/users/Product'))
const Login = lazy(() => import('../pages/users/login/Login'))
const Otp = lazy(() => import('../pages/users/login/Otp'))
const AddBookingPage = lazy(() => import('../pages/users/AddBookingPage'))
const BookingPage = lazy(() => import('../pages/users/BookingPage'))
const Response = lazy(() => import('../pages/users/Response'))
const ResponseDetails = lazy(() => import('../pages/users/ResponseDetails'))

const UserRoutes = () => {
  return (

    <>

      <Route element={<UserLayout />}>

        <Route path='/' element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        } />

        <Route path='/eventList' element={
          <Suspense fallback={<Loader />}>
            <EventList />
          </Suspense>
        } />

        <Route path="/about" element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        } />

        <Route path="/contactUs" element={
          <Suspense fallback={<Loader />}>
            <ContactUs />
          </Suspense>
        } />

        <Route path="/product/:productId" element={
          <Suspense fallback={<Loader />}>
            <Product />
          </Suspense>
        } />

        <Route path="/login" element={
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        } />

        <Route path="/otp" element={
          <Suspense fallback={<Loader />}>
            <Otp />
          </Suspense>
        } />

        <Route path="/adBooking/:bookingId" element={
          <Suspense fallback={<Loader />}>
            <AddBookingPage />
          </Suspense>
        } />

        <Route path="/booking" element={
          <Suspense fallback={<Loader />}>
            <BookingPage />
          </Suspense>
        } />

        <Route path="/response" element={
          <Suspense fallback={<Loader />}>
            <Response />
          </Suspense>
        } />

        <Route path="/response-Details/:enquiryId" element={
          <Suspense fallback={<Loader />}>
            <ResponseDetails />
          </Suspense>
        } />

      </Route>

    </>

  )
}

export default UserRoutes