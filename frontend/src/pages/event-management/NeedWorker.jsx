import React, { useCallback, useContext, useState } from "react";
import {
    CalendarDays,
    MapPin,
    Clock3,
    User,
    Phone,
    Users,
    X,
    Minus,
    Plus,
} from "lucide-react";
import axios from "axios";
import { BackendContex } from "../../context/ConnectBackendContex";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const NeedWorker = () => {

    const { backendUrl } = useContext(BackendContex)

    const { workerId } = useParams()

    const [workers, setWorkers] = useState({
        waiters: 0,
        cooks: 0,
        decorators: 0,
        security: 0,
        cleaning: 0,
        drivers: 0,
        bartenders: 0,
        helpers: 0,
        photographers: 0,
    });

    const updateCount = (key, type) => {
        setWorkers((prev) => ({
            ...prev,
            [key]:
                type === "inc"
                    ? prev[key] + 1
                    : prev[key] > 0
                        ? prev[key] - 1
                        : 0,
        }));
    };

    const getSingleBookingData = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + `/api/booking/singleBookingData/${workerId}`)
            if (data.success) {
                return data?.getBookingData || []
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    const { data } = useQuery({
        queryKey: ["singleBookingData"],
        queryFn: getSingleBookingData
    })

    console.log(data);


    const workerFields = [
        { label: "Waiters", key: "waiters" },
        { label: "Cooks", key: "cooks" },
        { label: "Decorators", key: "decorators" },
        { label: "Security Guards", key: "security" },
        { label: "Cleaning Staff", key: "cleaning" },
        { label: "Drivers", key: "drivers" },
        { label: "Bartenders", key: "bartenders" },
        { label: "Helpers", key: "helpers" },
        { label: "Photographers", key: "photographers" },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-black/70 p-4">

            <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0B1020] shadow-[0_0_80px_rgba(88,28,255,0.15)] overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
                    <h2 className="text-3xl font-bold text-white">
                        Request Details
                    </h2>

                    <button className="text-white/70 hover:text-white transition">
                        <X size={28} />
                    </button>
                </div>

                <div className="p-8">

                    {/* Top Section */}
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Image */}
                        <img
                            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop"
                            alt=""
                            className="w-56 h-56 rounded-2xl object-cover border border-white/10"
                        />

                        {/* Details */}
                        <div className="flex-1">

                            <div className="flex items-center gap-4">
                                <h1 className="text-5xl font-bold text-white">
                                    Midhun
                                </h1>

                                <span className="px-5 py-2 rounded-full bg-purple-600/30 border border-purple-500 text-purple-300 text-sm font-medium">
                                    {data?.bookingStatus}
                                </span>
                            </div>

                            <div className="mt-8 space-y-5">

                                <div className="flex items-center gap-4 text-white/80">
                                    <CalendarDays size={18} />
                                    <p>
                                        Event: <span className="text-white">
                                            {data?.productId?.category}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-white/80">
                                    <MapPin size={18} />
                                    <p>
                                        Place: <span className="text-white">
                                            {data?.address?.place}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-white/80">
                                    <CalendarDays size={18} />
                                    <p>
                                        Date: <span className="text-white">
                                            {data?.createdAt.split("T")[0]}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-white/80">
                                    <User size={18} />
                                    <p>
                                        Booked By:
                                        <span className="text-white">
                                            {" "}
                                            {data?.address?.name}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-white/80">
                                    <Phone size={18} />
                                    <p>
                                        Phone:
                                        <span className="text-white">
                                            {data?.address?.phoneNumber}
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10 my-10"></div>

                    {/* Request Workers */}
                    <div>

                        <div className="flex items-center gap-3 mb-2">
                            <Users className="text-purple-500" size={22} />

                            <h3 className="text-3xl font-semibold text-white">
                                Request Workers
                            </h3>
                        </div>

                        <p className="text-white/60 mb-8 text-lg">
                            Add the number of workers you need for this event.
                        </p>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                            {workerFields.map((item) => (
                                <div key={item.key}>

                                    <label className="block text-white mb-3 text-lg font-medium">
                                        {item.label}
                                    </label>

                                    <div className="flex items-center justify-between border border-white/10 rounded-xl bg-[#11182E] overflow-hidden h-14">

                                        <button
                                            onClick={() => updateCount(item.key, "dec")}
                                            className="w-14 h-full flex items-center justify-center text-white hover:bg-white/5 transition"
                                        >
                                            <Minus size={18} />
                                        </button>

                                        <span className="text-white text-lg font-medium">
                                            {workers[item.key]}
                                        </span>

                                        <button
                                            onClick={() => updateCount(item.key, "inc")}
                                            className="w-14 h-full flex items-center justify-center text-white hover:bg-white/5 transition"
                                        >
                                            <Plus size={18} />
                                        </button>

                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* Notes */}
                        <div className="mt-10">

                            <label className="block text-white text-lg mb-4 font-medium">
                                Additional Notes (Optional)
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Enter any special requirements or notes..."
                                className="w-full rounded-2xl border border-white/10 bg-[#11182E] text-white placeholder:text-white/30 p-5 outline-none resize-none"
                            ></textarea>

                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-end gap-5 mt-10">

                            <button className="px-8 py-4 rounded-xl bg-[#1B2238] text-white font-medium hover:bg-[#252f4b] transition">
                                Cancel
                            </button>

                            <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition">
                                Submit Request
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeedWorker;