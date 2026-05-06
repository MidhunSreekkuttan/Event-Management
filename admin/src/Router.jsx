import { Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './Layout'
import Loader from './components/Loading'
import WorkersDetailsPage from './pages/WorkersDetailsPage'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const EventManagersList = lazy(() => import('./pages/EventManagersList'))
const WorkersList = lazy(() => import('./pages/WorkersList'))
const Events = lazy(() => import('./pages/Events'))
const StaffsList = lazy(() => import('./pages/StaffsList'))
const UsersList = lazy(() => import('./pages/UsersList'))
const AppointStaff = lazy(() => import('./pages/AppointStaff'))
const RegistrationData = lazy(() => import('./pages/RegistrationData'))
const RegistrationDataDetails = lazy(() => import('./pages/RegistrationDataDetails'))
const EventDetails = lazy(() => import('./pages/EventDetails'))

const Router = () => {
    return (

        <>

            <Route element={
                <Suspense fallback={<Loader />}>
                    <Layout />
                </Suspense>
            }>

                <Route path='/' element={<Dashboard />} />
                <Route path='/eventManagers' element={<EventManagersList />} />
                <Route path='/workersList' element={<WorkersList />} />
                <Route path='/events' element={<Events />} />
                <Route path='/staffsList' element={<StaffsList />} />
                <Route path='/usersList' element={<UsersList />} />
                <Route path='/appointStaff' element={<AppointStaff />} />
                <Route path='/RegistrationData' element={<RegistrationData />} />
                <Route path='/RegistrationData/:type/:id' element={<RegistrationDataDetails />} />
                <Route path='/eventsDetail/:eventId' element={<EventDetails />} />
                <Route path='/workersDetails/:workersId' element={<WorkersDetailsPage />} />

            </Route>

        </>

    )
}

export default Router