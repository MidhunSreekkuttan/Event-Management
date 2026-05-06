import React from "react";
import { ArrowLeft, Users, Megaphone, Briefcase, Handshake, Trophy, FileText, Lightbulb } from "lucide-react";
import { articles } from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";

const { corperate_header: corporate_header, corperate1: corporate1, corperate2: corporate2, corperate3: corporate3, corperate4: corporate4, corperate5: corporate5 } = articles;

const Corporate = () => {

    const navigate = useNavigate();

    const sections = [
        {
            title: "1. CONFERENCES & SEMINARS",
            desc: "These are formal events where companies share knowledge.",
            img: corporate1,
            icon: <Users size={28} className="text-white" />,
            iconBg: "bg-[#1d4ed8]",
            titleColor: "text-[#1e3a8a]",
            items: [
                "How to Organize a Business Conference",
                "Planning a Professional Seminar Step by Step",
                "Speaker Management Tips for Corporate Events",
                "Conference Stage Setup and Branding",
            ],
        },
        {
            title: "2. PRODUCT LAUNCH EVENTS",
            desc: "Used to introduce new products or services.",
            img: corporate2,
            icon: <Megaphone size={28} className="text-white" />,
            iconBg: "bg-[#ea580c]",
            titleColor: "text-[#c2410c]",
            items: [
                "How to Plan a Product Launch Event",
                "Creating Impactful Launch Presentations",
                "Lighting and Stage Design for Brand Reveal",
                "Media and Press Handling Tips",
            ],
        },
        {
            title: "3. CORPORATE MEETINGS & WORKSHOPS",
            desc: "Internal company events.",
            img: corporate3,
            icon: <Briefcase size={28} className="text-white" />,
            iconBg: "bg-[#16a34a]",
            titleColor: "text-[#15803d]",
            items: [
                "How to Conduct Effective Team Workshops",
                "Planning Annual Business Meetings",
                "Training Program Setup Guide",
                "Employee Engagement Activities",
            ],
        },
        {
            title: "4. NETWORKING EVENTS",
            desc: "Focus on business connections.",
            img: corporate4,
            icon: <Handshake size={28} className="text-white" />,
            iconBg: "bg-[#7e22ce]",
            titleColor: "text-[#6b21a8]",
            items: [
                "How to Organize a Networking Event",
                "Icebreaker Ideas for Professionals",
                "Creating Meaningful Business Connections",
                "Event Flow for Maximum Interaction",
            ],
        },
        {
            title: "5. CORPORATE PARTIES & AWARD NIGHTS",
            desc: "More relaxed but still professional.",
            img: corporate5,
            icon: <Trophy size={28} className="text-white" />,
            iconBg: "bg-[#ca8a04]",
            titleColor: "text-[#a16207]",
            items: [
                "How to Plan a Corporate Gala Night",
                "Award Ceremony Planning Guide",
                "Office Party Ideas with Professional Touch",
                "Stage and Lighting for Corporate Events",
            ],
        },
    ];

    return (
        <div className="bg-white min-h-screen font-sans">

            {/* HERO SECTION */}
            <section className="bg-[#07142b] text-white overflow-hidden relative">
                <div className="absolute top-10 left-10 z-50">
                    <button onClick={() => navigate("/")} className="flex items-center gap-2 text-yellow-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-[0.2em] mb-12">
                        <ArrowLeft size={16} /> Back to Home
                    </button>
                </div>

                <div className="relative grid md:grid-cols-[0.8fr_1.2fr] gap-0 min-h-[600px] md:min-h-[700px]">
                    <div className="relative z-30 flex flex-col justify-center py-20 px-10 md:pl-20 text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tighter mb-10 whitespace-nowrap">
                            Corporate Events<br />
                            <span className="text-yellow-400">Knowledge Hub </span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-md leading-relaxed font-light">
                            Expert tips, strategies, and ideas to plan successful corporate events that create impact and inspire results.
                        </p>
                    </div>

                    <div className="relative h-[450px] md:h-auto overflow-hidden z-10 md:rounded-l-[60px]">
                        <img src={corporate_header} alt="corporate" className="w-full h-full object-cover object-right" />
                        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-[#07142b] via-[#07142b]/60 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-6xl mx-auto py-16 px-6 md:px-12">
                <div className="space-y-20">
                    {sections.map((sec, i) => (
                        <div
                            key={i}
                            className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* TEXT */}
                            <div className="flex-1 w-full space-y-4">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className={`flex items-center justify-center w-14 h-14 rounded-2xl shadow-md ${sec.iconBg} shrink-0`}>
                                        {sec.icon}
                                    </div>
                                    <h2 className={`text-[22px] font-bold ${sec.titleColor}`}>
                                        {sec.title}
                                    </h2>
                                </div>

                                <p className="text-gray-700 font-medium pl-[72px]">
                                    {sec.desc}
                                </p>

                                <ul className="space-y-3 pl-[72px] mt-4">
                                    {sec.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <FileText className="text-blue-300 shrink-0 mt-[2px]" size={18} />
                                            <span className="text-gray-800 font-medium text-[15px]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* IMAGE */}
                            <div className="flex-1 w-full">
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[16/10]">
                                    <img
                                        src={sec.img}
                                        alt={sec.title}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#020b2d] border-t-[3px] border-yellow-500 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 py-10 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
                    <div className="shrink-0">
                        <Lightbulb className="text-yellow-500" size={48} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                            Plan Better. Engage More. Achieve Great Results.
                        </h3>
                        <p className="text-blue-100/80 text-[15px]">
                            Explore our expert articles and make your next corporate event a success!
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Corporate;