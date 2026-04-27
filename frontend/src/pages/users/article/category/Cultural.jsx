import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { articles } from '../../../../assets/assets';
import { useNavigate } from 'react-router-dom';

const { culture_header, culturecard1, culturecard3 } = articles;

const CulturalEvents = () => {
    const navigate = useNavigate();

    return (
        <article className="bg-[#fdfcfb] min-h-screen font-serif text-[#3e342a]">
            {/* Navigation */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <button
                    onClick={() => navigate("/")}
                    className='group flex items-center gap-2 text-[#8b2329] font-sans font-bold hover:opacity-70 transition-all uppercase tracking-widest text-xs'>
                    <ArrowLeft size={16} />
                    Back to Home
                </button>
            </div>

            {/* Top Section: Words Left, Photo Right */}
            <header className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-[#d4b58a]/20">
                    <div className="space-y-6 text-left">
                        <h1 className="text-4xl md:text-7xl font-black leading-tight text-[#5b171a]">
                            Sharing Our <br />
                            <span className="italic text-[#d4b58a]">Traditions.</span>
                        </h1>
                        <p className="text-lg font-sans text-[#6a5f58] font-normal leading-relaxed">
                            We help people celebrate their history and share their culture with everyone. Our events bring people together through the power of tradition.
                        </p>
                    </div>
                    <div className="rounded-[30px] overflow-hidden shadow-xl aspect-video">
                        <img src={culture_header} alt="Cultural Traditions" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 space-y-24 pb-32">
                
                {/* Introduction Section: Words Left, Photo Right */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#5b171a]">What is a Cultural Event?</h2>
                        <p className="text-lg leading-relaxed text-[#6a5f58] font-sans">
                            A cultural event is a special time when people show others where they come from. It is about sharing stories, music, and food that have been in families for a long time. These events help us understand our friends and neighbors better. When we celebrate together, we learn that even if we are different, we can still be a big community that cares for each other.
                        </p>
                    </div>
                    <div className="bg-[#8b2329]/5 rounded-[40px] h-80 flex items-center justify-center text-[#8b2329]/30 font-bold italic border border-[#d4b58a]/10">
                        [Community Image]
                    </div>
                </div>

                {/* Detailed Section 1: Words Left, Photo Right */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-[#5b171a]">Music and Dancing</h3>
                        <p className="text-lg leading-relaxed text-[#6a5f58] font-sans">
                            Music and dancing are a big part of every culture. Every place in the world has its own special songs and ways to dance that tell a story. We find the best performers who know these traditional ways. When they perform, it feels like the past is coming to life right in front of you. It is beautiful to watch and listen to, and it makes people feel proud of their history.
                        </p>
                    </div>
                    <div className="rounded-[40px] overflow-hidden shadow-lg h-80">
                        <img src={culturecard1} alt="Traditional Dancing" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Detailed Section 2: Words Left, Photo Right */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-[#5b171a]">Food and Family</h3>
                        <p className="text-lg leading-relaxed text-[#6a5f58] font-sans">
                            Food is another great way to learn about a culture. Most cultures have special meals that they cook for holidays or big parties. We make sure the food at our events is real and tastes just like home. Sharing a meal is a great way to make new friends and learn about the world. It brings everyone together like one big family.
                        </p>
                    </div>
                    <div className="rounded-[40px] overflow-hidden shadow-lg h-80">
                        <img src={culturecard3} alt="Traditional Food" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Closing Summary */}
                <section className="bg-[#8b2329] p-12 rounded-[50px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div className="text-left space-y-4">
                        <h2 className="text-3xl font-bold">Let's Celebrate Together</h2>
                        <p className="text-[#fdfcfb]/70 max-w-md italic">
                            "Every culture is a gift to the world. Let us help you share your gift with everyone today."
                        </p>
                    </div>
                    <button 
                        onClick={() => navigate("/contactUs")}
                        className="bg-white text-[#8b2329] px-12 py-4 rounded-2xl font-bold hover:bg-[#5b171a] hover:text-white transition-all shadow-md">
                        Talk to Us Today
                    </button>
                </section>
            </div>
        </article>
    );
};

export default CulturalEvents;
