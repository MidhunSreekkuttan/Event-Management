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

            <div className="min-h-screen bg-[#0f0b08] text-[#f4e7c1] pt-15">
                <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
                    <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#8b6b2e]/30 pb-6">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-[#b89345]">
                                Response Page
                            </p>
                            <h1 className="mt-2 text-3xl font-semibold tracking-wide text-[#f8edd2] md:text-4xl">
                                Response Details
                            </h1>
                        </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <section className="rounded-[28px] border border-[#8b6b2e]/25 bg-gradient-to-br from-[#1a130e]
                             to-[#120d09] p-6 shadow-2xl shadow-black/30">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-[#f8edd2]">Enquiry Details</h2>
                                    <p className="mt-1 text-sm text-[#c7ae73]">
                                        Review client requirements before sending selected options.
                                    </p>
                                </div>
                                <span className="rounded-full border border-[#c39a3d]/30 bg-[#241a13] px-4 py-1 text-xs
                                     uppercase tracking-[0.25em] text-[#d4af37]">
                                    Premium Lead
                                </span>
                            </div>

                            {getData && (

                                <div className="grid gap-4 md:grid-cols-2">
                                    <InfoCard label="Client Name" value={getData.enquiryId?.name} />
                                    <InfoCard label="Email ID" value={getData.enquiryId?.email} />
                                    <InfoCard label="Phone Number" value={getData.enquiryId?.phoneNumber} />
                                    <InfoCard label="Event Date" value={getData.enquiryId?.eventDate.split("T")[0]} />
                                </div>

                            )}

                            {getData && (

                                <div className="mt-5 rounded-3xl border border-[#8b6b2e]/20 bg-[#120e0b] p-5">
                                    <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#b89345]">
                                        Enquiry Description
                                    </p>
                                    <p className="leading-7 text-[#efdfb8]">{getData.enquiryId?.additionalDetails}</p>
                                </div>

                            )}

                        </section>

                        <aside className="rounded-[28px] border border-[#8b6b2e]/25 bg-gradient-to-b from-[#1a130e]
                             to-[#120d09] p-6 shadow-2xl shadow-black/30">
                            <h2 className="text-xl font-semibold text-[#f8edd2]">Response Summary</h2>
                            <p className="mt-2 text-sm text-[#c7ae73]">
                                Curated event suggestions matched to the client’s budget and style.
                            </p>

                            {getData && (

                                <div className="mt-6 space-y-4">
                                    <SummaryRow label="Place" value={getData.enquiryId?.place} />
                                    <SummaryRow label="Sugested Count" value={getData.enquiryId?.count} />
                                    <SummaryRow label="Style" value="Elegant Luxury" />
                                    <SummaryRow label="Staff Status" value={getData.enquiryId?.status} />
                                </div>

                            )}

                            <div className="mt-8 rounded-3xl border border-[#b89345]/25 bg-[#201710] p-5">
                                <p className="text-xs uppercase tracking-[0.25em] text-[#cda349]">
                                    Staff Note
                                </p>
                                <p className="mt-3 text-sm leading-7 text-[#f1e2bb]">
                                    {getData?.respondMessage}
                                </p>
                            </div>
                        </aside>
                    </div>

                    <section className="mt-10">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.35em] text-[#b89345]">
                                    Staff Selected Events
                                </p>
                                <h2 className="mt-2 text-2xl font-semibold text-[#f8edd2] md:text-3xl">
                                    Recommended Premium Options
                                </h2>
                            </div>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {Array.isArray(getData?.relatedEvents) &&
                                getData?.relatedEvents.map((item) => (
                                    <div
                                        key={item._id}
                                        className="overflow-hidden rounded-[28px] border border-[#8b6b2e]/25 bg-[#16100c]
                                             shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1
                                                 hover:border-[#d4af37]/45"
                                    >
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={
                                                    item?.image[0].replace('/upload/',
                                                        '/upload/w_400,h_300,c_fill,f_auto,q_auto/')
                                                }
                                                alt={item.event}
                                                className="h-full w-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#120d09]
                                                 via-[#120d09]/35 to-transparent" />
                                        </div>

                                        <div className="p-5">
                                            <p className="text-xs uppercase tracking-[0.3em] text-[#b89345]">
                                                {item.company_name}
                                            </p>
                                            <h3 className="mt-2 text-xl font-semibold text-[#f8edd2]">
                                                {item.event_name}
                                            </h3>
                                            <p className="mt-3 text-sm text-[#ddc58e]">{
                                                item.description.length > 150 ? item.description?.slice(0, 150) + '.....' :
                                                    item.description
                                            }
                                            </p>
                                            <p className="mt-3 text-sm text-[#f8edd2]">status:{'  '}
                                                <span className="text-[#ddc58e]">
                                                    {item.status}
                                                </span></p>

                                            <div className="flex justify-between">
                                                <p className="mt-3 text-sm text-[#ddc58e]">{item.location}</p>
                                                <p className="mt-3 text-sm text-[#ddc58e]">${item.price}</p>
                                            </div>

                                            <div className="mt-5 flex gap-3">
                                                <button onClick={() => handleClick(item._id)} className="w-full rounded-2xl
                                                     bg-[#b89345] px-4 py-2 text-lg font-semibold text-[#120d09]
                                                         transition hover:opacity-90">
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
        <div className="rounded-3xl border border-[#8b6b2e]/20 bg-[#140f0b] p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b89345]">{label}</p>
            <p className="mt-2 text-base font-medium text-[#f4e7c1]">{value}</p>
        </div>
    );
}

function SummaryRow({ label, value }) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-[#8b6b2e]/20 bg-[#140f0b] px-4 py-3">
            <span className="text-sm text-[#c7ae73]">{label}</span>
            <span className="text-sm font-semibold text-[#f4e7c1]">{value}</span>
        </div>
    );
}

export default ResponseDetails;
