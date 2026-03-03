import React, { useContext, useState } from 'react'
import SideBar from '../../components/event-management/SideBar'
import { icon } from '../../assets/assets'
import { BackendContex } from '../../context/ConnectBackendContex'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '../../components/Loading'

const Add = ({ token }) => {

  const { backendUrl } = useContext(BackendContex)

  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [image4, setImage4] = useState(null)

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

      const response = await axios.post(
        backendUrl + '/api/product/addProduct',
        formData, 
          { 
            withCredentials: true, 
            headers: { token } 
          }
      )

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
        setImage1(null)
        setImage2(null)
        setImage3(null)
        setImage4(null)
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

      <div className="flex min-h-screen bg-linear-to-br from-[#0f0c29] via-[#1c0f3f] to-[#0b0f2a] text-white">
        <SideBar />
        <div className="flex-1 p-10 flex justify-center">
          <form onSubmit={onSubmitHandler} 
            className="w-full max-w-4xl bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-xl space-y-8">
          
          {/* Upload Images */}
          <div>
            <p className='mb-2'>Upload Image</p>

            <div className='flex gap-4'>
              <label htmlFor="image1">
                <div className='bg-white/50'>
                  <img className='w-20' src={!image1 ? icon.upload_icon : URL.createObjectURL(image1)} alt="" />
                  <input onChange={e => setImage1(e.target.files[0])} type="file" id='image1' hidden />
                </div>
              </label>
              <label htmlFor="image2">
                <div className='bg-white/50'>
                  <img className='w-20' src={!image2 ? icon.upload_icon : URL.createObjectURL(image2)} alt="" />
                  <input onChange={e => setImage2(e.target.files[0])} type="file" id='image2' hidden />
                </div>
              </label>
              <label htmlFor="image3">
                <div className='bg-white/50'>
                  <img className='w-20' src={!image3 ? icon.upload_icon : URL.createObjectURL(image3)} alt="" />
                  <input onChange={e => setImage3(e.target.files[0])} type="file" id='image3' hidden />
                </div>
              </label>
              <label htmlFor="image4">
                <div className='bg-white/50'>
                  <img className='w-20' src={!image4 ? icon.upload_icon : URL.createObjectURL(image4)} alt="" />
                  <input onChange={e => setImage4(e.target.files[0])} type="file" id='image4' hidden />
                </div>
              </label>
            </div>
          </div>

          {/* Grid Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Company Name</label>
              <input
                value={company_name}
                onChange={(e) => setCompany_name(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter Company Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Event Name</label>
              <input
                value={event_name}
                onChange={(e) => setEvent_name(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter Event Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter Price"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Starting Price Range</label>
              <input
                value={starting_price}
                onChange={(e) => setStarting_price(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter Starting Price"
                required
              />
            </div>
          </div>

          {/* ✅ Services input */}
          <div>
            <label className="block text-sm font-medium mb-2">Services (✓ list)</label>
            <input
              value={main_services}
              onChange={(e) => setMain_services(e.target.value)}
              placeholder="e.g. Floral Decor"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block mb-2">Event Description</label>
            <textarea 
              onChange={(e) => setDescription(e.target.value)} 
              value={description}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-30"
              type="text" 
              placeholder="Write Here..." 
              required 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className='mb-3'>Event Category</label>
              <select 
                value={category}
                onChange={e => setCategory(e.target.value)} 
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option className='text-black' value='Birthday Party'>Birthday Party</option>
                <option className='text-black' value='Wedding'>Wedding</option>
                <option className='text-black' value='Corporate Events'>Corporate Events</option>
                <option className='text-black' value='Concerts'>Concerts</option>
                <option className='text-black' value='Cultural Programs'>Cultural Programs</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Event Location</label>
              <select
                value={location} 
                onChange={e => setLocation(e.target.value)} 
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
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

          <button 
            disabled={loading} 
            type="submit" 
            className={`w-full py-3 text-lg font-semibold rounded-lg transition
            ${loading
              ? 'bg-purple-400 cursor-not-allowed'
              : 'bg-linear-to-r from-pink-500 to-pink-700 hover:scale-105'
            }`}
          >
            Add Event
          </button>

        </form>
      </div>


      </div>

    </>
  )
}

export default Add