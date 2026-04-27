import React from "react";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { articles } from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";

const { education_header, card1, card2 } = articles;

const Educational = () => {
  const navigate = useNavigate();

  return (
    <article className="bg-[#f1f5f9] min-h-screen font-sans text-slate-800">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-[#0891b2] font-bold hover:opacity-70 transition-all uppercase tracking-tighter text-xs">
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>

      {/* Top Section: Words Left, Photo Right */}
      <header className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-200">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
              Learn New Things with <br />
              <span className="text-[#0891b2]">Educational Events.</span>
            </h1>
            <p className="text-lg text-slate-500 font-normal leading-relaxed">
              We help schools and students create great events where learning is fun and easy for everyone. We make sure every student can learn something new in an exciting way.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
            <img src={education_header} alt="Learning is fun" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 space-y-24 pb-32">
        
        {/* Introduction Section: Words Left, Photo Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Why Learning Events Matter</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Learning events are great places to share new ideas and make friends. Sometimes, learning in a normal classroom can be hard or boring. But a good event makes it exciting! We help plan these events so that students can listen to smart people, ask questions, and talk to each other. Our goal is to make sure everyone leaves the event knowing something new and feeling happy about what they learned.
            </p>
          </div>
          <div className="bg-white rounded-[40px] h-80 flex items-center justify-center text-slate-300 font-bold italic border border-slate-200 shadow-inner">
            [Happy Students Image]
          </div>
        </div>

        {/* Detailed Section 1: Words Left, Photo Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Planning the Right Way</h3>
            <p className="text-lg leading-relaxed text-slate-600">
              To make a good event, you need a very good plan. We look at what students need to learn and find the best way to teach it. We find great speakers who know how to talk to young people and make them interested. We also make sure the rooms are comfortable and have everything you need, like big screens and good sound, so no one misses a single word of the lesson.
            </p>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-lg h-80 border border-slate-100">
            <img src={card1} alt="Planning" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Detailed Section 2: Words Left, Photo Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Learning Never Stops</h3>
            <p className="text-lg leading-relaxed text-slate-600">
              A good event helps you even after it is finished. We give students useful papers and website links so they can keep reading and learning at home. We also help students get certificates to show they learned something special. This helps students feel proud of their hard work and helps them get ready for their future jobs and dreams.
            </p>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-lg h-80 border border-slate-100">
            <img src={card2} alt="Students" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Closing Summary */}
        <section className="bg-slate-900 p-12 rounded-[50px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="text-left space-y-4">
            <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
            <p className="text-slate-400 max-w-md italic">
              "Learning is like a small fire. Once it starts, it can grow very big and bright. Let us help you start that fire today."
            </p>
          </div>
          <button 
            onClick={() => navigate("/contactUs")}
            className="bg-[#0891b2] text-white px-12 py-4 rounded-2xl font-bold hover:bg-white hover:text-slate-900 transition-all shadow-xl">
            Contact Us Today
          </button>
        </section>
      </div>
    </article>
  );
};

export default Educational;
