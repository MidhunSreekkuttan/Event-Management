import React from 'react';
import { ArrowLeft, ShieldCheck, CalendarDays, Clock3, Search } from 'lucide-react';
import { articles } from '../../../../assets/assets';
const { heroImages, card1, card2, card3, card4, card5, party1 } = articles
import { useNavigate } from 'react-router-dom';

const Coorprates = () => {

    const navigation = useNavigate()

    const tips = [
        {
            no: "1",
            title: "Define Your Event Goals",
            desc: "Understand the purpose of your event, choose the guest count, decide the theme and create a clear plan for the celebration.",
            img: card1,
        },
        {
            no: "2",
            title: "Set a Realistic Budget",
            desc: "Plan spending for venue, food, decoration, gifts, entertainment and emergency expenses to avoid overspending.",
            img: card2,
        },
        {
            no: "3",
            title: "Choose the Right Venue",
            desc: "Pick a venue that matches your event size, comfort, accessibility and overall atmosphere.",
            img: card3,
        },
        {
            no: "4",
            title: "Plan Fun Activities",
            desc: "Include games, music, dance, entertainment and engaging moments that guests will enjoy.",
            img: card4,
        },
        {
            no: "5",
            title: "Capture the Memories",
            desc: "Hire a photographer or set up a photo booth to preserve your special memories forever.",
            img: card5,
        },
    ];

    return (
        <article className="bg-[#f8fafc] min-h-screen font-sans text-[#1e293b]">
            {/* Navigation */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <button
                    onClick={() => navigation("/")}
                    className='group flex items-center gap-2 text-[#4f46e5] font-bold hover:opacity-70 transition-all uppercase tracking-tighter text-xs'>
                    <ArrowLeft size={16} />
                    Back to Home
                </button>
            </div>

            {/* Top Section: Words Left, Photo Right */}
            <header className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-100">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0f172a]">
                            Planning Great <br />
                            <span className="text-[#4f46e5]">Business Meetings.</span>
                        </h1>
                        <p className="text-lg text-[#64748b] font-normal leading-relaxed">
                            We help companies plan meetings and events that help teams work together better. We take care of everything so you can focus on your business goals.
                        </p>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
                        <img src={party1} alt="Business Meeting" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 space-y-24 pb-32">

                {/* Introduction Section: Words Left, Photo Right */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#0f172a]">Why Companies Have Events</h2>
                        <p className="text-lg leading-relaxed text-[#64748b]">
                            Companies have events for many reasons. Sometimes they want to show a new product to the world. Other times, they want to say "thank you" to their workers for all their hard work. These events are very important for a successful business. We make sure every detail is perfect so that people can talk, learn, and have a good time without any problems or worries.
                        </p>
                    </div>
                    <div className="bg-slate-200 rounded-[40px] h-80 flex items-center justify-center text-slate-400 font-bold italic">
                        [Corporate Team Image]
                    </div>
                </div>

                {/* Detailed Section 1: Words Left, Photo Right */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-[#0f172a]">We Handle All the Work</h3>
                        <p className="text-lg leading-relaxed text-[#64748b]">
                            Planning a big meeting is a lot of work and can be very stressful. You have to find a big enough room, get good food for everyone, and make sure the computers, microphones, and screens work perfectly. We do all of this for you. We find the best places and talk to the people who work there. This way, you can just focus on your meeting and talking to your team.
                        </p>
                    </div>
                    <div className="rounded-[40px] overflow-hidden shadow-lg h-80 border border-slate-100">
                        <img src={articles.card1} alt="Work" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Detailed Section 2: Words Left, Photo Right */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-[#0f172a]">Checking the Results</h3>
                        <p className="text-lg leading-relaxed text-[#64748b]">
                            After the event is finished, we help you see if it was successful. We ask the people who came if they liked it and what they learned. We also look at how much work was done during the day. This helps you plan even better events in the future. We want to make sure your company gets the best results and grows stronger every time you have an event.
                        </p>
                    </div>
                    <div className="rounded-[40px] overflow-hidden shadow-lg h-80 border border-slate-100">
                        <img src={card2} alt="Success" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Closing Summary */}
                <section className="bg-[#0f172a] p-12 rounded-[50px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div className="text-left space-y-4">
                        <h2 className="text-3xl font-bold">Ready to Plan Your Meeting?</h2>
                        <p className="text-slate-400 max-w-md">
                            "A good plan is the first step to success. Let us help you plan your next big company event today."
                        </p>

                    </div>
                    <button
                        onClick={() => navigate("/contactUs")}
                        className="bg-[#4f46e5] text-white px-12 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#0f172a] transition-all text-sm uppercase tracking-widest whitespace-nowrap">
                        Message Us Now
                    </button>
                </section>
            </div>
        </article>
    );
};

export default Coorprates;
