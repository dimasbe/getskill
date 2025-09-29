import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineLocationMarker, HiOutlineEye } from "react-icons/hi";

import DashboardLayout from "../../../components/public/auth/DashboardLayout";

type EventActivity = {
    id: number;
    title: string;
    date: string;
    location: string;
    timeAgo: string;
    photo: string;
    status: "pending" | "joined" | "history";
    timeStatus: "ongoing" | "upcoming" | "past"; // tambahan untuk dropdown
};

const dummyEvents: EventActivity[] = [
    {
        id: 1,
        title: "Naik Mobil",
        date: "23 September, 2025",
        location: "Online",
        timeAgo: "3 hari yang lalu",
        photo: "https://via.placeholder.com/400x250",
        status: "pending",
        timeStatus: "upcoming",
    },

];

const EventPage = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState<EventActivity[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<"pending" | "joined" | "history">("pending");
    const [timeFilter, setTimeFilter] = useState<"all" | "ongoing" | "upcoming" | "past">("all");

    useEffect(() => {
        // nanti bisa diganti fetch API
        setTimeout(() => {
            setEvents(dummyEvents);
            setLoading(false);
        }, 500);
    }, []);

    if (loading) {
        return (
            <DashboardLayout slug="event">
                <main className="flex-1 flex items-center justify-center p-7">
                    <p className="text-xl font-semibold text-gray-700">
                        Memuat event...
                    </p>
                </main>
            </DashboardLayout>
        );
    }

    // Filter by status (tab)
    let filteredEvents = events.filter((e) => e.status === filter);

    // Filter by timeStatus (dropdown)
    if (timeFilter !== "all") {
        filteredEvents = filteredEvents.filter((e) => e.timeStatus === timeFilter);
    }

    return (
        <DashboardLayout slug="event">
            <main className="flex-1 bg-white ml-8 p-7 rounded-xl shadow-xl border-3 border-purple-200">
                {/* Header */}
                <h2 className="text-xl text-start font-bold mb-5">Events Saya</h2>

                {/* Tabs */}
                <div className="flex gap-3 mb-6">
                    <button
                        onClick={() => setFilter("pending")}
                        className={`px-5 py-3 rounded-full font-bold text-sm transition-all duration-500 ease-out shadow-[4px_4px_0px_0px_#0B1367]
                            hover:shadow-none active:translate-y-0.5 ${
                                filter === "pending"
                                    ? "bg-yellow-400 text-black text-sm"
                                    : "bg-purple-600 text-white text-sm"
                            }`}
                    >
                        Menunggu Konfirmasi
                    </button>
                    <button
                        onClick={() => setFilter("joined")}
                        className={`px-5 py-3 rounded-full font-bold text-sm transition-all duration-500 ease-out shadow-[4px_4px_0px_0px_#0B1367]
                            hover:shadow-none active:translate-y-0.5 ${
                                filter === "joined"
                                    ? "bg-yellow-400 text-black text-sm"
                                    : "bg-purple-600 text-white test-sm"
                            }`}
                    >
                        Event Di Ikuti
                    </button>
                    <button
                        onClick={() => setFilter("history")}
                        className={`px-5 py-3 rounded-full font-bold text-sm transition-all duration-500 ease-out shadow-[4px_4px_0px_0px_#0B1367]
                            hover:shadow-none active:translate-y-0.5 ${
                                filter === "history"
                                    ? "bg-yellow-400 text-black text-sm"
                                    : "bg-purple-600 text-white text-sm"
                            }`}
                    >
                        Riwayat Pengajuan
                    </button>
                </div>

                {/* Search + Dropdown */}
                <div className="flex items-center gap-4 mb-6 text-sm text-start">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-60 px-3 py-1 border-2 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />

                    {(filter === "joined" || filter === "history") && (
                        <select
                            value={timeFilter}
                            onChange={(e) =>
                                setTimeFilter(e.target.value as "all" | "ongoing" | "upcoming" | "past")
                            }
                            className="px-3 py-1 border-2 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            <option value="all">Semua</option>
                            <option value="ongoing">Sedang Berlangsung</option>
                            <option value="upcoming">Akan Datang</option>
                            <option value="past">Sudah Berlalu</option>
                        </select>
                    )}
                </div>

                {/* Event Cards */}
                {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.map((event) => (
                            <div
                                key={event.id}
                                className="max-w-sm border rounded-xl shadow p-3"
                            >
                                {/* Gambar */}
                                <div className="relative">
                                    <img
                                        src={event.photo}
                                        alt={event.title}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                    <span className="absolute bottom-2 left-2 bg-yellow-400 text-sm font-semibold px-3 py-1 rounded-lg shadow">
                                        {event.date}
                                    </span>
                                </div>

                                {/* Detail */}
                                <h3 className="mt-3 font-bold text-lg">{event.title}</h3>
                                <div className="flex items-center text-sm text-gray-600 gap-1 mt-1">
                                    <HiOutlineLocationMarker className="text-purple-600" />
                                    <span>{event.location}</span>
                                    <span className="ml-auto">{event.timeAgo}</span>
                                </div>

                                {/* Actions */}
                                <div className="flex justify-between mt-4">
                                    <button className="px-5 py-2 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition">
                                        Batal Ikuti
                                    </button>
                                    <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                        <HiOutlineEye size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-10">
                        <img
                            src="/src/assets/img/no-data/empty.svg"
                            alt="Belum ada event"
                            className="w-auto h-56 object-contain"
                        />
                        <p className="text-gray-600 text-lg font-bold mb-5">
                            Belum Ada Event
                        </p>
                        <button
                            onClick={() => navigate("/event")}
                            className="px-4 py-3 text-sm bg-purple-600 shadow-[5px_6px_0_#4c1d95] 
                                text-white rounded-full hover:shadow hover:bg-yellow-400 hover:text-gray-950 
                                transition-all duration-300 font-semibold active:translate-y-0.5"
                        >
                            Lihat Event Disini
                        </button>
                    </div>
                )}
            </main>
        </DashboardLayout>
    );
};

export default EventPage;
