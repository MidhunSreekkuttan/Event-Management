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
const Receipt = lazy(() => import('../pages/users/Receipt'))

const UserRoutes = () => {
  return (

    <>

      <Route element={
        <Suspense fallback={<Loader />}>
          <UserLayout />
        </Suspense>
      }>

        <Route path='/' element={<Home />} />
        <Route path='/eventList' element={<EventList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/adBooking/:bookingId" element={<AddBookingPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/response" element={<Response />} />
        <Route path="/response-Details/:enquiryId" element={<ResponseDetails />} />
        <Route path='/receipt/:productId' element={<Receipt />} />

      </Route>

    </>

  )
}

export default UserRoutes