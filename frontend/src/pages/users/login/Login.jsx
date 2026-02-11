import React, { useState } from 'react'
import { icon } from '../../../assets/assets'
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {

  const [state, setState] = useState('sign in')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='flex items-center justify-center min-h-screen p-6'>
      <div className='bg-white/7 p-10 rounded-lg shadow-lg w-full sm:w-96'>
        <h2 className='text-4xl font-bold text-center mb-5'>{state === 'sign up' ? 'Create Account' : 'Login'}</h2>
        <p className='text-center mb-6'>{state === 'sign up' ? 'Create Your Account' : 'login to your account'}</p>

        <form>
          {state === 'sign up' && (
            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-amber-50 text-black'>
              <img className='w-6' src={icon.userIcon} alt="" />
              <input onChange={e => setName(e.target.value)} value={name}
                className='bg-transparent outline-none' type="text" placeholder='Enter your Full name' required />
            </div>
          )}

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-amber-50 text-black'>
            <img className='w-6' src={icon.contact_us} alt="" />
            <input onChange={e => setEmail(e.target.value)} value={email}
              className='bg-transparent outline-none' type="email" placeholder='Enter your Email' required />
          </div>

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-amber-50 text-black'>
            <img className='w-6' src={icon.secure_icon} alt="" />
            <input onChange={e => setPassword(e.target.value)} value={password}
              className='bg-transparent outline-none' type={showPassword ? 'text' : "password"} placeholder='Enter your Password' required />
            <span className='cursor-pointer'>
              {showPassword ? (
                <p onClick={() => setShowPassword(false)}><EyeOff className='relative right-3 size-5' /></p>
              ) : (
                <p onClick={() => setShowPassword(true)}><Eye className='relative right-3 size-5' /></p>
              )}
            </span>
          </div>

          <button className='w-full mt-8 py-2.5 rounded-full bg-linear-to-r from-purple-500 to-purple-600 font-medium'>
            {state === 'sign up' ? 'Sign Up' : 'Login'}
          </button>
        </form>

        {state === 'sign up' ? (<p className='text-center text-xs mt-5'>Alredy have an Account?{' '}
          <span onClick={() => setState('login')} className='text-blue-400 cursor-pointer underline'>Login Here</span>
        </p>
        ) : (
          <p className='text-center text-xs mt-5'>Don't have an Account?{' '}
            <span onClick={() => setState('sign up')} className='text-blue-400 cursor-pointer underline'>Sign Up Here</span>
          </p>
        )}

      </div>
    </div>
  )
}

export default Login