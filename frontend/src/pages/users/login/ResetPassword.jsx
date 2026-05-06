import { useState } from 'react'
import { icon } from '../../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { BackendContex } from '../../../context/ConnectBackendContex'
import { useContext } from 'react'

const ResetPassword = () => {

    const navigate = useNavigate()
    const { backendUrl } = useContext(BackendContex)

    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState(1) // 1 = Email, 2 = OTP & Password

    const handleSendOtp = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post(backendUrl + '/api/user/resetOtp', { email })
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
            const { data } = await axios.post(backendUrl + '/api/user/verifyResentOtp', { email, newOtp: otp, newPassword })
            if (data.success) {
                toast.success(data.message)
                navigate('/login')
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
            <div className='flex items-center justify-center min-h-screen p-6'>
                <div className='bg-white/7 p-10 rounded-lg shadow-lg w-full sm:w-96'>
                    <h2 className='text-3xl font-bold text-center mb-5'>Reset Password</h2>

                    {step === 1 ? (
                        <>
                            <p className='text-center text-sm mb-6'>Enter your registered email address to receive a password reset link.</p>
                            <form onSubmit={handleSendOtp}>
                                <div className='mb-6 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-amber-50 text-black'>
                                    <img className='w-6' src={icon.contact_us} alt="" />
                                    <input onChange={e => setEmail(e.target.value)} value={email}
                                        className='bg-transparent outline-none w-full' type="email" placeholder='Enter your Email' required />
                                </div>

                                <button disabled={loading}
                                    className={`w-full py-2.5 rounded-full ${loading ? 'bg-purple-400 cursor-not-allowed' :
                                        'bg-gradient-to-r from-purple-500 to-purple-600 font-medium'
                                        } text-white transition-all hover:scale-[1.02]`}
                                >
                                    {loading ? 'Sending...' : 'Send Reset OTP'}
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            <p className='text-center text-sm mb-6'>Enter the OTP sent to your email and your new password.</p>
                            <form onSubmit={handleResetPassword}>
                                <input type="email" value={email} autoComplete="username" hidden readOnly />
                                <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-amber-50 text-black'>
                                    <span className='w-6 text-center'>🔑</span>
                                    <input onChange={e => setOtp(e.target.value)} value={otp}
                                        className='bg-transparent outline-none w-full' type="text" placeholder='Enter OTP' required autoComplete="one-time-code" />
                                </div>
                                <div className='mb-6 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-amber-50 text-black'>
                                    <span className='w-6 text-center'>🔒</span>
                                    <input onChange={e => setNewPassword(e.target.value)} value={newPassword}
                                        className='bg-transparent outline-none w-full' type="password" placeholder='New Password' required autoComplete="new-password" />
                                </div>

                                <button disabled={loading}
                                    className={`w-full py-2.5 rounded-full ${loading ? 'bg-purple-400 cursor-not-allowed' :
                                        'bg-gradient-to-r from-purple-500 to-purple-600 font-medium'
                                        } text-white transition-all hover:scale-[1.02]`}
                                >
                                    {loading ? 'Resetting...' : 'Reset Password'}
                                </button>
                            </form>
                        </>
                    )}

                    <p className='text-center text-xs mt-6'>Remembered your password?{' '}
                        <span onClick={() => navigate('/login')} className='text-blue-400 cursor-pointer hover:underline font-medium'>Login Here</span>
                    </p>

                </div>
            </div>
        </>
    )
}

export default ResetPassword