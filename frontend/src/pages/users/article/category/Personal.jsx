import React from "react";
import { CalendarDays, Clock3, ArrowLeft, Search } from "lucide-react";
import { articles } from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";

const { header_image, card1, card2, card3, card4, card5 } = articles;

const Personal = () => {

    const navigate = useNavigate();

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
        <section className="bg-gray-50 py-14 px-5 md:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Back */}
                <button 
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-violet-600 font-medium hover:underline mb-6">
                    <ArrowLeft size={18} 
                />
                    Back
                </button>

                {/* Badge */}
                <div className="mb-4">
                    <span className="bg-violet-100 text-violet-700  px-4 py-2 rounded-full text-sm font-semibold">
                        PERSONAL EVENTS
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-5xl font-bold text-gray-900 mb-5">
                    How to Plan a Personal Event
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap gap-6 text-gray-500 mb-4 mt-2">
                    <span>By Admin</span>

                    <div className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        <span>April 1, 2026</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Clock3 size={16} />
                        <span>8 min read</span>
                    </div>
                </div>

                {/* Hero Image */}
                <img
                    src={header_image}
                    alt="Personal Event"
                    className="w-full h-125 object-cover rounded-2xl mb-12"
                />

                {/* Paragraph sections */}
                <div className="space-y-10 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            Why Personal Events are Important
                        </h2>
                        <p className="text-gray-600 text-justify text-lg leading-8 mt-8">
                            Personal events hold a special place in every person’s life because they celebrate emotions, milestones, relationships, and memories. Unlike formal or business gatherings, personal celebrations are deeply connected to feelings and human connection. Events such as birthdays, anniversaries, engagements, weddings, baby showers, housewarmings, graduations, reunions, and family get-togethers allow people to pause their busy lives and enjoy meaningful moments together. These occasions create joy, strengthen emotional bonds, and remind people of the value of family and friendship.
                            In modern life, many people are busy with work, studies, responsibilities, and stress. Because of this, quality time with loved ones becomes limited. Personal events create the perfect opportunity to reconnect with people who matter most. Families can gather in one place, old friends can meet again, and relatives can celebrate happiness together. These gatherings often become emotional moments filled with laughter, gratitude, and unforgettable memories.
                            Personal celebrations also help people recognize achievements and life progress. A graduation party celebrates hard work. A birthday celebrates life itself. An engagement celebrates commitment and love. An anniversary honors years of companionship and shared experiences. These milestones deserve appreciation because they reflect growth, dedication, and happiness.
                            Another important benefit of personal events is memory creation. Years later, people may forget daily routines, but they remember special celebrations, heartfelt speeches, family photos, surprise moments, and emotional laughter. These memories become part of family history and personal stories.
                            Personal events also allow creativity and self-expression. Hosts can design themes, decorations, music, food, activities, and experiences that reflect personality and style. Whether simple or luxurious, the event becomes a reflection of emotions and values.
                            Even small personal events have value. A simple dinner with loved ones can be more meaningful than an expensive celebration without warmth. The real purpose of these gatherings is connection, not cost.
                            Well-planned personal events also improve emotional wellness. Celebrating positive moments helps reduce stress, increases happiness, and builds stronger social support systems. People feel valued when invited, included, and appreciated.
                            At the heart of every successful personal event is togetherness. These occasions remind people that life is not only about work and routine—it is also about love, gratitude, celebration, and shared happiness.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            Benefits of Professional Planning
                        </h2>
                        <p className="text-gray-600 text-justify leading-8 text-lg">
                            Professional event planning can transform a simple gathering into a smooth, elegant, and memorable experience. Many people assume personal events are easy to organize, but in reality even a small celebration requires careful coordination. Venue booking, guest management, catering, decorations, entertainment, scheduling, budgeting, photography, transportation, and emergency preparation all need attention. Without proper planning, stress increases quickly. This is where professional planning becomes valuable.
                            One of the biggest advantages of professional planners is experience. They understand how events work from beginning to end. They know realistic timelines, common mistakes, vendor pricing, decoration trends, and backup solutions. Instead of learning through trial and error, hosts benefit from tested methods that save time and avoid confusion.
                            Another major benefit is stress reduction. Many hosts spend event day worrying about delayed food, missing chairs, decoration issues, guest complaints, parking confusion, or schedule problems. A professional planner handles these responsibilities, allowing the host and family to enjoy the celebration peacefully. Instead of managing problems, they can focus on greeting guests and making memories.
                            Professional planners also improve budgeting. Many people overspend because they book services without comparison or pay for unnecessary extras. Experienced planners know where to save money and where spending matters most. They can recommend affordable vendors, package deals, realistic guest counts, and practical alternatives without reducing quality.
                            Time management is another strong benefit. Planning an event alone can take weeks of calls, visits, negotiations, follow-ups, and decision-making. Professionals already have vendor networks and systems, making the process faster and more efficient. They know when to book what, how long setup takes, and how to keep the event on schedule.
                            Creativity and presentation also improve with professional planning. Event planners understand themes, lighting, table arrangements, floral balance, entry design, stage setup, seating flow, and guest experience. They can turn ordinary spaces into attractive and welcoming environments.
                            Unexpected problems happen in many events: rain for outdoor functions, late vendors, power cuts, missing items, guest count changes, or technical failures. Professionals are valuable because they stay calm and solve issues quickly with backup plans.
                            Communication becomes easier too. Instead of the host speaking separately with caterers, decorators, photographers, and venue managers, the planner coordinates everything. This reduces misunderstandings and saves energy.
                            Even for modest celebrations, professional planning adds structure and confidence. It does not always mean luxury—it means organization, smooth execution, and better results.
                            A successful event often looks effortless to guests. That effortless feeling usually comes from good planning behind the scenes.
                        </p>
                    </div>
                    <div className="text-gray-600 text-justify leading-8 text-lg">
                        <h2 className="text-3xl font-bold mb-3">
                            Common Mistakes to Avoid
                        </h2>
                        <p className="mb-5">
                            Many personal events fail to meet expectations not because of bad intentions, but because of avoidable planning mistakes. People often focus only on decorations or food while ignoring timing, budgeting, logistics, and guest experience.
                            Even expensive celebrations can feel disorganized if basic planning is weak. Understanding common mistakes helps hosts prevent stress, wasted money, and disappointment. Avoid these mistake :
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-red-500 font-bold">✖</span>
                                    Don't start planning late
                                </li>
                            </ul>
                            <ul>
                                <li className="flex gap-3">
                                    <span className="text-red-500 font-bold">✖</span>
                                    Set a clear and realistic budget
                                </li>
                            </ul>
                            <ul>
                                <li className="flex gap-3">
                                    <span className="text-red-500 font-bold">✖</span>
                                    Choose venue based on comfort and access
                                </li>
                            </ul>
                            <ul>
                                <li className="flex gap-3">
                                    <span className="text-red-500 font-bold">✖</span>
                                    Focus on guest experience, not only looks
                                </li>
                            </ul>
                            <ul>
                                <li className="flex gap-3">
                                    <span className="text-red-500 font-bold">✖</span>
                                    Communicate clearly with vendors
                                </li>
                            </ul>
                            <ul>
                                <li className="flex gap-3">
                                    <span className="text-red-500 font-bold">✖</span>
                                    Avoid overcrowded schedules
                                </li>
                            </ul>
                            <ul>
                                <li className="flex gap-3">
                                    <span className="text-red-500 font-bold">✖</span>
                                    Keep backup plans ready
                                </li>
                            </ul>
                            <ul>
                                <li className="flex gap-3">
                                    <span className="text-red-500 font-bold">✖</span>
                                    Delegate responsibilities on event day
                                </li>
                            </ul>
                            <ul>
                                <li className="flex gap-3">
                                    <span className="text-red-500 font-bold">✖</span>
                                    Reconfirm bookings and timings
                                </li>
                            </ul>
                            <ul>
                                <li className="flex gap-3">
                                    <span className="text-red-500 font-bold">✖</span>
                                    Stay calm and adaptable
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            Tips for Budget-Friendly Events
                        </h2>
                        <p className="text-gray-600 text-justify leading-8 text-lg">
                            A memorable personal event does not need a huge budget. Many people wrongly assume that a successful celebration must be expensive, but in reality thoughtful planning, smart decisions, and creativity matter more than high spending. Guests usually remember the atmosphere, hospitality, fun, and emotional moments not how much money was spent. With proper budgeting, even a simple event can feel elegant, warm, and enjoyable.
                            The first step in planning a budget-friendly event is setting a clear spending limit. Decide the maximum amount you are comfortable spending before making bookings. Once the budget is fixed, divide it into categories such as venue, food, decoration, entertainment, photography, gifts, and emergency expenses. This prevents overspending in one area and neglecting another.
                            Choosing the right venue can save a large amount of money. Instead of expensive banquet halls, consider hosting the event at home, in a garden, rooftop, community hall, beachside location, or family property if available. Smaller venues often create a more intimate and welcoming atmosphere while reducing rental costs.
                            Guest count strongly affects budget. More guests mean higher costs for food, seating, return gifts, and space. Invite people who truly matter rather than inviting everyone out of social pressure. A smaller guest list often creates a more meaningful celebration and better experience.
                            Food should be practical and sufficient rather than excessive. Instead of a large luxury menu, choose a focused menu with quality dishes guests actually enjoy. Buffet service can sometimes be more cost-effective than plated service. Avoid waste by estimating quantities realistically.
                            Decorations can be beautiful without being expensive. Use flowers in season, reusable decor items, candles, fairy lights, balloons, fabric drapes, and DIY centerpieces. Lighting often creates more visual impact than costly decorations. A clean theme with coordinated colors looks better than cluttered expensive decor.
                            Digital invitations are another easy saving method. Beautiful e-invites through WhatsApp or email reduce printing and delivery costs while being fast and convenient. Personalized digital invites can still feel stylish and thoughtful.
                            Compare vendor prices before booking. Many people choose the first option they see. Take time to get multiple quotations for photography, catering, sound, and decor. Negotiate politely and ask for package deals.
                            Use friends and family talents when possible. Someone may handle music, photography basics, hosting, makeup, design, or coordination. This adds a personal touch while reducing costs.
                            Always keep a small emergency reserve in the budget for unexpected expenses. Without backup funds, minor issues become stressful.
                            The true success of an event comes from warmth, planning, and guest satisfaction—not expensive spending. Smart budgeting creates celebrations that feel rich without costing too much.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            How to Impress Your Guests
                        </h2>
                        <p className="text-gray-600 text-justify leading-8 text-lg">
                            Guests remember how they feel during an event more than expensive decorations. To impress them, focus on comfort, hospitality, and thoughtful details. Welcome guests warmly and ensure seating, lighting, temperature, and cleanliness are properly managed. Provide delicious food with enough variety and consider dietary preferences when possible. Use attractive decorations, pleasant music, and a good event flow to maintain positive energy.
                            Small gestures such as personalized thank-you notes, return gifts, or photo corners can leave a lasting impression. When guests feel valued and entertained, the event becomes truly memorable.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-3">
                            Creating Memorable Moments
                        </h2>
                        <p className="text-gray-600 text-justify leading-8 text-lg">
                            The most successful personal events are those filled with meaningful and emotional moments. These memories are created through thoughtful planning and genuine experiences rather than expensive arrangements. Include activities such as speeches, family games, photo sessions, surprise performances, or memory-sharing segments that bring people closer together.
                            Capture the occasion through professional photography or candid videos so the memories can be cherished later. Personal touches such as favorite songs, custom decorations, or tribute messages make the celebration more special. Memorable moments are built when people laugh, connect, and enjoy the occasion together.
                        </p>
                    </div>
                    <div className="text-gray-600 leading-8 text-lg text-justify">
                        <h2 className="text-3xl font-bold mb-3">
                            Final Checklist Before Event Day
                        </h2>
                        <p className="mb-5">
                            Review all arrangements before the event begins:
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-green-500 font-bold">✔</span>
                                    The final day before your event is all about preparation, confirmation, and peace of mind. This is the stage where small checks can prevent major problems. A simple review of all arrangements helps the event run smoothly and allows you to enjoy the celebration without last-minute stress.
                                </li>
                            </ul>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-green-500 font-bold">✔</span>
                                    Start by confirming all bookings such as venue, catering, decoration, photography, music, and transportation. Make sure every vendor knows the correct date, time, and location. Recheck arrival timings so setup can begin without delay.
                                </li>
                            </ul>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-green-500 font-bold">✔</span>
                                    Review your guest list and seating plan. Confirm expected attendance, arrange chairs and tables properly, and keep extra seating ready for unexpected guests. If children or elderly people are attending, ensure they will be comfortable.
                                </li>
                            </ul>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-green-500 font-bold">✔</span>
                                    Check all important event items such as invitation details, stage setup, sound system, lighting, backup power, gifts, cake, flowers, and welcome arrangements. Keep emergency essentials like water bottles, chargers, extension cords, first aid kit, tissues, and umbrellas ready if needed.
                                </li>
                            </ul>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-3">
                                    <span className="text-green-500 font-bold">✔</span>
                                    Prepare your own outfit and personal items in advance so you are not rushing on the event day. Get enough rest, stay calm, and trust your planning.
                                </li>
                            </ul>
                            <p>
                                Most importantly, remember that perfection is not required. A successful event is one where people feel happy, welcomed, and connected. Focus on enjoying the moment with your loved ones.
                            </p>
                        </p>
                    </div>

                    {/* Cards Sections */}
                    <div className="border-t border-gray-300 pt-12">
                        <div className="space-y-6">

                            {tips.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-sm grid md:grid-cols-[70px_1fr_220px] gap-6 items-center"
                                >
                                    <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center text-xl">
                                        {item.no}
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-600 leading-7">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-36 object-cover rounded-xl"
                                    />
                                </div>
                            ))}

                            <div className="bg-linear-to-r from-violet-600 to-fuchsia-500 text-white rounded-2xl px-8 py-5 flex items-center justify-between">
                                <h4 className="text-2xl font-semibold mb-1">
                                   Need Help Planning Your Event?
                                   Our team helps to make beautiful and strees-free celebration.
                                </h4>
                                <button 
                                    onClick={() => navigate("/contactUs")} 
                                    className="bg-white text-violet-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Personal;