import { useCallback, useContext, useEffect } from 'react'
import { EventManagementContext } from '../../context/EventManagementContext'
import { useNavigate } from 'react-router-dom'
import { BackendContex } from '../../context/ConnectBackendContex'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const Waiting = () => {

  const { userData, getUserData } = useContext(EventManagementContext)

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

  console.log(data);


  useEffect(() => {
    const interval = setInterval(() => {
      getUserData()
    }, 3000)

    return () => clearInterval(interval)
  }, [getUserData])

  useEffect(() => {

    if (userData?.isAdminVerified?.toLowerCase() === "approved") {
      navigate("/event-management/approval")
    }

  }, [userData?.isAdminVerified])

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-[560px] rounded-[30px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] px-11 py-10">
        <div className="flex flex-col items-center text-center">
          {/* Loader */}
          <div className="relative mb-8 h-20 w-20">
            <div className="absolute inset-0 rounded-full border-[7px] border-[#d9ccf5] border-r-transparent
               border-b-[#6f55c9] animate-spin [animation-duration:2.2s]" />
          </div>

          <h1 className="text-[28px] font-extrabold tracking-[-0.02em] text-black">
            Request Submitted
          </h1>
          <p className="mt-4 text-[16px] text-[#333]">
            Your account access request is being reviewed
          </p>
        </div>

        {/* Info Banner */}
        <div className="mt-8 rounded-xl bg-[#eaf1ff] px-4 py-3 text-[13px] leading-5 text-[#6a6fe8] shadow-sm">
          <span className="font-medium">What&apos;s Next?</span> Our team will review your request and sent account credentials
          to your registered email.
        </div>

        {/* Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-md text-[#cf35f1]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75Zm2 .48v.21l6.52 4.74a.83.83 0 0 0 .96 0L19 6.44v-.21c0-.68-.55-1.23-1.23-1.23H6.23C5.55 5 5 5.55 5 6.23Zm14 1.76-5.58 4.06a2.33 2.33 0 0 1-2.84 0L5 7.99v10.01c0 .68.55 1.23 1.23 1.23h11.54c.68 0 1.23-.55 1.23-1.23V7.99Z" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#202020]">Email Address</p>
              <p className="text-[13px] text-[#8b8b8b]">{data?.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-md text-[#cf35f1]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 12 2.5Zm0 17.5a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm.75-12.25h-1.5v5.06l4.01 2.41.74-1.28-3.25-1.95Z" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#202020]">Estimate Time</p>
              <p className="text-[13px] text-[#8b8b8b]">24-48 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-md text-[#cf35f1]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M7 2.75a.75.75 0 0 1 .75.75V5h8.5V3.5a.75.75 0 0 1 1.5 0V5h.5A2.75 2.75 0 0 1 21 7.75v10.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V7.75A2.75 2.75 0 0 1 5.75 5h.5V3.5A.75.75 0 0 1 7 2.75Zm11.75 8H4.5v7.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-7.5ZM5.75 6.5c-.69 0-1.25.56-1.25 1.25v1.5h14.25v-1.5c0-.69-.56-1.25-1.25-1.25H5.75Z" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#202020]">Request Date</p>
              <p className="text-[13px] text-[#8b8b8b]">{data?.createdAt.split("T")[0]}</p>
            </div>
          </div>
        </div>

        <div className="my-7 h-px w-full bg-[#e7e7e7]" />

        {/* Approval Process */}
        <div>
          <h2 className="text-[15px] font-bold text-[#1f1f1f]">ApproveProcess</h2>

          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#19b56a] text-[#19b56a]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M9.55 16.6 5.7 12.75l-1.05 1.06 4.9 4.89L19.35 8.9 18.3 7.85z" />
                </svg>
              </div>
              <span className="text-[15px] text-[#5a5a5a]">Request Submitted</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full border-[3px] border-[#2290ff]" />
              <span className="text-[15px] text-[#5a5a5a]">Under Review</span>
            </div>

            <div className="flex items-center gap-3 opacity-45">
              <div className="h-6 w-6 rounded-full border-2 border-[#c8c8c8]" />
              <span className="text-[15px] text-[#7a7a7a]">Access Granted</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Waiting
