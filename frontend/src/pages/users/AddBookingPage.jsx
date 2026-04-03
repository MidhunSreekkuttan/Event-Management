import { useCallback, useContext, useEffect, useState } from 'react'
import { EventContext } from '../../context/EventContext'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BackendContex } from '../../context/ConnectBackendContex'
import axios from 'axios'
import Loader from '../../components/Loading'

const BookingPage = () => {

    const navidate = useNavigate()

    const { bookingId } = useParams()

    const { backendUrl } = useContext(BackendContex)

    const { listEnquiry, getEventList, products } = useContext(EventContext)

    const bookedData = products.find(item => item._id === bookingId)

    const [color, setColor] = useState('cod')
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState([])

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        place: '',
        phoneNumber: ''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        setFormData((data) => ({ ...data, [name]: value }))
    }

    const getResponseData = useCallback(async () => {

        try {
            setLoading(true)

            const { data } = await axios.get(backendUrl + "/api/staffs/getResponse")
            if (data.success) {
                setResponse(data.responsedata)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }

    }, [backendUrl])

    const responseId = response?.find(item => item?.relatedEvents?.some(data => data?.id === bookingId))?._id

    const bookingData = {
        address: formData,
        productId: bookedData?._id,
        items: bookedData,
        eventDate: date,
        responseId
    }

    const initPay = (order) => {

        setLoading(true)

        const options = {
            key: import.meta.env.VITE_RAZORPAY_TEST_API_KEY,
            amount: order.amount,
            currency: order.currency,
            name: "Event Booking",
            description: "Book your event",
            order_id: order.id,
            handler: async function (response) {

                try {
                    setLoading(true)

                    const verifyRes = await axios.post(
                        backendUrl + '/api/booking/verifyRazorpay',
                        {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            productId: bookingData.productId,
                            address: bookingData.address,
                            items: bookingData.items,
                            eventDate: bookingData.eventDate,
                            responseId: bookingData.responseId
                        },
                        { withCredentials: true }
                    )

                    if (verifyRes.data.success) {
                        toast.success(verifyRes.data.message)
                        navidate("/")
                    } else {
                        toast.error(verifyRes.data.message)
                    }

                } catch (error) {
                    console.log(error);
                    toast.error(error.message)
                }
                finally {
                    setLoading(false)
                }
            }
        }

        const rzp = new window.Razorpay(options)
        rzp.open()

    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)

            if (!bookedData) {
                toast.error("Event Not Found")
            }

            switch (color) {

                //APi call for COD
                case 'cod':

                    const res = await axios.post(backendUrl + '/api/booking/placingBooking', bookingData)

                    if (res.data.success) {
                        toast.success(res.data.message)
                        navidate('/')
                    } else {
                        toast.error(res.data.message)
                    }

                    break

                case "razorpay":

                    const { data } = await axios.post(backendUrl + "/api/booking/placebookingRazorpay", bookingData,
                        { withCredentials: true })

                    if (data.success) {
                        initPay(data.order);
                    } else {
                        toast.error(data.message)
                    }

                    break

                default:

                    break
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
        listEnquiry()
        getEventList()
        getResponseData()
    }, [])

    return (

        <>

            {loading && <Loader />}

            <div className='flex flex-col justify-center items-center mt-35'>
                <form onSubmit={onSubmitHandler}>
                    <div className='bg-white/10 justify-between w-[90rem] rounded-lg grid grid-cols-2 p-7'>

                        {/*Left Side*/}

                        <div className='grid gap-3 w-[35rem] bg-white/10 rounded-2xl p-5'>

                            <div className='grid grid-cols-2 gap-5'>
                                <div className='flex flex-col gap-2'>
                                    <label>First Name*:</label>
                                    <input onChange={onChangeHandler} name='firstName' value={formData.firstName}
                                        type="text" placeholder='Enter Your First name' required
                                        className='outline-none focus:ring-2 focus:ring-pink-500 border border-white/30 rounded-lg pl-3 py-2' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label>Last Name:</label>
                                    <input onChange={onChangeHandler} name='lastName' value={formData.lastName}
                                        type="text" placeholder='Enter Your Last name'
                                        className='outline-none focus:ring-2 focus:ring-pink-500 border border-white/30 rounded-lg pl-3 py-2' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label>Email*:</label>
                                <input onChange={onChangeHandler} name='email' value={formData.email}
                                    type="text" placeholder='Enter Your Email' required
                                    className='outline-none focus:ring-2 focus:ring-pink-500 border border-white/30 rounded-lg pl-3 py-2' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>Street*:</label>
                                <input onChange={onChangeHandler} name='street' value={formData.street}
                                    type="text" placeholder='Street' required
                                    className='outline-none focus:ring-2 focus:ring-pink-500 border border-white/30 rounded-lg pl-3 py-2' />
                            </div>

                            <div className='grid grid-cols-2 gap-5'>
                                <div className='flex flex-col gap-2'>
                                    <label>City*:</label>
                                    <input onChange={onChangeHandler} name='city' value={formData.city}
                                        type="text" placeholder='City' required
                                        className='outline-none focus:ring-2 focus:ring-pink-500 border border-white/30 rounded-lg pl-3 py-2' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label>Place*:</label>
                                    <input onChange={onChangeHandler} name='place' value={formData.place}
                                        type="text" placeholder='Place' required
                                        className='outline-none focus:ring-2 focus:ring-pink-500 border border-white/30 rounded-lg pl-3 py-2' />
                                </div>
                            </div>

                            {/*Adding starting and ending date's*/}
                            <div className="grid grid-cols-2 gap-4 w-full mt-2">

                                {/* Date */}
                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={e => setDate(e.target.value)}
                                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white
                                         focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500
                                              transition duration-200"
                                        required
                                    />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label>Phone Number:</label>
                                    <input onChange={onChangeHandler} name='phoneNumber' value={formData.phoneNumber}
                                        type="number" placeholder='Enter Your Phone Number'
                                        className='outline-none focus:ring-2 focus:ring-pink-500 border border-white/30 rounded-lg pl-3 py-2' />
                                </div>

                            </div>

                        </div>

                        {/*Right side*/}

                        <div className='ml-20 text-center'>
                            <h1 className='text-3xl font-semibold'>
                                Total amount of Your Booking
                            </h1>
                            <hr className='mt-5' />
                            <div className='mt-20'>

                                <div className='flex gap-5 text-[18px] font-bold'>
                                    <h1>TOTAL PRICE :</h1>
                                    <p>{bookedData?.price}</p>
                                </div>

                            </div>

                            {/*Payment Method*/}
                            <h1 className='text-left mt-5 text-2xl font-semibold'><u>PAYMENT METHOD</u></h1>
                            <div className='flex gap-3 mt-5'>
                                <div onClick={() => setColor('razorpay')} className='flex items-center p-2 px-3 cursor-pointer border pr-10'>
                                    <p className={`min-w-3.5 h-3.5 cursor-pointer rounded-full ${color === 'razorpay' ? 'bg-green-500' : 'bg-white/0'}`}></p>
                                    <p className='text-sm font-medium mx-4 w-[19vh]'>RAZORPAY</p>
                                </div>
                                <div onClick={() => setColor('cod')} className='flex items-center p-3 cursor-pointer border pr-10'>
                                    <p className={`min-w-3.5 h-3.5 cursor-pointer rounded-full ${color === 'cod' ? 'bg-green-500' : 'bg-white/0'}`}></p>
                                    <p className='text-sm font-medium mx-4 w-[20vh]'>CASH ON DELIVERY</p>
                                </div>
                            </div>
                            <div className='w-full mt-10'>
                                <button type='submit' className='bg-black px-20 py-3 rounded-lg text-[20px] font-sans'>
                                    PROCEED
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>

    )
}

export default BookingPage