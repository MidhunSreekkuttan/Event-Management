import { useContext, useState } from "react";
import { AlertCircle, Upload } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { BackendContex } from "../../context/ConnectBackendContex";
import Loader from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useQuery } from '@tanstack/react-query'
import { useEffect } from "react";
import { workersContext } from "../../context/WorkersContext";

export default function WorkerRegistration() {

  const { backendUrl } = useContext(BackendContex)
  const { userData } = useContext(workersContext)

  const navigate = useNavigate()

  const getRegistrationList = useCallback(async () => {

    const { data } = await axios.get(backendUrl + "/api/workers/listFiles")
    return data.registrations

  }, [backendUrl])

  const { data, isLoading, error } = useQuery({
    queryKey: ["registration"],
    queryFn: getRegistrationList
  })

  const finding = data && userData ? data.some(item => item.user === userData._id) : []

  const [form, setForm] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    jobRole: "",
    uploadIdProof: null,
    uploadWorkPermit: null,
    uploadAddressProof: null,
    uploadResume: null
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({ ...form, [name]: type === "file" ? files[0] : value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)

      const formData = new FormData()

      formData.append("name", form.name)
      formData.append("mobileNumber", form.mobileNumber)
      formData.append("email", form.email)
      formData.append("jobRole", form.jobRole)
      formData.append("uploadIdProof", form.uploadIdProof)
      formData.append("uploadWorkPermit", form.uploadWorkPermit)
      formData.append("uploadAddressProof", form.uploadAddressProof)
      formData.append("uploadResume", form.uploadResume)

      const { data } = await axios.post(backendUrl + '/api/workers/uploadFile', formData)
      if (data.success) {
        toast.success(data.message)
        navigate("/workers/waiting")
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    finally {
      setLoading(false)
    }

  };

  useEffect(() => {

    if (finding) {
      navigate('/workers/waiting')
    }

  }, [finding])

  if (error) return <div>Error:{error.message}</div>

  return (

    <>

      {(loading || isLoading) && <Loader />}

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
                  Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
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
                  placeholder="Enter your mobile number"
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
                  placeholder="Enter your email address"
                  required
                  className="flex-1 rounded-lg bg-[#0B1026] border border-white/10 px-4 py-2 text-gray-300 focus:outline-none"
                />

              </div>
            </div>

            {/* ROLE */}
            <div>
              <label className="text-sm text-white mb-1 block">
                Job Role *
              </label>
              <select
                name="jobRole"
                value={form.jobRole}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-[#0B1026] border border-white/10 px-4 py-2 text-gray-300"
              >
                <option value="">Select a role</option>
                <option>event coordinator</option>
                <option>event staff</option>
                <option>event manager</option>
                <option>catering service</option>
                <option>technical support</option>
              </select>
            </div>

            {/* DOCUMENTS */}
            <div>
              <label className="text-sm text-white mb-3 block">
                Upload Documents (PDF, JPG, PNG)
              </label>

              <div className="grid sm:grid-cols-2 gap-4">

                <label
                  className="flex items-center gap-3 bg-[#0B1026] border border-white/10 rounded-lg px-4 py-3 cursor-pointer hover:border-white/20"
                >
                  <Upload className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {form.uploadIdProof ? form.uploadIdProof.name : "Upload ID Proof"}
                  </span>

                  <input
                    type="file"
                    className="hidden"
                    name="uploadIdProof"
                    onChange={handleChange}
                  />
                </label>
                <label
                  className="flex items-center gap-3 bg-[#0B1026] border border-white/10 rounded-lg px-4 py-3 cursor-pointer hover:border-white/20"
                >
                  <Upload className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {form.uploadWorkPermit ? form.uploadWorkPermit.name : "Upload Visa / Work Permit"}
                  </span>

                  <input
                    type="file"
                    name="uploadWorkPermit"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>
                <label
                  className="flex items-center gap-3 bg-[#0B1026] border border-white/10 rounded-lg px-4 py-3 cursor-pointer hover:border-white/20"
                >
                  <Upload className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {form.uploadAddressProof ? form.uploadAddressProof.name : "Upload Address Proof"}
                  </span>

                  <input
                    type="file"
                    name="uploadAddressProof"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>
                <label
                  className="flex items-center gap-3 bg-[#0B1026] border border-white/10 rounded-lg px-4 py-3 cursor-pointer hover:border-white/20"
                >
                  <Upload className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {form.uploadResume ? form.uploadResume.name : "Upload Resume"}
                  </span>

                  <input
                    type="file"
                    name="uploadResume"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>

              </div>

              <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                <AlertCircle className="h-4 w-4" />
                Maximum file size 5MB
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

    </>

  );
}
