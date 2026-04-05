import React, { useCallback, useContext, useEffect, useState } from 'react'
import SideBar from '../../components/event-management/SideBar'
import { icon } from '../../assets/assets'
import BarChart from '../../components/event-management/BarChart'
import { BackendContex } from '../../context/ConnectBackendContex'
import { toast } from 'react-toastify'
import axios from 'axios'
import EventsByTypePie from '../../components/event-management/PieChart'
import { EventContext } from '../../context/EventContext'
import Loader from '../../components/Loading'
import { useQuery } from '@tanstack/react-query'
import { IndianRupee } from 'lucide-react';

const Home = () => {

  const { backendUrl } = useContext(BackendContex)

  const { clientData, getClientData } = useContext(EventContext)

  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = useCallback(async () => {

    try {

      const res = await axios.get(backendUrl + '/api/product/ownerListProduct')
      if (res.data.success) {
        setItem(res.data.product)
      } else {
        toast.error(res.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    finally {
      setLoading(false)
    }

  }, [backendUrl])

  const getBookingData = useCallback(async () => {

    try {

      const { data } = await axios.get(backendUrl + "/api/booking/allOrderEventManagement")
      if (data.success) {
        return data.bookings
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }, [backendUrl])

  const { data, isLoading, error } = useQuery({
    queryKey: ["Booking data"],
    queryFn: getBookingData
  })

  const totalRevenue = data?.reduce((total, item) => {
    return total + Number(item?.eventManagerAmount || 0)
  }, 0)

  useEffect(() => {
    getData()
    getClientData()
  }, [])

  if (error) return <div>Error:{error.message}</div>

  return (

    <>

      {(loading || isLoading) && <Loader />}

      <div className='flex min-h-screen bg-slate-950 text-white'>

        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className='flex-1 p-4 md:p-6 lg:p-8'>
          <div className='rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950
               to-black shadow-2xl backdrop-blur-sm overflow-hidden'>

            {/* Header Section */}
            <div className='border-b border-white/10 px-6 py-6 md:px-8 md:py-7'>
              <h1 className='text-2xl md:text-3xl font-bold tracking-tight text-white cursor-context-menu'>
                Dashboard
              </h1>
              <p className='mt-2 text-sm md:text-base text-slate-400 cursor-context-menu'>
                Welcome back! Here's what's happening with your events today.
              </p>
            </div>

            <div className='p-6 md:p-8'>

              {/* Cards */}
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>

                {/* Revenue */}
                <div className='group relative overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br
                   from-purple-600 via-fuchsia-600 to-indigo-700 p-6 shadow-lg shadow-purple-900/30
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-800/40'>

                  <div className='absolute top-0 right-0 h-28 w-28 rounded-full bg-white/10 blur-2xl'></div>
                  <div className='relative flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                      <div className='rounded-2xl bg-white/15 px-2 py-1 backdrop-blur-md border border-white/10 shadow-md
                         cursor-context-menu'>
                        <IndianRupee className='object-contain' />
                      </div>
                      <span className='text-xs font-medium px-3 py-1 rounded-full bg-white/15 text-white/90 border
                         border-white/10 cursor-context-menu'>
                        Overview
                      </span>
                    </div>
                    <div>
                      <p className='flex text-4xl font-bold tracking-tight cursor-context-menu'>
                        {totalRevenue}<IndianRupee className='relative top-2' />
                      </p>
                      <h2 className='mt-2 text-base md:text-lg font-semibold text-white/90 cursor-context-menu'>
                        Total Revenue
                      </h2>
                      <p className='mt-1 text-sm text-white/70 cursor-context-menu'>
                        Track total income generated from all event bookings.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Events */}
                <div className='group relative overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-br
                    from-amber-300 via-yellow-400 to-orange-400 p-6 text-slate-950 shadow-lg shadow-yellow-700/20
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-600/30'>

                  <div className='absolute top-0 right-0 h-28 w-28 rounded-full bg-white/20 blur-2xl'></div>
                  <div className='relative flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                      <div className='rounded-2xl bg-white/40 px-2 py-1 backdrop-blur-md border border-white/30 shadow-md'>
                        <img src={icon.contact_us} alt="icon" className='w-10 object-contain' />
                      </div>
                      <span className='text-xs font-medium px-3 py-1 rounded-full bg-black/10 text-slate-900 border
                         border-black/10 cursor-context-menu'>
                        Active
                      </span>
                    </div>
                    <div>
                      <p className='text-4xl font-bold tracking-tight cursor-context-menu'>
                        {item.length}
                      </p>
                      <h2 className='mt-2 text-base md:text-lg font-semibold cursor-context-menu'>
                        Total Events
                      </h2>
                      <p className='mt-1 text-sm text-slate-800/80 cursor-context-menu'>
                        Monitor all listed events across your platform.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clients */}
                <div className='group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br
                 from-cyan-500 via-sky-500 to-blue-600 p-6 shadow-lg shadow-cyan-900/30 transition-all duration-300
                   hover:-translate-y-1 hover:shadow-cyan-800/40'>

                  <div className='absolute top-0 right-0 h-28 w-28 rounded-full bg-white/10 blur-2xl'></div>
                  <div className='relative flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                      <div className='rounded-2xl bg-white/15 px-2 py-1 backdrop-blur-md border border-white/10 shadow-md'>
                        <img src={icon.clients_icon} alt="icon" className='w-10 object-contain' />
                      </div>
                      <span className='text-xs font-medium px-3 py-1 rounded-full bg-white/15 text-white/90 border
                       border-white/10 cursor-context-menu'>
                        Updated
                      </span>
                    </div>
                    <div>
                      <p className='text-4xl font-bold tracking-tight cursor-context-menu'>
                        {clientData.length}
                      </p>
                      <h2 className='mt-2 text-base md:text-lg font-semibold text-white/95 cursor-context-menu'>
                        Total Clients
                      </h2>
                      <p className='mt-1 text-sm text-white/70 cursor-context-menu'>
                        View how many clients are connected with your services.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Chart Section */}
              <div className='rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-xl backdrop-blur-sm'>
                <div className='mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                  <div>
                    <h2 className='text-xl md:text-2xl font-semibold text-white cursor-context-menu'>
                      Revenue Overview
                    </h2>
                    <p className='text-sm text-slate-400 mt-1 cursor-context-menu'>
                      Analyze revenue trends and event distribution in one place.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <BarChart bookings={data || []} />
                  <EventsByTypePie />
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

    </>

  )
}

export default React.memo(Home)