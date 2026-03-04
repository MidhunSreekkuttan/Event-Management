import React, { useContext, useEffect, useMemo, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { BackendContex } from "../../context/ConnectBackendContex";
import axios from "axios";
import { toast } from "react-toastify";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {

    const { backendUrl } = useContext(BackendContex)

    const [events, setEvents] = useState([])

    const getData = async () => {

        try {

            const res = await axios.get(backendUrl + '/api/product/ownerListProduct')
            if (res.data.success) {
                setEvents(res.data.product)
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const counts = useMemo(() => {
        const map = {};
        (events ?? []).forEach((e) => {
            const key = (e?.category  || "Other").trim();
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
                    backgroundColor: ["#A855F7", "#FF5FA2", "#FF8A00", "#06B6D4", "#22C55E"],
                    borderColor: "rgba(255,255,255,0.55)",
                    borderWidth: 2,
                    hoverOffset: 8,
                },
            ],
        };
    }, [counts]);

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className=" w-[50%] rounded-2xl bg-[#3b2f57] p-5 text-white border border-white/10">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Events by Type</h2>
                <span className="text-xs text-white/70">Total: {events.length}</span>
            </div>

            <div className="mt-4 h-[350px]">
                <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
        </div>
    );
}