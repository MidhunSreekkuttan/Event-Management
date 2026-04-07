import React, { useMemo } from "react";
import {
    CalendarDays,
    Users,
    Mail,
    IndianRupee,
} from "lucide-react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AdminContext } from "../Context";
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useCallback } from "react";
import Loader from "../components/Loading";
import { toast } from "react-toastify";

const Dashboard = () => {

    const { backendUrl } = useContext(AdminContext)

    const getListProduct = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + "/api/product/listProduct")
            if (data.success) {
                return data.product
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    const { data: eventList, isLoading, error } = useQuery({
        queryKey: ["eventList"],
        queryFn: getListProduct
    })

    const getAllEnquery = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + "/api/user/getAllEnquiry")
            if (data.success) {
                return data.response
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    const { data: listEnquery } = useQuery({
        queryKey: ["listEnquery"],
        queryFn: getAllEnquery
    })

    const getListUsers = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + "/api/user/listUser")
            if (data.success) {
                return data.userList
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    const { data: listUsers } = useQuery({
        queryKey: ["listUsers"],
        queryFn: getListUsers
    })

    const getAllBooking = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + "/api/booking/allBookings")
            if (data.success) {
                return data.allBookings
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    const { data: AllBookings } = useQuery({
        queryKey: ["AllBookings"],
        queryFn: getAllBooking
    })

    const revenue = AllBookings?.reduce((total, item,) => {
        return total + Number(item?.adminCommissionAmount || 0)
    }, 0)

    const monthlyRevenue = useMemo(() => {
        if (!AllBookings?.length) return []

        const grouped = AllBookings?.reduce((item, amount) => {

            const date = new Date(amount?.createdAt)
            const moneyKey = date.toLocaleString("en-Us", { month: "short" })

            if (!item[moneyKey]) {
                item[moneyKey] = {
                    month: moneyKey,
                    revenue: 0
                }
            }

            item[moneyKey].revenue += Number(amount?.adminCommissionAmount || 0)

            return item

        }, {})

        const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        return monthOrder?.filter(month => grouped[month]).map(month => grouped[month])

    }, [AllBookings])

    const bookingPerDay = useMemo(() => {
        if (!AllBookings?.length) return []

        const grouped = AllBookings?.reduce((day, booking) => {

            const perday = new Date(booking?.createdAt)
            const dayCount = perday.toLocaleString("en-Us", { weekday: "short" })

            if (!day[dayCount]) {
                day[dayCount] = {
                    day: dayCount,
                    count: 0
                }
            }

            day[dayCount].count += 1

            return day

        }, {})

        const daycount = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

        return daycount.filter(days => grouped[days]).map(days => grouped[days])

    }, [AllBookings])

    console.log(eventList);

    const totalEventsBycategory = useMemo(() => {
        if (!eventList?.length) return []

        const mainCategories = [
            "Birthday Party",
            "Wedding",
            "Corporate Events",
            "Concerts",
            "Cultural Programs",
        ];

        const grouped = eventList?.reduce((item, event) => {

            const originalCategory = event?.category?.trim()
            const finalCategory = mainCategories?.includes(originalCategory) ? originalCategory : "Others"

            if (!item[finalCategory]) {
                item[finalCategory] = {
                    name: finalCategory,
                    total: 0
                }
            }

            item[finalCategory].total += 1

            return item

        }, {})

        return Object.values(grouped)

    }, [eventList])

    console.log("event", totalEventsBycategory);

    const stats = [
        {
            title: "Total Events",
            value: eventList?.length,
            change: "+12% this month",
            icon: CalendarDays,
        },
        {
            title: "Total Enquiries",
            value: listEnquery?.length,
            change: "+18% this week",
            icon: Mail,
        },
        {
            title: "Total Users",
            value: listUsers?.length,
            change: "+9% growth",
            icon: Users,
        },
        {
            title: "Revenue",
            value: revenue,
            change: "+21% this month",
            icon: IndianRupee,
        },
    ];

    const categoryData = [
        { name: "Wedding", total: 28 },
        { name: "Corporate", total: 20 },
        { name: "Birthday", total: 17 },
        { name: "Music", total: 13 },
        { name: "Other", total: 10 },
    ];

    const pieColors = ["#111111", "#dc2626", "#ef4444", "#f87171", "#fecaca"];

    const redGlass =
        "border border-red-200/60 bg-gradient-to-br from-white/80 via-red-50/70 to-red-100/60 backdrop-blur-2xl shadow-[0_25px_100px_rgba(220,38,38,0.18)]";

    const Card = ({ className = "", children }) => (
        <div className={`rounded-[28px] ${className}`}>{children}</div>
    );

    const CardHeader = ({ className = "", children }) => (
        <div className={`p-5 ${className}`}>{children}</div>
    );

    const CardContent = ({ className = "", children }) => (
        <div className={`px-5 pb-5 ${className}`}>{children}</div>
    );

    const SectionTitle = ({ children }) => (
        <h3 className="text-lg font-semibold">{children}</h3>
    );

    if (error) return <div>Error:{error.message}</div>

    return (

        <>

            {isLoading && <Loader />}

            <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.16),
            _transparent_24%),radial-gradient(circle_at_top_right,_rgba(0,0,0,0.08),
                _transparent_20%),linear-gradient(135deg,_#ffffff,_#fff1f2,_#fee2e2)] text-black">

                <main className="p-4 lg:p-6 w-[76rem]">
                    <div className="space-y-6">

                        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.title}
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.35, delay: index * 0.06 }}
                                    >
                                        <Card className={`${redGlass}`}>
                                            <CardContent className="p-5">
                                                <div className="mb-4 flex items-start justify-between">
                                                    <div>
                                                        <p className="text-sm text-black/55 cursor-default">{stat.title}</p>
                                                        <h3 className="mt-2 text-3xl font-bold cursor-default">{stat.value}</h3>
                                                    </div>
                                                    <div className="rounded-2xl border border-red-200/60 bg-white/70 p-3">
                                                        <Icon className="h-5 w-5" />
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </section>

                        <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
                            <Card className={`${redGlass}`}>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <SectionTitle>Revenue Overview</SectionTitle>
                                    <span className="inline-flex rounded-full border border-red-200 bg-white/70 px-3 py-1 text-xs font-medium text-red-700">
                                        +21% growth
                                    </span>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={monthlyRevenue}>
                                                <defs>
                                                    <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.45} />
                                                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0.04} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid stroke="rgba(0,0,0,0.08)" vertical={false} />
                                                <XAxis dataKey="month" stroke="rgba(0,0,0,0.45)" />
                                                <YAxis stroke="rgba(0,0,0,0.45)" />
                                                <Tooltip
                                                    contentStyle={{
                                                        background: "rgba(255,255,255,0.96)",
                                                        border: "1px solid rgba(239,68,68,0.18)",
                                                        borderRadius: "18px",
                                                        color: "#111111",
                                                    }}
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="revenue"
                                                    stroke="#dc2626"
                                                    fill="url(#fillRevenue)"
                                                    strokeWidth={4}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className={`${redGlass}`}>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <SectionTitle>Booking Insights</SectionTitle>
                                    <span className="inline-flex rounded-full border border-red-200 bg-white/70 px-3 py-1 text-xs font-medium text-black">
                                        This Week
                                    </span>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="h-40 rounded-[24px] border border-red-100/80 bg-white/60 p-3">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={bookingPerDay}>
                                                <CartesianGrid stroke="rgba(0,0,0,0.08)" vertical={false} />
                                                <XAxis dataKey="day" stroke="rgba(0,0,0,0.45)" />
                                                <YAxis stroke="rgba(0,0,0,0.45)" />
                                                <Tooltip
                                                    contentStyle={{
                                                        background: "rgba(255,255,255,0.96)",
                                                        border: "1px solid rgba(239,68,68,0.18)",
                                                        borderRadius: "18px",
                                                        color: "#111111",
                                                    }}
                                                />
                                                <Bar dataKey="count" radius={[10, 10, 0, 0]} fill="#111111" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>

                                    <div className="grid grid-cols-[1fr_160px] items-center gap-3">
                                        <div className="space-y-3">
                                            {totalEventsBycategory.map((item, index) => (
                                                <div key={item.name} className="space-y-1">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="font-medium">{item.name}</span>
                                                        <span className="text-black/55">{item.total}</span>
                                                    </div>
                                                    <div className="h-2 rounded-full bg-black/5">
                                                        <div
                                                            className="h-2 rounded-full"
                                                            style={{
                                                                width: `${(item.total / 28) * 100}%`,
                                                                background: pieColors[index],
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="h-40">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie
                                                        data={totalEventsBycategory}
                                                        dataKey="total"
                                                        nameKey="name"
                                                        innerRadius={36}
                                                        outerRadius={60}
                                                        paddingAngle={4}
                                                    >
                                                        {totalEventsBycategory.map((entry, index) => (
                                                            <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip
                                                        contentStyle={{
                                                            background: "rgba(255,255,255,0.96)",
                                                            border: "1px solid rgba(239,68,68,0.18)",
                                                            borderRadius: "18px",
                                                            color: "#111111",
                                                        }}
                                                    />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                    </div>
                </main>
            </div>

        </>

    )
}

export default React.memo(Dashboard)