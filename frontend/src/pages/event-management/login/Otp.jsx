import React, { useContext } from 'react'
import { BackendContex } from '../../../context/ConnectBackendContex'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Otp = () => {

    const navidate = useNavigate()

    const inputrefs = React.useRef([])

    const { backendUrl } = useContext(BackendContex)

    const handleInput = (e, index) => {
        if (e.target.value.length > 0 && index < inputrefs.current.length - 1) {
            inputrefs.current[index + 1].focus()
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
            inputrefs.current[index - 1].focus()
        }
    }

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text')
        const pasteArray = paste.split('')
        pasteArray.forEach((char, index) => {
            pasteArray.forEach((char, index) => {
                if (inputrefs.current[index]) {
                    inputrefs.current[index].value = char
                }
            })
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.defaults.withCredentials = true
        try {

            const otpArray = inputrefs.current.map(e => e.value)
            const otp = otpArray.join('')

            const { data } = await axios.post(backendUrl + '/api/eventManagement/verifyEmail', { otp })

            if (data.success) {
                navidate('/event-management/home')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-amber-300'>
            <form onSubmit={handleSubmit} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
                <h1 className='text-white text-2xl font-semibold text-center mb-4'>EmailVerify Otp</h1>
                <p className='text-center mb-6 text-indigo-300'>Enter the 6 digit code sent to your email id.</p>
                <div className='flex justify-between mb-8' onPaste={handlePaste}>
                    {Array(6).fill(0).map((_, index) => (
                        <input type="text" maxLength='1' key={index} required
                            className='w-12 h-12 bg-amber-600 text-white text-center text-xl rounded-md'
                            ref={e => inputrefs.current[index] = e}
                            onInput={(e) => handleInput(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))}
                </div>
                <button className='w-full py-3 bg-amber-400 rounded-full'>Verify Email</button>
            </form>
        </div>
    )
}

export default Otp