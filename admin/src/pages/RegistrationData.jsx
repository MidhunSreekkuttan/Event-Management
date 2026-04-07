import React, { useCallback, useContext, useState } from "react";
import { EyeIcon } from "lucide-react";
import { AdminContext } from "../Context";
import { toast } from "react-toastify";
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Loader from "../components/Loading";
import { useNavigate } from 'react-router-dom'

const RegistrationData = () => {

    const { backendUrl } = useContext(AdminContext)

    const navigate = useNavigate()

    const [registration, setRegistration] = useState("eventmanagers")

    const getRegistrationlist = useCallback(async () => {

        try {

            const endpoint = registration === "eventmanagers" ? "/api/product/listDocument" : "/api/workers/listFiles"
            const { data } = await axios.get(backendUrl + endpoint)

            if (data.success) {
                return data.registrations
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl, registration])

    const { data: RegistrationList, isLoading, error } = useQuery({
        queryKey: ["RegistrationList", registration],
        queryFn: getRegistrationlist
    })

    const handleClick = (id) => {
        navigate(`/RegistrationData/${registration}/${id}`)
    }

    const redGlass =
        "border border-red-200/60 bg-gradient-to-br from-white/80 via-red-50/70 to-red-100/60 backdrop-blur-2xl shadow-[0_25px_100px_rgba(220,38,38,0.18)]";

    if (error) return <div>Error:{error.message}</div>

    return (

        <>

            {isLoading && <Loader />}

            <div
                className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.16),
            _transparent_24%),radial-gradient(circle_at_top_right,_rgba(0,0,0,0.08),
                _transparent_20%),linear-gradient(135deg,_#ffffff,_#fff1f2,_#fee2e2)] text-black pt-3"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className={`rounded-[32px] p-6 sm:p-8 ${redGlass}`}>
                        {/* Header */}
                        <div className="flex flex-col gap-5 border-b border-red-200/60 pb-6 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <h1 className="mt-2 text-4xl font-bold tracking-tight text-black">
                                    Company Registrations
                                </h1>
                                <p className="mt-2 text-sm text-black/55">
                                    View all registered company details here
                                </p>
                            </div>
                        </div>

                        {/* filter button*/}
                        <div className="flex gap-3">
                            <Btn onClick={() => setRegistration("eventmanagers")} text="Eventmanagers" />

                            <Btn onClick={() => setRegistration("workers")} text="Workers" />
                        </div>

                        {/* Table Card */}
                        <div className="mt-6 overflow-hidden rounded-[24px] border border-red-200/60 bg-white/60 backdrop-blur-xl">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="bg-white/50">
                                        <tr className="text-left text-sm font-semibold text-black/70">
                                            <th className="px-6 py-4">{registration === "eventmanagers" ? "Company Name" :
                                                "Name"}</th>
                                            <th className="px-6 py-4">
                                                {registration === "eventmanagers" ? "Owner Name" : "Job Role"}
                                            </th>
                                            <th className="px-6 py-4">Contact Number</th>
                                            <th className="px-6 py-4">Email Address</th>
                                            <th className="px-6 py-4">Registration Date</th>
                                            <th className="px-6 py-4 text-center">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-red-100/70 bg-transparent">
                                        {Array.isArray(RegistrationList) &&
                                            RegistrationList?.map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className="transition hover:bg-white/40"
                                                >
                                                    <td className="px-6 py-4 text-sm font-semibold text-black">
                                                        {
                                                            registration === "eventmanagers" ? item?.companyName : item?.name
                                                        }
                                                    </td>

                                                    <td className="px-6 py-4 text-sm text-black/70">
                                                        {
                                                            registration === "eventmanagers" ? item?.ownerName :
                                                                item?.jobRole
                                                        }
                                                    </td>

                                                    <td className="px-6 py-4 text-sm text-black/70">
                                                        {
                                                            registration === "eventmanagers" ? item?.contactNumber :
                                                                item?.mobileNumber
                                                        }
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        <div className="max-w-[220px] truncate text-sm font-medium text-black/80">
                                                            {item?.email}
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        <div className="text-sm font-medium text-black/80">
                                                            {new Date(item?.date).toLocaleString()}
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-4 text-center">
                                                        <button onClick={() => handleClick(item._id)}
                                                            className="flex gap-1 rounded-2xl border border-red-200/60
                                                     bg-white/70 px-4 py-2 text-sm font-semibold text-red-700 transition
                                                         hover:bg-red-50 cursor-pointer active:scale-95">
                                                            <EyeIcon size={18} className="relative top-0.5" /> View
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </>

    );
};

export function Btn({ text, ...props }) {

    return (

        <button
            {...props}
            className="bg-gradient-to-br from-red-600 to-black text-white rounded-2xl px-5 py-3
                                 cursor-pointer transition-all active:scale-95"
        >
            {text}
        </button>

    )


}

export default React.memo(RegistrationData);