import { Route } from 'react-router-dom'
import WorkersLayout from '../layouts/WorkersLayout'
import Index from '../pages/workers/Index'
import WorkerDashboard from '../pages/workers/WorkersDashboard'
import WorkerRegistration from '../pages/workers/WorkersRegistration'
import Login from '../pages/workers/WorkerLogin'
import Signup from '../pages/workers/WorkerSignUp'
import Otp from '../pages/workers/Otp'

const WorkerRoutes = () => {
  return (
    <>

      <Route path='/workers' element={<WorkersLayout />}>

        <Route path='index' element={<Index />} />
        <Route path='dashboard' element={<WorkerDashboard />} />
        <Route path='registration' element={<WorkerRegistration />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='otp' element={<Otp />} />

      </Route>

    </>
  )
}

export default WorkerRoutes