import React, { useContext } from 'react'
import { BackendContex } from '../../context/ConnectBackendContex'
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
        e.preventDefault(); // prevent default paste behavior

        const paste = e.clipboardData.getData('text')
        const pasteArray = paste.split('')

        pasteArray.forEach((char, index) => {
            if (inputrefs.current[index]) {
                inputrefs.current[index].value = char
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.defaults.withCredentials = true
        try {

            const otpArray = inputrefs.current.map(e => e.value)
            const otp = otpArray.join('')

            const { data } = await axios.post(backendUrl + '/api/workers/verifyEmail', { otp })

            if (data.success) {
                // setIsLoggedIn(true)
                navidate('/workers/index')

            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className="min-h-screen text-white flex items-center justify-center p-6">
            <div className="w-full max-w-5xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

                <div className="hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-fuchsia-600/30 via-violet-600/20 to-cyan-500/20 border-r border-white/10">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            EventHub Secure Access
                        </div>

                        <h1 className="mt-8 text-4xl font-bold leading-tight">
                            Verify your email and get ready for your next big event.
                        </h1>

                        <p className="mt-4 max-w-md text-white/70 text-base leading-7">
                            Fast and secure OTP verification for organizers, vendors, and attendees.
                            Protect bookings, tickets, and event dashboards with a smooth login flow.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                            <p className="text-sm text-white/60">Upcoming</p>
                            <p className="mt-1 text-lg font-semibold">Tech Summit 2026</p>
                            <p className="text-sm text-white/70">2,400 attendees confirmed</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                                <p className="text-2xl font-bold">98%</p>
                                <p className="text-sm text-white/70">Check-in success</p>
                            </div>
                            <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                                <p className="text-2xl font-bold">30 sec</p>
                                <p className="text-sm text-white/70">Avg verification time</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 sm:p-10 bg-slate-950/70 flex items-center justify-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
                                    OTP Verification
                                </p>
                                <h1 className="mt-2 text-3xl font-bold">Enter code</h1>
                            </div>

                            <div className="h-12 w-12 rounded-2xl bg-fuchsia-500/15 border border-fuchsia-400/20 flex items-center justify-center text-xl">
                                🎟️
                            </div>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-white/65">
                            Enter the 6-digit verification code sent to your email address.
                        </p>

                        <div
                            className="mt-8 flex items-center justify-between gap-3"
                            onPaste={handlePaste}
                        >
                            {Array(6)
                                .fill(0)
                                .map((_, index) => (
                                    <input
                                        type="text"
                                        maxLength="1"
                                        key={index}
                                        required
                                        className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 text-center text-xl font-semibold text-white outline-none transition focus:border-fuchsia-400 focus:bg-white/10 focus:ring-2 focus:ring-fuchsia-500/30"
                                        ref={(e) => (inputrefs.current[index] = e)}
                                        onInput={(e) => handleInput(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                    />
                                ))}
                        </div>

                        <button
                            type="submit"
                            className="mt-8 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-4 text-base font-semibold shadow-lg shadow-fuchsia-900/30 transition hover:scale-[1.01] active:scale-[0.99]"
                        >
                            Verify Email
                        </button>

                        <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                            <p className="text-sm font-medium text-emerald-300">Secure verification</p>
                            <p className="mt-1 text-sm text-white/65 leading-6">
                                Your login protects attendee data, ticketing access, and organizer controls.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-3 text-xs text-white/45">
                            <div className="h-px flex-1 bg-white/10" />
                            Trusted by event teams
                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-white/60">
                            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                                Organizers
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                                Events
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                                Attendees
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Otp