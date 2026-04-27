import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Sparkles, Users, Award, Lightbulb, ArrowRight, Calendar, Clock, ArrowLeft, Mic, Brain, Target, Compass } from "lucide-react";
import { articles } from "../../../../assets/assets";

const { education_header, Academic1, Academic2, Academic3, career1, career2, career3, Student1, Student2, Student3 } = articles;

const categories = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Student Focus",
    color: "text-indigo-600",
    borderColor: "border-indigo-500",
    bgColor: "bg-indigo-600",
    cards: [
      {
        img: Student1,
        title: "How to Organize a Successful College Orientation Program",
        desc: "A massive, long-form guide to planning an engaging orientation that helps new students settle in.",
        category: "Student Focus",
        date: "Aug 12, 2025",
        readTime: "25 min read",
        points: [
          {
            title: "Strategic Onboarding and Cultural Integration",
            text: "A successful college orientation program is the foundation of a student's entire academic journey. It must go beyond just providing a map and a schedule; it must facilitate a deep sense of belonging and cultural integration. This begins with a vision that prioritizes social connection and emotional safety. You must design activities that allow new students to interact in low-pressure environments, such as small-group icebreakers and peer-led tours. Choosing the right student leaders is critical; these mentors must be trained in empathy, conflict resolution, and the specific logistics of the campus. Setting a realistic budget is the backbone of the project; it must cover high-quality welcoming materials, digital orientation platforms, and a series of high-energy social events. A successful organizer creates a detailed timeline that spans months, ensuring that everything from the first welcoming email to the final orientation social is tracked with precision. You must also account for the 'unseen' details: parent hospitality, move-in logistics, and the availability of mental health resources for students who may feel overwhelmed by the transition. This vision must be communicated clearly to every department so the entire team works toward a single, cohesive goal of delivering an unparalleled welcoming experience that resonates with new students for years to come. Logistics must be flawless, and the vision must be unwavering to ensure that every attendee feels the intentionality behind every single note played."
          },
          {
            title: "Interactive Information Design and Tech Infrastructure",
            text: "In a modern orientation setting, technical infrastructure is the physical manifestation of your commitment to clarity and student success. Investing in high-quality digital onboarding platforms is non-negotiable; you need a system that can deliver all the necessary information—from course registration to club sign-ups—in an intuitive and accessible way. This involves working with technical teams who can manage complex databases and real-time communication tools. Professional lighting and sound are equally critical for large-scale welcoming ceremonies and student assemblies. High-resolution LED walls or dual-projection systems should be used to display engaging visuals that tell the story of the college's values and community. You must also ensure redundant systems are in place; a backup for the main registration portal or a secondary audio setup for the main hall can save a massive event from a sudden technical failure. Conducting thorough dry-runs for every presentation and social event is where the quality is polished. You test every QR code, every digital form, and every audio cue before the students arrive. This level of technical mastery ensures that the orientation process is never interrupted—the technology becomes an invisible facilitator for the connection between the student and the institution, allowing the focus to remain entirely on building community and excitement. Technology should disappear into the background, leaving only the raw connection between student and school."
          },
          {
            title: "Student Engagement and Peer-Led Discovery",
            text: "A truly successful orientation is built on the engagement level of the new students and the quality of the peer-led discovery process. Implementing strong engagement strategies is a science that includes everything from gamified campus tours to interactive student organization fairs. You must design the physical and digital spaces to encourage interaction, using 'social zones' where students can meet and discuss their aspirations. Communication is vital—ensure your student leaders are briefed on how to assist their peers and guide them through the complex transition process. Beyond the live sessions, you must keep the students engaged through ongoing digital resources. Use mobile apps or online platforms to provide real-time updates, access to campus maps, and a forum for connecting with their cohort. Promoting your orientation effectively across student portals and social media is what ensure a motivated and informed attendance. A well-organized orientation has an infectious energy that is truly inspiring, providing new students with the confidence and the connections they need to launch their academic careers with professional excellence and strategic depth. Your job as an organizer is to facilitate this connection by handling the logistics so perfectly that the students feel free to lose themselves in the excitement of their new beginning. When a crowd feels safe, well-informed, and excited, they become part of the experience itself."
          }
        ]
      },
      {
        img: Student2,
        title: "Best Ideas for School Annual Day Events",
        desc: "Creative themes, activities and tips to make your annual day unforgettable.",
        category: "Student Focus",
        date: "Nov 5, 2025",
        readTime: "20 min read",
        points: [
          {
            title: "Conceptual Thematic Design and Narrative Flow",
            text: "The Annual Day is the highlight of the school calendar, and its success depends on a clear, inspiring theme that is woven through every performance and speech. A great theme provides a narrative arc for the evening, turning a collection of random acts into a cohesive and powerful story. This requires working closely with teachers and students to develop content that is both creative and meaningful. The design of the stage, the costumes, and the lighting must all align with this central concept to create a truly immersive world for the audience. The flow of the event is equally important—balancing high-energy dances with more intimate musical performances and formal awards. Strategic use of professional-grade staging and lighting can elevate a simple school show into a world-class production that leaves a lasting impression on parents and the local community. By prioritizing thematic clarity, you ensure that the event has a clear purpose and a professional energy that reflects the excellence of the school. Every detail, from the opening speech to the final curtain call, should contribute to a unified experience that celebrates the spirit of the institution."
          },
          {
            title: "High-End Production and Technical Mastery",
            text: "For a truly unforgettable Annual Day, the production quality must match the talent of the students. This involves investing in high-quality sound systems that can handle both spoken word and complex musical performances with clarity and power. Professional lighting is critical, using a mix of washes and moving heads to highlight different parts of the stage and to create specific moods for every performance. Atmospheric effects like haze or light fog can add depth and a cinematic quality to the show. The use of large LED screens for backdrops allows for dynamic visuals that can change instantly between acts, providing a versatile and high-tech canvas for student creativity. Redundant systems and a professional technical crew are essential to ensure the show runs without interruption, allowing the students to focus entirely on their performance. Technical mastery is what turns a good school event into a professional-grade spectacle that the entire community will talk about for years. A flawless technical show allows the students to shine and ensures the audience remains fully engaged in the magic on stage."
          },
          {
            title: "Student Participation and Community Engagement",
            text: "The true heart of the Annual Day is the participation and growth of the students. A successful event provides opportunities for as many students as possible to contribute, whether on stage, in the tech booth, or behind the scenes in costume design and stage management. This inclusive approach fosters a sense of pride and community that is central to the school's mission. Engagement also extends to the parents and the wider community; the event should be a celebration of the school's achievements and a platform for building stronger relationships. Clear communication and a well-organized ticketing and entry process are essential for a positive audience experience. Promoting the event through school newsletters and social media builds excitement and ensures a packed house. When the whole community comes together to celebrate student talent in a high-quality, professional environment, it creates a powerful and lasting positive impact."
          }
        ]
      },
      {
        img: Student3,
        title: "How to Plan a Memorable Freshers Day",
        desc: "Fun ideas and planning tips to welcome new students with excitement.",
        category: "Student Focus",
        date: "Oct 1, 2025",
        readTime: "18 min read",
        points: [
          {
            title: "Curating a High-Energy Social Atmosphere",
            text: "Freshers Day is the first major social event for new students, and its goal is to create a high-energy environment where they feel welcome and excited about their new community. This requires a focus on 'vibe' and informal interaction. The talent selection—from DJs to student performers—must understand the musical preferences and the social dynamics of the cohort. Lighting and sound are key tools for creating this atmosphere, using vibrant colors and a punchy sound system that makes the dancefloor the center of the night. Choosing a theme that encourages participation, such as a specific color code or a retro vibe, provides a common ground for students to start conversations. The layout of the venue should include social zones where students can take a break and talk in a slightly quieter environment. By prioritizing energy and social connection, you create an event that acts as a powerful catalyst for new friendships and a strong sense of school identity."
          },
          {
            title: "Interactive Engagement and Social Media Integration",
            text: "To make Freshers Day truly memorable, you must incorporate interactive elements that encourage students to get involved and share their experience online. Dedicated photo spots with unique backdrops and professional lighting are a must for a generation that lives on social media. Using a specific event hashtag and running social media competitions throughout the night helps to keep the event trending and creates a shared digital history. Interactive activities like 'find your match' games, digital graffiti walls, or interactive photo booths provide natural opportunities for social interaction and content creation. The goal is to make the event as 'Instagrammable' as possible, ensuring that the excitement of the night is shared with the students' wider networks in real-time."
          },
          {
            title: "Peer-Led Support and Safety Logistics",
            text: "Safety and support are the foundation of a successful Freshers Day. The event should be managed by a team of senior students and staff who are trained in crowd safety and basic welfare. Their primary role is to be a helpful and friendly presence, providing information and ensuring that everyone feels safe and included. The site layout must be clear, with well-marked exits and easy access to hydration and first-aid if needed. Effective communication among the staff is critical, using radios and a clear chain of command to manage any situation quickly and calmly. By creating a safe and well-organized environment, you allow the new students to relax and fully enjoy the social experience."
          }
        ]
      }
    ]
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Academic Focus",
    color: "text-green-600",
    borderColor: "border-green-500",
    bgColor: "bg-green-600",
    cards: [
      {
        img: Academic1,
        title: "How to Conduct a Professional Seminar",
        desc: "Step-by-step process to organize successful and impactful seminars.",
        category: "Academic Focus",
        date: "Sept 12, 2025",
        readTime: "25 min read",
        points: [
          {
            title: "Precision Agenda Planning and Content Curation",
            text: "Conducting a truly professional seminar requires a level of precision that begins months before the first speaker takes the stage. It's about more than just filling a schedule; it's about curating a narrative that flows logically from foundational concepts to advanced applications. You must identify the most relevant topics in the field and invite speakers who are not only experts but also compelling presenters. This content curation process ensures that every session adds unique value and contributes to the overall educational objective. Choosing a venue with the right intellectual 'vibe' and high-end technical infrastructure is essential for establishing professional credibility. A successful seminar organizer develops a detailed production book that tracks every element, from speaker bios and presentation slides to the timing of coffee breaks."
          },
          {
            title: "Advanced AV Integration and Interactive Learning",
            text: "In a professional seminar, the audio-visual quality is the primary facilitator of knowledge transfer. This involves using high-fidelity sound systems that ensure every word is perfectly audible, and high-resolution projection or LED systems for clear data visualization. Interactive tools like real-time polling, digital Q&A platforms, and collaborative document sharing transform the audience from passive listeners into active participants. This level of engagement is crucial for adult learning and for fostering a deeper understanding of complex topics. The technical team must be capable of managing multi-source presentations and live-streaming for a global audience without a single glitch. Redundancy is key—having backup laptops and audio rigs ensures that the educational flow is never broken."
          },
          {
            title: "Professional Networking and Knowledge Retention",
            text: "A successful seminar is also a platform for high-level professional networking and the long-term retention of knowledge. You must design the event's schedule and space to encourage interaction among peers and experts, using structured networking sessions and comfortable breakout zones. Beyond the live sessions, providing participants with high-quality digital summaries, video recordings, and ongoing access to a professional forum ensures that the learning continues long after the event. Effective communication is vital—ensuring that all attendees receive timely information and that their needs are met throughout the seminar."
          }
        ]
      },
      {
        img: Academic2,
        title: "Step-by-Step Guide to Organizing Workshops",
        desc: "From planning to execution — everything you need for a smooth workshop.",
        category: "Academic Focus",
        date: "Oct 20, 2025",
        readTime: "25 min read",
        points: [
          {
            title: "Designing for Hands-On Skill Mastery",
            text: "Workshop planning is a unique science that focuses on active learning rather than passive listening. To organize a successful workshop, you must move beyond the lecture format and create a structured environment where participants can engage directly with the material. This begins with defining clear, actionable learning objectives—what specific skill will the attendee walk away with? The agenda should be divided into 'sprints' that combine short instructional bursts with long periods of practical application. Choosing a venue that supports collaborative work is essential; you need flexible seating, plenty of whiteboard space, and robust technical support for individual devices. This hands-on approach ensures that the knowledge is not just heard, but practiced and internalized."
          },
          {
            title: "Facilitation Excellence and Real-Time Feedback",
            text: "The success of a workshop relies heavily on the quality of its facilitation. A great facilitator acts as a coach rather than a lecturer, guiding the group through the exercises while providing personalized feedback to individuals. This requires a high level of expertise and the ability to read the room, adjusting the pace of the workshop to match the participants' progress. You must ensure that the ratio of facilitators to attendees is low enough to allow for meaningful one-on-one interaction. Using interactive digital tools like live polling or collaborative project boards helps to track engagement and identify areas where participants might be struggling. Providing immediate, constructive feedback during the workshop is crucial for correcting mistakes and reinforcing positive learning patterns."
          },
          {
            title: "Outcome Assessment and Post-Workshop Growth",
            text: "The final phase of workshop planning is focused on assessing outcomes and fostering long-term professional growth. You must implement a clear system for evaluating the success of the workshop—did the participants achieve the learning objectives? This can involve end-of-session tests, project presentations, or detailed feedback surveys. Beyond the event itself, providing attendees with a 'resource kit' that includes templates, reading materials, and a recording of the instructional segments ensures that the learning continues at home. Creating a digital community or an alumni group for workshop participants allows them to stay connected."
          }
        ]
      },
      {
        img: Academic3,
        title: "Tips for Hosting Educational Conferences",
        desc: "Practical tips to plan conferences that educate and inspire.",
        category: "Academic Focus",
        date: "Dec 5, 2025",
        readTime: "25 min read",
        points: [
          {
            title: "Scalable Logistics and Multi-Track Management",
            text: "Hosting a large-scale educational conference is a massive undertaking that requires a sophisticated approach to scalable logistics. Unlike a single-track seminar, a conference often features multiple concurrent sessions, workshops, and keynote presentations happening across various rooms. You must implement a robust management system to track thousands of attendees, dozens of speakers, and a complex web of technical requirements. High-quality digital scheduling tools and a dedicated event app are essential for allowing participants to navigate the diverse agenda and customize their own experience. The venue must offer state-of-the-art technical infrastructure, with high-speed Wi-Fi and professional-grade A/V setups in every room."
          },
          {
            title: "Hybrid Integration and Global Academic Reach",
            text: "In the modern academic world, a conference must offer global reach through seamless hybrid integration. This involves providing high-quality live-streaming and interactive digital platforms that allow remote participants from around the world to engage with the live sessions in real-time. Professional video production is critical, using multiple camera angles and high-end audio to create an immersive experience for those watching online. You must also ensure that remote attendees can participate in Q&A sessions and networking opportunities, using advanced communication tools to bridge the gap between the physical and digital environments. This level of integration significantly expands the impact of the conference."
          },
          {
            title: "Academic Legacy and Publication Excellence",
            text: "A truly successful educational conference leaves a lasting intellectual legacy through its publication and distribution strategies. You must work closely with academic publishers and digital repositories to ensure that the research and ideas shared during the event are preserved and accessible to the wider scholarly community. This involves managing the peer-review of papers, producing high-quality conference proceedings, and providing ongoing access to recorded sessions and research data. Effective communication and a clear vision for the event's academic impact are essential for attracting top-tier research and speakers."
          }
        ]
      }
    ]
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Career / Skill Focus",
    color: "text-orange-500",
    borderColor: "border-orange-400",
    bgColor: "bg-orange-500",
    cards: [
      {
        img: career1,
        title: "How to Plan Career Guidance Events",
        desc: "Help students choose the right path with well-planned guidance sessions.",
        category: "Career / Skill Focus",
        date: "Feb 10, 2026",
        readTime: "25 min read",
        points: [
          {
            title: "Strategic Mentorship and Industry Networking",
            text: "Career guidance events are the bridge between academic study and the professional world. To organize a successful event, you must start with a strategic vision that pairs students with mentors who have real-world experience in their fields of interest. This involves identifying key industries and inviting professionals who are not only successful but also passionate about sharing their knowledge. A great guidance event uses a mix of one-on-one sessions, panel discussions, and industry-specific workshops to facilitate meaningful connections. Choosing the right venue—perhaps a professional co-working space or a corporate headquarters—helps to set the tone and establishes a professional 'vibe' from the moment the students walk in."
          },
          {
            title: "Personalized Career Mapping and Data-Driven Insights",
            text: "Modern career guidance is a science that relies on personalized data and strategic insights to help students find their path. You must integrate advanced digital tools into your event that allow students to analyze their skills, personality traits, and career aspirations. Using these results, you can provide personalized 'career maps' that highlight the most suitable industries and roles for each individual. This data-driven approach adds a layer of professional depth to the event and ensures that the guidance provided is accurate and impactful. You must also ensure that the students have access to professional career coaches who can help them interpret the data and develop a strategic plan."
          },
          {
            title: "Professional Readiness and Skills for the Future",
            text: "The final pillar of career guidance is professional readiness—ensuring that students have the practical skills needed to succeed in their chosen fields. Your event should feature a series of high-end workshops focused on the 'soft skills' that employers value most: communication, leadership, critical thinking, and emotional intelligence. You must also provide hands-on training in the latest digital tools and technologies that are transforming the professional landscape. A successful organizer works with industry partners to ensure that the content is current and relevant to the needs of the modern workforce. Providing students with opportunities to practice their interview skills is crucial."
          }
        ]
      },
      {
        img: career2,
        title: "Coding Bootcamp Event Planning Guide",
        desc: "Plan an effective bootcamp that builds skills and inspires innovation.",
        category: "Career / Skill Focus",
        date: "March 5, 2026",
        readTime: "25 min read",
        points: [
          {
            title: "Immersive Technical Sprints and Innovation Hubs",
            text: "Bootcamp planning is a high-intensity endeavor that requires a focus on immersive learning and technical innovation. Unlike a standard workshop, a bootcamp is designed to push participants to their creative and technical limits in a very short period of time. This requires a vision that prioritizes rapid skill acquisition and the building of real-world projects. You must create a 'technical sprint' environment, with a fast-paced agenda that combines short instructional bursts with long periods of hands-on coding and problem-solving. Choosing the right venue is critical; you need a space that feels like a modern innovation hub, with high-speed Wi-Fi, professional workstations, and collaborative zones."
          },
          {
            title: "Project-Based Learning and Real-World Application",
            text: "The core of a successful coding bootcamp is project-based learning, where participants work together to build real-world applications that solve actual problems. This hands-on approach ensures that the skills being learned are immediately applicable and that participants gain valuable experience in teamwork, project management, and problem-solving. You must work with industry partners to identify relevant projects and to provide participants with the necessary APIs, data sets, and tools needed to bring their ideas to life. The bootcamp should culminate in a high-stakes 'demo day' where participants can showcase their work to a panel of industry experts and potential employers."
          },
          {
            title: "Tech Community Integration and Lifelong Learning",
            text: "The final phase of bootcamp planning is focused on community integration and the fostering of a lifelong learning mindset. You must connect participants with the wider tech community through networking events, guest lectures, and professional forums. Providing attendees with ongoing access to digital learning resources and a dedicated alumni network ensures that the learning continues long after the bootcamp ends. Effective communication and a clear vision for participant growth are essential for building a successful and sustainable bootcamp program."
          }
        ]
      },
      {
        img: career3,
        title: "Student Leadership Event Ideas",
        desc: "Ideas and formats to build leadership qualities among students.",
        category: "Career / Skill Focus",
        date: "April 1, 2026",
        readTime: "25 min read",
        points: [
          {
            title: "Empowerment Strategies and Character Building",
            text: "Leadership events for students must focus on empowerment strategies and the building of core character traits like integrity, empathy, and resilience. This involves creating a series of high-impact workshops, interactive simulations, and case-study discussions that challenge students to think about leadership in a new and more profound way. The goal is to help them identify their own unique leadership style and to provide them with the tools needed to inspire and guide their peers effectively. Mentors should be successful leaders from various fields—business, social activism, and the arts—who can share their personal stories of challenge and achievement."
          },
          {
            title: "Collaborative Problem-Solving and Team Dynamics",
            text: "A successful leadership event also includes activities focused on collaborative problem-solving and the mastering of team dynamics. Students should be placed in diverse groups and given complex, real-world tasks that require them to work together, delegate responsibilities, and resolve conflicts in a professional manner. This hands-on approach provides valuable experience in the 'real-world' skills of leadership and ensures that students understand the importance of collaboration and mutual respect. High-quality feedback loops from facilitators and peers help students to refine their approach and build their confidence."
          },
          {
            title: "Strategic Vision and Community Impact Projects",
            text: "The final pillar of student leadership is strategic vision and the planning of community impact projects. Students should work together to identify a local or global issue and develop a professional-grade plan to address it using the leadership and collaboration skills they've learned during the event. This focus on real-world impact provides a sense of purpose and achievement that is truly inspiring and provides tangible proof of their leadership capabilities. Providing ongoing support and mentorship as they implement their projects ensures that the leadership qualities developed during the event are put into practice."
          }
        ]
      }
    ]
  }
];

export default function EducationalPage() {
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (selectedArticle) {
    return (
      <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-indigo-500 selection:text-white pb-32">
        <div className="relative min-h-[70vh] flex flex-col justify-end p-6 md:p-20 pb-32">
          <div className="absolute inset-0 z-0">
            <img src={selectedArticle.img} alt={selectedArticle.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl space-y-8 text-left">
            <button onClick={() => setSelectedArticle(null)} className="flex items-center gap-2 text-white font-bold mb-12 hover:text-black transition-colors uppercase text-xs tracking-widest">
              <ArrowLeft size={16} /> Back to Articles
            </button>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold">
              <GraduationCap size={12} className="text-indigo-600" /> {selectedArticle.category}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight max-w-3xl text-gray-900">{selectedArticle.title}</h1>
            <div className="flex items-center gap-6 text-gray-500 text-sm font-medium pt-4 border-t border-gray-100 w-fit">
              <div className="flex items-center gap-2"><Calendar size={16} /> {selectedArticle.date}</div>
              <div className="flex items-center gap-2"><Clock size={16} /> {selectedArticle.readTime}</div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-24 text-justify">
          {selectedArticle.points.map((point, idx) => (
            <div key={idx} className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 flex gap-4 text-left">
                <span className="opacity-30">{idx + 1}.</span> {point.title}
              </h2>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-light">{point.text}</p>
              {idx < selectedArticle.points.length - 1 && <div className="pt-16 border-b border-gray-100"></div>}
            </div>
          ))}
          <div className="mt-40 bg-gray-50 border border-gray-100 rounded-[50px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-left">
            <div className="flex items-center gap-10">
              <div className="w-24 h-24 rounded-3xl bg-indigo-600 text-white flex items-center justify-center shadow-2xl shadow-indigo-200"><Mic size={40} /></div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-gray-900">Ready to Host Your Own <br /> Educational Event?</h3>
                <p className="text-gray-500 text-lg">Let's turn your vision into an extraordinary learning experience.</p>
              </div>
            </div>
            <button className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-3 uppercase tracking-widest text-xs whitespace-nowrap shadow-xl shadow-indigo-100">
              Contact Our Team <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f7f7] min-h-screen font-sans text-gray-900 overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <section className="bg-[#07142b] text-white overflow-hidden relative">
          <div className="absolute top-10 left-10 z-50">
            <button onClick={() => navigate("/")} className="text-yellow-400 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform uppercase tracking-widest text-xs">
              <ArrowLeft size={16} /> Back to Home
            </button>
          </div>

          <div className="relative grid md:grid-cols-[0.8fr_1.2fr] gap-0 min-h-[600px] md:min-h-[700px]">
            <div className="relative z-30 flex flex-col justify-center py-20 px-10 md:pl-20 text-left">
              <div className="flex items-center gap-3 text-yellow-400 mb-8">
                <div className="p-2 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                  <GraduationCap size={24} />
                </div>
                <span className="uppercase tracking-[0.2em] text-xs font-bold">Education Category</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter mb-10">
                Learn, Grow & <br /> Inspire with <br />
                <span className="text-yellow-400">Educational Events</span>
              </h1>
              <p className="text-gray-400 text-xl max-w-md leading-relaxed italic font-light">
                From student celebrations to academic seminars and skill programs — discover ideas, tips and expert guides to make every learning event meaningful and memorable.
              </p>
            </div>

            <div className="relative h-[450px] md:h-auto overflow-hidden z-10 md:rounded-r-[60px]">
              <img src={education_header} alt="Education" className="w-full h-full object-cover" />
              <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-[#07142b] via-[#07142b]/60 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Highlights Bar */}
        <section className="max-w-7xl mx-auto -mt-16 px-6 relative z-20">
          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-50 p-10 md:p-14 grid md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm"><Users size={32} /></div>
              <h3 className="font-bold text-gray-900 text-lg">Engaging Learning</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Events that make learning <br /> fun and impactful.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shadow-sm"><Sparkles size={32} /></div>
              <h3 className="font-bold text-gray-900 text-lg">Student Growth</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Programs designed to build <br /> confidence and leadership.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shadow-sm"><BookOpen size={32} /></div>
              <h3 className="font-bold text-gray-900 text-lg">Knowledge Sharing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Bringing experts and students <br /> together for better understanding.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center shadow-sm"><Award size={32} /></div>
              <h3 className="font-bold text-gray-900 text-lg">Future Ready</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Preparing students for <br /> careers and opportunities.</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-32 space-y-40">
          {categories.map((section, idx) => (
            <div key={idx} className="space-y-16">
              <div className="flex items-center justify-between border-b border-gray-100 pb-12">
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl ${section.bgColor} text-white flex items-center justify-center shadow-xl`}>
                    {section.icon}
                  </div>
                  <h2 className={`text-5xl font-bold tracking-tight ${section.color}`}>{section.title}</h2>
                </div>
                <button className={`px-10 py-4 rounded-full border-2 ${section.borderColor} ${section.color} font-bold hover:bg-gray-50 transition-all uppercase tracking-widest text-[10px]`}>
                  View all articles →
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {section.cards.map((card, cIdx) => (
                  <div key={cIdx} className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-50 hover:shadow-2xl transition-all duration-700 group flex flex-col h-full">
                    <div className="h-72 overflow-hidden relative">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] uppercase font-bold tracking-widest text-gray-900 shadow-lg">
                        {card.category}
                      </div>
                    </div>
                    <div className="p-10 space-y-6 flex flex-col flex-grow text-left">
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">{card.title}</h3>
                      <p className="text-gray-500 leading-relaxed font-light line-clamp-3 text-lg">{card.desc}</p>
                      <div className="mt-auto pt-8">
                        <button
                          onClick={() => setSelectedArticle(card)}
                          className={`flex items-center gap-2 font-bold ${section.color} hover:gap-4 transition-all uppercase tracking-widest text-[10px]`}
                        >
                          Read Article <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-[50px] p-12 md:p-24 text-white flex flex-col lg:flex-row items-center justify-between gap-16 text-left relative overflow-hidden group shadow-2xl shadow-indigo-900/20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:bg-white/10 transition-all duration-1000"></div>
            <div className="flex items-center gap-12 relative z-10">
              <div className="w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-2xl">
                <Lightbulb size={56} className="text-yellow-300" />
              </div>
              <div className="space-y-4">
                <h2 className="text-5xl font-bold tracking-tight">Planning an <br />Educational Event?</h2>
                <p className="text-white/70 text-xl max-w-xl font-light leading-relaxed">Let our experts help you create meaningful learning experiences that leave a lasting impact on your students.</p>
              </div>
            </div>
            <button className="bg-white text-indigo-700 px-14 py-6 rounded-3xl font-bold text-xl hover:scale-105 transition-all shadow-3xl flex items-center gap-4 relative z-10 whitespace-nowrap">
              Contact Our Team <ArrowRight size={24} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}