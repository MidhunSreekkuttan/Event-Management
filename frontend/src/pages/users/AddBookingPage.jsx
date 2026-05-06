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

    const { backendUrl, userData } = useContext(BackendContex)
    const { listEnquiry, getEventList, products } = useContext(EventContext)

    const bookedData = products.find(item => item._id === bookingId)

    const [color, setColor] = useState('cod')
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState([])

    const [formData, setFormData] = useState({
        street: '',
        city: '',
        place: '',
        phoneNumber: ''
    })

    const finalFormData = {
        ...formData,
        name: userData?.name,
        email: userData?.email
    }

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
        } finally {
            setLoading(false)
        }
    }, [backendUrl])

    const responseId = response?.find(item =>
        item?.relatedEvents?.some(data => data?.id === bookingId)
    )?._id

    //razorpay loader function
    const loadeRazorpay = () => {

        return new Promise((resolve) => {

            const existingScript = document.getElementById("razorpay-sdk")

            if (existingScript) {
                resolve(true)
                return
            }

            const script = document.createElement("script")
            script.id = "razorpay-sdk"
            script.src = "https://checkout.razorpay.com/v1/checkout.js"
            script.async = true

            script.onload = () => resolve(true)
            script.onerror = () => resolve(false)

            document.body.appendChild(script)
        })
    }
    //...........................................................................

    const bookingData = {
        address: finalFormData,
        productId: bookedData?._id,
        items: bookedData,
        eventDate: date,
        responseId
    }

    const initPay = (order) => {

        if (!window.Razorpay) {
            toast.error("Razorpay is not available")
        }

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
                } finally {
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
                return
            }

            switch (color) {
                case 'cod': {
                    const res = await axios.post(
                        backendUrl + '/api/booking/placingBooking',
                        bookingData
                    )

                    if (res.data.success) {
                        toast.success(res.data.message)
                        navidate('/')
                    } else {
                        toast.error(res.data.message)
                    }
                    break
                }

                case "razorpay": {

                    const loaded = await loadeRazorpay()
                    if (!loaded) {
                        toast.error("Razorpay SDK failed to load")
                        return
                    }

                    const { data } = await axios.post(
                        backendUrl + "/api/booking/placebookingRazorpay",
                        bookingData,
                        { withCredentials: true }
                    )

                    if (data.success) {
                        initPay(data.order);
                    } else {
                        toast.error(data.message)
                    }
                    break
                }

                default:
                    break
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        } finally {
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

            <div className='min-h-screen bg-[#F6F0FD] pt-10 px-4 md:px-8'>
                <div className='mx-auto max-w-7xl'>
                    <form onSubmit={onSubmitHandler}>
                        <div className='grid gap-8 rounded-[28px] border border-purple-200 bg-white p-6 shadow-md lg:grid-cols-2 lg:p-8'>

                            {/* Left Side */}
                            <div className='grid gap-4 rounded-[24px] border border-purple-200 bg-[#FCFAFF] p-5 md:p-6'>
                                <div>
                                    <p className='text-sm font-medium uppercase tracking-[0.35em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent'>
                                        Booking Details
                                    </p>
                                    <h1 className='mt-2 text-3xl font-semibold text-slate-900'>
                                        Complete Your Booking
                                    </h1>
                                    <p className='mt-2 text-sm text-slate-600'>
                                        Fill in your details and choose a payment method to confirm your event booking.
                                    </p>
                                </div>

                                <div className='grid grid-cols-2 gap-5 md:grid-cols-2'>
                                    <InputField
                                        disabled={userData}
                                        label="Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={onChangeHandler}
                                        type="text"
                                        placeholder={userData?.name}
                                        required
                                    />

                                    <InputField
                                        disabled={userData}
                                        label="Email*"
                                        name="email"
                                        value={formData.email}
                                        onChange={onChangeHandler}
                                        type="text"
                                        placeholder={userData?.email}
                                        required
                                    />

                                </div>

                                <InputField
                                    label="Street*"
                                    name="street"
                                    value={formData.street}
                                    onChange={onChangeHandler}
                                    type="text"
                                    placeholder="Street"
                                    required
                                />

                                <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                                    <InputField
                                        label="City*"
                                        name="city"
                                        value={formData.city}
                                        onChange={onChangeHandler}
                                        type="text"
                                        placeholder="City"
                                        required
                                    />
                                    <InputField
                                        label="Place*"
                                        name="place"
                                        value={formData.place}
                                        onChange={onChangeHandler}
                                        type="text"
                                        placeholder="Place"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={e => setDate(e.target.value)}
                                            className="w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-slate-800 outline-none transition duration-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                                            required
                                        />
                                    </div>

                                    <InputField
                                        label="Phone Number"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={onChangeHandler}
                                        type="number"
                                        placeholder="Enter Your Phone Number"
                                    />
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className='rounded-[24px] border border-purple-200 bg-[#FCFAFF] p-5 md:p-6'>
                                <p className='text-sm font-medium uppercase tracking-[0.35em]
                                     bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent'>
                                    Payment Summary
                                </p>

                                <h1 className='mt-2 text-3xl font-semibold text-slate-900'>
                                    Total amount of Your Booking
                                </h1>

                                <hr className='mt-5 border-purple-200' />

                                <div className='mt-8 space-y-4'>
                                    <div className='rounded-2xl border border-purple-200 bg-white p-4'>
                                        <div className='flex items-center justify-between text-lg font-semibold'>
                                            <h1 className='text-slate-700'>TOTAL PRICE</h1>
                                            <p className='bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text
                                                 text-transparent'>
                                                {bookedData?.price}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='rounded-2xl border border-purple-200 bg-white p-4'>
                                        <h1 className='text-left text-xl font-semibold text-slate-900'>
                                            Payment Method
                                        </h1>

                                        <div className='mt-5 flex flex-col gap-3'>
                                            <div
                                                onClick={() => setColor('razorpay')}
                                                className='flex cursor-pointer items-center rounded-xl border
                                                     border-purple-200 bg-[#FCFAFF] p-3 transition hover:border-pink-400'
                                            >
                                                <p className={`min-w-4 h-4 rounded-full border border-purple-300
                                                     ${color === 'razorpay' ? 'bg-green-500' : 'bg-white'}`}></p>
                                                <p className='mx-4 text-sm font-medium text-slate-700'>
                                                    RAZORPAY
                                                </p>
                                            </div>

                                            <div
                                                onClick={() => setColor('cod')}
                                                className='flex cursor-pointer items-center rounded-xl border
                                                 border-purple-200 bg-[#FCFAFF] p-3 transition hover:border-pink-400'
                                            >
                                                <p className={`min-w-4 h-4 rounded-full border border-purple-300
                                                     ${color === 'cod' ? 'bg-green-500' : 'bg-white'}`}></p>
                                                <p className='mx-4 text-sm font-medium text-slate-700'>
                                                    CASH ON DELIVERY
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-2xl border border-purple-200 bg-white p-4'>
                                        <button
                                            type='submit'
                                            className='w-full rounded-xl
                                              bg-gradient-to-r from-pink-500 to-pink-700 px-6 py-3 text-lg
                                                  font-semibold text-white'
                                        >
                                            PROCEED
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

function InputField({ label, name, value, onChange, type, placeholder, required = false, ...prop }) {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold text-slate-700'>{label}</label>
            <input
                {...prop}
                onChange={onChange}
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                required={required}
                className='rounded-xl border border-purple-200 bg-white px-4 py-3
                 text-slate-800 outline-none transition duration-200 focus:border-pink-500 focus:ring-2
                  focus:ring-pink-500'
            />
        </div>
    )
}

export default BookingPage