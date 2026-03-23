import { useContext } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { StaffContext } from "../context/staffContext"
import { useNavigate } from "react-router-dom"

const ClientData = ({ id, name, category, date, starting_price, status }) => {

    const { backendUrl, getAllEnquiry } = useContext(StaffContext)

    const navigate = useNavigate()

    const handleClick = () => {

        navigate(`/enquiry-details/${id}`)

    }

    const statusHandler = async (event, orderId) => {

        try {
            const { data } = await axios.post(
                `${backendUrl}/api/user/updateStatus`,
                {
                    orderId,
                    status: event.target.value,
                }
            )

            if (data.success) {
                toast.success(data.message)
                await getAllEnquiry()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <div className="grid grid-cols-6 items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 shadow-sm transition duration-200 hover:border-violet-200 hover:bg-white hover:shadow-md">
            <div className="text-sm font-semibold text-slate-800">
                {name.length > 14 ? name.slice(0, 14) + '...' : name}
            </div>

            <div className="text-sm font-medium text-slate-600">
                {category}
            </div>

            <div className="text-sm text-slate-600">
                {date?.split("T")[0]}
            </div>

            <div className="text-sm font-semibold text-slate-800">
                {starting_price}
            </div>

            <div>
                <select
                    value={status || "pending"}
                    onChange={(event) => statusHandler(event, id)}
                    className="cursor-pointer appearance-none rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 outline-none transition duration-200 hover:border-violet-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                >
                    <option value="pending">pending</option>
                    <option value="completed">completed</option>
                </select>
            </div>

            <div>
                <button
                    onClick={handleClick}
                    className="rounded-2xl bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-violet-600 hover:shadow-lg"
                >
                    View
                </button>
            </div>
        </div>
    )
}

export default ClientData