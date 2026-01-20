import { useState, useMemo } from "react";
import {
  Calendar,
  CheckSquare,
  Mail,
  Clock,
  AlertCircle,
} from "lucide-react";

/* ---------------- STAT CARD ---------------- */
const StatCard = ({ value, label, color }) => {
  return (
    <div className={`p-4 rounded-lg border-l-4 ${color}`}>
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-gray-700" />
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
    </div>
  );
};

/* ---------------- DATA ---------------- */
const assignments = [
  {
    title: "Good Shape Fitness Expo",
    date: "May 5, 2024",
    role: "Event Coordinator",
    time: "10:00 AM - 6:00 PM",
    status: "Confirmed",
  },
  {
    title: "Tech Innovators Conference",
    date: "May 10, 2024",
    role: "Event Coordinator",
    time: "6:00 AM - 6:00 PM",
    status: "Confirmed",
  },
  {
    title: "Romance Retreat Wedding",
    date: "May 15, 2024",
    role: "Special Catering Service",
    time: "3:00 PM - 10:00 PM",
    status: "Confirmed",
  },
  {
    title: "Corporate Annual Gala",
    date: "May 21, 2024",
    role: "Event Manager",
    time: "1:00 PM - 11:00 PM",
    status: "Pending",
  },
  {
    title: "Cultural Heritage Festival",
    date: "May 28, 2024",
    role: "Event Staff",
    time: "5:00 AM - 6:00 PM",
    status: "Confirmed",
  },
  {
    title: "Green Future Summit",
    date: "June 5, 2024",
    role: "Event Coordinator",
    time: "6:00 AM - 4:00 PM",
    status: "Cancelled",
  },
];

/* ---------------- STATUS STYLE ---------------- */
const statusStyle = (status) => {
  if (status === "Confirmed") return "bg-green-100 text-green-700";
  if (status === "Pending") return "bg-yellow-100 text-yellow-700";
  if (status === "Cancelled") return "bg-red-100 text-red-700";
  return "";
};

/* ---------------- MAIN COMPONENT ---------------- */
const WorkerDashboard = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filteredAssignments = useMemo(() => {
    return assignments.filter((a) => {
      const matchSearch =
        search === "" ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.role.toLowerCase().includes(search.toLowerCase());

      const matchStatus = status === "all" || a.status === status;

      return matchSearch && matchStatus;
    });
  }, [search, status]);

  const confirmedCount = assignments.filter(
    (a) => a.status === "Confirmed"
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold">Worker Dashboard</h1>
          <p className="text-gray-500">Welcome, John</p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            Icon={Calendar}
            value={confirmedCount}
            label="Confirmed Events"
            color="border-pink-500"
          />
          <StatCard
            Icon={CheckSquare}
            value={3}
            label="Completed Events"
            color="border-green-500"
          />
          <StatCard
            Icon={Mail}
            value={5}
            label="New Messages"
            color="border-purple-500"
          />
        </div>

        {/* FILTER */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="all">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* ASSIGNMENTS */}
        <div className="bg-white rounded-lg shadow">
          {filteredAssignments.length === 0 ? (
            <div className="p-10 text-center">
              <AlertCircle className="mx-auto h-10 w-10 text-gray-400" />
              <p className="mt-2 text-gray-500">No assignments found</p>
            </div>
          ) : (
            filteredAssignments.map((a, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row justify-between gap-3 px-4 py-3 border-b last:border-none"
              >
                <div>
                  <h4 className="font-medium">{a.title}</h4>
                  <p className="text-sm text-gray-500">
                    {a.date}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {a.role} · {a.time}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                    a.status
                  )}`}
                >
                  {a.status}
                </span>
              </div>
            ))
          )}
        </div>

        <p className="text-center text-xs text-gray-500">
          Showing {filteredAssignments.length} of {assignments.length}
        </p>
      </div>
    </div>
  );
};

export default WorkerDashboard;
