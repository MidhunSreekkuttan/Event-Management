"use client";

import { useState, useMemo } from "react";
import {
  Calendar,
  SquareCheck,
  Mail,
  Clock,
  AlertCircle,
} from "lucide-react";

/* ---------------- STAT CARD ---------------- */
const StatCard = ({ value, label, Icon, iconColor }) => {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-[#121833] border border-white/10 px-6 py-5">
      {Icon && (
        <Icon className={`h-6 w-6 ${iconColor || ""}`} />
      )}
      
      <div>
        <p className="text-2xl font-semibold text-white">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
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
  if (status === "Confirmed") return "bg-blue-600/20 text-blue-400";
  if (status === "Pending") return "bg-yellow-600/20 text-yellow-400";
  if (status === "Cancelled") return "bg-red-600/20 text-red-400";
  return "";
};

/* ---------------- MAIN COMPONENT ---------------- */
export default function WorkerDashboard() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [role, setRole] = useState("all");

  const roles = useMemo(() => {
    return ["all", ...new Set(assignments.map((a) => a.role))];
  }, []);

  const filteredAssignments = useMemo(() => {
    return assignments.filter((a) => {
      const matchSearch =
        search === "" ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.date.toLowerCase().includes(search.toLowerCase());

      const matchStatus = status === "all" || a.status === status;
      const matchRole = role === "all" || a.role === role;

      return matchSearch && matchStatus && matchRole;
    });
  }, [search, status, role]);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0b1026] to-[#0f1738] p-6">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-semibold text-white">
            Worker Dashboard
          </h1>
          <p className="text-gray-400 mt-1">
            Welcome, John! Manage your event assignments here.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard
            Icon={Calendar}
            value={4}
            label="Confirmed Events"
            iconColor="text-pink-400"
          />
          <StatCard
            Icon={SquareCheck}
            value={3}
            label="Completed Events"
            iconColor="text-green-400"
          />
          <StatCard
            Icon={Mail}
            value={5}
            label="New Messages"
            iconColor="text-purple-400"
          />
        </div>

        {/* ASSIGNMENTS */}
        <div className="rounded-2xl bg-[#121833] border border-white/10 p-6 space-y-6">
          <h2 className="text-lg font-medium text-white">
            My Upcoming Assignments
          </h2>

          {/* SEARCH */}
          <div className="relative">
            <input
              placeholder="Search by event name or date..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg bg-[#0b1026] border border-white/10 pl-10 pr-4 py-2 text-gray-300 focus:outline-none"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 5h18l-7 8v6l-4-2v-4L3 5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              Filter by:
            </span>

            {/* ROLE FILTER */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="rounded-lg bg-[#0b1026] border border-white/10 px-4 py-2 text-gray-300"
            >
              <option value="all">All Roles</option>
              {roles
                .filter((r) => r !== "all")
                .map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
            </select>

            {/* STATUS FILTER */}
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-lg bg-[#0b1026] border border-white/10 px-4 py-2 text-gray-300"
            >
              <option value="all">All Statuses</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          {/* LIST */}
          {filteredAssignments.length === 0 ? (
            <div className="py-10 text-center text-gray-400">
              <AlertCircle className="mx-auto mb-2" />
              No assignments found
            </div>
          ) : (
            filteredAssignments.map((a, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-4"
              >
                <div>
                  <h4 className="text-white font-medium">
                    {a.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {a.date}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    {a.role} · {a.time}
                  </p>
                </div>

                <span
                  className={`px-4 py-1 rounded-full text-xs font-medium ${statusStyle(
                    a.status
                  )}`}
                >
                  {a.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
