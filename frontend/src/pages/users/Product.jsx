import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EventContext } from '../../context/EventContext'
import axios from 'axios'
import { BackendContex } from '../../context/ConnectBackendContex'
import { toast } from 'react-toastify'

const Product = () => {

    const { productId } = useParams()

    const { backendUrl } = useContext(BackendContex)

    const navigate = useNavigate()
    const { products } = useContext(EventContext)

    const [productData, setProductData] = useState(false)
    const [image, setImage] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [place, setPlace] = useState('')
    const [count, setCount] = useState('')
    const [additionalDetails, setAdditionalDetails] = useState('')

    const createEnquiry = async (e) => {
        e.preventDefault();

        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post(backendUrl + '/api/user/enquiry', {
                name, email, phoneNumber, eventDate, place, count, additionalDetails, productId
            })
            if (data.success) {
                toast.success(data.message)
                navigate('/')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const fetchproductData = async () => {

        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                setImage(item.image[0])
                return null
            }
        })

    }

    const services = productData?.main_services?.flatMap((s) =>
        String(s).split(",").map((x) => x.trim()).filter(Boolean)
    ) || []

    useEffect(() => {

        fetchproductData()

    }, [productId, products])

    return productData ? (
        <div className="grid gap-20 pt-32 bg-[#F6F0FD] text-black">

            <div className="flex gap-20 px-50">

                {/* Main Image */}
                <div className="w-[400px] h-[500px]">
                    <img
                        src={image}
                        loading="lazy"
                        decoding='async'
                        alt=""
                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                </div>

                {/*Product Info*/}
                <div className='flex-1'>
                    <p className='font-semibold text-purple-600 text-[20px]'>
                        By {productData.company_name} presents
                    </p>
                    <h1 className='font-bold text-4xl mt-6'>
                        {productData.event_name}
                    </h1>

                    <div className='py-5 px-6 w-fit text-center rounded-2xl bg-gray-300 mt-6 shadow-2xl'>
                        <p className='font-bold text-purple-600 text-2xl'>
                            $ {productData.starting_price} <br />
                            <span className='text-sm'>Starting Package Price</span>
                        </p>
                    </div>

                    <p className='mt-6'>
                        {productData.description}
                    </p>

                    <div className="grid grid-cols-2 gap-y-5 mt-6">
                        {services.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-800">
                                <span className="text-green-600 font-bold">✓</span>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            {/* Thumbnails */}
            <div className="flex flex-col gap-15 px-50">
                <h1 className='text-center text-4xl font-bold'>
                    Related Images
                </h1>
                <div className='flex gap-6 w-[280px] h-[250px]'>
                    {productData.image.map((item, index) => (
                        <img
                            key={index}
                            src={item}
                            loading='lazy'
                            decoding='async'
                            alt=""
                            onClick={() => setImage(item)}
                            className="w-full h-full object-cover cursor-pointer rounded-2xl shadow-2xl"
                        />
                    ))}
                </div>

            </div>

            <div className='grid gap-5 justify-center items-center text-center'>
                <div className='grid gap-3'>
                    <h1 className='text-center text-4xl font-bold'>
                        Book Your Enchanted {productData.category}
                    </h1>
                    <p>Fill out the form below and we'll create your perfect day</p>
                </div>

                <form onSubmit={createEnquiry}>
                    <div className='flex flex-col gap-10 bg-gray-300/50 w-full px-15 py-10 rounded-3xl shadow-2xl'>
                        <div className='flex gap-7'>
                            <div className='flex flex-col gap-3'>
                                <label className='relative right-25 text-[20px]'>Full Name*</label>
                                <input onChange={e => setName(e.target.value)} value={name} type="text"
                                    placeholder='Enter Your Name' required
                                    className='bg-gray-300/70 w-80 py-2 px-5 outline-none rounded-full' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='relative right-25 text-[20px]'>Email*</label>
                                <input type="email" onChange={e => setEmail(e.target.value)} value={email}
                                    placeholder='Enter Your Email' required
                                    className='bg-gray-300/70 w-80 py-2 px-5 outline-none rounded-full' />
                            </div>
                        </div>

                        <div className='flex gap-7'>
                            <div className='flex flex-col gap-3'>
                                <label className='relative right-20 text-[20px]'>Phone Number.</label>
                                <input type="number" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}
                                    placeholder='Enter Your Phone number'
                                    className='bg-gray-300/70 w-80 py-2 px-5 outline-none rounded-full' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='relative right-10 text-[20px]'>Preferred Event Date*</label>
                                <input type="date" onChange={e => setEventDate(e.target.value)} value={eventDate}
                                    placeholder='Enter Your Email' required
                                    className='bg-gray-300/70 w-80 py-2 px-5 outline-none rounded-full' />
                            </div>
                        </div>

                        <div className='flex gap-7'>
                            <div className='flex flex-col gap-3'>
                                <label className='relative right-28 text-[20px]'>Place*</label>
                                <input type="text" onChange={e => setPlace(e.target.value)} value={place}
                                    placeholder='Enter Your Place' required
                                    className='bg-gray-300/70 w-80 py-2 px-5 outline-none rounded-full' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='relative right-10 text-[20px]'>Expected Guest Count*</label>
                                <input type="number" onChange={e => setCount(e.target.value)} value={count}
                                    placeholder='Enter Cout' required
                                    className='bg-gray-300/70 w-80 py-2 px-5 outline-none rounded-full' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <label className='text-left'>Addition Details.</label>
                            <textarea type='text' onChange={e => setAdditionalDetails(e.target.value)} value={additionalDetails}
                                placeholder='Write here' className='w-full px-3 
                                py-2 border-2 border-[#c2c2c2] outline-[#c586A5] border-r-4 outline-none' />
                        </div>

                        <button type='submit' className='py-4 bg-gray-600 rounded-full text-white text-2xl font-bold'>
                            SUBMIT
                        </button>
                        <p>
                            By submitting, you agree to our Terms & Privacy Policy
                        </p>

                    </div>

                </form>

            </div>

            {/*   Footer   */}
            <div className={`border-t py-6 px-6 flex flex-col md:flex-row items-center justify-between text-sm
                        border-black/10 text-black`}>
                <p className="relative left-160">© 2024 Eventify. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>

        </div>
    ) : <div className='opacity-0'></div>
}

export default Product
