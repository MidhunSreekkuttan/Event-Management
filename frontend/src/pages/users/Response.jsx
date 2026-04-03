import { useCallback, useContext, useEffect, useState } from 'react'
import { BackendContex } from '../../context/ConnectBackendContex';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loading';

const Response = () => {

  const { backendUrl } = useContext(BackendContex)

  const navigate = useNavigate()

  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)

  const getResponseData = useCallback(async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/staffs/getResponse")
      if (data.success) {
        setResponse(data.responsedata)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }, [backendUrl])

  const handleClick = (id) => {
    navigate(`/response-Details/${id}`)
  }

  useEffect(() => {
    getResponseData()
  }, [getResponseData])

  return response.length > 0 ? (
    <>
      {loading && <Loader />}

      <div className="min-h-screen bg-[#F6F0FD] text-slate-800 pt-15">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                Response Management
              </p>

              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Enquiry Responses
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                A refined overview of staff proposals with related event suggestions,
                pricing, and locations in a clean modern interface.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-200 bg-white p-4 shadow-sm text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Total Responses
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {response.length}
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {Array.isArray(response) &&
              response.map((response) => {
                const desable = response?.status === 'paid'

                return (
                  <div
                    key={response._id}
                    className={`group overflow-hidden rounded-3xl border border-purple-200 bg-white shadow-md transition duration-300 ${desable ? "opacity-60" : "hover:-translate-y-1 hover:shadow-xl"
                      }`}
                  >
                    <div className="border-b border-purple-100 bg-[#FDF9FF] px-6 py-5 md:px-8">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                            Response ID
                          </p>

                          <h2 className="mt-2 text-2xl font-semibold text-slate-900 break-all">
                            {response._id}
                          </h2>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-slate-700">
                            Staff: <span className="font-semibold text-slate-900">Test Staff</span>
                          </span>

                          <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-slate-700">
                            Proposal Date:{' '}
                            <span className="font-semibold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                              {response.enquiryId?.date?.split("T")[0] || "No Date"}
                            </span>
                          </span>

                          <button
                            onClick={() => handleClick(response._id)}
                            disabled={desable}
                            className={`ml-2 rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 px-4 py-2
                               text-sm font-semibold text-white transition 
                                ${desable ? "opacity-60 cursor-default" : ""
                              }`}
                          >
                            {desable ? "Booked" : "View Details"}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-6 md:px-8 md:py-7">
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            Related Events Summary
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">
                            Suggested events tailored for this enquiry response.
                          </p>
                        </div>

                        <div className="hidden rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs uppercase tracking-[0.25em] bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent md:block">
                          {response.relatedEvents?.length || 0} Options
                        </div>
                      </div>

                      <div className="space-y-4">
                        {response.relatedEvents?.map((event) => (
                          <div
                            key={event._id}
                            className="rounded-2xl border border-purple-200 bg-white p-4 transition duration-300 group-hover:border-purple-300"
                          >
                            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                              <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-md" />
                                  <h4 className="text-lg font-medium text-slate-900">
                                    {event.event_name}
                                  </h4>
                                </div>

                                <p className="text-sm text-slate-600">
                                  Category: <span className="text-slate-800">{event.category}</span>
                                </p>
                              </div>

                              <div className="grid gap-2 text-sm md:text-right">
                                <p className="text-slate-600">
                                  Price: <span className="font-semibold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">{event.price}</span>
                                </p>
                                <p className="text-slate-600">
                                  Location: <span className="text-slate-800">{event.location}</span>
                                </p>
                              </div>
                            </div>

                            <div className='mt-3 flex gap-2 text-sm justify-between'>
                              <p className="text-slate-600">
                                Status: <span className="font-semibold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">{event.status}</span>
                              </p>
                              <p className="text-slate-600">
                                Starting Price: <span className="text-slate-800">{event.starting_price}</span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F6F0FD] px-6 text-center text-slate-800">
      <div className="rounded-3xl border border-purple-200 bg-white p-10 shadow-lg">
        <h1 className="mb-3 text-4xl font-semibold text-slate-900">
          No Responses Found
        </h1>

        <p className="mb-6 max-w-md text-slate-600">
          There are currently no enquiry responses available.
          Once staff submit proposals, they will appear here.
        </p>

        <button
          onClick={() => navigate('/')}
          className="rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 px-6 py-3 font-semibold
             text-white transition hover:scale-105"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  )
}

export default Response