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

const WorkerRegistration = () => {
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

  const verifyEmail = async () => {
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

  const submitForm = async (e) => {
    e.preventDefault();
    if (!emailVerified) {
      alert("Verify email first");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Application Submitted");
      setForm({
        fullName: "",
        mobileNumber: "",
        email: "",
        role: "",
        robot: false,
      });
      setUploads({});
      setEmailVerified(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-2">
          Worker Registration
        </h1>
        <p className="text-gray-500 mb-6">
          Register yourself as an event staff member
        </p>

        <form onSubmit={submitForm} className="space-y-6">
          {/* NAME & MOBILE */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="border rounded-md p-2 w-full"
              required
            />
            <input
              name="mobileNumber"
              value={form.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="border rounded-md p-2 w-full"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="flex gap-2">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              disabled={emailVerified}
              className="border rounded-md p-2 flex-1"
              required
            />
            <button
              type="button"
              onClick={verifyEmail}
              disabled={emailVerified || verifying}
              className={`px-3 py-2 rounded-md text-sm text-white ${
                emailVerified
                  ? "bg-green-500"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {verifying ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : emailVerified ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                "Verify"
              )}
            </button>
          </div>

          {/* ROLE */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
            required
          >
            <option value="">Select Job Role</option>
            <option value="coordinator">Event Coordinator</option>
            <option value="staff">Event Staff</option>
            <option value="manager">Event Manager</option>
            <option value="catering">Catering</option>
            <option value="technical">Technical Support</option>
          </select>

          {/* DOCUMENTS */}
          <div>
            <p className="font-medium mb-2">
              Upload Documents
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {documentTypes.map((doc) => (
                <label
                  key={doc.type}
                  className="border rounded-lg p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-50"
                >
                  <Upload className="h-4 w-4" />
                  <span className="text-sm">{doc.label}</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      uploadFile(doc.type, e.target.files[0])
                    }
                  />
                  {uploads[doc.type] && (
                    <CheckCircle2 className="h-4 w-4 text-green-600 ml-auto" />
                  )}
                </label>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
              <AlertCircle className="h-4 w-4" />
              Max file size 5MB · PDF / JPG / PNG
            </div>
          </div>

          {/* ROBOT CHECK */}
          <label className="flex items-center gap-2 border rounded-lg p-3">
            <input
              type="checkbox"
              name="robot"
              checked={form.robot}
              onChange={handleChange}
              required
            />
            <span className="text-sm">I'm not a robot</span>
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
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
};

export default WorkerRegistration;