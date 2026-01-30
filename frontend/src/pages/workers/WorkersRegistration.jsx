"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  Upload,
} from "lucide-react";

const documentTypes = [
  { type: "id-proof", label: "Upload ID Proof" },
  { type: "visa", label: "Upload Visa / Work Permit" },
  { type: "address-proof", label: "Upload Address Proof" },
  { type: "resume", label: "Upload Resume" },
];

export default function WorkerRegistration() {
  const [form, setForm] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    role: "",
    robot: false,
  });

  const [emailVerified, setEmailVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploads, setUploads] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const verifyEmail = () => {
    if (!form.email) return;
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setEmailVerified(true);
    }, 1500);
  };

  const uploadFile = (type, file) => {
    setUploads({ ...uploads, [type]: file });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!emailVerified) {
      alert("Please verify your email");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Application Submitted");
    }, 2000);
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-3xl mx-auto bg-white/3 border border-white rounded-2xl p-8">

        {/* HEADER */}
        <h1 className="text-2xl font-semibold text-white mb-1">
          Worker Registration
        </h1>
        <p className="text-gray-400 mb-8">
          Join our team as an event staff member by registering your details below.
        </p>

        <form onSubmit={submitForm} className="space-y-6">

          {/* NAME & MOBILE */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white mb-1 block">
                Full Name *
              </label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="John Thomas"
                required
                className="w-full rounded-lg bg-[#0B1026] border border-white/10 px-4 py-2 text-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-white mb-1 block">
                Mobile Number *
              </label>
              <input
                name="mobileNumber"
                value={form.mobileNumber}
                onChange={handleChange}
                placeholder="+91 9876543210"
                required
                className="w-full rounded-lg bg-[#0B1026] border border-white/10 px-4 py-2 text-gray-300 focus:outline-none"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-white mb-1 block">
              Email Address *
            </label>

            <div className="flex gap-3">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john.thomas@email.com"
                disabled={emailVerified}
                required
                className="flex-1 rounded-lg bg-[#0B1026] border border-white/10 px-4 py-2 text-gray-300 focus:outline-none"
              />

              <button
                type="button"
                onClick={verifyEmail}
                disabled={emailVerified || verifying}
                className={`px-4 rounded-lg text-sm font-medium text-white flex items-center justify-center ${
                  emailVerified
                    ? "bg-green-500"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {verifying ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : emailVerified ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  "Verify Email"
                )}
              </button>
            </div>
          </div>

          {/* ROLE */}
          <div>
            <label className="text-sm text-white mb-1 block">
              Job Role *
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-[#0B1026] border border-white/10 px-4 py-2 text-gray-300"
            >
              <option value="">Select a role</option>
              <option>Event Coordinator</option>
              <option>Event Staff</option>
              <option>Event Manager</option>
              <option>Catering Service</option>
              <option>Technical Support</option>
            </select>
          </div>

          {/* DOCUMENTS */}
          <div>
            <label className="text-sm text-white mb-3 block">
              Upload Documents (PDF, JPG, PNG)
            </label>

            <div className="grid sm:grid-cols-2 gap-4">
              {documentTypes.map((doc) => (
                <label
                  key={doc.type}
                  className="flex items-center gap-3 bg-[#0B1026] border border-white/10 rounded-lg px-4 py-3 cursor-pointer hover:border-white/20"
                >
                  <Upload className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {doc.label}
                  </span>

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      uploadFile(doc.type, e.target.files[0])
                    }
                  />

                  {uploads[doc.type] && (
                    <CheckCircle2 className="h-4 w-4 text-green-500 ml-auto" />
                  )}
                </label>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
              <AlertCircle className="h-4 w-4" />
              Maximum file size 5MB
            </div>
          </div>

          {/* ROBOT */}
          <label className="flex items-center gap-3 bg-[#0B1026] border border-white/10 rounded-lg px-4 py-3">
            <input
              type="checkbox"
              name="robot"
              checked={form.robot}
              onChange={handleChange}
              required
            />
            <span className="text-sm text-gray-300">
              I'm not a robot
            </span>
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
