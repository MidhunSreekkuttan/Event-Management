import React from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { articles } from '../../../../assets/assets';
import { useNavigate } from 'react-router-dom';

const { cultural_header } = articles;

const CulturalEvents = () => {

    const navigate = useNavigate();

    return (
        <div className="font-sans bg-[#FAF6F0] min-h-screen text-[#4A3C31]">
            {/* Main Container */}
            <div className="max-w-300 mx-auto px-6 md:px-12 py-12">

                {/* --- HERO SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* Top Logo area */}
                        <button 
                            onClick={() => navigate("/")}
                            className='flex items-center gap-2 text--[#7B1D22] font-medium hover:underline mb-6'>
                            <ArrowLeft size={18} />
                              Back
                        </button>
                        <div className="flex items-center gap-3 text-[#7B1D22] font-bold tracking-widest text-xs uppercase">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L15 8H21L16 12L18 18L12 15L6 18L8 12L3 8H9L12 2Z" />
                            </svg>
                            CULTURAL EVENTS
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#5B171A] font-bold leading-[1.1]">
                            Celebrate<br />
                            Culture.<br />
                            Inspire<br />
                            Connections.
                        </h1>

                        {/* Elegant Divider */}
                        <div className="flex items-center gap-1 py-2">
                            <div className="h-px w-12 bg-[#B58A60]"></div>
                            <div className="w-2 h-2 rotate-45 bg-[#B58A60]"></div>
                            <div className="h-px w-12 bg-[#B58A60]"></div>
                        </div>

                        {/* Subtext */}
                        <p className="text-lg text-[#6A5F58] max-w-md">
                            Explore traditions, music, heritage, cuisine and unforgettable community celebrations.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full flex justify-end">
                        {/* Arch Container */}
                        <div className="relative w-[90%] md:w-[80%] aspect-3/4 p-2 border-2 border-[#D4B58A] rounded-t-[180px] rounded-b-2xl">
                            <div className="w-full h-full overflow-hidden rounded-t-[170px] rounded-b-xl relative">
                                <img
                                    src={articles.culture_header}
                                    alt="Cultural Dancer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- CATEGORY CARDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10 mb-20 relative z-10">
                    {[
                        {
                            icon: <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                            title: "PERFORMANCES",
                            desc: "Music, dance, theater and more"
                        },
                        {
                            icon: <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
                            title: "ART & HERITAGE",
                            desc: "Exhibitions, crafts and traditions"
                        },
                        {
                            icon: <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                            title: "COMMUNITY",
                            desc: "Connect, celebrate and belong"
                        },
                        {
                            icon: <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
                            title: "CUISINE",
                            desc: "Traditional flavors and experiences"
                        }
                    ].map((cat, idx) => (
                        <div key={idx} className="bg-[#FFFDF9] rounded-3xl p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#F0EBE1] hover:-translate-y-1 transition-transform">
                            <div className="text-[#8B2329] mb-4">{cat.icon}</div>
                            <h3 className="text-[#8B2329] font-bold text-xs tracking-widest mb-2">{cat.title}</h3>
                            <p className="text-[#6A5F58] text-sm leading-relaxed">{cat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* --- FEATURED EVENTS HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 gap-4">
                    <div className="flex items-center gap-3 text-[#7B1D22] font-bold tracking-widest text-sm uppercase">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L15 8H21L16 12L18 18L12 15L6 18L8 12L3 8H9L12 2Z" />
                        </svg>
                        FEATURED EVENTS
                    </div>
                    <button className="flex items-center gap-2 px-6 py-2.5 border border-[#8B2329] text-[#8B2329] rounded-full text-xs font-bold tracking-widest hover:bg-[#8B2329] hover:text-white transition-colors">
                        VIEW ALL EVENTS &rarr;
                    </button>
                </div>

                {/* --- FEATURED EVENTS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        { img: "https://images.unsplash.com/photo-1542358823-3882f07d2f9d?q=80&w=600&auto=format&fit=crop", date: "18", month: "JUN", title: "Folk Dance Festival", loc: "Kala Kendra, New Delhi", desc: "A vibrant evening of traditional folk dances from across India." },
                        { img: "https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?q=80&w=600&auto=format&fit=crop", date: "20", month: "JUN", title: "Heritage Craft Exhibition", loc: "India Habitat Centre", desc: "Discover handcrafted treasures and meet skilled artisans." },
                        { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop", date: "22", month: "JUN", title: "Classical Music Concert", loc: "Triveni Kala Sangam", desc: "An enchanting night of ragas by renowned classical musicians." },
                        { img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600&auto=format&fit=crop", date: "25", month: "JUN", title: "Cultural Food Carnival", loc: "Dilli Haat, INA", desc: "Taste authentic regional flavors and traditional street food." }
                    ].map((event, idx) => (
                        <div key={idx} className="bg-[#FFFDF9] rounded-2xl overflow-hidden shadow-sm border border-[#F0EBE1] flex flex-col hover:shadow-md transition-shadow">
                            <div className="relative h-56">
                                <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
                                {/* Date Badge */}
                                <div className="absolute top-0 left-0 bg-[#691A1E] text-white p-2 w-12 text-center rounded-br-xl">
                                    <div className="text-lg font-bold leading-none">{event.date}</div>
                                    <div className="text-[9px] uppercase tracking-wider mt-1">{event.month}</div>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="font-serif text-lg text-[#2A1F18] font-bold mb-3 leading-tight">{event.title}</h3>
                                <div className="flex items-center gap-1.5 text-[#6A5F58] text-xs font-medium mb-3">
                                    <svg className="w-3.5 h-3.5 text-[#8B2329]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {event.loc}
                                </div>
                                <p className="text-[#6A5F58] text-sm leading-relaxed mb-6 flex-1">{event.desc}</p>
                                <button className="text-[#8B2329] text-xs font-bold tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                                    VIEW DETAILS &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- STATS BANNER --- */}
                <div className="bg-[#5B171A] rounded-4xl text-white py-12 px-8 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                        {[
                            { num: "50+", label: "Events" },
                            { num: "100+", label: "Artists" },
                            { num: "20+", label: "Workshops" },
                            { num: "15K+", label: "Visitors" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center px-4">
                                <div className="flex justify-center mb-3 text-[#D4B58A]">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                </div>
                                <div className="text-4xl md:text-5xl font-serif mb-1">{stat.num}</div>
                                <div className="text-[10px] tracking-widest uppercase text-white/70">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- FOOTER / NEWSLETTER --- */}
                <div className="bg-[#EFE9E0] rounded-4xl p-8 md:p-10 flex flex-col lg:flex-row justify-between items-center gap-8">

                    <div className="flex items-center gap-5 w-full lg:w-auto">
                        <div className="bg-[#8B2329] text-white p-4 rounded-full shrink-0">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#2A1F18] tracking-widest text-xs mb-1">STAY UPDATED</h4>
                            <p className="text-sm text-[#6A5F58]">Subscribe for latest cultural event updates.</p>
                        </div>
                    </div>

                    <div className="flex w-full lg:w-auto shadow-sm">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="px-6 py-4 rounded-l-xl border border-r-0 border-[#DED7CD] bg-[#FFFDF9] focus:outline-none w-full lg:w-72 text-sm"
                        />
                        <button className="bg-[#691A1E] text-white px-8 py-4 rounded-r-xl font-bold text-[11px] tracking-widest hover:bg-[#5B171A] transition-colors">
                            SUBSCRIBE
                        </button>
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
                        <div className="text-[#8B2329] font-bold text-[10px] tracking-widest">FOLLOW US</div>
                        <div className="flex gap-3">
                            {[
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />,
                                <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            ].map((path, i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-[#8B2329] text-white flex items-center justify-center cursor-pointer hover:bg-[#5B171A] transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        {path}
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CulturalEvents;
