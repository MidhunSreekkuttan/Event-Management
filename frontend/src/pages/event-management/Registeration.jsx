import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Registration = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        companyName: '',
        ownerName: '',
        contactNumber: '',
        email: '',
        address: ''
    })
    const [businessFile, setBusinessFile] = useState(null);
    const [gstFile, setGstFile] = useState(null);

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData(data => ({ ...data, [name]: value }))
    }

    const handleClick = () => {
        navigate('/event-management/waiting')
    }

    const inputBase =
        'h-16 w-full rounded-2xl border border-[#24315e] bg-[#0a1231]/85 px-14 text-[18px] text-white placeholder:text-slate-400 outline-none transition focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20';

    const handleSubmit = (e) => {
        e.preventDefault();

        try {

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    };

    return (
        <div className="min-h-screen overflow-hidden bg-[#020617] text-white">
            <div className="relative flex min-h-screen items-center justify-center px-6 py-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.18),transparent_22%),radial-gradient(circle_at_80%_35%,rgba(59,130,246,0.12),transparent_18%),radial-gradient(circle_at_68%_70%,rgba(96,165,250,0.12),transparent_20%),linear-gradient(180deg,#020617_0%,#030b23_50%,#020617_100%)]" />
                <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />

                <div className="relative z-10 w-full max-w-7xl rounded-[32px] border border-white/10 bg-[linear-gradient(90deg,rgba(8,12,35,0.96)_0%,rgba(8,12,35,0.94)_58%,rgba(6,18,50,0.78)_100%)] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:p-12">
                    <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <div className="mb-8 flex items-start gap-4">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8] shadow-[0_16px_30px_rgba(29,78,216,0.35)]">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-8 w-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M8 7V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8V7" />
                                        <rect x="5" y="7" width="14" height="13" rx="2.2" />
                                        <path d="m9.3 13 1.7 1.7 3.7-3.9" />
                                    </svg>
                                </div>

                                <div>
                                    <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                        Register Your Event
                                        <br />
                                        Management Company
                                    </h1>
                                    <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
                                        Please fill out the form below to create an account
                                        <br className="hidden sm:block" />
                                        for your event management business.
                                    </p>
                                </div>
                            </div>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="relative">
                                    <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                        <BuildingIcon />
                                    </span>
                                    <input onChange={onChangeHandler} name='companyName' value={formData.companyName}
                                        type="text" placeholder="Company Name" className={inputBase} />
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="relative">
                                        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                            <UserIcon />
                                        </span>
                                        <input onChange={onChangeHandler} name='ownerName' value={formData.ownerName}
                                            type="text" placeholder="Owner's Name" className={inputBase} />
                                    </div>

                                    <div className="relative">
                                        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                            <PhoneIcon />
                                        </span>
                                        <input onChange={onChangeHandler} name='contactNumber' value={formData.contactNumber}
                                            type="number" placeholder="Contact Number" className={inputBase} />
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="relative">
                                        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                            <MailIcon />
                                        </span>
                                        <input onChange={onchange} name='email' value={formData.email}
                                            type="email" placeholder="Email" className={inputBase} />
                                    </div>

                                    <div className="relative">
                                        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                            <LocationIcon />
                                        </span>
                                        <input onchange={onChangeHandler} name='address' value={formData.address}
                                            type="text" placeholder="Address" className={inputBase} />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <label className="mb-3 flex items-center gap-3 text-[20px] font-medium text-white">
                                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2563eb] text-white shadow-lg shadow-blue-500/20">
                                            <CheckBadgeIcon />
                                        </span>
                                        Upload Business Registration
                                    </label>

                                    <div className="rounded-2xl border border-dashed border-[#2a3d75] bg-[#09112c]/80 p-4">
                                        <label className="inline-flex cursor-pointer items-center gap-3 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-8 py-4 text-lg font-medium text-white shadow-[0_14px_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.01]">
                                            <UploadIcon />
                                            <span>{businessFile ? businessFile.name : 'Upload Document'}</span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                onChange={(e) => setBusinessFile(e.target.files[0] || null)}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <label className="mb-3 flex items-center gap-3 text-[20px] font-medium text-white">
                                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2563eb] text-white shadow-lg shadow-blue-500/20">
                                            <FileIcon />
                                        </span>
                                        Upload GST For Verification
                                    </label>

                                    <label className="block cursor-pointer rounded-3xl border border-dashed border-[#38519a] bg-[#09112c]/65 px-6 py-10 text-center transition hover:border-[#60a5fa] hover:bg-[#0b1433]">
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            onChange={(e) => setGstFile(e.target.files[0] || null)}
                                        />

                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1e3a8a]/50 text-[#7ea9ff]">
                                            <CloudUploadIcon />
                                        </div>

                                        <p className="mt-5 text-[18px] text-slate-300 sm:text-[20px]">
                                            Drag &amp; drop or <span className="font-semibold text-[#60a5fa]">Browse</span>
                                        </p>

                                        <p className="mt-2 text-sm text-slate-500 sm:text-base">
                                            {gstFile ? gstFile.name : 'PDF, JPG, or PNG up to 5MB'}
                                        </p>
                                    </label>
                                </div>

                                <button onClick={handleClick}
                                    type="submit"
                                    className="mt-2 h-16 w-full rounded-2xl bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] text-2xl font-semibold text-white shadow-[0_22px_50px_rgba(37,99,235,0.38)] transition hover:translate-y-[-1px]"
                                >
                                    Register Now
                                </button>
                            </form>
                        </div>

                        <div className="relative hidden min-h-[640px] lg:block">
                            <div className="absolute right-0 top-4 z-20 flex h-20 w-20 items-center justify-center rounded-full bg-[#3b82f6] shadow-[0_16px_40px_rgba(59,130,246,0.45)]">
                                <span className="text-4xl text-white">✓</span>
                            </div>

                            <div className="absolute left-6 top-24 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e] shadow-[0_16px_40px_rgba(34,197,94,0.4)]">
                                <span className="text-3xl text-white">✓</span>
                            </div>

                            <div className="absolute left-20 top-10 z-20 rounded-2xl border border-white/10 bg-white/95 p-4 shadow-2xl">
                                <div className="mb-3 grid grid-cols-4 gap-1">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <div key={i} className="h-2 rounded bg-slate-300" />
                                    ))}
                                </div>
                                <div className="grid w-16 grid-cols-4 gap-1">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div key={i} className="h-2.5 rounded bg-slate-200" />
                                    ))}
                                </div>
                            </div>

                            <div className="absolute right-2 top-28 z-20 rounded-3xl border border-emerald-100/10 bg-white/95 p-5 shadow-[0_20px_60px_rgba(17,24,39,0.35)]">
                                <div className="mb-3 h-4 w-full rounded-full bg-[#6dcf96]" />
                                <div className="grid w-40 grid-cols-7 gap-2">
                                    {Array.from({ length: 28 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-3.5 w-3.5 rounded ${i === 17 ? 'bg-[#365dff]' : 'bg-[#d8f2e1]'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="absolute left-10 top-28 z-0 h-[280px] w-[420px] rotate-[13deg] rounded-[3rem] bg-[#28468d]/25 blur-3xl" />

                            <div className="absolute left-10 top-24 z-10 h-[300px] w-[470px] rotate-[13deg] rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,#dfe8fb_0%,#bac9ed_100%)] p-5 shadow-[0_35px_90px_rgba(2,6,23,0.55)]">
                                <div className="grid h-full grid-cols-[1fr_136px] gap-4 rounded-[2rem] bg-[linear-gradient(180deg,#ffffff_0%,#edf3fd_100%)] p-5">
                                    <div className="space-y-4 rounded-[1.5rem] bg-slate-50 p-4">
                                        {[1, 2].map((item) => (
                                            <div key={item} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`flex h-12 w-12 items-center justify-center rounded-full text-xl ${item === 1 ? 'bg-orange-200' : 'bg-green-200'
                                                            }`}
                                                    >
                                                        {item === 1 ? '👩' : '👨'}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="h-2.5 w-28 rounded-full bg-sky-300" />
                                                        <div className="mt-2 h-2.5 w-20 rounded-full bg-slate-200" />
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

                                    <div className="rounded-[1.5rem] bg-gradient-to-b from-[#53d38f] via-[#44bb85] to-[#2f80ed] p-4">
                                        <div className="grid h-full grid-cols-3 gap-2 text-xs font-semibold text-white">
                                            {Array.from({ length: 15 }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex items-center justify-center rounded-xl ${i % 4 === 0 ? 'bg-white/30' : 'bg-white/12'
                                                        }`}
                                                >
                                                    {i + 1}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-20 right-12 z-20">
                                <div className="relative h-64 w-48">
                                    <div className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 rounded-t-[2.5rem] bg-[#2550a8]" />
                                    <div className="absolute bottom-[7.4rem] left-1/2 h-[4.5rem] w-[4.5rem] -translate-x-1/2 rounded-full bg-[#f0b493]" />
                                    <div className="absolute bottom-[11rem] left-1/2 h-10 w-24 -translate-x-1/2 rounded-t-full bg-[#06143d]" />
                                    <div className="absolute bottom-[4.5rem] left-1/2 h-10 w-28 -translate-x-1/2 rounded-lg bg-slate-200" />
                                    <div className="absolute bottom-[4rem] left-7 h-14 w-6 rounded-full bg-[#f0b493]" />
                                    <div className="absolute bottom-[4rem] right-7 h-14 w-6 rounded-full bg-[#f0b493]" />
                                    <div className="absolute bottom-0 left-10 h-24 w-12 rounded-full bg-[#17387f]" />
                                    <div className="absolute bottom-0 right-10 h-24 w-12 rounded-full bg-[#17387f]" />
                                </div>
                            </div>

                            <div className="absolute bottom-36 right-44 z-10 h-[220px] w-[220px] rounded-full border border-dashed border-cyan-400/35" />
                            <div className="absolute bottom-44 right-36 z-10 h-[140px] w-[180px] rounded-full border border-dashed border-cyan-400/45" />
                            <div className="absolute bottom-32 right-24 z-0 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function BuildingIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="4" y="3" width="14" height="18" rx="2" />
            <path d="M8 7h2M12 7h2M8 11h2M12 11h2M8 15h2M12 15h2M18 9h2M18 13h2M18 17h2" />
        </svg>
    );
}

function UserIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2.25c-3.26 0-6.75 1.64-6.75 4.13A1.62 1.62 0 0 0 6.88 20h10.24a1.62 1.62 0 0 0 1.63-1.62c0-2.49-3.49-4.13-6.75-4.13Z" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M7.8 3.5A1.8 1.8 0 0 0 6 5v2.2a1.8 1.8 0 0 0 .53 1.28l1.64 1.64a14.2 14.2 0 0 0 5.71 5.71l1.64 1.64A1.8 1.8 0 0 0 16.8 18H19a1.8 1.8 0 0 0 1.5-.8l1.1-1.66a1.8 1.8 0 0 0-.27-2.3l-2.42-2.42a1.8 1.8 0 0 0-2.14-.32l-1.29.64a1.3 1.3 0 0 1-1.35-.15l-1.13-.85a9.9 9.9 0 0 1-2.14-2.14L10 6.87a1.3 1.3 0 0 1-.15-1.35l.64-1.29a1.8 1.8 0 0 0-.32-2.14L7.75 3.77a1.8 1.8 0 0 0-.95-.27Z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M12 2.75A6.25 6.25 0 0 0 5.75 9c0 4.69 6.25 12.25 6.25 12.25S18.25 13.69 18.25 9A6.25 6.25 0 0 0 12 2.75Zm0 8.5A2.25 2.25 0 1 1 14.25 9 2.25 2.25 0 0 1 12 11.25Z" />
        </svg>
    );
}

function UploadIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 16V6" />
            <path d="m8 10 4-4 4 4" />
            <path d="M4 16.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5" />
        </svg>
    );
}

function CloudUploadIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M18.5 10.75a4.75 4.75 0 0 0-9.14-1.82A3.8 3.8 0 0 0 9 16.5h3v-4l-1.75 1.75-1.06-1.06L12 10.38l2.81 2.81-1.06 1.06L12 12.5v4h6.5a3.25 3.25 0 0 0 0-6.5Z" />
        </svg>
    );
}

function CheckBadgeIcon() {
    return <span className="text-sm font-bold">✓</span>;
}

function FileIcon() {
    return <span className="text-sm font-bold">▲</span>;
}

export default Registration;