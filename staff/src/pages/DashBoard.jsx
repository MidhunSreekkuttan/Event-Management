import { useContext } from 'react'
import { staff_icons } from '../assets/assets'
import { StaffContext } from '../context/staffContext'
import ClientData from '../components/ClientsData'
import { useState } from 'react'

const DashBoard = () => {

  const { listEnquiry } = useContext(StaffContext)
  const [filter, setFilter] = useState('all')

  const filteredEnquiries = Array.isArray(listEnquiry)
    ? listEnquiry.filter((item) => {
      if (filter === 'all') return true
      return item.status?.toLowerCase() === filter.toLowerCase()
    })
    : []

  const pendingCount = Array.isArray(listEnquiry) ? listEnquiry.filter(item => item.status.toLowerCase() === 'pending').length : 0

  const completeCount = Array.isArray(listEnquiry) ? listEnquiry.filter(item => item.status.toLowerCase() === 'completed').length : 0

  return (
    <div className='w-7xl min-h-screen rounded-3xl rounded-l-none mt-1 mb-3 bg-gradient-to-br from-slate-50 via-white
       to-violet-50/40 p-6'>

      {/*Cards*/}

      <div className='rounded-t-3xl border border-slate-200/70 bg-white/90 p-8 shadow-xl backdrop-blur-sm'>
        <div className='w-full'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>

            <div className='group rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-600 to-indigo-600 p-6
                 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl'>
              <div className='flex items-center gap-4'>
                <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm'>
                  <img className='w-9 object-cover brightness-0 invert' src={staff_icons.enquiry_icon} alt="" />
                </div>
                <div className='ml-1'>
                  <p className='text-3xl font-bold tracking-tight'>{listEnquiry.length}</p>
                  <h1 className='text-lg font-medium text-white/90'>Total Enquiries</h1>
                </div>
              </div>
            </div>

            <div className='group rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-400 to-orange-400 p-6
                 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl'>
              <div className='flex items-center gap-4'>
                <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm'>
                  <img className='w-9 object-cover brightness-0 invert' src={staff_icons.enquiry_icon} alt="" />
                </div>
                <div className='ml-1'>
                  <p className='text-3xl font-bold tracking-tight'>{pendingCount}</p>
                  <h1 className='text-lg font-medium text-white/90'>Pending Enquiries</h1>
                </div>
              </div>
            </div>

            <div className='group rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-500 to-teal-500 p-6
                 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl'>
              <div className='flex items-center gap-4'>
                <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm'>
                  <img className='w-9 object-cover brightness-0 invert' src={staff_icons.enquiry_icon} alt="" />
                </div>
                <div className='ml-1'>
                  <p className='text-3xl font-bold tracking-tight'>{completeCount}</p>
                  <h1 className='text-lg font-medium text-white/90'>Completed Enquiries</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/*filter*/}

      <div className='rounded-b-3xl border-x border-b border-slate-200/70 bg-white/80 p-6 shadow-xl backdrop-blur-sm'>

        <div className='flex flex-wrap gap-3'>

          <div
            onClick={() => setFilter('all')}
            className={`cursor-pointer rounded-2xl px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 
                ${filter === 'all'
                ? 'bg-slate-900 text-white shadow-lg'
                : 'border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50'
              }`}
          >
            <h1>ALL</h1>
          </div>

          <div
            onClick={() => setFilter('pending')}
            className={`cursor-pointer rounded-2xl px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 
                ${filter === 'pending'
                ? 'bg-amber-500 text-white shadow-lg'
                : 'border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50'
              }`}
          >
            <h1>Pending</h1>
          </div>

          <div
            onClick={() => setFilter('Completed')}
            className={`cursor-pointer rounded-2xl px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 
                ${filter.toLowerCase() === 'completed'
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50'
              }`}
          >
            <h1>Completed</h1>
          </div>

        </div>

        {/*Heading*/}

        <div className='mt-6 w-full rounded-3xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm'>

          <div className='grid grid-cols-6 gap-4'>

            <div className='text-sm font-bold uppercase tracking-wide text-slate-500'>
              <h1>Client</h1>
            </div>

            <div className='text-sm font-bold uppercase tracking-wide text-slate-500'>
              <h1>Event Type</h1>
            </div>

            <div className='text-sm font-bold uppercase tracking-wide text-slate-500'>
              <h1>Event Date</h1>
            </div>

            <div className='text-sm font-bold uppercase tracking-wide text-slate-500'>
              <h1>Budget</h1>
            </div>

            <div className='text-sm font-bold uppercase tracking-wide text-slate-500'>
              <h1>Status</h1>
            </div>

            <div className='text-sm font-bold uppercase tracking-wide text-slate-500'>
              <h1>Action</h1>
            </div>

          </div>
        </div>

        {/*Client Data*/}

        <div className='mt-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm'>

          <div>
            <div className='flex flex-col gap-3 text-base font-medium text-slate-600'>

              {filteredEnquiries.map((item) => (
                <ClientData
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  category={item.productId?.category}
                  date={item.date}
                  starting_price={item.productId?.starting_price}
                  status={item.status}
                />
              ))}

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default DashBoard