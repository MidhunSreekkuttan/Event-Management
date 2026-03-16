import { toast } from 'react-toastify'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { BackendContex } from '../../context/ConnectBackendContex'
import Loader from '../../components/Loading'
import { useNavigate } from 'react-router-dom'

const Response = () => {

  const navigate = useNavigate()

  const { backendUrl } = useContext(BackendContex)

  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)

  const getBookingList = async () => {

    try {

      const { data } = await axios.get(backendUrl + '/api/staffs/getResponse')
      if (data.success) {
        setResponse(data.responsedata)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    finally {
      setLoading(false)
    }
  }

  const handleClick = (id) => {
    navigate(`/response-Details/${id}`)
  }

  useEffect(() => {
    getBookingList()
  }, [])

  return response.length > 0 ? (

    <>

      {loading && <Loader />}

      <div className="min-h-screen p-6 md:p-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg overflow-hidden mt-15">

          <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-6 md:px-10">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Enquiry Responses
            </h1>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-6 py-5 md:px-10">
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              View all responses submitted for your enquiry and open any response for full details.
            </p>
          </div>

          <div className="px-6 py-6 md:px-10">

            <div className="space-y-5">

              <div className="grid grid-cols-2 gap-5">

                {Array.isArray(response) &&
                  response.map((data, dataIndex) =>
                    data.relatedEvents?.map((item, index) => (

                      <div
                        key={`${dataIndex}-${index}`}
                        className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden"
                      >
                        <div className="px-6 py-5">

                          <div className="flex items-start justify-between mb-3">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                              {item.company_name}
                            </h2>
                          </div>

                          <p className="text-slate-700 dark:text-slate-300 text-lg mb-2">
                            Responsed By: <span className="font-bold">Staff</span>
                          </p>

                          <div className="border-t border-slate-200 dark:border-slate-700 my-2"></div>

                          {item.category && (
                            <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                              {item.category}: ${item.price}
                            </p>
                          )}

                          <div className="flex justify-between text-slate-700 dark:text-slate-300 text-lg">
                            {data.enquiryId?.date && (
                              <p>
                                Proposal Date:{" "}
                                <span className="font-bold">
                                  {data.enquiryId?.date.split("T")[0]}
                                </span>
                              </p>
                            )}

                            <p>
                              Location:{" "}
                              <span className="font-bold">{item.location}</span>
                            </p>
                          </div>

                        </div>

                        <div className="flex items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-6 py-4">
                          <p className="text-slate-600 dark:text-slate-300 text-base">
                            {data.respondMessage}
                          </p>

                          <button
                            onClick={() => handleClick(data._id)}
                            className="rounded-lg bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white font-semibold whitespace-nowrap"
                          >
                            View Details
                          </button>
                        </div>
                      </div>

                    ))
                  )}

              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  ) : <div className="min-h-screen flex items-center justify-center px-6">

    <div className="max-w-lg w-full text-center bg-white dark:bg-slate-800 shadow-lg rounded-3xl p-10 border border-slate-200 dark:border-slate-700">

      <div className="text-6xl mb-4">📭</div>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
        No Responses Yet
      </h1>

      <p className="text-slate-600 dark:text-slate-300 mb-6">
        You haven't received any responses for your enquiries yet.
        Once staff respond with event suggestions, they will appear here.
      </p>

      <button
        onClick={() => navigate("/eventList")}
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
      >
        Explore Events
      </button>

    </div>

  </div>
}

export default Response