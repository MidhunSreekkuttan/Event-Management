import React, { useContext } from 'react'
import { EventContext } from '../../context/EventContext'

const BookingPage = () => {

  const { userProductList } = useContext(EventContext)

  return (
    <div className='pt-30 px-50'>
      <div className='text-3xl font-bold'>
        <h1>MY BOOKINGS</h1>
      </div>
      <div className='border-t text-gray-700 mt-5'>

        {userProductList.map((item, index) => (

          <div key={index} className='py-4 border-b text-gray-700 flex flex-col gap-4'>
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-30' src={item.image[0]} alt="" />
              <div className='flex-1'>
                <p className='text-white font-medium'>
                  {item.event_name}
                </p>
                <div className=' items-center gap-3 mt-2 text-sm text-amber-100'>
                  <p>${item.price}</p>
                  <p>{item.category}</p>
                  <p>{item.location}</p>
                  <p>{item.date}</p>
                </div>
              </div>

            <div className='flex justify-between mt-8'>
              <div className='flex items-center gap-2 '>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm text-amber-200 mr-95'>Booked</p>
              </div>
              <button className='border pc-4 py-2 text-sm font-medium rounded-sm text-amber-50'>
                Track Booking
              </button>
            </div>

            </div>
          </div>
          
        ))}

      </div>
    </div>
  )
}

export default BookingPage