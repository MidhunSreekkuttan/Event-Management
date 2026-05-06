import axios from "axios"
import { useContext, useMemo } from "react"
import { toast } from "react-toastify"
import { BackendContex } from "../../context/ConnectBackendContex"
import { EventContext } from "../../context/EventContext"
import { useNavigate } from "react-router-dom"

const ClientData = ({ id, image, name, place, event_name, status }) => {

    const { backendUrl } = useContext(BackendContex)
    const { getClientData } = useContext(EventContext)

    const navigate = useNavigate()

    const optimizedImage = useMemo(() => {
        if (!image?.[0]) return '/fallback-image.jpg'
        return image[0].replace(
            '/upload/',
            '/upload/w_400,h_300,c_fill,f_auto,q_auto/'
        )
    }, [image])

    const statusHandler = async (event, orderId) => {

        try {

            const res = await axios.post(backendUrl + '/api/booking/updateStatus', {
                orderId,
                status: event.target.value,
            })

            if (res.data.success) {
                toast.success(res.data.message)
                await getClientData()
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const onClicked = (id) => {
        navigate(`/event-management/bookingDetails/${id}`)
    }

    return (
        <section>
            <div className="grid grid-cols-[0.7fr_1fr_1.2fr_1fr_1fr_1fr] items-center gap-4 
                px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.04] text-white  shadow-sm transition-all
                    duration-300 hover:border-purple-400/20 hover:bg-white/[0.06] hover:shadow-lg">

                {/* Image */}
                <div className="flex items-center">
                    <img
                        className="h-20 w-28 rounded-xl object-cover border border-white/10"
                        src={optimizedImage}
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                {/* Name */}
                <div className="flex items-center">
                    <p className="text-base md:text-lg font-semibold tracking-tight text-white">
                        {
                            name?.length > 14 ? name?.slice(0, 14) + '...' : name ?
                                name?.[0].toUpperCase() + name.slice(1) : ""
                        }
                    </p>
                </div>

                {/* Event */}
                <div className="flex items-center md:justify-center">
                    <p className="text-sm md:text-base font-medium text-slate-300">
                        {event_name}
                    </p>
                </div>

                {/* Place */}
                <div className="flex items-center md:justify-center">
                    <p className="rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300 border border-purple-400/20">
                        {place.length > 12 ? place.slice(0, 12) + '...' : place}
                    </p>
                </div>

                {/* Status Select */}
                {/* Status Select */}
                <div className="flex items-center md:justify-center">

                    {status === "approved" ? (
                        <span className="px-3 py-2 text-sm font-semibold text-green-400 bg-green-500/10 border 
                              border-green-400/20 rounded-lg cursor-default">
                            Approved
                        </span>
                    ) : status === "rejected" ? (
                        <span className="px-3 py-2 text-sm font-semibold text-red-400 bg-red-500/10 border 
                            border-red-400/20 rounded-lg cursor-default">
                            Rejected
                        </span>
                    ) : (
                        <select
                            value={status || "pending"}
                            onChange={(event) => statusHandler(event, id)}
                            className="bg-slate-900 border border-white/10 text-sm rounded-lg px-3 py-2
                               text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="pending">pending</option>
                            <option value="approved">approved</option>
                            <option value="rejected">rejected</option>
                        </select>
                    )}

                </div>

                {/* Action */}
                <div className="flex items-center md:justify-center">
                    <button onClick={() => onClicked(id)} className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:scale-105 transition">
                        View
                    </button>
                </div>

            </div>
        </section>
    )
}

export default ClientData