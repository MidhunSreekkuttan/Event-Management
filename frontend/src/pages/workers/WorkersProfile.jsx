import {
  Edit,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Upload,
} from "lucide-react";

/* ---------------- DATA ---------------- */
const documents = [
  { name: "ID Proof", uploaded: true },
  { name: "Address Proof", uploaded: true },
  { name: "Resume (PDF, JPG)", uploaded: true },
];

const skills = [
  { name: "Event Planning", checked: true },
  { name: "Client Coordination", checked: true },
  { name: "Vendor Management", checked: true },
  { name: "All Day Available", checked: true },
  { name: "Night Events", checked: false, highlight: true },
  { name: "Sunday Available", checked: false, highlight: true },
];

const certifications = [
  "Event Planning",
  "Client Coordination",
  "Vendor Management",
  "First Aid Certified",
];

/* ---------------- COMPONENT ---------------- */
const WorkerProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold">My Profile</h1>

        {/* PROFILE HEADER */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover border"
            />

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold">John Thomas</h2>
                  <p className="text-gray-500">Event Coordinator</p>

                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      <CheckCircle2 className="h-3 w-3" />
                      5 Star Rating
                    </span>
                    <span className="text-xs text-gray-500">
                      3 - 5 Years Experience
                    </span>
                  </div>
                </div>

                <button className="border px-3 py-1 rounded-md text-sm flex items-center gap-1 hover:bg-gray-100">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="bg-white rounded-lg shadow p-6 space-y-3">
          <h3 className="font-semibold">Contact Information</h3>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="h-4 w-4 text-gray-500" />
            <span className="text-gray-500">(+91) 9876543210</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4 text-gray-500" />
            <span>john.thomas@email.com</span>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <MapPin className="h-4 w-4 text-gray-500 mt-1" />
            <span>123, Event Plaza, New York, NY 10001</span>
          </div>
        </div>

        {/* DOCUMENTS */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-3">Documents</h3>

          <div className="grid sm:grid-cols-2 gap-3">
            {documents.map((doc, i) => (
              <div
                key={i}
                className="flex justify-between items-center border rounded-lg p-3"
              >
                <span className="text-sm">{doc.name}</span>
                {doc.uploaded && (
                  <span className="flex items-center gap-1 text-green-600 text-xs">
                    <CheckCircle2 className="h-4 w-4" />
                    Uploaded
                  </span>
                )}
              </div>
            ))}

            <div className="flex items-center gap-2 border border-dashed rounded-lg p-3 text-gray-500 cursor-pointer hover:border-gray-400">
              <Upload className="h-4 w-4" />
              <span className="text-sm">Upload more documents</span>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-3">Skills & Availability</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <label
                key={i}
                className={`flex items-center gap-2 text-sm ${
                  skill.highlight && !skill.checked
                    ? "text-red-500"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={skill.checked}
                  readOnly
                  className="accent-blue-600"
                />
                {skill.name}
              </label>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-3">Certifications</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            {certifications.map((cert, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                {cert}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-gray-400">
            Last Updated: April 22, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;