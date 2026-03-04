import React, { useMemo } from "react";
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

    // ✅ Chart.js supports backgroundColor as a function, so we can create a gradient
    const data = useMemo(() => {
        return {
            labels,
            datasets: [
                {
                    label: "Monthly Revenue",
                    data: [20000, 40000, 60000, 80000, 50000, 70000, 65000, 72000, 80000, 90000, 95000, 100000],
                    borderRadius: 10,
                    borderSkipped: false,
                    backgroundColor: (ctx) => {
                        const { chart } = ctx;
                        const { ctx: canvasCtx, chartArea } = chart;

                        // chartArea is undefined on first render
                        if (!chartArea) return "rgba(59, 130, 246, 0.6)";

                        const gradient = canvasCtx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                        gradient.addColorStop(0, "rgba(59, 130, 246, 0.25)");
                        gradient.addColorStop(1, "rgba(59, 130, 246, 0.95)");
                        return gradient;
                    },
                    hoverBackgroundColor: "rgba(59, 130, 246, 1)",
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
                    labels: { boxWidth: 10, boxHeight: 10 },
                },
                title: {
                    display: true,
                    text: "Revenue Overview",
                },
                tooltip: {
                    callbacks: {
                        label: (item) => ` ₹${Number(item.raw).toLocaleString("en-IN")}`,
                    },
                },
            },
            scales: {
                x: {
                    grid: { display: false },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (v) => `₹${Number(v).toLocaleString("en-IN")}`,
                    },
                },
            },
        };
    }, []);

    return (
        <div className="w-[50%] object-cover bg-purple-900/30 rounded-2xl p-5">
            <div >
                <div className="">
                    <div style={styles.title}>Monthly Revenue</div>
                    <div style={styles.sub}>Last 12 months</div>
                </div>
            </div>

            <div style={styles.chartWrap}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

const styles = {
    card: {
        background: "rgb(57, 57, 57)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 16,
        color: "#e5e7eb",
        width: "100%",
        maxWidth: 900,
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        marginBottom: 12,
    },
    title: { fontSize: 18, fontWeight: 700 },
    sub: { fontSize: 12, opacity: 0.7, marginTop: 4 },
    btn: {
        background: "rgba(255,255,255,0.06)",
        color: "#e5e7eb",
        border: "1px solid rgba(255,255,255,0.12)",
        padding: "8px 12px",
        borderRadius: 10,
        cursor: "pointer",
    },
    chartWrap: {
        height: 340, // ✅ responsive height
    },
};