import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import WorkersLayout from '../layouts/WorkersLayout'
import Loader from '../components/Loading'
import WorkersHome from '../pages/workers/WorkersHome'
import Waiting from '../pages/workers/WorkersWaitingPage'
import ResetPassword from '../pages/workers/resetPassword'

const Index = lazy(() => import('../pages/workers/Index'))
const WorkerDashboard = lazy(() => import('../pages/workers/WorkersDashboard'))
const WorkerRegistration = lazy(() => import('../pages/workers/WorkersRegistration'))
const Login = lazy(() => import('../pages/workers/WorkerLogin'))
const Signup = lazy(() => import('../pages/workers/WorkerSignUp'))
const Otp = lazy(() => import('../pages/workers/Otp'))

const WorkerRoutes = () => {
  return (
    <>

      <Route path='/workers/signup' element={
        <Suspense fallback={<Loader />}>
          <Signup />
        </Suspense>
      } />

      <Route path='/workers/login' element={
        <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      } />

      <Route path='/workers/otp' element={
        <Suspense fallback={<Loader />}>
          <Otp />
        </Suspense>
      } />

      <Route path='/workers/resetPassword' element={
        <Suspense fallback={<Loader />}>
          <ResetPassword />
        </Suspense>
      } />

      <Route path='/workers/index' element={
        <Suspense fallback={<Loader />}>
          <Index />
        </Suspense>
      } />

      <Route path='/workers/registration' element={
        <Suspense fallback={<Loader />}>
          <WorkerRegistration />
        </Suspense>
      } />

      <Route path='/workers/waiting' element={
        <Suspense fallback={<Loader />}>
          <Waiting />
        </Suspense>
      } />

      <Route path='/workers' element={<WorkersLayout />}>

        <Route path='home' element={
          <Suspense fallback={<Loader />}>
            <WorkersHome />
          </Suspense>
        } />
        <Route path='dashboard' element={
          <Suspense fallback={<Loader />}>
            <WorkerDashboard />
          </Suspense>
        } />

      </Route>

    </>
  )
}

export default WorkerRoutes