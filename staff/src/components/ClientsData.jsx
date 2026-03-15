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
        <div className="grid grid-cols-6 items-center">
            <div>{name.length > 14 ? name.slice(0, 14) + '...' : name}</div>
            <div>{category}</div>
            <div>{date?.split("T")[0]}</div>
            <div>{starting_price}</div>

            <div>
                <select
                    value={status || "pending"}
                    onChange={(event) => statusHandler(event, id)}
                    className={`px-5 py-1 rounded-2xl appearance-none outline-none cursor-pointer border`}
                >
                    <option value="pending">pending</option>
                    <option value="completed">completed</option>
                </select>
            </div>
            <div>
                <button onClick={handleClick} className="bg-amber-200 px-10 py-2 rounded-lg">
                    View
                </button>
            </div>
        </div>
    )
}

export default ClientData