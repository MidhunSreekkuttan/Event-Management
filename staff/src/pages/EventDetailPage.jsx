import { useContext, useEffect, useState } from 'react'
import { StaffContext } from '../context/staffContext'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { icon } from '../../../frontend/src/assets/assets'

const EventDetailPage = () => {

    const { enquiryId } = useParams()

    const { backendUrl, listEnquiry, eventList } = useContext(StaffContext)

    const [enquiryData, setEnqiuryData] = useState('')
    const [selectedEvent, setSelectedEvent] = useState([])
    const [responseMessage, setResponseMessage] = useState("")

    const fetchEnquiryData = () => {

        listEnquiry.find((item) => {
            if (item._id === enquiryId) {
                setEnqiuryData(item)
            } else {
                return null
            }
        })
    }

    const filterCategory = eventList.filter(event => event.category === enquiryData?.productId?.category)

    const sendResponse = async () => {

        try {

            if (selectedEvent.length === 0) {
                return toast.error("Select at least one event")
            }

            if (!responseMessage) {
                return toast.error("Write Something")
            }

            const res = await axios.post(backendUrl + '/api/staffs/sendResponse', {
                enquiryId: enquiryData._id,
                relatedEvents: selectedEvent.map((item) => item._id),
                respondMessage: responseMessage
            })

            if (res.data.success) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const handleSelectEvent = (event) => {
        setSelectedEvent((prev) => {
            const alreadySelected = prev.some((item) => item._id === event._id)

            if (alreadySelected) {
                return prev.filter((item) => item._id !== event._id)
            } else {
                return [...prev, event]
            }
        })
    }

    useEffect(() => {
        fetchEnquiryData()
    }, [enquiryId, listEnquiry])

    return (
        <div className="mt-1 mb-3 w-[175vh] rounded-r-2xl">
            <div className="mx-auto flex max-w-7xl overflow-hidden rounded-r-[28px] bg-white shadow-2xl shadow-slate-300/50">


                <main className="flex-1 bg-gradient-to-br from-white to-slate-50">
                    <div className="border-b border-slate-200 px-8 py-6 md:px-10">
                        <div className="mb-4 flex items-start gap-4">
                            <div>
                                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                                    Enquiry Details
                                </h1>
                            </div>

                        </div>
                    </div>

                    <div className="grid gap-8 px-8 py-8 md:grid-cols-[1.35fr_1fr] md:px-10">
                        <section>
                            <h2 className="mb-5 text-2xl font-semibold text-slate-900">Enquiry Information</h2>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center gap-4 border-b border-slate-200 px-6 py-5">
                                    <img
                                        src='/IMG_20260113_212004.avif'
                                        alt="photo"
                                        className="h-14 w-14 rounded-full object-cover border"
                                    />
                                    <div>
                                        <h3 className="text-3xl font-semibold text-slate-900">{enquiryData.name}</h3>
                                        <p className="text-lg text-slate-500">{enquiryData.email}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-y-0 text-slate-700">
                                    <InfoCell icon="💍" label={enquiryData.productId?.category} />
                                    <InfoCell icon="📅" label={enquiryData.eventDate} withDivider />
                                    <div className='flex items-center relative left-5 gap-3'>
                                        <img className='w-12' src={icon.call_us} alt="" />
                                        <p className='text-[28px] font-medium text-slate-800'>{enquiryData.phoneNumber}</p>
                                    </div>
                                    <InfoCell icon="📍" label={enquiryData.count} withDivider />
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="mb-3 text-2xl font-semibold text-slate-900">Message</h3>
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-[22px]
                                     leading-10 text-slate-700 shadow-sm">
                                    {enquiryData.additionalDetails ? enquiryData.additionalDetails : 'User Message'}
                                </div>
                            </div>

                        </section>

                        <section>
                            <h2 className="mb-5 text-2xl font-semibold text-slate-900">Respond to Enquiry</h2>

                            <div className="mt-6">
                                <label className="mb-3 block text-xl font-semibold text-slate-900">Message ✨</label>
                                <textarea
                                    rows={5}
                                    value={responseMessage}
                                    onChange={(e) => setResponseMessage(e.target.value)}
                                    className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-lg text-slate-700
                                     shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-indigo-400"
                                />
                            </div>

                            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
                                <button className="flex-1 rounded-2xl bg-amber-400 px-6 py-4 text-lg font-semibold
                                     text-slate-900 shadow-lg shadow-amber-100 transition hover:bg-amber-500">
                                    Mark as Completed
                                </button>
                                <button onClick={sendResponse} className="flex-1 rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white
                                     shadow-lg shadow-indigo-200 transition hover:bg-indigo-700">
                                    Send Response
                                </button>
                            </div>
                        </section>
                    </div>

                    <div className="mb-3 p-6">
                        <h3 className="text-2xl font-semibold text-slate-900">Related Events within Budget</h3>
                        <p className="mt-2 text-lg text-slate-500">
                            Suggested based on the budget range of ₹2,000,000 - ₹3,0,00,000
                        </p>

                        <div className="mt-5 grid gap-5 lg:grid-cols-4">
                            {filterCategory.map((event) => (
                                <div
                                    key={event._id}
                                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm
                                     transition hover:-translate-y-4 hover:shadow-xl"
                                >
                                    <img
                                        src={event.image[0]}
                                        alt={event.event_name}
                                        className="h-40 w-full object-cover"
                                    />
                                    <div className="p-5 flex flex-col gap-3">
                                        <h4 className="text-2xl font-semibold text-slate-900">{event.event_name}</h4>
                                        <div className="mt-2 flex items-center justify-between gap-3">
                                            <p className="text-lg text-slate-600">{event.date?.split("T")[0]}</p>
                                            <p className="text-lg text-slate-600">${event.price}</p>
                                        </div>
                                        <button
                                            onClick={() => handleSelectEvent(event)}
                                            className={`rounded-xl px-4 py-2 text-sm font-medium text-white 
                                                        ${selectedEvent.some((item) => item._id === event._id)
                                                    ? "bg-green-600"
                                                    : "bg-indigo-500 hover:bg-indigo-600"
                                                }`}
                                        >
                                            {selectedEvent.some(item => item._id === event._id) ? 'Seleted' : 'Select'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}

function InfoCell({ icon, label, withDivider = false }) {
    return (
        <div className="flex items-center gap-4 border-b border-slate-200 px-6 py-5 odd:border-r odd:border-slate-200">
            <span className="text-2xl">{icon}</span>
            <span className="text-[28px] font-medium text-slate-800">{label}</span>
            {withDivider ? <div className="ml-auto hidden h-8 w-px bg-slate-200" /> : null}
        </div>
    );
}

export default EventDetailPage