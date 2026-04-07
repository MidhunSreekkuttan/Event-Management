import React, { useContext, useEffect, useRef, useState } from "react";
import {
    UserRound,
    Mail,
    RectangleEllipsis,
    FileLockIcon,
    EyeIcon,
    EyeOffIcon,
} from "lucide-react";
import { toast } from "react-toastify";
import axios from 'axios'
import { AdminContext } from "../Context";

const AppointStaff = () => {

    const { backendUrl } = useContext(AdminContext)

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [state, setState] = useState("text")

    //useRef things
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()

    useEffect(() => {
        input1.current.focus()
    }, [])

    const handleKey = (e, nextRef) => {
        if (e.key === "Enter") {

            if (e.target.value.trim() === "") {
                toast.dismiss()
                return
            }
            nextRef.current.focus()
        }

    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        try {

            const formData = {
                name: form.name,
                email: form.email,
                password: form.password
            }

            const { data } = await axios.post(backendUrl + "/api/staffs/register",
                formData,
                { withCredentials: true }
            )
            if (data.success) {
                toast.success(data.message)
                setForm((prev) => ({
                    ...prev,
                    name: "",
                    email: "",
                    password: ""
                }))
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }

    const redGlass =
        "border border-red-200/60 bg-gradient-to-br from-white/80 via-red-50/70 to-red-100/60 backdrop-blur-2xl shadow-[0_25px_100px_rgba(220,38,38,0.18)]";

    const inputClass =
        "flex h-12 items-center gap-3 rounded-2xl border border-red-200/60 bg-white/70 px-4 backdrop-blur-xl transition focus-within:border-red-300 focus-within:bg-white/90";

    const labelClass =
        "mb-2 flex items-center gap-2 text-[15px] font-semibold text-black/75";

    const iconClass = "text-red-400";

    return (
        <div
            className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.16),
            _transparent_24%),radial-gradient(circle_at_top_right,_rgba(0,0,0,0.08),
                _transparent_20%),linear-gradient(135deg,_#ffffff,_#fff1f2,_#fee2e2)] text-black pt-3"
        >
            <div className="flex min-h-screen">
                <main className="flex-1 px-6 py-5 sm:px-10">
                    <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-black">
                        Create Staff Member
                    </h2>
                    <p className="mt-2 text-sm text-black/55">
                        Add a new staff member and assign event responsibilities.
                    </p>

                    <form onSubmit={submitHandler} className={`relative mt-8 rounded-[32px] px-6 pb-6 pt-8 sm:px-8 ${redGlass}`}>
                        <h3 className="text-[20px] font-semibold text-black">
                            Staff Information
                        </h3>
                        <div className="mt-4 border-t border-red-200/60" />

                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                            {/* Full Name */}
                            <div className="lg:col-span-2">
                                <label className={labelClass}>
                                    <UserRound size={18} className={iconClass} />
                                    Full Name
                                </label>
                                <div className={inputClass}>
                                    <UserRound size={18} className={iconClass} />
                                    <input
                                        ref={input1}
                                        onKeyDown={(e) => handleKey(e, input2)}
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={onChangeHandler}
                                        placeholder="Enter full name"
                                        className="w-full bg-transparent text-[16px] text-black placeholder:text-black/40
                                             outline-none"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className={labelClass}>
                                    <Mail size={18} className={iconClass} />
                                    Email Address
                                </label>
                                <div className={inputClass}>
                                    <Mail size={18} className={iconClass} />
                                    <input
                                        ref={input2}
                                        onKeyDown={(e) => handleKey(e, input3)}
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={onChangeHandler}
                                        placeholder="Enter email address"
                                        className="w-full bg-transparent text-[16px] text-black placeholder:text-black/40
                                             outline-none"
                                    />
                                </div>
                            </div>

                            {/*Password*/}
                            <div>
                                <label className={labelClass}>
                                    <FileLockIcon size={18} className={iconClass} />
                                    Password
                                </label>
                                <div className={inputClass}>
                                    <RectangleEllipsis size={18} className={iconClass} />
                                    <input
                                        ref={input3}
                                        type={state === "text" ? "text" : "password"}
                                        name="password"
                                        value={form.password}
                                        onChange={onChangeHandler}
                                        placeholder="Enter email address"
                                        className="w-full bg-transparent text-[16px] text-black placeholder:text-black/40
                                             outline-none"
                                    />

                                    {state === "text" ? (
                                        <EyeOffIcon className="cursor-pointer" onClick={() => setState("password")} />
                                    ) : (
                                        <EyeIcon className="cursor-pointer" onClick={() => setState("text")} />
                                    )}

                                </div>
                            </div>

                            <div />
                        </div>

                        <div className="mt-6 border-t border-red-200/60" />

                        {/* Buttons */}
                        <div className="mt-5 flex justify-end gap-4">
                            <button className="h-12 min-w-[180px] rounded-2xl bg-red-600 px-6 text-[16px] font-semibold
                                 text-white shadow-[0_12px_30px_rgba(220,38,38,0.28)] transition hover:bg-red-700
                                    active:scale-95 cursor-pointer">
                                Create Staff
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default React.memo(AppointStaff);