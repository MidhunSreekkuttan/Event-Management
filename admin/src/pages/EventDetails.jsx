import React from 'react'
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const EventDetails = () => {

    const { eventId } = useParams()

    const queryClient = useQueryClient()

    const eventData = queryClient.getQueryData(["eventList"])

    const findData = eventData?.find(item => item._id === eventId)

    const getStatusClass = (status) => {
        if (status === "ongoing") {
            return "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200";
        }
        if (status === "upcoming") {
            return "bg-amber-100 text-amber-700 ring-1 ring-amber-200";
        }
        return "bg-slate-100 text-slate-700 ring-1 ring-slate-200";
    };

    return (

        <>

            <div className="min-h-screen p-4 sm:p-6 lg:p-8">
                <div className="mx-auto max-w-7xl space-y-6">
                    {/* Top Section */}
                    <div className="rounded-[30px] p-6 shadow-sm">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                            {findData && (

                                <div>
                                    <p className="text-sm font-medium text-red-600">{findData?.category}</p>
                                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                                        {findData?.event_name}
                                    </h1>
                                    <p className="mt-2 text-base text-slate-500">
                                        Organized by <span className="font-semibold text-slate-700">{findData?.company_name}</span>
                                    </p>
                                </div>

                            )}

                            {findData && (

                                <div className="flex flex-wrap gap-3">
                                    <span
                                        className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold capitalize ${getStatusClass(
                                            findData?.status
                                        )}`}
                                    >
                                        {findData?.status}
                                    </span>

                                </div>

                            )}

                        </div>
                    </div>

                    {/* Image Gallery */}
                    {findData && (

                        <div className="grid gap-4 lg:grid-cols-2">
                            <div className="overflow-hidden rounded-[30px] p-4 shadow-sm">
                                <img
                                    src={findData?.image[0]}
                                    alt="Main Event"
                                    className="h-[380px] w-full rounded-[24px] object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {findData?.image?.map((img, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-[30px] p-4 shadow-sm"
                                    >
                                        <img
                                            src={img}
                                            alt={`Event ${index + 2}`}
                                            className="h-[180px] w-full rounded-[20px] object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    )}

                    {/* Info Cards */}
                    {findData && (

                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            <div className="rounded-[28px] p-5 shadow-sm">
                                <p className="text-sm text-slate-500">Location</p>
                                <h3 className="mt-2 text-xl font-bold text-slate-900">{findData?.location}</h3>
                            </div>

                            <div className="rounded-[28px] p-5 shadow-sm">
                                <p className="text-sm text-slate-500">Price</p>
                                <h3 className="mt-2 text-xl font-bold text-slate-900">₹{findData?.price}</h3>
                            </div>

                            <div className="rounded-[28px] p-5 shadow-sm">
                                <p className="text-sm text-slate-500">Starting Price</p>
                                <h3 className="mt-2 text-xl font-bold text-slate-900">{findData?.starting_price}</h3>
                            </div>

                            <div className="rounded-[28px] p-5 shadow-sm">
                                <p className="text-sm text-slate-500">Created Date</p>
                                <h3 className="mt-2 text-xl font-bold text-slate-900">
                                    {findData?.createdAt.split("T")[0]}
                                </h3>
                            </div>
                        </div>

                    )}

                    {/* Main Content */}
                    {findData && (

                        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
                            {/* Left */}
                            <div className="space-y-6">
                                <div className="rounded-[30px] p-6 shadow-sm">
                                    <h2 className="text-2xl font-bold text-slate-900">About Event</h2>
                                    <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-slate-600">
                                        {findData?.description}
                                    </p>
                                </div>

                                <div className="rounded-[30px] p-6 shadow-sm">
                                    <h2 className="text-2xl font-bold text-slate-900">Main Services</h2>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        {findData?.main_services.map((service, index) => (
                                            <span
                                                key={index}
                                                className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-violet-200"
                                            >
                                                {service ? service : "No services found"}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="space-y-6">
                                <div className="rounded-[30px] p-6 shadow-sm">
                                    <h2 className="text-2xl font-bold text-slate-900">Event Schedule</h2>

                                    <div className="mt-5 space-y-4">
                                        <div className="rounded-2xl p-4">
                                            <p className="text-sm text-slate-500">Start Time</p>
                                            <h3 className="mt-1 text-base font-semibold text-slate-900">
                                                {findData?.startTime.split("T")[0]} | {findData?.startTime.split("T")[1].slice(0, 5)}
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl p-4">
                                            <p className="text-sm text-slate-500">End Time</p>
                                            <h3 className="mt-1 text-base font-semibold text-slate-900">
                                                {findData?.endTime.split("T")[0]} | {findData?.endTime.split("T")[1].slice(0, 5)}
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl p-4">
                                            <p className="text-sm text-slate-500">Publish Date</p>
                                            <h3 className="mt-1 text-base font-semibold text-slate-900">
                                                {findData?.date.split("T")[0]}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-[30px] p-6 shadow-sm">
                                    <h2 className="text-2xl font-bold text-slate-900">Company Info</h2>

                                    <div className="mt-5 space-y-4">
                                        <div className="rounded-2xl p-4">
                                            <p className="text-sm text-slate-500">Company Name</p>
                                            <h3 className="mt-1 text-base font-semibold text-slate-900">
                                                {findData?.company_name}
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl p-4">
                                            <p className="text-sm text-slate-500">Category</p>
                                            <h3 className="mt-1 text-base font-semibold text-slate-900">
                                                {findData?.category}
                                            </h3>
                                        </div>

                                        <div className="rounded-2xl p-4">
                                            <p className="text-sm text-slate-500">Owner ID</p>
                                            <h3 className="mt-1 break-all text-base font-semibold text-slate-900">
                                                {findData?.owner}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    )}

                </div>
            </div>

        </>

    )
}

export default EventDetails