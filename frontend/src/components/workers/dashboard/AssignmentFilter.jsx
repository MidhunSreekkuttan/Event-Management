import { Search, Filter, X } from "lucide-react";

const roles = [
  { value: "all", label: "All Roles" },
  { value: "Event Coordinator", label: "Event Coordinator" },
  { value: "Event Staff", label: "Event Staff" },
  { value: "Event Manager", label: "Event Manager" },
  { value: "Special Catering Service", label: "Catering Service" },
];

const statuses = [
  { value: "all", label: "All Statuses" },
  { value: "Confirmed", label: "Confirmed" },
  { value: "Pending", label: "Pending" },
  { value: "Cancelled", label: "Cancelled" },
];

const AssignmentFilters = ({
  searchQuery,
  onSearchChange,
  roleFilter,
  onRoleChange,
  statusFilter,
  onStatusChange,
  onClearFilters,
  hasActiveFilters,
}) => {
  return (
    <div className="space-y-3 animate-fade-in">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search by event name or date..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-10 pl-10 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />

        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-gray-100"
          >
            <X className="h-3 w-3 text-gray-500" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">Filter by:</span>
        </div>

        {/* Role Filter */}
        <select
          value={roleFilter}
          onChange={(e) => onRoleChange(e.target.value)}
          className="h-9 px-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {roles.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="h-9 px-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {statuses.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="h-9 px-3 text-sm text-gray-600 hover:text-black flex items-center gap-1"
          >
            <X className="h-3 w-3" />
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default AssignmentFilters;