import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BackendContex } from '../../context/ConnectBackendContex'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query"

const Approval = () => {

    const navigate = useNavigate()

    const { backendUrl } = useContext(BackendContex)

    const getEventManagers = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + "/api/eventManagement/singleEventManager")
            if (data.success) {
                return data?.eventManager || []
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    const { data, isLoading, error } = useQuery({
        queryKey: ["eventmanagementId"],
        queryFn: getEventManagers
    })

    const handleClick = () => {
        navigate('/event-management/home')
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-[620px] rounded-[42px] bg-[#f7f7f7] shadow-[0_20px_50px_rgba(0,0,0,0.18)] px-8 py-10 md:px-12 md:py-12">
                <div className="flex flex-col items-center text-center">
                    {/* Success Icon */}
                    <div className="mb-7 flex h-28 w-28 items-center justify-center">
                        <svg
                            viewBox="0 0 120 120"
                            className="h-24 w-24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M85 26C78.1 19.7 69.1 16 59.2 16C37.6 16 20 33.6 20 55.2C20 76.8 37.6 94.4 59.2 94.4C80.8 94.4 98.4 76.8 98.4 55.2V48"
                                stroke="#10A34A"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <path
                                d="M46 55.5L58 67.5L99 26.5"
                                stroke="#10A34A"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <h1 className="text-[34px] md:text-[40px] font-extrabold tracking-[-0.02em] text-black leading-none">
                        Access Approved!
                    </h1>
                    <p className="mt-4 text-[18px] md:text-[20px] text-black/80 font-medium">
                        Your account has been activated successfully
                    </p>

                    {/* Alert Box */}
                    <div className="mt-8 w-full rounded-2xl bg-[#dff0df] px-5 py-4 text-left shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
                        <p className="text-[15px] md:text-[16px] leading-6 text-[#4b9a57] font-medium">
                            Welcome! Check your email for login credentials and further instructions
                            to access your account.
                        </p>
                    </div>

                    {/* Details */}
                    <div className="mt-12 w-full space-y-8">
                        <InfoRow
                            icon={
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-7 w-7"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15A2.25 2.25 0 0 1 21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.6-.75a.75.75 0 0 0-.48 1.33l6.83 5.54a1.25 1.25 0 0 0 1.6 0l6.83-5.54A.75.75 0 0 0 19.15 6h-14.3Z" />
                                </svg>
                            }
                            title="Email Address"
                            value={data?.email}
                        />

                        <InfoRow
                            icon={
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-7 w-7"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7.5 2.25A.75.75 0 0 1 8.25 3v1.5h7.5V3a.75.75 0 0 1 1.5 0v1.5h.75A2.25 2.25 0 0 1 20.25 6.75v11.25a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18V6.75A2.25 2.25 0 0 1 6 4.5h.75V3a.75.75 0 0 1 .75-.75ZM5.25 9v9A.75.75 0 0 0 6 18.75h12a.75.75 0 0 0 .75-.75V9H5.25Z" />
                                </svg>
                            }
                            title="Request Date"
                            value={data?.createdAt.split("T")[0]}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 w-full space-y-6">
                        <button onClick={handleClick} className="w-full rounded-xl bg-[#0ea500] py-4 text-[20px] font-extrabold text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition hover:opacity-95 active:scale-[0.99]">
                            Access Your DashBoard
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

function InfoRow({ icon, title, value }) {
    return (
        <div className="flex items-start gap-4 text-left">
            <div className="mt-0.5 text-[#c73cff]">{icon}</div>
            <div>
                <h3 className="text-[16px] md:text-[17px] font-extrabold text-black leading-tight">
                    {title}
                </h3>
                <p className="mt-1 text-[15px] md:text-[16px] text-black/45 font-medium leading-tight">
                    {value}
                </p>
            </div>
        </div>
    );
}

export default Approval
