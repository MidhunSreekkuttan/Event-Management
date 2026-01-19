import { useState, useMemo } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckSquare, Mail, Clock, AlertCircle } from "lucide-react";
import AssignmentFilters from "@/components/dashboard/AssignmentFilters";

const StatCard = ({ 
  icon: Icon, 
  value, 
  label, 
  variant,
  delay = 0
}: { 
  icon: React.ElementType; 
  value: number; 
  label: string; 
  variant: "pink" | "green" | "purple";
  delay?: number;
}) => {
  return (
    <div 
      className={`stat-card-${variant} p-4 rounded-xl border-l-4 animate-fade-in-up cursor-default`}
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex items-center gap-3">
        <div className="stat-icon">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
};

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
    time: "3PM - 10 PM",
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

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Confirmed":
      return "status-confirmed";
    case "Pending":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
    case "Cancelled":
      return "bg-destructive/10 text-destructive";
    default:
      return "";
  }
};

const WorkerDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const hasActiveFilters = searchQuery !== "" || roleFilter !== "all" || statusFilter !== "all";

  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        assignment.title.toLowerCase().includes(searchLower) ||
        assignment.date.toLowerCase().includes(searchLower) ||
        assignment.role.toLowerCase().includes(searchLower);

      // Role filter
      const matchesRole = roleFilter === "all" || assignment.role === roleFilter;

      // Status filter
      const matchesStatus = statusFilter === "all" || assignment.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [searchQuery, roleFilter, statusFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setRoleFilter("all");
    setStatusFilter("all");
  };

  const confirmedCount = assignments.filter((a) => a.status === "Confirmed").length;
  const pendingCount = assignments.filter((a) => a.status === "Pending").length;

  return (
    <PageLayout breadcrumb="workers / dashboard">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-xl md:text-2xl font-semibold">Worker Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome, John!</p>
          <p className="text-sm text-muted-foreground">
            Manage your event assignments and profile details here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <StatCard icon={Calendar} value={confirmedCount} label="Confirmed Events" variant="pink" delay={100} />
          <StatCard icon={CheckSquare} value={3} label="Completed Events" variant="green" delay={200} />
          <StatCard icon={Mail} value={5} label="New Messages" variant="purple" delay={300} />
        </div>

        <Card className="shadow-sm animate-fade-in-up card-hover" style={{ animationDelay: "400ms", opacity: 0 }}>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">My Upcoming Assignments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <AssignmentFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              roleFilter={roleFilter}
              onRoleChange={setRoleFilter}
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              onClearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
            />

            <div className="space-y-2 md:space-y-4">
              {filteredAssignments.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                  <AlertCircle className="h-10 w-10 text-muted-foreground mb-3" />
                  <p className="text-muted-foreground font-medium">No assignments found</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              ) : (
                filteredAssignments.map((assignment, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-2 -mx-2 border-b last:border-0 rounded-lg hover:bg-muted/50 transition-all duration-200 cursor-default animate-fade-in"
                    style={{ animationDelay: `${100 + idx * 50}ms`, opacity: 0 }}
                  >
                    <div className="space-y-1 mb-2 sm:mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <h4 className="font-medium text-sm md:text-base">{assignment.title}</h4>
                        <span className="text-xs md:text-sm text-muted-foreground">· {assignment.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                        <span className="truncate">{assignment.role} - {assignment.time}</span>
                      </div>
                    </div>
                    <Badge className={`${getStatusVariant(assignment.status)} border-0 font-medium w-fit text-xs`}>
                      {assignment.status}
                    </Badge>
                  </div>
                ))
              )}
            </div>
            
            <p className="mt-6 text-xs text-muted-foreground text-center">
              Showing {filteredAssignments.length} of {assignments.length} assignments · Last Updated: April 22, 2024
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default WorkerDashboard;