import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

import Index from "./pages/workers/Index";
import WorkerRegistration from "./pages/workers/WorkerRegistration";
import WorkerDashboard from "./pages/workers/WorkerDashboard";
import WorkerProfile from "./pages/workers/WorkerProfile";
import NotFound from "./pages/workers/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
       <Toaster />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<WorkerRegistration />} />
          <Route path="/dashboard" element={<WorkerDashboard />} />
          <Route path="/workers" element={<WorkerDashboard />} />
          <Route path="/profile" element={<WorkerProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
