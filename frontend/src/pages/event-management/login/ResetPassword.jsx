import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { BackendContex } from '../../../context/ConnectBackendContex'

const ResetPassword = () => {

  const navigate = useNavigate()
  const { backendUrl } = useContext(BackendContex)

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1) 
  const handleSendOtp = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.post(backendUrl + '/api/eventManagement/resendVerifyOtp', { email })
      if (data.success) {
        toast.success(data.message)
        setStep(2)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.post(backendUrl + '/api/eventManagement/verifyResetOtp', { email, otp, newPassword })
      if (data.success) {
        toast.success(data.message)
        navigate('/event-management/login')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (

    <>

      <div className='flex text-black min-h-screen items-center justify-center w-full'>
        <div className='bg-white shadow-md rounded-lg px-10 py-8 max-w-md w-full'>
          <h1 className='text-2xl font-bold mb-3 text-center'>Reset Password</h1>
          
          {step === 1 ? (
            <>
              <p className='text-center text-sm text-gray-600 mb-6'>Enter your email to receive a reset link.</p>
              <form onSubmit={handleSendOtp}>
                <div className='mb-6 min-w-72'>
                  <p className='text-sm font-medium text-gray-700 mb-2'>Email Id</p>
                  <input onChange={e => setEmail(e.target.value)} value={email}
                    className='rounded-md w-full px-3 py-3 border border-gray-300 outline-none'
                    type="email" placeholder='your@gmail.com' required />
                </div>

                <button disabled={loading} className={`w-full py-3 rounded-md mt-2 text-white font-medium transition ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
                }`} type='submit'>
                  {loading ? 'Sending...' : 'Send Reset OTP'}
                </button>
              </form>
            </>
          ) : (
            <>
              <p className='text-center text-sm text-gray-600 mb-6'>Enter the OTP sent to your email and your new password.</p>
              <form onSubmit={handleResetPassword}>
                <input type="email" value={email} autoComplete="username" hidden readOnly />
                <div className='mb-4 min-w-72'>
                  <p className='text-sm font-medium text-gray-700 mb-2'>OTP Code</p>
                  <input onChange={e => setOtp(e.target.value)} value={otp}
                    className='rounded-md w-full px-3 py-3 border border-gray-300 outline-none'
                    type="text" placeholder='Enter OTP' required autoComplete="one-time-code" />
                </div>
                <div className='mb-6 min-w-72'>
                  <p className='text-sm font-medium text-gray-700 mb-2'>New Password</p>
                  <input onChange={e => setNewPassword(e.target.value)} value={newPassword}
                    className='rounded-md w-full px-3 py-3 border border-gray-300 outline-none'
                    type="password" placeholder='New Password' required autoComplete="new-password" />
                </div>

                <button disabled={loading} className={`w-full py-3 rounded-md mt-2 text-white font-medium transition ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
                }`} type='submit'>
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            </>
          )}

          <p className="text-center text-sm mt-6">
            Remembered your password?{' '}
            <span onClick={() => navigate('/event-management/login')} className="cursor-pointer text-blue-500 hover:text-blue-600 underline">Login Here</span>
          </p>

        </div>
      </div>

    </>
  )
}

export default ResetPassword