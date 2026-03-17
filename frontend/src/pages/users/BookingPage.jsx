import { useContext } from 'react'
import { BackendContex } from '../../context/ConnectBackendContex'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import Loader from '../../components/Loading'
import { EventContext } from '../../context/EventContext'

const BookingPage = () => {

  const { backendUrl } = useContext(BackendContex)

  const { getUserbooking } = useContext(EventContext)

  const [orderData, setOrderData] = useState([])
  const [loading, setLoading] = useState(true)

  const getOrder = async () => {
    try {

      const res = await axios.get(backendUrl + '/api/booking/userBooking')

      if (res.data.success) {
        setOrderData(res.data.orders)
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
    getOrder()
    getUserbooking()
  }, [])

  return (

    <>

      {loading && <Loader />}

      <div className='pt-30 px-50'>
        <div className='text-3xl font-bold'>
          <h1>MY BOOKINGS</h1>
        </div>
        <div className='border-t text-gray-700 mt-5'>

          {Array.isArray(orderData) &&
            orderData.map((order, orderIndex) =>
              order.items?.map((bookingItem, itemIndex) => (
                <div
                  key={`${orderIndex}-${itemIndex}`}
                  className='py-4 border-b text-gray-700 flex flex-col gap-4'
                >
                  <div className='flex items-start gap-6 text-sm'>
                    <img
                      className='w-30 h-38 object-cover rounded'
                      src={
                        Array.isArray(bookingItem.image)
                          ? bookingItem.image[0]
                          : bookingItem.image || undefined
                      }
                      alt="booking"
                    />

                    <div className='flex-1'>
                      <p className='text-white font-medium'>
                        {bookingItem.company_name}
                      </p>

                      <div className='items-center gap-3 mt-2 text-sm text-amber-100'>
                        <p>Name: {order.address?.firstName}</p>
                        <p>Email: {order.address?.email}</p>
                        <p>Phone: {order.address?.phoneNumber}</p>
                        <p>Event Date: {order.eventDate}</p>
                        <p>Place: {order.address?.place}</p>
                      </div>
                    </div>

                    <div className='flex justify-between mt-13'>
                      <div className='flex items-center gap-2'>
                        <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                        <p className='text-sm text-amber-200 mr-95'>{order.status}</p>
                      </div>
                      <button className='border px-4 py-2 text-sm font-medium rounded-sm text-amber-50'>
                        Track Booking
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

        </div>
      </div>

    </>

  )
}

export default BookingPage