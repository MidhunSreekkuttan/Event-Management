import { useCallback, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify';
import axios from 'axios';
import { BackendContex } from '../../context/ConnectBackendContex';
import Loader from '../../components/Loading';
import { useParams } from 'react-router-dom';

const Receipt = () => {

    const { backendUrl } = useContext(BackendContex)

    const { productId } = useParams()

    const getReceipt = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + "/api/booking/getReceipt")
            if (data.success) {
                return data.receipt
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    const { data, isLoading, error } = useQuery({
        queryKey: ["receipt"],
        queryFn: getReceipt
    })

    console.log(data);


    const formatDate = (date) => {
        if (!date) return "N/A";
        const d = new Date(date);
        if (isNaN(d.getTime())) return "N/A";

        return d.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const formatDateTime = (date) => {
        if (!date) return "N/A";
        const d = new Date(date);
        if (isNaN(d.getTime())) return "N/A";

        return d.toLocaleString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(amount || 0);
    };

    if (error) {
        return <div>Error:{error.message}</div>
    }

    return (

        <>

            {isLoading && <Loader />}

            <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-violet-950 px-4 py-10 text-white">
                <div className="mx-auto max-w-5xl">
                    <div className="overflow-hidden rounded-3xl border border-violet-500/20 bg-zinc-950/90 shadow-2xl shadow-violet-900/30">
                        {/* Header */}
                        <div className="border-b border-violet-500/20 bg-gradient-to-r from-black to-violet-950/60 px-8 py-8">
                            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
                                        Adhithi Event Management
                                    </p>
                                    <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                                        Payment Receipt
                                    </h1>
                                    <p className="mt-2 text-sm text-zinc-400">
                                        Invoice booking receipt
                                    </p>
                                </div>

                                <div className="flex flex-col items-start gap-3 md:items-end">
                                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300">
                                        Paid
                                    </span>
                                    <div className="text-sm text-zinc-400">
                                        Receipt Ref
                                        <span className="ml-2 font-semibold text-violet-300">
                                            {data?.bookingId}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="grid gap-8 p-8 lg:grid-cols-3">
                            {/* Left */}
                            <div className="space-y-8 lg:col-span-2">
                                {/* Invoice Summary */}
                                <div className="rounded-2xl border border-violet-500/15 bg-zinc-900/60 p-6">
                                    <h2 className="mb-5 text-lg font-semibold text-violet-300">
                                        Invoice Summary
                                    </h2>

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                                                Booking ID
                                            </p>
                                            <p className="mt-2 break-all text-sm font-medium text-white">
                                                {data?.bookingId}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                                                Payment ID
                                            </p>
                                            <p className="mt-2 break-all text-sm font-medium text-white">
                                                {data?.razorpayPaymentId}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                                                Order ID
                                            </p>
                                            <p className="mt-2 break-all text-sm font-medium text-white">
                                                {data?.razorpayOrderId}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                                                Paid At
                                            </p>
                                            <p className="mt-2 text-sm font-medium text-white">
                                                {formatDateTime(data?.paidAt)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="rounded-2xl border border-violet-500/15 bg-zinc-900/60 p-6">
                                    <h2 className="mb-5 text-lg font-semibold text-violet-300">
                                        Event Details
                                    </h2>

                                    <div className="overflow-hidden rounded-xl border border-zinc-800">
                                        <div className="grid grid-cols-2 border-b border-zinc-800 bg-zinc-950/70 px-4 py-4">
                                            <span className="text-sm text-zinc-400">Event Name</span>
                                            <span className="text-right text-sm font-semibold text-white">
                                                {data?.event}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 border-b border-zinc-800 px-4 py-4">
                                            <span className="text-sm text-zinc-400">Event Date</span>
                                            <span className="text-right text-sm font-semibold text-white">
                                                {formatDate(data?.eventDate)}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 px-4 py-4">
                                            <span className="text-sm text-zinc-400">Currency</span>
                                            <span className="text-right text-sm font-semibold text-white">
                                                {data?.currency}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Breakdown */}
                                <div className="rounded-2xl border border-violet-500/15 bg-zinc-900/60 p-6">
                                    <h2 className="mb-5 text-lg font-semibold text-violet-300">
                                        Payment Breakdown
                                    </h2>

                                    <div className="overflow-hidden rounded-xl border border-zinc-800">
                                        <div className="grid grid-cols-2 border-b border-zinc-800 px-4 py-4">
                                            <span className="text-sm text-zinc-400">Subtotal</span>
                                            <span className="text-right text-sm font-medium text-white">
                                                {formatCurrency(data?.totalPaid)}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 border-b border-zinc-800 px-4 py-4">
                                            <span className="text-sm text-zinc-400">Tax</span>
                                            <span className="text-right text-sm font-medium text-white">
                                                ₹0
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 bg-violet-500/10 px-4 py-4">
                                            <span className="text-sm font-semibold text-violet-300">
                                                Total Paid
                                            </span>
                                            <span className="text-right text-lg font-bold text-white">
                                                {formatCurrency(data?.totalPaid)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="space-y-8">
                                {/* Brand Card */}
                                <div className="rounded-2xl border border-violet-500/15 bg-gradient-to-br from-violet-900/30 to-black p-6">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl">
                                        🎉
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold">Booking Confirmed</h3>
                                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                                        Your payment has been received successfully. This receipt acts
                                        as your invoice confirmation for the booked event.
                                    </p>
                                </div>

                                {/* Amount Card */}
                                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
                                    <p className="text-sm uppercase tracking-wider text-emerald-300">
                                        Amount Paid
                                    </p>
                                    <h3 className="mt-3 text-3xl font-bold text-white">
                                        {formatCurrency(data?.totalPaid)}
                                    </h3>
                                    <p className="mt-2 text-sm text-emerald-200/80">
                                        Payment completed successfully
                                    </p>
                                </div>

                                {/* Support */}
                                <div className="rounded-2xl border border-violet-500/15 bg-zinc-900/60 p-6">
                                    <h3 className="text-lg font-semibold text-violet-300">Support</h3>
                                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                                        Need help with your booking or payment? Contact our support
                                        team for assistance.
                                    </p>

                                    <div className="mt-5 space-y-3">
                                        <p className="text-sm text-white">support@yourcompany.com</p>
                                        <p className="text-sm text-white">+91 98765 43210</p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    <button
                                        onClick={() => window.print()}
                                        className="w-full rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                                    >
                                        Print Receipt
                                    </button>

                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-violet-500/20 px-8 py-6 text-center">
                            <p className="text-sm text-zinc-500">
                                © 2026 Your Company. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Receipt