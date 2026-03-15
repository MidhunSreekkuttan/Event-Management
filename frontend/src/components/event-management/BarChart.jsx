import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function RevenueBarChart() {
    const labels = useMemo(
        () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        []
    );

    const data = useMemo(() => {
        return {
            labels,
            datasets: [
                {
                    label: "Monthly Revenue",
                    data: [20000, 40000, 60000, 80000, 50000, 70000, 65000, 72000, 80000, 90000, 95000, 100000],
                    borderRadius: 12,
                    borderSkipped: false,
                    barThickness: 28,
                    backgroundColor: (ctx) => {
                        const { chart } = ctx;
                        const { ctx: canvasCtx, chartArea } = chart;

                        if (!chartArea) return "rgba(168, 85, 247, 0.7)";

                        const gradient = canvasCtx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                        gradient.addColorStop(0, "rgba(139, 92, 246, 0.35)");
                        gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.7)");
                        gradient.addColorStop(1, "rgba(217, 70, 239, 0.95)");
                        return gradient;
                    },
                    hoverBackgroundColor: "rgba(192, 132, 252, 1)",
                },
            ],
        };
    }, [labels]);

    const options = useMemo(() => {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "top",
                    align: "end",
                    labels: {
                        color: "#cbd5e1",
                        boxWidth: 10,
                        boxHeight: 10,
                        usePointStyle: true,
                        pointStyle: "circle",
                        padding: 20,
                        font: {
                            size: 12,
                        },
                    },
                },
                title: {
                    display: false,
                },
                tooltip: {
                    backgroundColor: "#0f172a",
                    titleColor: "#fff",
                    bodyColor: "#e2e8f0",
                    borderColor: "rgba(255,255,255,0.1)",
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: (item) => ` ₹${Number(item.raw).toLocaleString("en-IN")}`,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: "#94a3b8",
                        font: {
                            size: 12,
                            weight: "500",
                        },
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                    border: {
                        display: false,
                    },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#94a3b8",
                        padding: 10,
                        callback: (v) => `₹${Number(v).toLocaleString("en-IN")}`,
                    },
                    grid: {
                        color: "rgba(255,255,255,0.06)",
                        drawBorder: false,
                    },
                    border: {
                        display: false,
                    },
                },
            },
        };
    }, []);

    return (
        <div className="w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#1e1b2e] via-[#111827]
             to-[#0f172a] p-5 md:p-6 shadow-xl backdrop-blur-md">
            <div className="mb-5 flex items-start justify-between">
                <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight cursor-context-menu">
                        Monthly Revenue
                    </h3>
                    <p className="mt-1 text-sm text-slate-400 cursor-context-menu">
                        Last 12 months performance overview
                    </p>
                </div>

                <div className="rounded-xl border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium
                     text-purple-300 cursor-context-menu">
                    Revenue Stats
                </div>
            </div>

            <div className="h-[320px] md:h-[360px]">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}