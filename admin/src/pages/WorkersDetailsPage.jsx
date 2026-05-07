import React from 'react'
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  X,
} from 'lucide-react'

const WorkersDetailsPage = () => {
  return (
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