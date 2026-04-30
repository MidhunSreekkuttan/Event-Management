import React from "react";
import { CalendarDays, Clock3, Target, Users, Mic, Calendar, MapPin, Megaphone, BarChart3, GraduationCap, User, ArrowLeft } from "lucide-react";
import { articles } from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";

const { entertainment_header } = articles;

const Entertainments = () => {
  const navigate = useNavigate();
  const steps = [
    {
      icon: <Target size={34} />,
      title: "1. Define the Purpose",
      desc: "Identify the objective of your events. Are you educating attendees, building awareness, or developing skills? A clear purpose helps shape content, speakers, and format.",
    },
    {
      icon: <User size={34} />,
      title: "2. Know Your Aduience",
      desc: "Understand attendee interests, expectations, and challenges.This helps create relevant sessions and valuable learning experiences.",
    },
    {
      icon: <Mic size={34} />,
      title: "3. Curate Valuable Content",
      desc: "Choose informative and up-to-date topics. Include experts, workshops, real case studies, and practical demonstrations.",
    },
    {
      icon: <Calendar size={34} />,
      title: "4. Choose the Right Format",
      desc: "Use seminars, workshops, keynote sessions, training camps, or panel discussions based on your goals.",
    },
    {
      icon: <MapPin size={34} />,
      title: "5. Plan the Logistics",
      desc: "Arrange venue, AV setup, internet, registration desk, seating, refreshments, and learning materials.",
    },
    {
      icon: <Megaphone size={34} />,
      title: "6. Promote Your Event",
      desc: "Use email marketing, posters, colleges, institutions, and social media to increase registrations.",
    },
    {
      icon: <BarChart3 size={34} />,
      title: "7. Engage & Evaluate",
      desc: "Use polls, Q&A sessions, certificates, and collect feedback after the event for future improvement.",
    },
  ];
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-violet-600 font-medium hover:underline mb-6">
          <ArrowLeft size={18}
          />
          Back
        </button>

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold">
              EDUCATIONAL CATEGORY
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight">
              The Ultimate Guide about Educational Events
            </h1>
            <p className="text-gray-600 leading-8 mt-6 text-lg">
              Educational events inspire learning, spark ideas, and create
              meaningful connections. Here’s how to plan events that educate
              and engage effectively.
            </p>
            <div className="flex flex-wrap gap-5 text-gray-500 text-sm mt-6">
              <span>By Admin</span>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                <span>May 20, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

};

export default Entertainments;