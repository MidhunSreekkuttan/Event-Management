import React from 'react'
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../Context";
import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Loader from "../components/Loading";
import { ScanEye } from 'lucide-react';
import { toast } from "react-toastify";

import WorkersDetailsPage from "./WorkersDetailsPage";

const EventManagersList = () => {

  const [selectedWorkerId, setSelectedWorkerId] = React.useState(null);
  const navigate = useNavigate();

  const { backendUrl } = useContext(AdminContext)

  const queryClient = useQueryClient()

  const getEventManagerList = useCallback(async () => {

    const { data } = await axios.get(backendUrl + "/api/eventManagement/singleEventManagerList")
    if (data.success) {
      return data?.eventManager || []
    } else {
      return []
    }

  }, [backendUrl])

  const { data, isLoading, error } = useQuery({
    queryKey: ["eventManger"],
    queryFn: getEventManagerList
  })

  console.log(data);


  const getStatusClass = (status) => {
    if (status === "approved") {
      return "bg-emerald-100/80 text-emerald-700 ring-1 ring-emerald-200";
    }
    if (status === "pending") {
      return "bg-yellow-100/80 text-yellow-700 ring-1 ring-yellow-400";
    }
    if (status === "rejected") {
      return "bg-rose-100/80 text-rose-700 ring-1 ring-rose-400"
    }

  };

  const handleClick = (id) => {
    setSelectedWorkerId(id);
  }

  const redGlass =
    "border border-red-200/60 bg-gradient-to-br from-white/80 via-red-50/70 to-red-100/60 backdrop-blur-2xl shadow-[0_25px_100px_rgba(220,38,38,0.18)]";

  if (error) return <div>Error:{error.message}</div>

  return (
    <>

      {isLoading && <Loader />}

      <div
        className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.16),
            _transparent_24%),radial-gradient(circle_at_top_right,_rgba(0,0,0,0.08),
                _transparent_20%),linear-gradient(135deg,_#ffffff,_#fff1f2,_#fee2e2)] text-black pt-3"
      >
        <div className={`mx-auto max-w-7xl rounded-[32px] p-6 sm:p-8 ${redGlass}`}>
          <div className="flex flex-col gap-5 border-b border-red-200/60 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-black">
                Workers List
              </h1>
              <p className="mt-2 text-sm text-black/55">
                View all registered workers and their verification status.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[24px] border border-red-200/60 bg-white/60 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-red-50/50">
                  <tr className="text-left text-xs font-bold text-red-900/50 uppercase tracking-widest">
                    <th className="px-8 py-5">Worker Name</th>
                    <th className="px-8 py-5">Email Address</th>
                    <th className="px-8 py-5 text-center">Verification Status</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-red-100/70 bg-transparent">
                  {data?.map((worker) => (
                    <tr
                      key={worker._id}
                      className="transition hover:bg-red-50/30 group"
                    >
                      <td className="px-8 py-5 text-sm font-bold text-black">
                        {worker.name}
                      </td>

                      <td className="px-8 py-5 text-sm text-black/60 font-medium">
                        {worker.email}
                      </td>

                      <td className="px-8 py-5 text-center">
                        <span
                          className={`inline-flex min-w-32 justify-center rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-tighter ${getStatusClass(
                            worker?.isAdminVerified
                          )}`}
                        >
                          {worker?.isAdminVerified}
                        </span>
                      </td>

                      <td className="px-8 py-5 text-right">
                        <button
                          onClick={() => handleClick(worker._id)}
                          className="inline-flex items-center gap-2 rounded-2xl border border-red-200/60 bg-white shadow-sm px-5 py-2.5 text-sm font-bold
                             text-red-600 transition hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer active:scale-95"
                        >
                          <ScanEye size={18} />
                          <span>View Details</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {selectedWorkerId && (
        <WorkersDetailsPage
          workersId={selectedWorkerId}
          onClose={() => setSelectedWorkerId(null)}
        />
      )}
    </>
  )

}

export default EventManagersList