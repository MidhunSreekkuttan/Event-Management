import { useContext } from 'react'
import { BackendContex } from '../../context/ConnectBackendContex'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import Loader from '../../components/Loading'
import { EventContext } from '../../context/EventContext'
import { useNavigate } from 'react-router-dom'

const BookingPage = () => {

  const { backendUrl } = useContext(BackendContex)

  const navigate = useNavigate()

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

  return orderData.length > 0 ? (

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

  ) : <div className="flex min-h-screen flex-col items-center justify-center bg-[#120d09] text-center text-[#f7ecd8] px-6">

    <div className="rounded-3xl border border-[#c7a45a]/20 bg-white/5 p-10 backdrop-blur-lg shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

      <h1 className="text-4xl font-semibold text-[#fff5e7] mb-3">
        No Bookings Found
      </h1>

      <p className="text-[#e7d6bc]/70 mb-6 max-w-md">
        There are currently no booking details available.
        Once you submit enquiry, they will go to staff's hands and they will send a response to you here.
      </p>

      <button
        onClick={() => navigate('/eventList')}
        className="rounded-xl border border-[#c7a45a]/40 bg-[#c7a45a]/10 px-6 py-3 font-semibold text-[#d9bb78] transition hover:bg-[#c7a45a] hover:text-black"
      >
        Find Your Events
      </button>

    </div>

  </div>
}

export default BookingPage