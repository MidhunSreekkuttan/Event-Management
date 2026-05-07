import React from 'react'
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Tag, 
  ArrowLeft, 
  Clock, 
  Building2, 
  CircleDollarSign,
  Info
} from "lucide-react";
import axios from "axios";
import { AdminContext } from "../Context";
import { useContext } from "react";
import Loader from "../components/Loading";

const EventDetails = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { backendUrl } = useContext(AdminContext);

    // Fetch single event data to ensure it's "fair" (not dummy/mock) and works on refresh
    const { data: eventData, isLoading, error } = useQuery({
        queryKey: ["eventDetail", eventId],
        queryFn: async () => {
            // First try to get from list cache
            const cachedList = queryClient.getQueryData(["eventList"]);
            const cachedItem = cachedList?.find(item => item._id === eventId);
            if (cachedItem) return cachedItem;

            // If not in cache, fetch from single list API
            const { data } = await axios.get(`${backendUrl}/api/product/listProduct`);
            if (data.success) {
                const item = data.product.find(i => i._id === eventId);
                if (item) return item;
            }
            throw new Error("Event not found");
        },
        enabled: !!eventId && !!backendUrl
    });

    const findData = eventData;

    const getStatusClass = (status) => {
        if (status === "ongoing") {
            return "bg-emerald-100/80 text-emerald-700 ring-1 ring-emerald-200";
        }
        if (status === "upcoming") {
            return "bg-amber-100/80 text-amber-700 ring-1 ring-amber-200";
        }
        return "bg-rose-100/80 text-rose-700 ring-1 ring-rose-200";
    };

    const redGlass =
        "border border-red-200/60 bg-gradient-to-br from-white/80 via-red-50/70 to-red-100/60 backdrop-blur-2xl shadow-[0_25px_100px_rgba(220,38,38,0.18)]";

    if (!findData) return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <p className="text-xl font-bold text-red-600">Event not found or data lost on refresh.</p>
      </div>
    );

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.16),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(0,0,0,0.08),_transparent_20%),linear-gradient(135deg,_#ffffff,_#fff1f2,_#fee2e2)] text-black p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                
                {/* Back Button and Header */}
                <div className="flex items-center justify-between">
                    <button 
                        onClick={() => navigate(-1)}
                        className="group flex items-center gap-2 px-6 py-2.5 bg-white border border-red-200/60 rounded-2xl text-red-600 font-bold text-sm transition hover:bg-red-600 hover:text-white active:scale-95 shadow-sm"
                    >
                        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                        Back to Events
                    </button>
                    
                    <div className={`px-5 py-2 rounded-2xl ${getStatusClass(findData.status)} font-bold text-xs uppercase tracking-widest`}>
                        {findData.status}
                    </div>
                </div>

                <div className={`${redGlass} rounded-[32px] overflow-hidden`}>
                    {/* Hero Section */}
                    <div className="p-8 lg:p-10 border-b border-red-200/60">
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Main Image */}
                            <div className="lg:w-1/2">
                                <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden shadow-2xl">
                                    <img 
                                        src={findData.image[0]} 
                                        alt={findData.event_name} 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black text-red-600 uppercase tracking-tighter shadow-sm border border-red-100">
                                        {findData.category}
                                    </div>
                                </div>
                            </div>

                            {/* Title Info */}
                            <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                                <div className="space-y-2">
                                    <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                        {findData.event_name}
                                    </h1>
                                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                                        <Building2 size={16} className="text-red-400" />
                                        <span>Organized by <span className="text-black font-bold">{findData.company_name}</span></span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/60 p-4 rounded-2xl border border-red-100 shadow-sm">
                                        <div className="flex items-center gap-2 text-red-400 mb-1">
                                            <CircleDollarSign size={14} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Base Price</span>
                                        </div>
                                        <p className="text-xl font-black text-black">₹{findData.price}</p>
                                    </div>
                                    <div className="bg-white/60 p-4 rounded-2xl border border-red-100 shadow-sm">
                                        <div className="flex items-center gap-2 text-red-400 mb-1">
                                            <MapPin size={14} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Location</span>
                                        </div>
                                        <p className="text-xl font-black text-black truncate">{findData.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details Content */}
                    <div className="p-8 lg:p-10 bg-white/30 grid grid-cols-1 lg:grid-cols-3 gap-10">
                        
                        {/* Left Column: About & Services */}
                        <div className="lg:col-span-2 space-y-10">
                            <section className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                    <h3 className="text-lg font-black text-black uppercase tracking-tight">About this Event</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed font-medium whitespace-pre-line">
                                    {findData.description}
                                </p>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                    <h3 className="text-lg font-black text-black uppercase tracking-tight">Featured Services</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {findData.main_services.map((service, idx) => (
                                        <span key={idx} className="bg-[#FFF1F1] text-[#D32F2F] px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-tighter border border-red-100 shadow-sm">
                                            {service || "N/A"}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                    <h3 className="text-lg font-black text-black uppercase tracking-tight">Event Gallery</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {findData.image.map((img, idx) => (
                                        <div key={idx} className="aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-md transition hover:scale-105 cursor-pointer">
                                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Schedule & Company Info */}
                        <div className="space-y-8">
                            <div className="bg-white/80 rounded-[24px] p-6 border border-red-100 shadow-sm space-y-6">
                                <h3 className="text-[#D32F2F] font-bold text-sm border-b border-gray-100 pb-2 uppercase tracking-wider">Event Schedule</h3>
                                <div className="space-y-4">
                                    {[
                                        { label: "Start Date", value: findData.startTime.split("T")[0], icon: Calendar },
                                        { label: "Start Time", value: findData.startTime.split("T")[1].slice(0, 5), icon: Clock },
                                        { label: "End Date", value: findData.endTime.split("T")[0], icon: Calendar },
                                        { label: "End Time", value: findData.endTime.split("T")[1].slice(0, 5), icon: Clock },
                                        { label: "Posted On", value: findData.date.split("T")[0], icon: Tag },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <item.icon size={14} className="text-red-400" />
                                                <span className="text-gray-400 font-semibold text-[11px]">{item.label}</span>
                                            </div>
                                            <span className="text-gray-900 font-bold text-[11px]">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/80 rounded-[24px] p-6 border border-red-100 shadow-sm space-y-6">
                                <h3 className="text-[#D32F2F] font-bold text-sm border-b border-gray-100 pb-2 uppercase tracking-wider">Company Information</h3>
                                <div className="space-y-4">
                                    {[
                                        { label: "Provider", value: findData.company_name, icon: Building2 },
                                        { label: "Category", value: findData.category, icon: Info },
                                        { label: "Owner ID", value: findData.owner, icon: Tag },
                                    ].map((item, idx) => (
                                        <div key={idx} className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <item.icon size={14} className="text-red-400" />
                                                <span className="text-gray-400 font-semibold text-[11px]">{item.label}</span>
                                            </div>
                                            <p className="text-gray-900 font-bold text-[11px] break-all">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button 
                                onClick={() => navigate(-1)}
                                className="w-full bg-[#EF4444] text-white py-4 rounded-2xl font-bold uppercase text-[12px] tracking-widest hover:bg-red-600 transition shadow-lg shadow-red-100 active:scale-95"
                            >
                                Close Details
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;