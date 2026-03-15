import React, { useContext, useEffect, useMemo, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { BackendContex } from "../../context/ConnectBackendContex";
import axios from "axios";
import { toast } from "react-toastify";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    const { backendUrl } = useContext(BackendContex);
    const [events, setEvents] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get(backendUrl + "/api/product/ownerListProduct");
            if (res.data.success) {
                setEvents(res.data.product);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const counts = useMemo(() => {
        const map = {};
        (events ?? []).forEach((e) => {
            const key = (e?.category || "Other").trim();
            map[key] = (map[key] || 0) + 1;
        });
        return map;
    }, [events]);

    const pieData = useMemo(() => {
        const labels = Object.keys(counts);
        const values = Object.values(counts);

        return {
            labels,
            datasets: [
                {
                    label: "Events",
                    data: values,
                    backgroundColor: [
                        "#A855F7",
                        "#EC4899",
                        "#F59E0B",
                        "#06B6D4",
                        "#22C55E",
                        "#6366F1",
                        "#F43F5E",
                    ],
                    borderColor: "rgba(15, 23, 42, 0.9)",
                    borderWidth: 3,
                    hoverOffset: 10,
                },
            ],
        };
    }, [counts]);

    const options = useMemo(() => {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#cbd5e1",
                        usePointStyle: true,
                        pointStyle: "circle",
                        boxWidth: 10,
                        boxHeight: 10,
                        padding: 18,
                        font: {
                            size: 12,
                        },
                    },
                },
                tooltip: {
                    backgroundColor: "#0f172a",
                    titleColor: "#fff",
                    bodyColor: "#e2e8f0",
                    borderColor: "rgba(255,255,255,0.1)",
                    borderWidth: 1,
                    padding: 12,
                },
            },
        };
    }, []);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1530] via-[#111827]
             to-[#0f172a] p-5 md:p-6 text-white shadow-xl backdrop-blur-md">
            <div className="mb-5 flex items-start justify-between">
                <div>
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white cursor-context-menu">
                        Events by Type
                    </h3>
                    <p className="mt-1 text-sm text-slate-400 cursor-context-menu">
                        Category-wise event distribution
                    </p>
                </div>

                <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium
                     text-cyan-300 cursor-context-menu">
                    Total: {events.length}
                </div>
            </div>

            <div className="h-[320px] md:h-[360px]">
                <Pie data={pieData} options={options} />
            </div>
        </div>
    );
}