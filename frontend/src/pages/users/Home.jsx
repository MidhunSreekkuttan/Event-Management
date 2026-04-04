import { lazy, Suspense } from 'react'
import Loader from '../../components/Loading'

const Hero = lazy(() => import('../../components/users/hero/Hero'))
const EventCategory = lazy(() => import('../../components/users/EventCategory'))
const Hometab = lazy(() => import('../../components/users/Hometab'))

const Home = () => {
  return (

    <>

      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <EventCategory />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Hometab />
      </Suspense>

    </>

  )
}

export default Home