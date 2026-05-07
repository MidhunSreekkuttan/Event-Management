import React from 'react'
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../Context";
import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Loader from "../components/Loading";
import { ScanEye } from 'lucide-react';
import { toast } from "react-toastify";

import { 
  X, Mail, Phone, MapPin, Building2, CheckCircle2, FileText, Download, Briefcase
} from "lucide-react";

const ManagerDetailsModal = ({ manager, onClose }) => {
  const { backendUrl } = useContext(AdminContext);

  const { data: registrationData, isLoading } = useQuery({
    queryKey: ["managerRegistration", manager._id],
    queryFn: async () => {
      const { data } = await axios.get(`${backendUrl}/api/product/listDocument`);
      if (data.success) {
        return data.registrations.find(reg => reg.owner === manager._id);
      }
      return null;
    },
    enabled: !!manager._id && !!backendUrl
  });

  if (!manager) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/10 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="w-full max-w-[600px] bg-white rounded-[32px] shadow-[0_15px_60px_rgba(0,0,0,0.12)] overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <h2 className="text-lg font-bold text-gray-900">Event Manager Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition p-1">
            <X size={20} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          {isLoading ? (
            <div className="h-64 flex items-center justify-center"><Loader /></div>
          ) : (
            <>
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-[24px] bg-[#FDE2E2] overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <Building2 size={40} className="text-red-500" />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="space-y-1">
                    <h1 className="text-2xl font-black text-gray-900 leading-tight">
                      {registrationData?.companyName || manager.name}
                    </h1>
                    <div className="inline-flex items-center gap-1 bg-[#E8F8F0] text-[#10B981] px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#D1FAE5]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>
                      {manager.isAdminVerified}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Mail size={14} className="text-gray-300" />
                      <span className="text-xs font-medium">{manager.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Phone size={14} className="text-gray-300" />
                      <span className="text-xs font-medium">{registrationData?.contactNumber || "N/A"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#D32F2F] font-bold text-sm border-b border-gray-100 pb-1 uppercase tracking-wider">Company Information</h3>
                <div className="grid grid-cols-1 gap-y-2.5">
                  {[
                    ["Owner Name", registrationData?.ownerName || manager.name],
                    ["Company Name", registrationData?.companyName || "N/A"],
                    ["Contact", registrationData?.contactNumber || "N/A"],
                    ["Address", registrationData?.address || "N/A"],
                    ["Registered On", registrationData?.date ? new Date(registrationData.date).toLocaleDateString() : "N/A"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-start">
                      <span className="w-32 text-gray-400 font-semibold text-[11px]">{label}</span>
                      <span className="flex-1 text-gray-800 font-bold text-[11px] leading-tight">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button 
                  onClick={onClose}
                  className="bg-[#EF4444] text-white px-8 py-2 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-red-600 transition shadow-lg shadow-red-50 active:scale-95"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const EventManagersList = () => {

  const [selectedManager, setSelectedManager] = React.useState(null);
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

  const handleClick = (manager) => {
    setSelectedManager(manager);
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
                Event Managers List
              </h1>
              <p className="mt-2 text-sm text-black/55">
                View all registered event managers and their verification status.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[24px] border border-red-200/60 bg-white/60 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-red-50/50">
                  <tr className="text-left text-xs font-bold text-red-900/50 uppercase tracking-widest">
                    <th className="px-8 py-5">Manager Name</th>
                    <th className="px-8 py-5">Email Address</th>
                    <th className="px-8 py-5 text-center">Verification Status</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-red-100/70 bg-transparent">
                  {data?.map((manager) => (
                    <tr
                      key={manager._id}
                      className="transition hover:bg-red-50/30 group"
                    >
                      <td className="px-8 py-5 text-sm font-bold text-black">
                        {manager.name}
                      </td>

                      <td className="px-8 py-5 text-sm text-black/60 font-medium">
                        {manager.email}
                      </td>

                      <td className="px-8 py-5 text-center">
                        <span
                          className={`inline-flex min-w-32 justify-center rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-tighter ${getStatusClass(
                            manager?.isAdminVerified
                          )}`}
                        >
                          {manager?.isAdminVerified}
                        </span>
                      </td>

                      <td className="px-8 py-5 text-right">
                        <button
                          onClick={() => handleClick(manager)}
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

      {selectedManager && (
        <ManagerDetailsModal
          manager={selectedManager}
          onClose={() => setSelectedManager(null)}
        />
      )}

    </>
  )

}

export default EventManagersList