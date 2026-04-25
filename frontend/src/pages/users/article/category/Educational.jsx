import React from "react";
import { CalendarDays, Clock3, Target, User, Mic, Calendar, MapPin, Megaphone, BarChart3, GraduationCap, ArrowLeft } from "lucide-react";
import { articles } from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";

const { education_header } = articles;

const Educational = () => {

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
        <div className="grid lg:grid-cols-2 gap-0 items-stretch border-b border-gray-200 pb-8">

          {/* Left Side */}
          <div className="pr-8 flex flex-col justify-center">

            <span className="w-fit bg-violet-100 text-violet-700 px-3 py-1 rounded-md text-xs font-semibold mb-4">
              EDUCATIONAL
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The Ultimate Guide to
              <br />
              Educational Events in
              <br />
              Event Management
            </h1>

            <p className="text-gray-600 mt-5 leading-8 text-lg max-w-xl">
              Educational events inspire learning, spark ideas, and create
              meaningful connections. Here's how to plan events that educate
              and engage effectively.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mt-6">
              <span className="font-medium text-gray-700">
                By Admin
              </span>

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
          {/* Hero Image */}
          <div className="relative h-70 md:h-80 rounded-xl overflow-hidden">
            <img
              src={education_header}
              alt="Educational Event"
              className="w-full h-95 object-cover rounded-2xl"
            />
            {/* Left Fade Overlay */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-44 bg-linear-to-r from-white via-white/80 to-transparent"></div>
          </div>
        </div>

        {/* Intro */}
        <div className="border-t mt-10 pt-10">
          <p className="text-gray-700 leading-8 text-lg">
            Educational events play a vital role in sharing knowledge,
            building skills, and shaping the future. Whether it's a seminar,
            workshop, training, or academic conference, a well-planned event
            ensures maximum learning and engagement.
          </p>
          <p className="text-gray-700 leading-8 text-lg mt-5">
            Here’s a step-by-step guide to organizing successful educational
            events.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 space-y-8">
          {steps.map((item, index) => (
            <div key={index} className="grid md:grid-cols-[110px_1fr] gap-6 pb-8 border-b border-gray-200">
              <div className="w-24 h-24 rounded-2xl bg-violet-50 text-violet-700 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-8 text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Box */}
        <div className="mt-10 bg-violet-50 rounded-2xl p-8 grid md:grid-cols-[100px_1fr] gap-6 items-center">
          <div className="w-20 h-20 rounded-2xl bg-violet-600 text-white flex items-center justify-center">
            <GraduationCap />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              Education Today, Impact Tomorrow
            </h3>

            <p className="text-gray-600 leading-8 text-lg mt-3">
              Great educational events create lasting impact by empowering minds
              and building a stronger, more informed community.
            </p>
          </div>
        </div>

        {/* Footer Tags */}
        <div className="flex flex-wrap gap-3 mt-10">
          {["Educational Events", "Event Planning", "Learning", "Conference"].map(
            (tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )

};

export default Educational;