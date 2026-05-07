import React, { useState } from "react";
import { ArrowLeft, Users, Megaphone, Briefcase, Handshake, Trophy, FileText, Lightbulb, X, BookOpen } from "lucide-react";
import { articles } from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";

const { corporate_header, corporate1, corporate2, corporate3, corporate4, corporate5 } = articles;

const Corporate = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);
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

    const topicDefinitions = {
        "How to Organize a Business Conference": "A business conference is a large-scale gathering of professionals within a specific industry, designed to facilitate high-level knowledge transfer, strategic networking, and the discussion of future market trends. Organizing one requires mastering large-scale logistics, securing authoritative keynote speakers, and creating an environment conducive to learning and partnership.",
        "Planning a Professional Seminar Step by Step": "A professional seminar is typically a more intimate, heavily educational event focused on teaching specific skills or deep-diving into niche industry topics. Unlike a massive conference, a seminar requires meticulous attention to the curriculum, ensuring that the presenter's materials are highly actionable and that the audience has ample opportunity for direct Q&A.",
        "Speaker Management Tips for Corporate Events": "Speaker management involves the end-to-end coordination of guest lecturers, keynote presenters, and panel experts. This critical aspect of event planning ensures that speakers are fully briefed, their technical requirements are met, and they are aligned with the event's core messaging, guaranteeing a seamless presentation for the audience.",
        "Conference Stage Setup and Branding": "Stage setup and branding encompass the visual and physical architecture of the presentation area. It is the focal point of any conference. Effective stage design goes beyond aesthetics; it requires strategic branding placement, optimal lighting for photography, and acoustic engineering to ensure the speaker's message resonates powerfully throughout the auditorium.",

        "How to Plan a Product Launch Event": "A product launch event is a high-stakes, highly publicized marketing initiative designed to introduce a brand-new offering to the market, media, and key stakeholders. The core definition of a successful launch lies in its ability to generate immediate media buzz, create an emotional connection with the product, and drive early adoption.",
        "Creating Impactful Launch Presentations": "An impactful launch presentation is the narrative vehicle used to unveil a new product. It is a carefully choreographed blend of storytelling, visual media, and live demonstration. The goal is to articulate the problem your product solves in a way that captivates the audience and leaves a lasting, memorable impression.",
        "Lighting and Stage Design for Brand Reveal": "Brand reveal lighting and stage design are specialized theatrical elements used to build anticipation and focus audience attention. By using dynamic lighting cues, projection mapping, and dramatic stage reveals, event planners can elevate a simple product announcement into a visceral, unforgettable experience that perfectly reflects the brand's identity.",
        "Media and Press Handling Tips": "Media and press handling refers to the strategic management of journalists, influencers, and PR professionals during a corporate event. This involves creating press kits, scheduling exclusive interviews, managing the press pit, and ensuring that the media has everything they need to craft a compelling, positive narrative about your brand.",

        "How to Conduct Effective Team Workshops": "Team workshops are interactive, internal corporate events designed to foster collaboration, brainstorm solutions, and develop specific employee competencies. Effective workshops move away from passive listening and instead rely heavily on participatory exercises, guided facilitation, and actionable takeaways that can be immediately applied in the workplace.",
        "Planning Annual Business Meetings": "The annual business meeting is a critical corporate milestone where leadership reviews the past year's performance and outlines the strategic vision for the upcoming year. Planning this event requires balancing the dissemination of dense financial data with motivational messaging to ensure stakeholders and employees leave feeling informed and inspired.",
        "Training Program Setup Guide": "Training program setup is the logistical and pedagogical structuring of employee education sessions. It requires a clear definition of learning objectives, the selection of appropriate instructional methods (e.g., hands-on practice, digital modules), and the creation of an environment that minimizes distractions and maximizes knowledge retention.",
        "Employee Engagement Activities": "Employee engagement activities are morale-boosting events designed to strengthen workplace culture and interpersonal relationships. Whether it's a team-building retreat or an in-office challenge, these activities break down departmental silos, reduce employee burnout, and foster a more cohesive, motivated workforce.",

        "How to Organize a Networking Event": "A networking event is an unstructured or semi-structured gathering explicitly designed to help professionals expand their business contacts. Organizing a successful one requires choosing the right venue layout (standing tables over seated dining), managing the guest list to ensure industry synergy, and removing friction from the introduction process.",
        "Icebreaker Ideas for Professionals": "Professional icebreakers are strategic activities or prompts designed to alleviate the natural awkwardness of meeting strangers in a business setting. When executed correctly, they bypass superficial small talk, encourage authentic interactions, and rapidly accelerate the process of building meaningful professional relationships.",
        "Creating Meaningful Business Connections": "Creating meaningful business connections goes beyond simply exchanging business cards; it involves facilitating environments where professionals can discover shared values, complementary business needs, and mutual goals. This requires curating the right mix of attendees and providing spaces conducive to deep, one-on-one conversations.",
        "Event Flow for Maximum Interaction": "Event flow refers to the spatial and temporal design of a gathering to subtly guide attendee behavior. For maximum interaction, planners must strategically position food stations, seating areas, and focal points to prevent bottlenecks and naturally encourage movement, mingling, and spontaneous conversations throughout the venue.",

        "How to Plan a Corporate Gala Night": "A corporate gala is a formal, often black-tie celebration that serves as the pinnacle of a company's social calendar. Planning a gala requires an uncompromising commitment to luxury and elegance, from selecting premium catering and world-class entertainment to executing a flawless, highly choreographed evening program.",
        "Award Ceremony Planning Guide": "An award ceremony is a specialized event focused on recognizing excellence and honoring individual or team achievements. The definition of a successful ceremony lies in its pacing—balancing the prestige of the awards with engaging entertainment, ensuring winners feel properly celebrated without the event dragging on for the audience.",
        "Office Party Ideas with Professional Touch": "An office party with a professional touch balances relaxed, celebratory fun with appropriate corporate boundaries. It requires selecting inclusive activities, providing high-quality food and beverage options, and maintaining an atmosphere where employees can unwind without compromising the professional standards of the organization.",
        "Stage and Lighting for Corporate Events": "Stage and lighting in a celebratory corporate context transform a standard banquet hall into an immersive experience. It involves using mood lighting to dictate the atmosphere (e.g., transition from dinner ambiance to party energy) and designing a stage that ensures award recipients look spectacular in photographs and video."
    };

    const planningIntros = [
        "When embarking on the journey of organizing this, the initial phase requires a deep dive into strategic foresight. It is not simply about picking a date; it involves understanding the core demographic and tailoring the experience to their specific needs. Planners must establish a robust framework that supports scale while maintaining an intimate feel. This delicate balance is often achieved through rigorous early-stage brainstorming.",
        "The foundational steps of this process hinge on setting incredibly clear, measurable objectives. Before a single vendor is contacted, your team must define what success looks like. Are you aiming for sheer volume of attendees, or deep, qualitative engagement? By answering these fundamental questions early, every subsequent decision becomes infinitely clearer, ensuring that the project remains tightly aligned with overarching goals.",
        "Initiating the planning for such an endeavor demands a proactive rather than reactive mindset. The most successful organizers construct a timeline that works backward from the delivery date, assigning strict deadlines to every milestone. This method eliminates the last-minute scramble that plagues inexperienced teams. Furthermore, it allows for creative breathing room, ensuring that the conceptual design is not compromised by operational panic.",
        "Success in this arena begins with an uncompromising approach to budgeting and resource allocation. Financial guardrails must be established immediately to prevent scope creep. A sophisticated organizer knows to allocate funds dynamically, reserving premium capital for high-impact attendee touchpoints while finding cost-effective solutions for backend logistics. This financial discipline is the bedrock of a sustainable execution strategy.",
        "Approaching this requires a profound understanding of modern attendee expectations. Today's audiences demand hyper-personalized, frictionless experiences. Therefore, the planning phase must incorporate data-driven insights. Utilizing past attendance metrics, survey feedback, and industry trend analysis enables you to craft an environment that feels tailor-made for your specific demographic, dramatically increasing overall satisfaction."
    ];

    const logisticsBodies = [
        "Transitioning from concept to execution requires a militant approach to logistics. Vendor coordination becomes paramount. You must secure contracts with trusted partners who have a proven track record of reliability. Conduct multiple site walkthroughs to ensure the physical space can accommodate your vision. Pay special attention to hidden logistical traps: inadequate power supplies, poor acoustic environments, or convoluted attendee flow paths. By mapping out the exact physical journey of a participant from the front door to the main stage, you can preemptively solve ninety percent of day-of-event issues.",
        "The operational backbone of this execution relies heavily on technological integration. Modern events are digital ecosystems. Implementing a flawless registration system, robust Wi-Fi architecture, and real-time communication channels for your internal team is absolutely critical. Do not treat technology as an afterthought; it must be stress-tested weeks in advance. A backup internet connection and redundant power supplies might seem like overkill during planning, but they are the lifesavers that prevent catastrophic failures when the doors finally open.",
        "Mastering the logistical puzzle means focusing heavily on human capital. Your on-the-ground staff, volunteers, and managing coordinators are the face of the operation. Conduct rigorous training sessions so every team member understands not just their specific role, but the holistic vision of the day. Establish a clear, hierarchical chain of command for crisis management. When a problem arises—and it will—your team must know exactly who possesses the authority to make an immediate, definitive decision without causing bureaucratic delays.",
        "One of the most overlooked logistical elements is spatial psychology. The way a room is arranged dictates how people interact within it. Avoid the temptation to cram as many people as possible into a given space. Instead, design intentional 'white spaces'—lounges or quiet corners—where organic networking can flourish away from the main noise. Ensure that sightlines to key areas are unobstructed and that lighting transitions smoothly from high-energy functional zones to relaxed, atmospheric spaces.",
        "Flawless execution is a game of contingency planning. Experienced professionals operate under the assumption that primary plans will fail. What happens if the keynote speaker is delayed? What is the protocol for a sudden catering shortage? Developing a comprehensive 'Plan B' for every major logistical pillar ensures that you are never caught off guard. This rigorous risk assessment transforms potential disasters into minor, invisible hiccups that the attendees will never even notice."
    ];

    const marketingBodies = [
        "Parallel to operational setup, your communication and marketing strategy must be executed with surgical precision. Building anticipation is key. Utilize a multi-channel approach—blending targeted email campaigns, social media teasers, and personalized outreach to key stakeholders. The narrative you construct must highlight the exclusive value proposition of attending, creating a sense of urgency and FOMO (fear of missing out) that drives decisive action.",
        "Engagement shouldn't wait until the doors open. Pre-event community building is a powerful tool. Create dedicated digital spaces or use event-specific hashtags to encourage attendees to connect beforehand. By fostering these early interactions, you ensure that the momentum is already high the moment the event officially begins. This strategy transforms passive ticket-holders into active, invested participants.",
        "Visual identity plays a monumental role in the perceived value of your execution. Consistency is crucial. From the initial invitation to the physical signage on-site, every aesthetic choice should reflect a unified, premium brand narrative. Investing in high-quality graphic design and thoughtful environmental branding elevates the entire experience, signaling to your attendees that they are part of something professionally significant.",
        "Strategic partnerships and sponsorships can drastically amplify your reach and resources. Aligning with complementary brands provides additional financial padding and opens doors to new audience segments. However, ensure that these integrations feel authentic rather than intrusive. A well-placed sponsor activation should add genuine value to the attendee experience, rather than feeling like a disruptive commercial break.",
        "Content is king, both before and during the execution. Releasing high-value, relevant content in the weeks leading up to the date positions your organization as an industry authority. Tease the knowledge, entertainment, or networking opportunities that await. During the event, ensure you have a dedicated team capturing high-quality video and photo assets, which will become the cornerstone of your post-event marketing efforts."
    ];

    const conclusions = [
        "Ultimately, the true measure of success lies in the post-event analysis. Deploy targeted surveys immediately while the experience is fresh. Analyze the data ruthlessly. By turning qualitative feedback into quantitative metrics, you guarantee that your next endeavor will be even more spectacular.",
        "In the end, it is the emotional resonance that attendees will remember. Did they feel valued, inspired, or connected? By focusing relentlessly on the human experience amidst the logistical chaos, you secure not just a successful day, but long-term loyalty and prestige.",
        "Closing the loop effectively is what separates amateurs from professionals. Send personalized thank-you notes to speakers, vendors, and VIPs. Host an internal debrief with your core team to document 'lessons learned'. This meticulous wrap-up ensures continuous operational evolution.",
        "Remember that every flawless execution is built on a foundation of unseen hard work. Celebrate the victories with your team, acknowledge the areas for growth, and immediately begin applying these hard-earned insights to your next strategic roadmap.",
        "As the dust settles, the immediate focus must shift to leveraging the momentum generated. Repurpose event content into long-tail marketing assets. Keep the conversation alive online. A truly successful execution doesn't just end; it echoes through your industry for months."
    ];

    const getArticleContent = (topic) => {
        const exactDefinition = topicDefinitions[topic] || `${topic} is a specialized facet of corporate event management that focuses on achieving specific organizational objectives through structured interaction, strategic planning, and flawless execution.`;

        const hash = topic.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

        const pIntro = planningIntros[hash % 5];
        const pLogistics = logisticsBodies[(hash + 1) % 5];
        const pMarketing = marketingBodies[(hash + 2) % 5];
        const pConclusion = conclusions[(hash + 3) % 5];

        return (
            <>
                <p className="text-xl text-gray-800 font-medium leading-relaxed mb-8">
                    Understanding the core concept of <strong>{topic}</strong> is the absolute first step toward successful execution. {exactDefinition}
                </p>
                <p className="mb-6">{pIntro}</p>
                <div className="bg-gray-50 rounded-2xl p-8 my-10 border-l-4 border-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Critical Logistics & Operations</h4>
                    <p className="text-gray-700 m-0 leading-relaxed">{pLogistics}</p>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Strategic Engagement & Branding</h3>
                <p className="mb-6">{pMarketing}</p>
                <p className="mb-6">{pConclusion}</p>
            </>
        );
    };

    if (selectedTopic) {
        return (
            <div className="bg-white min-h-screen font-sans pt-16 pb-32 px-6 md:px-20 lg:px-32">
                <div className="max-w-full mx-auto">
                    <button
                        onClick={() => setSelectedTopic(null)}
                        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold uppercase tracking-wider text-sm mb-12 transition-colors"
                    >
                        <ArrowLeft size={18} /> Back to Categories
                    </button>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-12">
                        {selectedTopic}
                    </h1>

                    <div className="flex items-center gap-6 mb-16 pb-10 border-b border-gray-200">
                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                            <BookOpen size={28} />
                        </div>
                        <div>
                            <span className="block text-gray-900 font-bold text-lg uppercase tracking-widest">Expert Guide</span>
                            <span className="block text-gray-500 text-base">Corporate Events Knowledge Base</span>
                        </div>
                    </div>

                    <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed text-justify">
                        {getArticleContent(selectedTopic)}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans">

            {/* HERO SECTION */}
            <section className="bg-[#07142b] text-white overflow-hidden relative">
                <div className="absolute top-10 left-10 z-50">
                    <button onClick={() => navigate("/")} className="flex items-center gap-2 text-yellow-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-[0.2em] mb-12">
                        <ArrowLeft size={16} /> Back to Home
                    </button>
                </div>

                <div className="relative grid md:grid-cols-[0.8fr_1.2fr] gap-0 min-h-150 md:min-h-175">
                    <div className="relative z-30 flex flex-col justify-center py-20 px-10 md:pl-20 text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tighter mb-10 whitespace-nowrap flex flex-col gap-3">
                            <span>Corporate Events</span>
                            <span className="text-yellow-400">Knowledge Hub</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-lg leading-relaxed text-justify font-light mt-2">
                            Expert tips, strategies, and ideas to plan successful corporate events that create impact and inspire results. Whether you are organizing a high-stakes executive conference, a vibrant team-building retreat, or an unforgettable award ceremony, our comprehensive guides provide the essential blueprints you need to align your events with your corporate vision.
                        </p>

                        <div className="flex items-center gap-5 lg:gap-6 mt-10 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                                <Briefcase className="text-yellow-400" size={18} />
                                <span className="text-sm font-medium tracking-wide text-gray-300">Executive Guides</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="text-blue-400" size={18} />
                                <span className="text-sm font-medium tracking-wide text-gray-300">Team Engagement</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Trophy className="text-green-400" size={18} />
                                <span className="text-sm font-medium tracking-wide text-gray-300">Award Ceremonies</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-112.5 md:h-auto overflow-hidden z-10 md:rounded-l-[60px]">
                        <img src={corporate_header} alt="corporate" className="w-full h-full object-cover object-right" />
                        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-linear-to-r from-[#07142b] via-[#07142b]/60 to-transparent pointer-events-none"></div>
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

                                <p className="text-gray-700 font-medium pl-18">
                                    {sec.desc}
                                </p>

                                <ul className="space-y-3 pl-18 mt-4">
                                    {sec.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 group">
                                            <FileText className="text-blue-300 shrink-0 mt-0.5 group-hover:text-blue-500 transition-colors" size={18} />
                                            <span
                                                onClick={() => setSelectedTopic(item)}
                                                className="text-gray-800 font-medium text-[15px] cursor-pointer hover:text-blue-600 hover:underline transition-all"
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* IMAGE */}
                            <div className="flex-1 w-full">
                                <div className="relative rounded-4xl overflow-hidden shadow-2xl aspect-16/10">
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