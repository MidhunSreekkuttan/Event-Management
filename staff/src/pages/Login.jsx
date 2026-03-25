import axios from 'axios';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { StaffContext } from '../context/staffContext';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/LoadingPage';

axios.defaults.withCredentials = true

const Login = () => {

    const { backendUrl, setIsloggedIn, getStaffData } = useContext(StaffContext)

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)

            const { data } = await axios.post(backendUrl + '/api/staffs/login', {
                email, password
            })
            if (data.success) {
                setIsloggedIn(true)
                await getStaffData()
                navigate('/')
            } else {
                toast.error(data.message)
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

            <div className="h-screen w-screen bg-[#e9e9ee] flex items-center justify-center p-6">
                <div className="w-full min-h-screen max-w-6xl rounded-[36px] overflow-hidden bg-white 
                    shadow-[0_20px_60px_rgba(0,0,0,0.12)] grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side */}
                    <div className="flex items-center justify-center px-8 py-10 md:px-14 lg:px-16 bg-[#fbfbfc]">
                        <div className="w-full max-w-md">
                            <h1 className="text-2xl md:text-5xl font-bold text-slate-800 tracking-tight">
                                Welcome Back!
                            </h1>
                            <p className="mt-4 text-xl text-slate-500">Log in to your account</p>

                            <form onSubmit={submitHandler} className="mt-14 space-y-8">
                                <div>
                                    <label className="block text-xl font-semibold text-slate-700 mb-3">
                                        Email
                                    </label>
                                    <div className="h-16 rounded-xl border border-slate-200 bg-[#f7f7fb] flex items-center px-5 shadow-sm">
                                        <span className="text-slate-400 text-xl">✉</span>
                                        <input
                                            onChange={e => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="example@gmail.com"
                                            className="ml-4 w-full bg-transparent outline-none text-lg text-slate-600 placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xl font-semibold text-slate-700 mb-3">
                                        Password
                                    </label>
                                    <div className="h-16 rounded-xl border border-slate-200 bg-[#f7f7fb] flex items-center px-5 shadow-sm">
                                        <span className="text-slate-400 text-xl">🔒</span>
                                        <input
                                            onChange={e => setPassword(e.target.value)}
                                            type="password"
                                            placeholder="••••••••"
                                            className="ml-4 w-full bg-transparent outline-none text-lg text-slate-600 placeholder:text-slate-500"
                                        />

                                    </div>
                                </div>

                                <button type='submit' className="w-full h-16 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500
                                     text-white text-2xl font-semibold shadow-lg shadow-indigo-200 hover:scale-[1.01]
                                         transition-transform">
                                    Log In
                                </button>

                            </form >
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-300 via-purple-500 to-blue-700" />

                        <div className="absolute -top-10 -right-6 w-64 h-64 rounded-full bg-pink-500/80" />
                        <div className="absolute inset-0">
                            <div className="absolute top-20 left-0 w-full h-44 bg-purple-700/30 rounded-[50%] blur-sm" />
                            <div className="absolute top-72 -left-20 w-[120%] h-60 bg-indigo-950/35 rounded-[50%]" />
                            <div className="absolute bottom-28 left-14 w-[85%] h-44 bg-violet-400/25 rounded-[50%] rotate-6" />
                            <div className="absolute -bottom-14 right-0 w-full h-72 bg-gradient-to-r from-sky-400/70 to-blue-700/80 rounded-t-[45%]" />
                            <div className="absolute bottom-36 left-20 w-[80%] h-20 bg-white/15 rounded-full rotate-[-8deg]" />
                        </div>

                        <div className="absolute top-40 left-14 w-7 h-7 rounded-full bg-sky-400/80" />
                        <div className="absolute top-24 left-1/4 text-pink-400 text-4xl">✦</div>
                        <div className="absolute top-28 right-52 w-8 h-8 bg-amber-300 rotate-12" />
                        <div className="absolute top-28 right-36 w-6 h-6 rounded-full border-4 border-pink-200/70" />
                        <div className="absolute bottom-60 right-48 w-7 h-7 rounded-full bg-sky-300/70" />
                        <div className="absolute top-1/3 right-10 grid grid-cols-2 gap-3 opacity-45">
                            <div className="w-8 h-8 rounded-full bg-white/70" />
                            <div className="w-8 h-8 rounded-full bg-white/40" />
                            <div className="w-8 h-8 rounded-full bg-white/50" />
                            <div className="w-8 h-8 rounded-full bg-white/30" />
                        </div>

                        <div className="relative z-10 w-[560px] rounded-[22px] bg-slate-900/90 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.28)] border border-white/10 overflow-hidden">
                            <div className="h-12 bg-slate-800 flex items-center justify-between px-5 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400" />
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-slate-500" />
                                        <div className="w-3 h-3 rounded-full bg-slate-500" />
                                        <div className="w-3 h-3 rounded-full bg-slate-500" />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-slate-500" />
                                    <div className="w-3 h-3 rounded-full bg-slate-500" />
                                    <div className="w-3 h-3 rounded-full bg-slate-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-[96px_1fr_72px] min-h-[300px]">
                                <div className="bg-slate-800 p-4 space-y-4">
                                    <div className="space-y-3 pt-2">
                                        <div className="h-4 w-10 rounded bg-slate-500" />
                                        <div className="h-4 w-12 rounded bg-slate-500" />
                                    </div>
                                    <div className="space-y-4 pt-3">
                                        {['bg-sky-300', 'bg-fuchsia-400', 'bg-orange-400', 'bg-teal-300', 'bg-lime-400', 'bg-cyan-400', 'bg-violet-500'].map((color, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className={`w-4 h-4 rounded ${color}`} />
                                                <div className="h-3 flex-1 rounded bg-slate-500/80" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#f8f8fb] p-8 flex items-center justify-center">
                                    <div className="w-full max-w-[280px] rounded-xl bg-white shadow-sm p-6">
                                        <div className="h-4 w-40 rounded bg-slate-400 mb-8" />
                                        <div className="grid grid-cols-[60px_1fr] gap-6 items-center">
                                            <div className="relative w-44 h-44 mx-auto col-span-2 rounded-full bg-[conic-gradient(#f472b6_0_18%,#f6ad55_18%_34%,#22c3d6_34%_52%,#4f6ef7_52%_72%,#a855f7_72%_86%,#ec4899_86%_100%)]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-800 p-4 space-y-4">
                                    <div className="space-y-3">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                            <div key={i} className="flex items-center justify-between gap-2">
                                                <div className="w-3 h-3 rounded-full bg-slate-400" />
                                                <div className="h-2 flex-1 rounded bg-slate-500" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-white/10 pt-4 space-y-3">
                                        {['bg-white', 'bg-sky-300', 'bg-orange-300', 'bg-pink-400'].map((color, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className={`w-4 h-4 rounded ${color}`} />
                                                <div className="h-3 flex-1 rounded bg-slate-500" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-16 top-1/2 -translate-y-1/2 w-24 h-40 rounded-2xl bg-white/35 backdrop-blur-sm shadow-lg p-3 space-y-3">
                            <div className="h-7 rounded-md bg-indigo-300/70" />
                            <div className="h-7 rounded-md bg-indigo-300/50" />
                            <div className="h-7 rounded-md bg-indigo-300/70" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
