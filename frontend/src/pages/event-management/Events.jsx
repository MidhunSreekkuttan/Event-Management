import { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/event-management/SideBar'
import { BackendContex } from '../../context/ConnectBackendContex'
import { toast } from 'react-toastify'
import axios from 'axios'
import ProductList from '../../components/event-management/ProductList'
import { NavLink, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loading'

const Events = () => {

  const { backendUrl } = useContext(BackendContex)
  const navigate = useNavigate()

  const [itemList, setItemList] = useState([])
  const [loading, setLoading] = useState(true)
  const handleEdit = (id) => {
    navigate(`/event-management/add/${id}`)
  }

  const removeItem = async (id) => {

    try {

      const response = await axios.post(backendUrl + '/api/product/removeProduct', { id })

      if (response.data.message) {
        toast.success(response.data.message)
        await fetchData()
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    finally {
      setLoading(false)
    }
  }

  const fetchData = async () => {

    try {

      const response = await axios.get(backendUrl + '/api/product/ownerListProduct')
      if (response.data.success) {
        setItemList(response.data.product)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

    <>

      {loading && <Loader />}

      <div className='flex min-h-screen bg-slate-950 text-white'>
        <SideBar />

        <div className='flex-1 p-4 md:p-6 lg:p-8'>
          <div className='rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-950
             to-black shadow-2xl overflow-hidden'>

            {/* Header */}
            <div className='border-b border-white/10 px-6 py-6 md:px-8 md:py-7'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-white'>
                  Events
                </h1>
                <span className='text-sm md:text-base text-slate-400'>
                  Manage and organize all your upcoming and past events.
                </span>
              </div>
            </div>

            <div className='p-6 md:p-8'>

              {/* Top Cards */}
              <div className='grid grid-cols-4 gap-6 mb-8'>

                <div className='group relative overflow-hidden rounded-3xl border border-purple-400/20 bg-linear-to-br
                   from-purple-600 via-fuchsia-600 to-indigo-700 p-6 shadow-lg shadow-purple-900/30 transition-all
                       duration-300 hover:-translate-y-1 hover:shadow-purple-800/40'>
                  <div className='absolute top-0 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl'></div>
                  <div className='relative flex flex-col gap-3'>
                    <p className='text-sm font-medium text-white/70'>Total Events</p>
                    <p className='text-4xl font-bold tracking-tight'>{itemList.length}</p>
                    <p className='text-sm text-white/70'>All created events in your system</p>
                  </div>
                </div>

                <div className='group relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-linear-to-br
                   from-amber-400 via-yellow-500 to-orange-500 p-6 shadow-lg shadow-emerald-900/30 transition-all
                     duration-300 hover:-translate-y-1 hover:shadow-emerald-800/40'>
                  <div className='absolute top-0 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl'></div>
                  <div className='relative flex flex-col gap-3'>
                    <p className='text-sm font-medium text-white/70'>UpComing</p>
                    <p className='text-4xl font-bold tracking-tight'>
                      {Array.isArray(itemList) ?
                        itemList.filter(item => item.status?.toLowerCase() === 'upcoming').length : 0
                      }
                    </p>
                    <p className='text-sm text-white/70'>UpComing active event status</p>
                  </div>
                </div>

                <div className='group relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-linear-to-br
                   from-emerald-500 via-green-500 to-teal-600 p-6 shadow-lg shadow-emerald-900/30 transition-all
                     duration-300 hover:-translate-y-1 hover:shadow-emerald-800/40'>
                  <div className='absolute top-0 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl'></div>
                  <div className='relative flex flex-col gap-3'>
                    <p className='text-sm font-medium text-white/70'>Ongoing</p>
                    <p className='text-4xl font-bold tracking-tight'>
                      {Array.isArray(itemList) ?
                        itemList.filter(item => item.status?.toLowerCase() === 'ongoing').length : 0
                      }
                    </p>
                    <p className='text-sm text-white/70'>Currently active event status</p>
                  </div>
                </div>

                <div className='group relative overflow-hidden rounded-3xl border border-slate-300/10 bg-linear-to-br
                   from-slate-500 via-slate-600 to-slate-700 p-6 shadow-lg shadow-slate-900/30 transition-all
                     duration-300 hover:-translate-y-1 hover:shadow-slate-800/40'>
                  <div className='absolute top-0 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl'></div>
                  <div className='relative flex flex-col gap-3'>
                    <p className='text-sm font-medium text-white/70'>Completed</p>
                    <p className='text-4xl font-bold tracking-tight'>
                      {Array.isArray(itemList) ?
                        itemList.filter(item => item.status?.toLowerCase() === 'completed').length : 0
                      }
                    </p>
                    <p className='text-sm text-white/70'>Finished events overview</p>
                  </div>
                </div>
              </div>

              {/* Event List Section */}
              <div className='rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm overflow-hidden'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10
                   px-6 py-5'>
                  <div>
                    <h1 className='text-2xl font-bold text-white'>All Events</h1>
                    <p className='mt-1 text-sm text-slate-400'>
                      View, manage, and update event listings from one place.
                    </p>
                  </div>

                  <NavLink
                    className='inline-flex items-center justify-center gap-3 rounded-xl bg-linear-to-r from-purple-600
                       to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/30
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-700/40'
                    to='/event-management/add'
                  >
                    <span className='text-lg leading-none'>+</span>
                    <span>Create Event</span>
                  </NavLink>
                </div>

                {/* fetch events from backend */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6'>
                  {itemList.map((item) => (
                    <ProductList
                      key={item._id}
                      image={item.image}
                      event_name={item.event_name}
                      category={item.category}
                      location={item.location}
                      price={item.price}
                      starting_price={item.starting_price}
                      status={item.status}
                      _id={item._id}
                      onDelete={removeItem}
                      onEdit={handleEdit}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events