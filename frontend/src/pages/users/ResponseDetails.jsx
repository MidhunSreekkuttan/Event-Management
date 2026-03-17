import { useContext, useEffect, useState } from "react";
import { BackendContex } from "../../context/ConnectBackendContex";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loading";
import { toast } from "react-toastify";

const ResponseDetails = () => {
    const { bookingData, getBookingData, loading } = useContext(BackendContex);

    const { enquiryId, eventId } = useParams();

    const [selectedEvent, setSelectedEvent] = useState(null);

    const navigate = useNavigate();

    const getData =
        Array.isArray(bookingData) &&
        bookingData.find((item) => item._id === enquiryId);

    const matchEvent = getData?.relatedEvents?.find(item => item._id === eventId)

    console.log(matchEvent);


    const handleClick = () => {
        if (!selectedEvent) {
            return toast.error("Select an Event");
        }
        navigate(`/adBooking/${selectedEvent._id}`);
    };

    const handleSelectEvent = (event) => {
        setSelectedEvent((prev) => (prev?._id === event._id ? null : event));
    };

    useEffect(() => {
        getBookingData();
    }, []);

    return (
        <>
            {loading && <Loader />}

            <div className="min-h-screen bg-slate-50 text-slate-800">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#1b2757] via-[#26376f] to-[#1b2757] px-6 py-8 shadow-lg pt-24">
                    <div className="mx-auto flex max-w-7xl items-center gap-4">
                        <div className="h-px flex-1 bg-white/25" />
                        <h1 className="text-center text-3xl font-bold tracking-wide text-white md:text-5xl">
                            Response Details
                        </h1>
                        <div className="h-px flex-1 bg-white/25" />
                    </div>
                    <p className="mt-3 text-center text-sm text-white/70 md:text-base">
                        Review enquiry details and select the best matching event
                    </p>
                </div>

                <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 md:px-6 lg:px-8">
                    {/* Enquiry Information */}
                    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white 
                        shadow-[0_10px_35px_rgba(15,23,42,0.08)]">
                        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
                            <h2 className="text-2xl font-bold text-slate-900">
                                Enquiry Information
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Client details and enquiry summary
                            </p>
                        </div>

                        <div className="px-5 py-4 md:px-6 md:py-6">
                            <div className="overflow-hidden rounded-2xl border border-slate-200">
                                <InfoRow label="Name" value={getData?.enquiryId?.name} />
                                <InfoRow
                                    label="Email"
                                    value={getData?.enquiryId?.email}
                                    valueClassName="text-blue-700 font-medium break-all"
                                />
                                <InfoRow
                                    label="Phone"
                                    value={getData?.enquiryId?.phoneNumber}
                                />
                                <InfoRow
                                    label="Event Date"
                                    value={getData?.enquiryId?.date?.split("T")[0]}
                                />

                                <div className="grid border-b border-slate-200 md:grid-cols-2">
                                    <div className="flex items-center gap-4 px-4 py-4 md:px-5">
                                        <p className="w-28 shrink-0 text-lg font-medium text-slate-700">
                                            Status
                                        </p>
                                        <span className="rounded-full border border-amber-200 bg-amber-50 px-4 
                                            py-1.5 text-sm font-semibold text-amber-700">
                                            {getData?.enquiryId?.status}
                                        </span>
                                    </div>

                                    <div className="border-t border-slate-200 bg-slate-50 px-4 py-4 md:border-l 
                                            md:border-t-0 md:px-5">
                                        <div className="flex flex-col gap-4 text-base md:text-lg">
                                            <div>
                                                <span className="font-medium text-slate-700">
                                                    Company Name:
                                                </span>
                                                <div className="mt-2 flex flex-wrap gap-2">

                                                    {matchEvent && (

                                                        <p className="rounded-full bg-slate-200 px-3 py-1 text-sm 
                                                                font-medium text-slate-700"
                                                        >
                                                            {matchEvent.company_name}
                                                        </p>

                                                    )}

                                                </div>

                                            </div>

                                            <div>
                                                <span className="font-medium text-slate-700">
                                                    Category:
                                                </span>
                                                <div className="mt-2 flex flex-wrap gap-2">

                                                    {matchEvent && (

                                                        <p className="rounded-full bg-blue-100 px-3 py-1 text-sm 
                                                                font-medium text-blue-700">
                                                            {matchEvent.category}
                                                        </p>

                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <InfoRow
                                    label="Enquiry Date"
                                    value={getData?.enquiryId?.date?.split("T")[0]}
                                    last={true}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Response Message */}
                    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white 
                        shadow-[0_10px_35px_rgba(15,23,42,0.08)]">
                        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
                            <h2 className="text-2xl font-bold text-slate-900">
                                Response Message
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Message shared with the client
                            </p>
                        </div>

                        <div className="p-5 md:p-6">
                            <div className="relative max-w-4xl rounded-[24px] border border-slate-200 bg-gradient-to-br
                                 from-[#edf3ff] to-[#f7f9ff] p-6 shadow-sm">
                                <div className="absolute left-0 top-6 h-8 w-8 -translate-x-1/2 rotate-45 rounded-md border-l 
                                    border-t border-slate-200 bg-[#edf3ff]" />
                                <div className="relative z-10">
                                    <p className="text-lg leading-8 text-[#1a275d] md:text-xl">
                                        {getData?.respondMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Related Events */}
                    <section className="overflow-hidden rounded-3xl border border-slate-200
                         bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)]">
                        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">
                                        Related Events
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Select one event and continue with booking
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 p-4 md:p-6 xl:grid-cols-3">
                            {Array.isArray(getData?.relatedEvents) &&
                                getData?.relatedEvents.map((event) => (
                                    <article
                                        key={event._id}
                                        className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition-all
                                             duration-300 hover:-translate-y-1 hover:shadow-xl 
                                                ${selectedEvent?._id === event._id
                                                ? "border-blue-500 ring-2 ring-blue-100"
                                                : "border-slate-200"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between 
                                            bg-gradient-to-r from-[#18295f] to-[#244aa5] px-5 py-4 text-white">
                                            <div>
                                                <h3 className="text-2xl font-bold leading-tight">
                                                    {event.company_name}
                                                </h3>
                                                <p className="mt-1 text-sm font-medium text-white/85">
                                                    {event.event_name}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-1 border-b border-slate-200
                                             bg-slate-100 p-1.5 overflow-hidden">
                                            {Array.isArray(event.image) &&
                                                event.image?.map((image, index) => (
                                                    <div
                                                        key={index}
                                                        className="overflow-hidden rounded-lg"
                                                    >
                                                        <img
                                                            src={image.replace(
                                                                "/upload/",
                                                                "/upload/w_400,h_300,c_fill,f_auto,q_auto/"
                                                            )}
                                                            alt={event.event_name}
                                                            className="h-28 w-full object-cover transition-transform 
                                                                duration-500 hover:scale-110"
                                                        />
                                                    </div>
                                                ))}
                                        </div>

                                        <div className="flex flex-col space-y-4 px-5 py-5">
                                            <div className="rounded-2xl bg-slate-50 p-4">
                                                <DetailText label="Price" value={event.price} />
                                                <DetailText
                                                    label="Location"
                                                    value={event.location}
                                                />
                                                <DetailText
                                                    label="Category"
                                                    value={event.category}
                                                />
                                                <DetailText
                                                    label="Services"
                                                    value={event.main_services}
                                                    multiline={true}
                                                />

                                                <div className="pt-1 text-lg">
                                                    <span className="font-semibold text-slate-800">
                                                        Status:
                                                    </span>{" "}
                                                    <span className="font-semibold text-emerald-700">
                                                        {event.status}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="rounded-2xl border border-slate-200 bg-white p-4">
                                                <p className="mb-2 text-sm font-semibold uppercase tracking-wide
                                                     text-slate-500">
                                                    Description
                                                </p>
                                                <p className="min-h-[110px] text-base leading-7 text-slate-600">
                                                    {event.description?.length > 150
                                                        ? event.description?.slice(0, 150) + "..."
                                                        : event.description}
                                                </p>
                                            </div>

                                            <div className="mt-auto space-y-3">
                                                <button
                                                    onClick={() => handleSelectEvent(event)}
                                                    className={`w-full rounded-2xl px-5 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 ${selectedEvent?._id === event._id
                                                        ? "bg-green-500 hover:bg-green-600"
                                                        : "bg-gradient-to-r from-[#21409a] to-[#0d2f7c] hover:shadow-lg"
                                                        }`}
                                                >
                                                    {selectedEvent?._id === event._id
                                                        ? "Selected"
                                                        : "Select Event"}
                                                </button>

                                                <button
                                                    onClick={handleClick}
                                                    disabled={selectedEvent?._id !== event._id}
                                                    className={`w-full rounded-2xl py-3 text-lg font-semibold 
                                                        transition-all duration-300 ${selectedEvent?._id === event._id
                                                            ? "bg-slate-900 text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-[#16224d] hover:shadow-[0_14px_30px_rgba(21,34,77,0.28)]"
                                                            : "cursor-not-allowed bg-slate-200 text-slate-400"
                                                        }`}
                                                >
                                                    Book Event
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

function InfoRow({ label, value, valueClassName = "", last = false }) {
    return (
        <div
            className={`${last ? "" : "border-b border-slate-200"
                } flex flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:gap-5 md:px-5`}
        >
            <p className="w-28 shrink-0 text-lg font-medium text-slate-700">
                {label}
            </p>
            <p className={`text-lg text-slate-800 ${valueClassName}`}>{value}</p>
        </div>
    );
}

function DetailText({ label, value, multiline = false }) {
    return (
        <div className="border-b border-slate-200 pb-3 text-lg last:border-b-0">
            <span className="font-semibold text-slate-800">{label}:</span>{" "}
            <span
                className={
                    multiline
                        ? "block pt-1 leading-7 text-slate-600"
                        : "text-slate-700"
                }
            >
                {value}
            </span>
        </div>
    );
}

export default ResponseDetails;