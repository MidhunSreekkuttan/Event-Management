import React from "react";
import { CalendarDays, Clock3, ArrowLeft, Heart, Users, Sparkles, Gift, Camera, Home, CheckCircle2, Info } from "lucide-react";
import { articles } from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";

const { header_image, card1, card2, card3, card4, card5 } = articles;

const Personal = () => {
    const navigate = useNavigate();

    const phases = [
        {
            phase: "Phase 01",
            title: "The Discovery Session",
            desc: "We sit down to map out your emotional goals. Is it a high-energy celebration or an intimate evening of reflection?",
            img: card1,
            tip: "Pro Tip: Start your guest list early—it's the foundation of your budget."
        },
        {
            phase: "Phase 02",
            title: "Curation & Design",
            desc: "This is where we select the 'sensory details'—the scents, the textures, and the sounds that will define your event.",
            img: card2,
            tip: "Expert Advice: Focus on 2-3 'wow' moments rather than trying to over-decorate everything."
        },
        {
            phase: "Phase 03",
            title: "The Vendor Sync",
            desc: "We coordinate with elite caterers, florists, and artists to ensure they are perfectly aligned with your vision.",
            img: card3,
            tip: "Checklist: Always have a wet-weather backup plan for outdoor celebrations."
        },
        {
            phase: "Phase 04",
            title: "Execution & Presence",
            desc: "On the day, we handle the timeline while you focus on being present with your loved ones.",
            img: card4,
            tip: "Reminders: Assign a 'Point Person' for gifts so you don't have to worry about them."
        }
    ];

    return (
        <section className="bg-[#fffafa] py-20 px-6 md:px-12 lg:px-24 font-sans text-[#5c4a4a]">
            <div className="max-w-7xl mx-auto">
                {/* Navigation */}
                <button
                    onClick={() => navigate("/")}
                    className="group flex items-center gap-2 text-[#b38b8b] font-bold mb-12 hover:text-[#8a6b6b] transition-all uppercase tracking-widest text-xs">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f2] border border-[#f5e1e1] text-[#b38b8b] font-bold text-[10px] uppercase tracking-widest">
                            <Heart size={12} className="fill-[#b38b8b]" />
                            Your Celebration Path
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif text-[#4a3a3a] leading-tight">
                            The Roadmap to <br />
                            <span className="italic text-[#b38b8b]">Perfect</span> Family <br />
                            Gatherings.
                        </h1>

                        <p className="text-xl text-[#8a7575] leading-relaxed max-w-lg font-light">
                            Don't let planning become a chore. Follow our professional guiding path to turn your vision into a stress-free reality.
                        </p>

                        <div className="flex gap-6 pt-4">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-[#fdf2f2]">
                                <CheckCircle2 className="text-green-500" size={18} />
                                <span className="text-sm font-bold">Step-by-Step Guide</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-[#fdf2f2]">
                                <Info className="text-blue-500" size={18} />
                                <span className="text-sm font-bold">Expert Instructions</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-6 bg-[#fdf2f2] rounded-full blur-3xl opacity-50"></div>
                        <div className="relative rounded-[60px] overflow-hidden border-[16px] border-white shadow-2xl aspect-[16/10]">
                            <img
                                src={header_image}
                                alt="Personal Celebration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* --- THE GUIDING PATH (Interactive Journey) --- */}
                <div className="max-w-5xl mx-auto mb-32">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-serif text-[#4a3a3a] mb-4">Your Planning Journey</h2>
                        <div className="w-24 h-1 bg-[#b38b8b] mx-auto rounded-full"></div>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-linear-to-b from-[#fdf2f2] via-[#b38b8b] to-[#fdf2f2] hidden lg:block"></div>

                        <div className="space-y-24">
                            {phases.map((item, idx) => (
                                <div key={idx} className={`relative flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Timeline Marker */}
                                    <div className="absolute left-[50%] translate-x-[-50%] w-10 h-10 rounded-full bg-white border-4 border-[#b38b8b] z-10 hidden lg:flex items-center justify-center text-[10px] font-bold">
                                        {idx + 1}
                                    </div>

                                    {/* Image Card */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="rounded-[40px] overflow-hidden shadow-xl border-4 border-white aspect-video relative group">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        <div className="space-y-2">
                                            <span className="text-[#b38b8b] font-black tracking-widest text-xs uppercase">{item.phase}</span>
                                            <h3 className="text-3xl font-serif text-[#4a3a3a]">{item.title}</h3>
                                        </div>
                                        <p className="text-lg text-[#8a7575] leading-relaxed">
                                            {item.desc}
                                        </p>
                                        {/* Instruction Box */}
                                        <div className="bg-white p-6 rounded-3xl border-l-4 border-[#b38b8b] shadow-sm flex gap-4 items-start">
                                            <Sparkles className="text-[#b38b8b] shrink-0" size={20} />
                                            <p className="text-sm italic font-medium text-[#5c4a4a] leading-relaxed">
                                                {item.tip}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- CLOSING INSTRUCTIONS --- */}
                <div className="max-w-4xl mx-auto bg-[#4a3a3a] p-12 lg:p-20 rounded-[60px] text-white text-center relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <h3 className="text-4xl font-serif">Next Steps: How to Start</h3>
                        <p className="text-white/60 text-lg font-light italic">"The secret of getting ahead is getting started."</p>

                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                                <span className="text-2xl font-serif block mb-2">01.</span>
                                <p className="text-xs uppercase tracking-widest font-bold text-[#b38b8b] mb-2">Inquiry</p>
                                <p className="text-sm text-white/70 font-light leading-relaxed text-justify">Reach out to us via the contact form with your tentative date and guest count.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                                <span className="text-2xl font-serif block mb-2">02.</span>
                                <p className="text-xs uppercase tracking-widest font-bold text-[#b38b8b] mb-2">Consultation</p>
                                <p className="text-sm text-white/70 font-light leading-relaxed text-justify">We schedule a 30-minute discovery call to align on vision and aesthetic.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                                <span className="text-2xl font-serif block mb-2">03.</span>
                                <p className="text-xs uppercase tracking-widest font-bold text-[#b38b8b] mb-2">Booking</p>
                                <p className="text-sm text-white/70 font-light leading-relaxed text-justify">Once the deposit is secured, we lock in your date and begin the full curation process.</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate("/contactUs")}
                            className="bg-[#b38b8b] hover:bg-white hover:text-[#4a3a3a] px-12 py-4 rounded-full font-bold transition-all shadow-2xl mt-8">
                            Download Your Planning Checklist
                        </button>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
                </div>
            </div>
        </section>
    );
};

export default Personal;

