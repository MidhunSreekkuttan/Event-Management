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

  return (
    <div className='flex flex-col mt-1 w-[175vh] rounded-r-2xl '>

      {/*Cards*/}

      <div className='h-fit p-6 bg-white rounded-r-2xl rounded-b-none shadow-2xl'>
        <div className='w-5xl'>
          <div className='grid grid-cols-3 items-center text-center gap-4'>

            <div className='bg-amber-300 w-full p-5 rounded-2xl'>
              <div className='flex'>
                <img className='w-16 object-cover' src={staff_icons.enquiry_icon} alt="" />
                <div className='ml-5'>
                  <p className='text-3xl text-left font-semibold'>{listEnquiry.length}</p>
                  <h1 className='text-2xl font-semibold'>Total Enquiries</h1>
                </div>
              </div>
            </div>

            <div className='bg-amber-300 w-full p-5 rounded-2xl'>
              <div className='flex'>
                <img className='w-16 object-cover' src={staff_icons.enquiry_icon} alt="" />
                <div className='ml-5'>
                  <p className='text-3xl text-left font-semibold'>152</p>
                  <h1 className='text-2xl font-semibold'>Pending Enquiries</h1>
                </div>
              </div>
            </div>

            <div className='bg-amber-300 w-full p-5 rounded-2xl'>
              <div className='flex'>
                <img className='w-16 object-cover' src={staff_icons.enquiry_icon} alt="" />
                <div className='ml-5'>
                  <p className='text-3xl text-left font-semibold'>152</p>
                  <h1 className='text-[20px] font-semibold'>Completed Enquiries</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/*filter*/}

      <div className='bg-white/50 p-6 mb-3 rounded-b-2xl'>

        <div className='flex'>

          <div onClick={() => setFilter('all')} className='px-4 py-2 text-center rounded-lg rounded-r-none shadow-2xl bg-white border-r-2 border-b-2
             border-gray-400 cursor-pointer hover:scale-95'>
            <h1>ALL</h1>
          </div>

          <div onClick={() => setFilter('pending')} className='px-4 py-2 text-center rounded-lg rounded-l-none rounded-r-none shadow-2xl bg-white border-r-2 border-b-2
             border-gray-400 cursor-pointer hover:scale-95'>
            <h1>Pending</h1>
          </div>

          <div onClick={() => setFilter('Completed')} className='px-4 py-2 text-center rounded-lg rounded-l-none shadow-2xl border-b-2 border-gray-400
             bg-white cursor-pointer hover:scale-95'>
            <h1>Completed</h1>
          </div>

        </div>

        {/*Heading*/}

        <div className='flex flex-col  w-full mt-5 bg-white/20 rounded-lg p-5 shadow-2xl'>

          <div className='grid grid-cols-6'>

            <div className='text-2xl font-semibold text-gray-500'>
              <h1>Client</h1>
            </div>

            <div className='text-2xl font-semibold text-gray-500'>
              <h1>Event Type</h1>
            </div>

            <div className='text-2xl font-semibold text-gray-500'>
              <h1>Event Date</h1>
            </div>

            <div className='text-2xl font-semibold text-gray-500'>
              <h1>Budget</h1>
            </div>

            <div className='text-2xl font-semibold text-gray-500'>
              <h1>Status</h1>
            </div>

            <div className='text-2xl font-semibold text-gray-500'>
              <h1>Action</h1>
            </div>

          </div>
        </div>

        {/*Heading*/}

        <div className='px-5 py-3'>

          <div className=''>
            <div className='flex flex-col gap-2 text-[20px] font-semibold text-gray-500'>

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