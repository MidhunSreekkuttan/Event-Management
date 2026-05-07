import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AdminContext } from "../Context";
import { 
  X, Mail, Phone, MapPin, CheckCircle2
} from "lucide-react";
import Loader from "../components/Loading";

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
import React from 'react'
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  X,
} from 'lucide-react'

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
                    <h1 className="text-2xl font-black text-gray-900 leading-tight">{data.worker.name}</h1>
                    <div className="inline-flex items-center gap-1 bg-[#E8F8F0] text-[#10B981] px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#D1FAE5]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>
                      {data.worker.isAdminVerified}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Mail size={14} className="text-gray-300" />
                      <span className="text-xs font-medium">{data.worker.email}</span>
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
                    ["Full Name", data.registration?.name || data.worker.name],
                    ["Email", data.worker.email],
                    ["Phone Number", data.registration?.mobileNumber || "N/A"],
                    ["Location", data.registration?.location || "N/A"],
                    ["Role / Position", data.registration?.jobRole || "N/A"],
                    ["Experience", data.registration?.experience || "Not Specified"],
                    ["Joined Date", data.registration?.date ? new Date(data.registration.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : "N/A"],
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
                {/* Skills */}
                <div className="space-y-3">
                  <h3 className="text-[#D32F2F] font-bold text-sm border-b border-gray-100 pb-1 uppercase tracking-wider">Expertise</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {(data.registration?.skills || [data.registration?.jobRole, "Verified Worker"]).map((skill) => (
                      <span key={skill} className="bg-[#FFF1F1] text-[#D32F2F] px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Status */}
                <div className="space-y-3">
                  <h3 className="text-[#D32F2F] font-bold text-sm border-b border-gray-100 pb-1 uppercase tracking-wider">Verification Status</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 font-semibold text-[11px]">Email Verified</span>
                      <div className="flex items-center gap-1.5 text-[#10B981] font-black text-[11px]">
                        <CheckCircle2 size={14} fill="currentColor" className="text-white bg-[#10B981] rounded-full" />
                        <span>Yes</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 font-semibold text-[11px]">Admin Verified</span>
                      <div className={`flex items-center gap-1.5 font-black text-[11px] ${data.worker.isAdminVerified === 'approved' ? 'text-[#10B981]' : 'text-amber-500'}`}>
                        <CheckCircle2 size={14} fill="currentColor" className={`text-white rounded-full ${data.worker.isAdminVerified === 'approved' ? 'bg-[#10B981]' : 'bg-amber-500'}`} />
                        <span className="capitalize">{data.worker.isAdminVerified}</span>
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          <h2 className="text-[34px] font-bold text-black">
            Worker Details
          </h2>

          <button className="text-gray-500 hover:text-black transition-all">
            <X size={30} strokeWidth={2.2} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src="https://i.pravatar.cc/300?img=12"
              alt="worker"
              className="w-[170px] h-[170px] rounded-[24px] object-cover"
            />

            <div className="flex-1">
              <h3 className="text-[42px] font-bold text-black lowercase mb-3">
                midhun
              </h3>

              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-green-600" />
                approved
              </span>

              <div className="space-y-4 text-[20px] text-gray-700">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-gray-500" />
                  <span>midhunsreekuttan987@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-gray-500" />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-gray-500" />
                  <span>Kochi, Kerala, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-[28px] font-bold text-red-500 mb-6">
              Personal Information
            </h4>

            <div className="grid grid-cols-2 gap-y-5 gap-x-10 text-[19px]">
              {[
                ['Full Name', 'Midhun Sreekuttan'],
                ['Email', 'midhunsreekuttan987@gmail.com'],
                ['Phone Number', '+91 98765 43210'],
                ['Location', 'Kochi, Kerala, India'],
                ['Role / Position', 'Event Coordinator'],
                ['Experience', '3 Years'],
                ['Joined Date', '12 March 2024'],
              ].map(([label, value], idx) => (
                <div key={idx} className="contents">
                  <span className="font-semibold text-gray-700">
                    {label}
                  </span>

                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skills */}
            <div>
              <h4 className="text-[28px] font-bold text-red-500 mb-5">
                Skills
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  'Event Planning',
                  'Vendor Management',
                  'Decoration',
                  'Client Handling',
                  'Logistics',
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-red-50 text-red-400 text-sm font-medium border border-red-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification */}
            <div className="md:border-l border-gray-200 md:pl-8">
              <h4 className="text-[28px] font-bold text-red-500 mb-5">
                Verification Status
              </h4>

              <div className="space-y-5 text-[19px]">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Email Verified</span>

                  <span className="flex items-center gap-2 text-green-600 font-semibold">
                    <CheckCircle size={18} fill="currentColor" />
                    Yes
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Phone Verified</span>

                  <span className="flex items-center gap-2 text-green-600 font-semibold">
                    <CheckCircle size={18} fill="currentColor" />
                    Yes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-8 py-5 flex justify-end bg-white">
          <button className="bg-red-500 hover:bg-red-600 transition-all text-white font-semibold px-10 py-3 rounded-2xl text-lg shadow-md">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
