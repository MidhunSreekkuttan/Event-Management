import { Eye, EyeOff } from 'lucide-react'
import { useContext, useState } from 'react'
import { BackendContex } from '../../../context/ConnectBackendContex'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { EventManagementContext } from '../../../context/EventManagementContext'
import Loader from '../../../components/Loading'

const Login = () => {

  const navigate = useNavigate()

  const { backendUrl } = useContext(BackendContex)
  const { setIsLoggedIn, getAuthState } = useContext(EventManagementContext)

  const [state, setState] = useState('login')

  const [name, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPass, setShowPass] = useState(false)

  const [loading, setLoading] = useState(false)

  const sendVerifyOtp = async () => {

    const { data } = await axios.post(backendUrl + '/api/eventManagement/sendVerifyOtp')

    if (data.success) {
      navigate('/event-management/otp')
      toast.success(data.message)
    }

  }

  const onSubmitHandler = async (e) => {
    try {
      setLoading(true)
      e.preventDefault()
      axios.defaults.withCredentials = true

      if (state === 'login') {

        const { data } = await axios.post(backendUrl + '/api/eventManagement/login', { email, password })

        if (data.success) {
          if (!data.isAccountVerified) {
            await sendVerifyOtp()
          } else {
            setIsLoggedIn(true)
            await getAuthState()
            navigate('/event-management/staying')
          }

        } else {
          toast.error(data.message)
        }

      } else {

        const { data } = await axios.post(backendUrl + '/api/eventManagement/register', { name, email, password })

        if (data.success) {
          toast.success(data.message)
          navigate('/event-management/home')
        } else {
          toast.error(data.message)
        }

      }

    } catch (error) {
      toast.error(error)
    }
    finally {
      setLoading(false)
    }
  }

  return (

    <>

      {loading && <Loader />}

      <div className='flex text-black min-h-screen items-center justify-center w-full'>
        <div className='bg-white shadow-md rounded-lg px-10 py-6 max-w-md'>
          <h1 className='text-2xl font-bold mb-4'>Event Management Panel</h1>
          <p className='text-center'>{state === 'login' ? 'Login with your Account here!' : 'Create a New Account!'}</p>
          <form onSubmit={onSubmitHandler}>
            {state === 'signUp' && (

              <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>User Name</p>
                <input onChange={(e) => setUserName(e.target.value)} value={name}
                  className=' rounded-md w-full px-3 py-3 border border-gray-300 outline-none'
                  type="text" placeholder='Enter your Name' required />
              </div>

            )}

            <div className='mb-3 min-w-72'>
              <p className='text-sm font-medium text-gray-700 mb-2'>Email Id</p>
              <input onChange={e => setEmail(e.target.value)} value={email}
                className=' rounded-md w-full px-3 py-3 border border-gray-300 outline-none'
                type="email" placeholder='your@gmail.com' required />
            </div>
            <div className='mb-3 min-w-72'>
              <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
              <div className='flex relative items-center'>
                <input onChange={e => setPassword(e.target.value)} value={password}
                  className='flex rounded-md w-full px-3 py-3 border border-gray-300 outline-none pr-9'
                  type={showPass === true ? 'text' : 'password'} placeholder='Password' required />
                <span className='absolute right-2 cursor-pointer'>
                  {showPass === true ? (
                    <p onClick={() => setShowPass(false)}><EyeOff /></p>
                  ) : (
                    <p onClick={() => setShowPass(true)}><Eye /></p>
                  )}
                </span>
              </div>
            </div>
            <div>
              {state === 'login' ? (
                <p onClick={() => setState('signUp')}>You don't have an account
                  <span className='cursor-pointer text-blue-400 underline'>Sign Up Here</span></p>
              ) : (
                <p onClick={() => setState('login')}>You Already have an account
                  <span className='cursor-pointer text-blue-400 underline'>Login Here</span></p>
              )}
            </div>
            <button className='bg-black text-amber-50 w-full py-2 rounded-md mt-3' type='submit'>
              {state === 'login' ? 'Login' : 'SignUp'}
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login