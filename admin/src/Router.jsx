import { Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './Layout'
import Loader from './components/Loading'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const EventManagersList = lazy(() => import('./pages/EventManagersList'))
const Events = lazy(() => import('./pages/Events'))
const StaffsList = lazy(() => import('./pages/StaffsList'))
const UsersList = lazy(() => import('./pages/UsersList'))

const Router = () => {
    return (

        <>

            <Route element={<Layout />} >

                <Route path='/' element={
                    <Suspense fallback={<Loader />} >
                        <Dashboard />
                    </Suspense>
                } />
                <Route path='/eventManagers' element={
                    <Suspense fallback={<Loader />} >
                        <EventManagersList />
                    </Suspense>
                } />
                <Route path='/events' element={
                    <Suspense fallback={<Loader />} >
                        <Events />
                    </Suspense>
                } />
                <Route path='/staffsList' element={
                    <Suspense fallback={<Loader />} >
                        <StaffsList />
                    </Suspense>
                } />
                <Route path='/usersList' element={
                    <Suspense fallback={<Loader />} >
                        <UsersList />
                    </Suspense>
                } />

            </Route>

        </>

    )
}

export default Router