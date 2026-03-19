import { useContext, useEffect } from "react"
import { EventManagementContext } from "../../context/EventManagementContext"
import { useNavigate } from "react-router-dom"

const StayingPage = () => {

    const { userData, authLoading } = useContext(EventManagementContext)

    const navigate = useNavigate()

    if (authLoading) return null

    const navigateHome = () => {
        if (userData?.isAdminVerified) {
            navigate('/event-management/home')
        }
    }

    useEffect(() => {
        navigateHome()
    }, [])

    return (
        <div className="min-h-screen bg-[#03051b] text-white overflow-hidden">
            <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 lg:px-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(30,58,138,0.28),transparent_22%),radial-gradient(circle_at_78%_48%,rgba(59,130,246,0.18),transparent_20%),radial-gradient(circle_at_70%_78%,rgba(37,99,235,0.12),transparent_18%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,4,20,0.98)_0%,rgba(1,4,20,0.94)_34%,rgba(2,6,23,0.6)_58%,rgba(2,6,23,0.2)_100%)]" />

                <div className="relative z-10 grid w-full items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                            <span className="block">Manage Your</span>
                            <span className="block">Event Staff</span>
                            <span className="mt-4 block text-[#2fb56e]">Effortlessly</span>
                        </h1>

                        <p className="mt-8 max-w-lg text-lg leading-9 text-slate-300 sm:text-xl">
                            Organize workers, assign tasks,
                            <br className="hidden sm:block" />
                            and track event operations easily.
                        </p>

                        <button className="mt-10 rounded-2xl bg-[#2348ff] px-10 py-5 text-xl font-semibold text-white shadow-[0_18px_40px_rgba(35,72,255,0.35)] transition hover:scale-[1.02] hover:bg-[#3255ff]">
                            Get Started
                        </button>
                    </div>

                    <div className="relative flex min-h-[560px] items-center justify-center lg:min-h-[640px]">
                        <div className="absolute bottom-14 right-16 h-40 w-40 rounded-full bg-[#1d4ed8]/20 blur-3xl" />
                        <div className="absolute left-8 top-20 h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl" />

                        <div className="relative h-[520px] w-full max-w-[760px]">
                            <div className="absolute left-[24%] top-[10%] z-20 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#1f4ee5] shadow-[0_10px_30px_rgba(31,78,229,0.35)]">
                                <div className="text-3xl">✓</div>
                            </div>

                            <div className="absolute left-[43%] top-[14%] z-10 rounded-2xl border border-white/10 bg-white/95 p-4 shadow-2xl">
                                <div className="grid w-16 grid-cols-4 gap-1 text-[10px] text-slate-400">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <div key={i} className="col-span-1 h-2 rounded bg-slate-300" />
                                    ))}
                                </div>
                                <div className="mt-3 grid w-16 grid-cols-4 gap-1">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div key={i} className="h-2.5 rounded bg-slate-200" />
                                    ))}
                                </div>
                            </div>

                            <div className="absolute right-[4%] top-[19%] z-10 rounded-3xl border border-emerald-200/20 bg-white/95 p-5 shadow-[0_20px_60px_rgba(17,24,39,0.3)]">
                                <div className="mb-3 h-4 w-full rounded-full bg-[#68c58e]" />
                                <div className="grid w-44 grid-cols-7 gap-2">
                                    {Array.from({ length: 28 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-3.5 w-3.5 rounded ${i === 16 ? 'bg-[#365dff]' : 'bg-[#d7f0df]'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="absolute left-[10%] top-[35%] z-30 w-28 rotate-[-10deg] rounded-[2rem] border border-white/10 bg-white p-3 shadow-[0_25px_60px_rgba(17,24,39,0.35)]">
                                <div className="h-4 w-full rounded-full bg-[#3dc58a]" />
                                <div className="mt-4 space-y-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className="rounded-xl border border-slate-100 p-2">
                                            <div className="h-1.5 w-10 rounded bg-slate-300" />
                                            <div className="mt-2 h-1.5 w-full rounded bg-slate-200" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute left-[18%] top-[18%] z-20 h-10 w-10 rounded-full bg-[#37ba6d] shadow-[0_10px_25px_rgba(55,186,109,0.45)] ring-8 ring-[#0b1235]">
                                <div className="flex h-full items-center justify-center text-xl font-bold text-white">✓</div>
                            </div>

                            <div className="absolute left-[24%] top-[22%] z-10 h-[290px] w-[500px] rotate-[12deg] rounded-[2.5rem] bg-slate-700/40 blur-2xl" />

                            <div className="absolute left-[22%] top-[20%] z-20 h-[300px] w-[520px] rotate-[12deg] rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,#e8eefc_0%,#cfdaf3_100%)] p-5 shadow-[0_25px_80px_rgba(15,23,42,0.45)]">
                                <div className="h-full w-full rounded-[1.8rem] bg-[linear-gradient(180deg,#ffffff_0%,#ebf1fb_100%)] p-5">
                                    <div className="grid h-full grid-cols-[1fr_150px] gap-4">
                                        <div className="space-y-4 rounded-[1.5rem] bg-slate-50 p-4">
                                            {[1, 2].map((item) => (
                                                <div key={item} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`h-12 w-12 rounded-full ${item === 1 ? 'bg-orange-200' : 'bg-green-200'} flex items-center justify-center text-lg`}>
                                                            {item === 1 ? '👩' : '👨'}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="h-2.5 w-32 rounded-full bg-sky-300" />
                                                            <div className="mt-2 h-2.5 w-24 rounded-full bg-slate-200" />
                                                        </div>
                                                        <div className="h-2.5 w-8 rounded-full bg-slate-200" />
                                                    </div>
                                                    <div className="mt-4 space-y-2">
                                                        <div className="h-2.5 w-full rounded-full bg-slate-200" />
                                                        <div className="h-2.5 w-5/6 rounded-full bg-slate-200" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="rounded-[1.5rem] bg-gradient-to-b from-[#4fd08c] via-[#3ab982] to-[#2d7ff0] p-4 text-white">
                                            <div className="grid h-full grid-cols-3 gap-2">
                                                {Array.from({ length: 15 }).map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`flex items-center justify-center rounded-xl text-xs font-semibold ${i % 4 === 0 ? 'bg-white/30' : 'bg-white/12'}`}
                                                    >
                                                        {i + 1}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute right-[5%] top-[5%] z-30 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#3d94ff] shadow-[0_18px_40px_rgba(61,148,255,0.45)]">
                                <span className="text-4xl text-white">✓</span>
                            </div>

                            <div className="absolute bottom-[2%] right-[18%] z-30">
                                <div className="relative h-56 w-44">
                                    <div className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 rounded-t-[999px] bg-[#f2a13d]" />
                                    <div className="absolute bottom-24 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#0a183f]" />
                                    <div className="absolute bottom-16 left-1/2 h-28 w-32 -translate-x-1/2 rounded-t-[2rem] bg-[#f3a62b]" />
                                    <div className="absolute bottom-16 left-1/2 h-28 w-20 -translate-x-1/2 bg-[#0a183f]" />
                                    <div className="absolute bottom-0 left-7 h-24 w-12 rotate-[8deg] rounded-full bg-[#0a183f]" />
                                    <div className="absolute bottom-0 right-7 h-24 w-12 -rotate-[8deg] rounded-full bg-[#0a183f]" />
                                    <div className="absolute bottom-[6.25rem] left-4 h-6 w-36 rounded-full bg-[#ffcf63]/60 blur-xl" />
                                </div>
                            </div>

                            <div className="absolute bottom-[4%] right-0 z-20">
                                <div className="relative h-52 w-40">
                                    <div className="absolute bottom-0 left-1/2 h-28 w-28 -translate-x-1/2 rounded-t-[2rem] bg-[#234c96]" />
                                    <div className="absolute bottom-24 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-[#f1b18b]" />
                                    <div className="absolute bottom-36 left-1/2 h-10 w-20 -translate-x-1/2 rounded-t-full bg-[#09163b]" />
                                    <div className="absolute bottom-10 left-1/2 h-8 w-24 -translate-x-1/2 rounded-md bg-slate-200" />
                                    <div className="absolute bottom-10 left-8 h-12 w-5 rounded-full bg-[#f1b18b]" />
                                    <div className="absolute bottom-10 right-8 h-12 w-5 rounded-full bg-[#f1b18b]" />
                                </div>
                            </div>

                            <div className="absolute right-[15%] top-[23%] z-0 h-[1px] w-24 border-t border-dashed border-cyan-300/60" />
                            <div className="absolute right-[17%] top-[25%] z-0 h-28 w-28 rounded-full border border-dashed border-cyan-300/30" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StayingPage