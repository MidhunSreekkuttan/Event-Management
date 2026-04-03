import { useContext, useEffect } from "react";
import { BackendContex } from "../../context/ConnectBackendContex";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loading";

const ResponseDetails = () => {
    const { bookingData, getBookingData, loading } = useContext(BackendContex);

    const { enquiryId } = useParams();

    const navigate = useNavigate();

    const getData =
        Array.isArray(bookingData) &&
        bookingData.find((item) => item._id === enquiryId);

    const handleClick = (id) => {
        navigate(`/adBooking/${id}`);
    };

    useEffect(() => {
        getBookingData();
    }, []);

    return (
        <>
            {loading && <Loader />}

            <div className="min-h-screen bg-[#F6F0FD] text-slate-800 pt-15">
                <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

                    <div className="mb-8 flex items-center justify-between gap-4 border-b border-purple-200 pb-6">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                                Response Page
                            </p>

                            <h1 className="mt-2 text-3xl font-semibold tracking-wide text-slate-900 md:text-4xl">
                                Response Details
                            </h1>
                        </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

                        <section className="rounded-[28px] border border-purple-200 bg-white p-6 shadow-md">

                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-slate-900">
                                        Enquiry Details
                                    </h2>

                                    <p className="mt-1 text-sm text-slate-600">
                                        Review client requirements before sending selected options.
                                    </p>
                                </div>

                                <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-xs uppercase tracking-[0.25em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                                    Premium Lead
                                </span>
                            </div>

                            {getData && (

                                <div className="grid gap-4 md:grid-cols-2">

                                    <InfoCard label="Client Name" value={getData.enquiryId?.name} />

                                    <InfoCard label="Email ID" value={getData.enquiryId?.email} />

                                    <InfoCard label="Phone Number" value={getData.enquiryId?.phoneNumber} />

                                    <InfoCard
                                        label="Event Date"
                                        value={getData.enquiryId?.eventDate?.split("T")[0] || "No Date"}
                                    />

                                </div>

                            )}

                            {getData && (

                                <div className="mt-5 rounded-3xl border border-purple-200 bg-purple-50 p-5">
                                    <p className="mb-2 text-xs uppercase tracking-[0.25em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                                        Enquiry Description
                                    </p>

                                    <p className="leading-7 text-slate-700">
                                        {getData.enquiryId?.additionalDetails}
                                    </p>
                                </div>

                            )}

                        </section>

                        <aside className="rounded-[28px] border border-purple-200 bg-white p-6 shadow-md">

                            <h2 className="text-xl font-semibold text-slate-900">
                                Response Summary
                            </h2>

                            <p className="mt-2 text-sm text-slate-600">
                                Curated event suggestions matched to the client’s budget and style.
                            </p>

                            {getData && (

                                <div className="mt-6 space-y-4">

                                    <SummaryRow label="Place" value={getData.enquiryId?.place} />

                                    <SummaryRow label="Suggested Count" value={getData.enquiryId?.count} />

                                    <SummaryRow label="Staff Status" value={getData.enquiryId?.status} />

                                </div>

                            )}

                            <div className="mt-8 rounded-3xl border border-purple-200 bg-purple-50 p-5">

                                <p className="text-xs uppercase tracking-[0.25em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                                    Staff Note
                                </p>

                                <p className="mt-3 text-sm leading-7 text-slate-700">
                                    {getData?.respondMessage}
                                </p>

                            </div>

                        </aside>

                    </div>

                    <section className="mt-10">

                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.35em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                                    Staff Selected Events
                                </p>

                                <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
                                    Recommended Premium Options
                                </h2>
                            </div>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">

                            {Array.isArray(getData?.relatedEvents) &&
                                getData?.relatedEvents.map((item) => (

                                    <div
                                        key={item._id}
                                        className="overflow-hidden rounded-[28px] border border-purple-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >

                                        <div className="relative h-56 overflow-hidden">

                                            <img
                                                src={
                                                    item?.image[0]?.replace(
                                                        "/upload/",
                                                        "/upload/w_400,h_300,c_fill,f_auto,q_auto/"
                                                    )
                                                }
                                                alt={item.event}
                                                className="h-full w-full object-cover"
                                            />

                                        </div>

                                        <div className="p-5">

                                            <p className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                                                {item.company_name}
                                            </p>

                                            <h3 className="mt-2 text-xl font-semibold text-slate-900">
                                                {item.event_name}
                                            </h3>

                                            <p className="mt-3 text-sm text-slate-600">
                                                {item.description.length > 150
                                                    ? item.description?.slice(0, 150) + "....."
                                                    : item.description}
                                            </p>

                                            <p className="mt-3 text-sm text-slate-700">
                                                status:{" "}
                                                <span className="font-semibold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                                                    {item.status}
                                                </span>
                                            </p>

                                            <div className="flex justify-between">
                                                <p className="mt-3 text-sm text-slate-600">
                                                    {item.location}
                                                </p>

                                                <p className="mt-3 text-sm font-semibold text-slate-800">
                                                    ${item.price}
                                                </p>
                                            </div>

                                            <div className="mt-5 flex gap-3">

                                                <button
                                                    onClick={() => handleClick(item._id)}
                                                    className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-pink-700
                                                     px-4 py-2 text-lg font-semibold text-white"
                                                >
                                                    Book Now
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                        </div>

                    </section>

                </div>
            </div>
        </>
    );
};

function InfoCard({ label, value }) {
    return (
        <div className="rounded-3xl border border-purple-200 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.25em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                {label}
            </p>
            <p className="mt-2 text-base font-medium text-slate-800">
                {value}
            </p>
        </div>
    );
}

function SummaryRow({ label, value }) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-purple-200 bg-white px-4 py-3">
            <span className="text-sm text-slate-600">{label}</span>
            <span className="text-sm font-semibold text-slate-900">{value}</span>
        </div>
    );
}

export default ResponseDetails;