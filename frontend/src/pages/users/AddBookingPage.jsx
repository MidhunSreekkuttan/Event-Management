import { useContext, useState } from 'react'
import { EventContext } from '../../context/EventContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BackendContex } from '../../context/ConnectBackendContex'

const BookingPage = () => {

    const navidate = useNavigate()

    const { backendUrl } = useContext(BackendContex)

    const { enquiryList } = useContext(EventContext)
    const [color, setColor] = useState('cod')

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

    const onSubmitHandler = (e) => {
        e.preventDefault()

        try {



        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
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

                        <div className='flex flex-col gap-2'>
                            <label>Phone Number:</label>
                            <input onChange={onChangeHandler} name='phoneNumber' value={formData.phoneNumber}
                                type="number" placeholder='Enter Your Phone Number'
                                className='outline-none focus:ring-2 focus:ring-pink-500 border border-white/30 rounded-lg pl-3 py-2' />
                        </div>
                    </div>

                    {/*Right side*/}

                    <div className='ml-20 text-center'>
                        <h1 className='text-3xl font-semibold'>
                            Total amount of Your Booking
                        </h1>
                        <hr className='mt-5' />
                        <div className='mt-20'>
                            {Array.isArray(enquiryList.response) &&
                                enquiryList.response.map((item, index) => (
                                    <div key={index} className='flex gap-5 text-[18px] font-bold'>
                                        <h1>TOTAL PRICE :</h1>
                                        <p>{item.productId.price}</p>
                                    </div>
                                ))}
                        </div>

                        {/*Payment Method*/}
                        <h1 className='text-left mt-5 text-2xl font-semibold'><u>PAYMENT METHOD</u></h1>
                        <div className='flex gap-3 mt-5'>
                            <div onClick={() => setColor('strip')} className='flex items-center p-2 px-3 cursor-pointer border pr-10'>
                                <p className={`min-w-3.5 h-3.5 cursor-pointer rounded-full ${color === 'strip' ? 'bg-green-500' : 'bg-white/0'}`}></p>
                                <p className='text-sm font-medium mx-4 w-[19vh]'>STRIP</p>
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
    )
}

export default BookingPage