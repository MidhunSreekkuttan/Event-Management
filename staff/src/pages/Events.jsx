import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { StaffContext } from "../context/staffContext";
import Loader from "../../../frontend/src/components/Loading";
import { useNavigate } from 'react-router-dom'

const Events = () => {

  const { backendUrl } = useContext(StaffContext)

  const navigate = useNavigate()

  const [filtering, setFiltering] = useState('all Events')

  const getEventList = async () => {

    try {

      const { data } = await axios.get(backendUrl + '/api/product/listProduct')
      if (data.success) {
        return data.product
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["eventList"],
    queryFn: getEventList,
  })

  const filter = filtering === 'all Events' ? data : data?.filter(item => item?.status === filtering)

  const getStatusClass = (status) => {
    if (status === 'upcoming') return 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200';
    if (status === 'ongoing') return 'bg-amber-100 text-amber-700 ring-1 ring-amber-200';
    return 'bg-slate-200 text-slate-700 ring-1 ring-slate-300';
  };

  const handleClick = (id) => {
    navigate(`/eventDetails/${id}`)
  }

  if (isLoading) return <div><Loader /></div>
  if (error) return <div>Error:{error.message}</div>

  return (

    <>

      <div className="min-h-screen w-7xl bg-slate-100 p-4 sm:p-6 lg:p-10 mt-1 rounded-r-2xl mb-3">
        <div className="mx-auto -mt-5 max-w-7xl rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
          <header className="flex flex-col gap-5 border-b border-slate-200 px-6 py-6 sm:px-8 lg:flex-row lg:items-center
              lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-2xl font-bold text-white
                 shadow-lg shadow-violet-200">
                S
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Event Listing</h1>
                <p className="mt-1 text-sm text-slate-500">Manage and monitor all staff event records.</p>
              </div>
            </div>

          </header>

          <main className="px-6 py-6 sm:px-8 sm:py-8">
            <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <button onClick={() => setFiltering("all Events")} className={`p-3 ${filtering === 'all Events' ?
                  'bg-violet-600 text-white' : ''}`}>All Events</button>
                <button onClick={() => setFiltering("upcoming")} className={`p-3 ${filtering === 'upcoming' ?
                  'bg-violet-600 text-white' : ''}`}>Upcoming</button>
                <button onClick={() => setFiltering("ongoing")} className={`p-3 ${filtering === 'ongoing' ?
                  'bg-violet-600 text-white' : ''}`}>Ongoing</button>
                <button onClick={() => setFiltering("completed")} className={`p-3 ${filtering === 'completed' ?
                  'bg-violet-600 text-white' : ''}`}>Completed</button>
              </div>

            </div>

            <div className="overflow-hidden rounded-[24px] border border-slate-200">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-sm font-semibold text-slate-600">
                      <th className="px-6 py-5">Event Name</th>
                      <th className="px-6 py-5">Client</th>
                      <th className="px-6 py-5">Date</th>
                      <th className="px-6 py-5">Location</th>
                      <th className="px-6 py-5">Status</th>
                      <th className="px-6 py-5">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {filter.map((event) => (
                      <tr key={event._id} className="transition hover:bg-slate-50/80">
                        <td className="px-6 py-5 text-sm font-semibold text-slate-900">{event?.event_name}</td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <img className="flex h-15 w-15 items-center justify-center rounded-2xl object-cover" src={event?.image[0]} />
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-600">{event.date.split("T")[0]}</td>
                        <td className="px-6 py-5 text-sm text-slate-600">{event.location}</td>
                        <td className="px-6 py-5">
                          <span className={`inline-flex rounded-xl px-4 py-2 text-sm font-semibold ${getStatusClass(event.status)}`}>
                            {event.status}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <button onClick={() => handleClick(event._id)} className="rounded-xl border border-violet-200 bg-violet-50 px-5 py-2.5 text-sm font-semibold text-violet-700 transition hover:bg-violet-100">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </main>
        </div>
      </div>

    </>

  )
}

export default Events
