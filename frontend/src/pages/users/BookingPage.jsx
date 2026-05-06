import { useContext, useEffect, useState } from 'react'
import { BackendContex } from '../../context/ConnectBackendContex'
import axios from 'axios'
import { toast } from 'react-toastify'
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
    } finally {
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

      <div className='min-h-screen bg-[#F6F0FD] pt-24 px-4 md:px-8 lg:px-12'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-8'>
            <p className='text-sm font-medium uppercase tracking-[0.35em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent'>
              Booking History
            </p>
            <h1 className='mt-2 text-3xl font-bold text-slate-900 md:text-4xl'>
              My Bookings
            </h1>
            <p className='mt-2 text-sm text-slate-600 md:text-base'>
              View all your confirmed event bookings and current status here.
            </p>
          </div>

          <div className='space-y-6'>
            {Array.isArray(orderData) &&
              orderData.map((order, orderIndex) =>
                order.items?.map((bookingItem, itemIndex) => (
                  <div
                    key={`${orderIndex}-${itemIndex}`}
                    className='rounded-[28px] border border-purple-200 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl'
                  >
                    <div className='flex flex-col gap-5 lg:flex-row lg:items-start'>
                      <img
                        className='h-40 w-full rounded-2xl object-cover lg:w-36'
                        src={
                          Array.isArray(bookingItem.image)
                            ? bookingItem.image[0]
                            : bookingItem.image || undefined
                        }
                        alt="booking"
                      />

                      <div className='flex-1'>
                        <p className='text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent'>
                          {bookingItem.company_name}
                        </p>

                        <h2 className='mt-2 text-xl font-semibold text-slate-900'>
                          {bookingItem.event_name || 'Booked Event'}
                        </h2>

                        <div className='mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2'>
                          <p>
                            <span className='font-semibold text-slate-800'>Name:</span>{' '}
                            {order.address?.firstName}
                          </p>
                          <p>
                            <span className='font-semibold text-slate-800'>Email:</span>{' '}
                            {order.address?.email}
                          </p>
                          <p>
                            <span className='font-semibold text-slate-800'>Phone:</span>{' '}
                            {order.address?.phoneNumber}
                          </p>
                          <p>
                            <span className='font-semibold text-slate-800'>Event Date:</span>{' '}
                            {order.eventDate}
                          </p>
                          <p>
                            <span className='font-semibold text-slate-800'>Place:</span>{' '}
                            {order.address?.place}
                          </p>
                        </div>
                      </div>

                      <div className='flex flex-col items-start gap-4 lg:items-end'>
                        <div className='flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2'>
                          <p className={`h-2.5 w-2.5 rounded-full 
                            ${order?.status === 'rejected' ? "bg-red-500" : ""} 
                            ${order?.status === "approved" ? "bg-green-500" : ""}
                            ${order?.status === "pending" ? "bg-yellow-500" : ""}`}></p>
                          <p className='text-sm font-medium text-slate-700'>
                            {order.status}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F6F0FD] px-6 text-center text-slate-800">
      <div className="rounded-3xl border border-purple-200 bg-white p-10 shadow-lg">
        <h1 className="mb-3 text-4xl font-semibold text-slate-900">
          No Bookings Found
        </h1>

        <p className="mb-6 max-w-md text-slate-600">
          There are currently no booking details available.
          Once you submit enquiry, they will go to staff's hands and they will send a response to you here.
        </p>

        <button
          onClick={() => navigate('/eventList')}
          className="rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Find Your Events
        </button>
      </div>
    </div>
  )
}

export default BookingPage