import React, { useContext, useState } from 'react'
import SideBar from '../../components/event-management/SideBar'
import { icon } from '../../assets/assets'
import { BackendContex } from '../../context/ConnectBackendContex'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '../../components/Loading'

const Add = ({ token }) => {

  const { backendUrl } = useContext(BackendContex)

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [company_name, setCompany_name] = useState('')
  const [event_name, setEvent_name] = useState('')
  const [price, setPrice] = useState('')
  const [starting_price, setStarting_price] = useState('')
  const [main_services, setMain_services] = useState([])
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Birthday Party')
  const [location, setLocation] = useState('Trivandrum')

  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const formData = new FormData()

      formData.append('company_name', company_name)
      formData.append('event_name', event_name)
      formData.append('price', price)
      formData.append('starting_price', starting_price)
      formData.append('main_services', main_services)
      formData.append('description', description)
      formData.append('category', category)
      formData.append('location', location)

      image1 && formData.append('image1', image1)
      image2 && formData.append('image2', image2)
      image3 && formData.append('image3', image3)
      image4 && formData.append('image4', image4)

      const response = await axios.post(backendUrl + '/api/product/addProduct',
        formData, { withCredentials: true }, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setCompany_name('')
        setEvent_name('')
        setPrice('')
        setStarting_price('')
        setMain_services('')
        setDescription('')
        setCategory('Birthday Party')
        setLocation('Trivandrum')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    finally {
      setLoading(false)
    }

  }

  return (

    <>

      {loading && <Loader />}

      <div className='flex gap-5'>
        <SideBar />

        <div className='mx-50 mt-10 w-fit h-fit p-10 bg-white/10 rounded-2xl'>

          <form onSubmit={onSubmitHandler} className='flex flex-col gap-3'>
            <div>
              <p className='mb-2'>Upload Image</p>

              <div className='flex gap-3'>
                <label htmlFor="image1">
                  <div className='bg-white/50'>
                    <img className='w-15' src={!image1 ? icon.upload_icon : URL.createObjectURL(image1)} alt="" />
                    <input onChange={e => setImage1(e.target.files[0])} type="file" id='image1' hidden />
                  </div>
                </label>
                <label htmlFor="image2">
                  <div className='bg-white/50'>
                    <img className='w-15' src={!image2 ? icon.upload_icon : URL.createObjectURL(image2)} alt="" />
                    <input onChange={e => setImage2(e.target.files[0])} type="file" id='image2' hidden />
                  </div>
                </label>
                <label htmlFor="image3">
                  <div className='bg-white/50'>
                    <img className='w-15' src={!image3 ? icon.upload_icon : URL.createObjectURL(image3)} alt="" />
                    <input onChange={e => setImage3(e.target.files[0])} type="file" id='image3' hidden />
                  </div>
                </label>
                <label htmlFor="image4">
                  <div className='bg-white/50'>
                    <img className='w-15' src={!image4 ? icon.upload_icon : URL.createObjectURL(image4)} alt="" />
                    <input onChange={e => setImage4(e.target.files[0])} type="file" id='image4' hidden />
                  </div>
                </label>
              </div>

            </div>

            <div className='grid grid-cols-2 gap-4 gap-x-10 mt-3'>
              <div className='w-full'>
                <p className='mb-2'>Company Name</p>
                <input onChange={(e) => setCompany_name(e.target.value)} value={company_name}
                  className='w-full max-w-[500px] px-3 py-2 border border-white/30 focus:outline-none 
                      focus:ring-2 focus:ring-pink-500 rounded-md'
                  type="text" placeholder='Enter your Company Name' required />
              </div>

              <div className='w-full'>
                <p className='mb-2'>Event Name</p>
                <input onChange={(e) => setEvent_name(e.target.value)} value={event_name}
                  className='w-full max-w-[500px] px-3 py-2 border border-white/30 focus:outline-none 
                      focus:ring-2 focus:ring-pink-500 rounded-md'
                  type="text" placeholder='Enter your Event Name' required />
              </div>

              <div className='w-full'>
                <p className='mb-2'>Price</p>
                <input onChange={(e) => setPrice(e.target.value)} value={price}
                  className='w-full max-w-[500px] px-3 py-2 border border-white/30 focus:outline-none 
                      focus:ring-2 focus:ring-pink-500 rounded-md'
                  type="number" placeholder='Enter your Price' required />
              </div>

              <div className='w-full'>
                <p className='mb-2'>Startng Price range</p>
                <input onChange={(e) => setStarting_price(e.target.value)} value={starting_price}
                  className='w-full max-w-[500px] px-3 py-2 border border-white/30 focus:outline-none 
                      focus:ring-2 focus:ring-pink-500 rounded-md'
                  type="text" placeholder='Enter your Starting Price range' required />
              </div>
            </div>

            {/* ✅ Services input */}
            <div className="">
              <label className="block text-sm font-medium mb-2">Services (✓ list)</label>

              <div className="flex gap-2">
                <input
                  value={main_services}
                  onChange={(e) => setMain_services(e.target.value)}
                  placeholder="e.g. Floral Decor"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div className='w-full'>
              <p className='mb-2'>Event Description</p>
              <textarea onChange={(e) => setDescription(e.target.value)} value={description}
                className='w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white
                     placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-30'
                type="text" placeholder='Write Here' required />
            </div>

            <div className='flex justify-between w-full'>

              <div>
                <p className='mb-3 text-center'>Event Category</p>
                <select onChange={e => setCategory(e.target.value)}
                  className='w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white
                     focus:outline-none focus:ring-2 focus:ring-pink-500'>
                  <option className='text-black' value="Birthday Party">Birthday Party</option>
                  <option className='text-black' value="Wedding">Wedding</option>
                  <option className='text-black' value="Corporate Events">Corporate Events</option>
                  <option className='text-black' value="Concerts">Concerts</option>
                  <option className='text-black' value="Cultural Programs">Cultural Programs</option>
                </select>
              </div>

              <div>
                <p className='mb-3 text-center'>Event Location</p>
                <select onChange={e => setLocation(e.target.value)}
                  className='w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white
                     focus:outline-none focus:ring-2 focus:ring-pink-500'>
                  <option className='text-black' value="Trivandrum">Trivandrum</option>
                  <option className='text-black' value="Kollam">Kollam</option>
                  <option className='text-black' value="Pathanamthitta">Pathanamthitta</option>
                  <option className='text-black' value="Alappuzha">Alappuzha</option>
                  <option className='text-black' value="Kottayam">Kottayam</option>
                  <option className='text-black' value="Idukki">Idukki</option>
                  <option className='text-black' value="Ernakulam">Ernakulam</option>
                  <option className='text-black' value="Thrissur">Thrissur</option>
                  <option className='text-black' value="Palakkad">Palakkad</option>
                  <option className='text-black' value="Malappuram">Malappuram</option>
                  <option className='text-black' value="Kozhikode">Kozhikode</option>
                  <option className='text-black' value="Wayanad">Wayanad</option>
                  <option className='text-black' value="Kannur">Kannur</option>
                  <option className='text-black' value="Kasaragod ">Kasaragod </option>
                </select>
              </div>

            </div>

            <button disabled={loading} type="submit" className={` text-white text-2xl font-semibold 
              px-4 py-2 rounded-md ${loading ? 'bg-purple-400 cursor-not-allowed' : 'bg-linear-to-r from-pink-500 to-pink-700'}`}>
              Add Event
            </button>

          </form>

        </div>

      </div>

    </>
  )
}

export default Add