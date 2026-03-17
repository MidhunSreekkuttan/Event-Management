import { useContext, useEffect, useState } from 'react'
import { BackendContex } from '../../context/ConnectBackendContex';
import { toast } from 'react-toastify';
import axios from 'axios';

const Response = () => {

  const { backendUrl } = useContext(BackendContex)

  const [response, setResponse] = useState([])

  console.log(response);


  const getResponseData = async () => {

    try {

      const { data } = await axios.get(backendUrl + "/api/staffs/getResponse")
      if (data.success) {
        setResponse(data.responsedata)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getResponseData()
  }, [])

  return (
    <div className="min-h-screen bg-[#120d09] text-[#f7ecd8] pt-15">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_35%),linear-gradient(180deg,_rgba(255,255,255,0.02),_transparent_30%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-[#c7a45a]">
              Response Management
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-[#fff5e7] md:text-5xl">
              Enquiry Responses
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#e7d6bc]/75 md:text-base">
              A refined overview of staff proposals with related event suggestions,
              pricing, and locations in a premium dark interface.
            </p>
          </div>

          <div className="rounded-2xl border border-[#c7a45a]/20 bg-white/5 p-4 backdrop-blur-sm text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[#e7d6bc]/60">
              Total Responses
            </p>
            <p className="mt-2 text-2xl font-semibold text-[#fff5e7]">
              {response.length}
            </p>
          </div>

        </div>

        <div className="grid gap-6">
          {Array.isArray(response) &&
            response.map((response) => (
              <div
                key={response._id}
                className="group overflow-hidden rounded-3xl border border-[#c7a45a]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#c7a45a]/40"
              >
                <div className="border-b border-[#c7a45a]/10 bg-[linear-gradient(135deg,rgba(199,164,90,0.16),rgba(255,255,255,0.02))] px-6 py-5 md:px-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#d9bb78]">
                        Response ID
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-[#fff8ee]">
                        {response._id}
                      </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="rounded-full border border-[#c7a45a]/20 bg-black/20 px-4 py-2 text-[#f4e7d0]">
                        Staff: <span className="font-semibold text-[#fff8ee]">Test Staff</span>
                      </span>

                      <span className="rounded-full border border-[#c7a45a]/20 bg-black/20 px-4 py-2 text-[#f4e7d0]">
                        Proposal Date:{'  '}
                        <span className="font-semibold text-[#d9bb78]">
                          {response.enquiryId?.date.split("T")[0]}
                        </span>
                      </span>

                      {/* VIEW BUTTON */}
                      <button
                        className="ml-2 rounded-xl bg-[#c7a45a] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e2c177]"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-6 md:px-8 md:py-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[#fff5e7]">
                        Related Events Summary
                      </h3>
                      <p className="mt-1 text-sm text-[#e7d6bc]/65">
                        Suggested events tailored for this enquiry response.
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-[#c7a45a]/20 bg-[#c7a45a]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#d9bb78] md:block">
                      {response.relatedEvents?.length} Options
                    </div>
                  </div>

                  <div className="space-y-4">
                    {response.relatedEvents?.map((event) => (
                      <div
                        key={event._id}
                        className="rounded-2xl border border-[#c7a45a]/10 bg-black/20 p-4 transition duration-300 group-hover:border-[#c7a45a]/20"
                      >
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">

                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="h-2.5 w-2.5 rounded-full bg-[#c7a45a] shadow-[0_0_20px_rgba(199,164,90,0.8)]" />
                              <h4 className="text-lg font-medium text-[#fff8ee]">
                                {event.event_name}
                              </h4>
                            </div>
                            <p className="text-sm text-[#e7d6bc]/70">
                              Category: <span className="text-[#f4e7d0]">{event.category}</span>
                            </p>
                          </div>

                          <div className="grid gap-2 text-sm md:text-right">
                            <p className="text-[#e7d6bc]/70">
                              Price: <span className="font-semibold text-[#d9bb78]">{event.price}</span>
                            </p>
                            <p className="text-[#e7d6bc]/70">
                              Location: <span className="text-[#f4e7d0]">{event.location}</span>
                            </p>
                          </div>

                        </div>

                        <div className='mt-3 flex gap-2 text-sm justify-between'>
                          <p className="text-[#e7d6bc]/70">
                            status: <span className="font-semibold text-[#d9bb78]">{event.status}</span>
                          </p>
                          <p className="text-[#e7d6bc]/70">
                            starting_price: <span className="text-[#f4e7d0]">{event.starting_price}</span>
                          </p>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Response
