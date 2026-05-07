import { useContext, useEffect, useMemo, useState } from 'react'
import SideBar from '../../components/event-management/SideBar'
import { EventContext } from '../../context/EventContext'
import { icon } from '../../assets/assets'
import ClientData from '../../components/event-management/ClientData'
import Loader from '../../components/Loading'

const Booking = () => {

  const { clientData, getClientData, loading } = useContext(EventContext)

  //filter the booking session
  const [filter, setFilter] = useState("all")

  const filteredClients = useMemo(() => {

    return Array.isArray(clientData) ? clientData.filter((item) => {
      if (filter === 'all') return true
      return item.status?.toLowerCase() === filter.toLowerCase()
    }) : []

  }, [clientData, filter])
  //..........................

  useEffect(() => {
    getClientData()
  }, [])

  return (

    <>

      {loading && <Loader />}

      <div className='flex min-h-screen bg-slate-950 text-white'>
        <SideBar />

        <div className='flex-1 p-4 md:p-6 lg:p-8'>
          <div className='rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black
           shadow-2xl overflow-hidden'>

            {/* Header */}
            <div className='border-b border-white/10 px-6 py-6 md:px-8 md:py-7'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-white'>
                  Bookings
                </h1>
                <p className='text-sm md:text-base text-slate-400'>
                  Manage and monitor all registered users
                </p>
              </div>
            </div>

            <div className='p-6 md:p-8'>

              {/* Stats Cards */}
              <div className='grid grid-cols-4 gap-6 mb-8'>
                <div className='group relative overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br
                 from-purple-600 via-fuchsia-600 to-indigo-700 p-6 shadow-lg shadow-purple-900/30 transition-all
                   duration-300 hover:-translate-y-1 hover:shadow-purple-800/40'>

                  <div className='absolute top-0 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl'></div>
                  <div className='relative flex items-center justify-between'>
                    <div className='flex flex-col gap-2'>
                      <p className='text-sm font-medium text-white/70'>Total Bookings</p>
                      <h1 className='text-4xl font-bold tracking-tight'>{clientData.length}</h1>
                      <p className='text-sm text-white/70'>All customer booking requests</p>
                    </div>
                    <div className='rounded-2xl bg-white/15 p-4 border border-white/10 backdrop-blur-sm'>
                      <img className='w-8 h-8 object-contain' src={icon.clients_icon} alt="" />
                    </div>
                  </div>
                </div>

                <div className='group relative overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-br
                 from-amber-400 via-yellow-500 to-orange-500 p-6 shadow-lg shadow-yellow-900/30 transition-all
                   duration-300 hover:-translate-y-1 hover:shadow-yellow-700/40'>

                  <div className='absolute top-0 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl'></div>
                  <div className='relative flex items-center justify-between text-slate-950'>
                    <div className='flex flex-col gap-2'>
                      <p className='text-sm font-medium text-slate-900/70'>Pending Events</p>
                      <h1 className='text-4xl font-bold tracking-tight'>
                        {Array.isArray(clientData) ?
                          clientData.filter(item => item.status?.toLowerCase() === 'pending').length : 0
                        }
                      </h1>
                      <p className='text-sm text-slate-900/70'>Pending bookings requests</p>
                    </div>
                    <div className='rounded-2xl bg-white/40 p-4 border border-white/30 backdrop-blur-sm'>
                      <img className='w-8 h-8 object-contain' src={icon.events_icon} alt="" />
                    </div>
                  </div>
                </div>

                <div className='group relative overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-br
                 from-green-300 via-green-500 to-green-800 p-6 shadow-lg shadow-yellow-900/30 transition-all
                   duration-300 hover:-translate-y-1 hover:shadow-yellow-700/40'>

                  <div className='absolute top-0 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl'></div>
                  <div className='relative flex items-center justify-between text-slate-950'>
                    <div className='flex flex-col gap-2'>
                      <p className='text-sm font-medium text-slate-900/70'>Approved Events</p>
                      <h1 className='text-4xl font-bold tracking-tight'>
                        {Array.isArray(clientData) ?
                          clientData.filter(item => item.status?.toLowerCase() === 'approved').length : 0
                        }
                      </h1>
                      <p className='text-sm text-slate-900/70'>Successfully approved bookings</p>
                    </div>
                    <div className='rounded-2xl bg-white/40 p-4 border border-white/30 backdrop-blur-sm'>
                      <img className='w-8 h-8 object-contain' src={icon.events_icon} alt="" />
                    </div>
                  </div>
                </div>

                <div className='group relative overflow-hidden rounded-3xl border border-rose-400/20 bg-gradient-to-br
                 from-rose-600 via-red-600 to-pink-700 p-6 shadow-lg shadow-rose-900/30 transition-all duration-300
                   hover:-translate-y-1 hover:shadow-rose-800/40'>

                  <div className='absolute top-0 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl'></div>
                  <div className='relative flex items-center justify-between'>
                    <div className='flex flex-col gap-2'>
                      <p className='text-sm font-medium text-white/70'>Rejected Events</p>
                      <h1 className='text-4xl font-bold tracking-tight'>
                        {Array.isArray(clientData) ?
                          clientData.filter(item => item.status?.toLowerCase() === 'rejected').length : 0
                        }
                      </h1>
                      <p className='text-sm text-white/70'>Declined booking requests</p>
                    </div>
                    <div className='rounded-2xl bg-white/40 p-4 border border-white/10 backdrop-blur-sm'>
                      <img className='w-8 h-8 object-contain' src={icon.delete_icon} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/*filter UI buttons*/}
              <div className="flex gap-3 mb-6">

                <button
                  onClick={() => setFilter("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition 
                    ${filter === "all"
                      ? "bg-purple-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
                >
                  All
                </button>

                <button
                  onClick={() => setFilter("pending")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition 
                    ${filter === "pending"
                      ? "bg-yellow-500 text-black"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
                >
                  Pending
                </button>

                <button
                  onClick={() => setFilter("approved")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition 
                    ${filter === "approved"
                      ? "bg-green-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
                >
                  Approved
                </button>

                <button
                  onClick={() => setFilter("rejected")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition 
                    ${filter === "rejected"
                      ? "bg-red-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
                >
                  Rejected
                </button>

              </div>

              {/* Table Section */}
              <div className='rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm overflow-hidden'>
                <div className='border-b border-white/10 px-6 py-5'>
                  <h2 className='text-2xl font-bold text-white'>Booking Requests</h2>
                  <p className='mt-1 text-sm text-slate-400'>
                    Review customer bookings, event details, and actions.
                  </p>
                </div>

                {/* Table Header */}
                <div className='hidden md:grid grid-cols-[0.7fr_1fr_1.2fr_1fr_1fr_1fr_1fr] 
                  gap-4 px-6 py-4 text-sm font-semibold
                  text-slate-300 border-b border-white/10 bg-white/[0.03]'>

                  <b className='text-center'>Image</b>
                  <b className='text-center relative right-9'>Name</b>
                  <b className='text-center'>Event Name</b>
                  <b className='text-center'>Place</b>
                  <b className='text-center relative right-5'>Status</b>
                  <b className='text-center relative right-5'>Action</b>
                  <b className='text-center relative right-5'>Need Workers</b>

                </div>

                {/* Table Body */}
                <div className='p-4 md:p-6'>
                  <div className='flex flex-col gap-4'>
                    {Array.isArray(filteredClients) &&
                      filteredClients.map((data, index) =>
                        data.items?.map((item, Itemindex) => (
                          <ClientData
                            key={`${index}-${Itemindex}`}
                            id={data._id}
                            image={item.image}
                            name={data?.address?.name}
                            event_name={item.event_name}
                            place={data.address?.place}
                            status={data.status}
                          />
                        ))
                      )
                    }
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Booking