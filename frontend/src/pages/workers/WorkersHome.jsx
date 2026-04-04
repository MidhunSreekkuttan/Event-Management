import React from 'react'
import { CalendarDays, CalendarFoldIcon, Clock10, Clock5, MapPin, MousePointerBan } from 'lucide-react';
import { ImUndo2 } from "react-icons/im";

const WorkersHome = () => {

  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-[1400px]">

            <div className="mb-6">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">My Availability</h2>
              <p className="mt-2 text-lg text-slate-500">
                Update your free/busy time so you can be assigned to events
              </p>
            </div>

            <div className="grid gap-6">
              <div className="space-y-6">
                <section className="flex rounded-[30px] justify-between bg-white p-5 shadow-sm md:p-7">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                        alt="Arun Kumar"
                        className="h-20 w-20 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-3xl font-bold">Arun Kumar</h3>
                        </div>
                        <p className="flex gap-2 mt-2 text-base text-slate-500"><MapPin /> Trivandrum, Kerala</p>
                      </div>
                    </div>

                  </div>
                  <div>
                    <span className="relative left-0 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                      Photographer
                    </span>
                  </div>
                </section>

                <section className="rounded-[30px] bg-white shadow-sm">
                  <div className="border-b border-slate-200 px-5 py-5 md:px-7">
                    <h3 className="flex items-center gap-3 text-3xl font-bold">
                      <CalendarFoldIcon size={40} />
                      Update Availability
                    </h3>
                  </div>

                  <div className="space-y-8 px-5 py-6 md:px-7 md:py-7">
                    <div className="grid gap-6 xl:grid-cols-2">
                      <div>
                        <label>
                          <p className="mb-3 block text-lg font-semibold">Select Date</p>
                          <div className="flex h-16 items-center gap-3 rounded-2xl border
                           border-slate-200 bg-slate-50 px-4 text-lg font-medium">
                            <CalendarDays />
                            <input className='w-full outline-hidden' type="date" />
                          </div>
                        </label>
                      </div>

                      <div>
                        <label className="mb-3 block text-lg font-semibold">Quick Select</label>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                          {["Today", "Tomarrow", "Next weak", "Coustom"].map((item) => (
                            <button
                              key={item}
                              className="h-16 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold
                                 text-slate-700 transition hover:border-blue-400 hover:text-blue-600"
                            >
                              {item}
                            </button>
                          ))}

                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1.2fr]">
                      <div>
                        <label>
                          <p className="mb-3 block text-lg font-semibold">Available From</p>
                          <div className="flex gap-5 h-16 items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 text-lg font-medium">
                            <span className="flex items-center gap-3">
                              <Clock10 />
                            </span>
                            <input className='w-full outline-hidden items-center justify-center' type="time" />
                          </div>
                        </label>
                      </div>

                      <div>
                        <label className="mb-3 block text-lg font-semibold">Available To</label>
                        <div className="flex gap-5 h-16 items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 text-lg font-medium">
                          <span className="flex items-center gap-3">
                            <Clock5 />
                          </span>
                          <input className='w-full outline-hidden items-center justify-center' type="time" />
                        </div>
                      </div>

                      <div>
                        <label className="mb-3 block text-lg font-semibold">Status</label>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <button className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-4 text-base font-bold text-white shadow-sm">
                            <span className="h-4 w-4 rounded-full border-2 border-white bg-white/80" />
                            Available / Free
                          </button>
                          <button className="flex h-16 items-center justify-center gap-3 rounded-2xl border border-rose-200 bg-white px-4 text-base font-bold text-rose-500">
                            <span className="h-4 w-4 rounded-full border-2 border-rose-400" />
                            Busy / Not Available
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-8">
                      <h4 className="mb-4 text-2xl font-bold">Quick Status Actions</h4>
                      <div className="grid gap-4 lg:grid-cols-3">
                        <QuickActionCard
                          icon=<Clock10 />
                          title="Available Now"
                          subtitle="I'm free right now"
                          tone="border-emerald-200 bg-emerald-50"
                          iconTone="bg-emerald-100 text-emerald-600"
                        />
                        <QuickActionCard
                          icon=<MousePointerBan />
                          title="Busy Now"
                          subtitle="I'm busy right now"
                          tone="border-rose-200 bg-rose-50"
                          iconTone="bg-rose-100 text-rose-600"
                        />
                        <QuickActionCard
                          icon=<ImUndo2 />
                          title="Free Until Today Evening"
                          subtitle="Available till 06:00 PM"
                          tone="border-blue-200 bg-blue-50"
                          iconTone="bg-blue-100 text-blue-600"
                        />
                      </div>
                    </div>

                    <button className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">✓</span>
                      Update My Availability
                    </button>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function QuickActionCard({ icon, title, subtitle, tone, iconTone }) {
  return (
    <button className={`flex items-center gap-4 rounded-[24px] border p-5 text-left transition hover:shadow-sm ${tone}`}>
      <div className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl ${iconTone}`}>
        {icon}
      </div>
      <div>
        <p className="text-xl font-bold">{title}</p>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>
    </button>
  );
}

export default React.memo(WorkersHome)