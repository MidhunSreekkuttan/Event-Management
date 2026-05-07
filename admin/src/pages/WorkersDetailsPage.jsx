import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AdminContext } from "../Context";
import {
  X, Mail, Phone, MapPin, CheckCircle2
} from "lucide-react";
import Loader from "../components/Loading";
import { useCallback } from "react";

const WorkersDetailsPage = ({ workersId, onClose }) => {
  const { backendUrl } = useContext(AdminContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["workerDetails", workersId],
    queryFn: async () => {
      const { data } = await axios.get(`${backendUrl}/api/admin/getWorkerDetails/${workersId}`);
      if (data.success) return data;
      throw new Error(data.message || "Failed to fetch details");
    },
    enabled: !!workersId
  });

  if (!workersId) return null;

  const getWorkersData = useCallback(async () => {

    try {

      const { data } = await axios.get(backendUrl + "/api/workers/listFiles")
      if (data.success) {
        return data?.registrations || []
      } else {
        return []
      }

    } catch (error) {

    }

  }, [backendUrl])

  const { data: workersData } = useQuery({
    queryKey: ["workersData"],
    queryFn: getWorkersData
  })

  console.log(data);


  const getData = Array.isArray(workersData) && workersData.find(item => item?.name)

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/10 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className="w-full max-w-[600px] bg-white rounded-[32px] shadow-[0_15px_60px_rgba(0,0,0,0.12)] overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <h2 className="text-lg font-bold text-gray-900">Worker Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition p-1">
            <X size={20} />
          </button>
        </div>

        <div className="p-8 space-y-6">

          {isLoading ? (
            <div className="h-64 flex items-center justify-center">
              <Loader />
            </div>
          ) : error ? (
            <div className="text-center p-6">
              <h3 className="text-red-500 font-bold">Error</h3>
              <p className="text-sm text-gray-500">{error.message}</p>
              <button onClick={onClose} className="mt-4 text-red-500 font-bold hover:underline">Close</button>
            </div>
          ) : (
            <>
              {/* Top Profile Section */}
              <div className="flex items-start gap-6">
                <div className="w-28 h-28 rounded-[28px] bg-[#FDE2E2] overflow-hidden flex-shrink-0">
                  <img
                    src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611734.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="space-y-1">
                    <h1 className="text-2xl font-black text-gray-900 leading-tight">
                      {
                        data?.registration?.name ? data?.registration?.name?.[0].toUpperCase() + data?.registration?.name?.slice(1) : data?.registration?.name
                      }
                    </h1>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Mail size={14} className="text-gray-300" />
                      <span className="text-xs font-medium">{data?.registration?.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Phone size={14} className="text-gray-300" />
                      <span className="text-xs font-medium">{data.registration?.mobileNumber || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={14} className="text-gray-300" />
                      <span className="text-xs font-medium">{data.registration?.location || "India"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-[#D32F2F] font-bold text-sm border-b border-gray-100 pb-1 uppercase tracking-wider">Personal Information</h3>
                <div className="grid grid-cols-1 gap-y-2.5">
                  {[
                    ["Name", data?.registration?.name ? data?.registration?.name?.[0].toUpperCase() + data?.registration?.name?.slice(1) : data?.registration?.name || data.worker.name],
                    ["Email", data?.worker?.email],
                    ["Phone Number", data?.registration?.mobileNumber || "N/A"],
                    ["Role / Position", data?.registration?.jobRole || "N/A"],
                    ["Joined Date", data?.registration?.date ? new Date(data?.registration?.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : "N/A"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-start">
                      <span className="w-32 text-gray-400 font-semibold text-[11px]">{label}</span>
                      <span className="flex-1 text-gray-800 font-bold text-[11px] leading-tight">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills and Verification Status */}
              <div className="grid grid-cols-2 gap-8">

                {/* Verification Status */}
                <div className="space-y-3">
                  <h3 className="text-[#D32F2F] font-bold text-sm border-b border-gray-100 pb-1 uppercase tracking-wider">Verification Status</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 font-semibold text-[11px]">Account Verified</span>
                      <div className="flex items-center gap-1.5 text-[#10B981] font-black text-[11px]">
                        <CheckCircle2 size={14} fill="currentColor" className="text-white bg-[#10B981] rounded-full" />
                        
                        <span>{data?.worker?.isAdminVerified}</span>
                        
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Footer */}
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

export default WorkersDetailsPage;