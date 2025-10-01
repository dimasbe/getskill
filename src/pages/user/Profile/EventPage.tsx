import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";

import DashboardLayout from "../../../components/public/auth/DashboardLayout";
import CardEvent from "../../../components/public/auth/CardEvent/CardEvent";

import type { EventActivity, EventPaginateResponse } from "../../../features/user/models";
import { fetchEventPending, fetchEventFollowed, fetchEventHistory } from "../../../features/user/user_service";

const EventPage = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"pending" | "joined" | "history">("pending");
  const [timeFilter, setTimeFilter] = useState<"all" | "ongoing" | "upcoming" | "past">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "accepted" | "rejected" | "canceled">("all");


  useEffect(() => {
    async function loadEvents() {
      setLoading(true);
      try {
        let response: EventPaginateResponse;
        if (filter === "pending") {
          response = await fetchEventPending();
        } else if (filter === "joined") {
          response = await fetchEventFollowed();
        } else {
          response = await fetchEventHistory();
        }
        setEvents(response.data);
      } catch (err) {
        console.error("Gagal ambil user events:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, [filter]);

  if (loading) {
    return (
      <DashboardLayout slug="event">
        <main className="flex-1 bg-white ml-8 p-7 rounded-xl shadow-xl border-3 border-purple-200">
          <h2 className="text-xl text-start font-bold mb-5">Events Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-xl border border-gray-200 shadow-md p-4"
              >
                <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        </main>
      </DashboardLayout>
    );
  }

  // filter waktu
  let filteredEvents = events;
  if (timeFilter !== "all") {
    filteredEvents = events.filter((e) => {
      const now = new Date();
      const startDate = new Date(e.event.start_date);
      const endDate = new Date(e.event.end_date);

      if (timeFilter === "upcoming") return startDate > now;
      if (timeFilter === "ongoing") return startDate <= now && endDate >= now;
      if (timeFilter === "past") return endDate < now;
      return true;
    });
  }

  if (filter === "history" && statusFilter !== "all") {
    filteredEvents = filteredEvents.filter((e) => {
      if (statusFilter === "accepted") return e.status === "accepted";
      if (statusFilter === "rejected") return e.status === "declined"
      if (statusFilter === "canceled") return e.status === "canceled";

      return true;
    });
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
              hover:shadow-none active:translate-y-0.5 ${filter === "pending"
                ? "bg-yellow-400 text-black text-sm"
                : "bg-purple-600 text-white text-sm"
              }`}
          >
            Menunggu Konfirmasi
          </button>
          <button
            onClick={() => setFilter("joined")}
            className={`px-5 py-3 rounded-full font-bold text-sm transition-all duration-500 ease-out shadow-[4px_4px_0px_0px_#0B1367]
              hover:shadow-none active:translate-y-0.5 ${filter === "joined"
                ? "bg-yellow-400 text-black text-sm"
                : "bg-purple-600 text-white text-sm"
              }`}
          >
            Event Diikuti
          </button>
          <button
            onClick={() => setFilter("history")}
            className={`px-5 py-3 rounded-full font-bold text-sm transition-all duration-500 ease-out shadow-[4px_4px_0px_0px_#0B1367]
              hover:shadow-none active:translate-y-0.5 ${filter === "history"
                ? "bg-yellow-400 text-black text-sm"
                : "bg-purple-600 text-white text-sm"
              }`}
          >
            Riwayat Pengajuan
          </button>
        </div>

        {/* Search + Dropdown */}
        <div className="flex items-center gap-4 mb-6 text-sm text-start">
          <div className="flex items-center w-60 border-2 border-purple-400 rounded-lg focus-within:ring-2 focus-within:ring-purple-400">
            <HiSearch className="mx-2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 py-1 px-2 rounded-r-lg focus:outline-none"
            />
          </div>

          {(filter === "joined") && (
            <select
              value={timeFilter}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
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

          {/* Dropdown status hanya untuk Riwayat */}
          {filter === "history" && (
            <select
              value={statusFilter}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setStatusFilter(e.target.value as "all" | "accepted" | "rejected" | "canceled")
              }
              className="px-3 py-1 border-2 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="all">Semua</option>
              <option value="accepted">Diterima</option>
              <option value="rejected">Ditolak</option>
              <option value="canceled">Dibatalkan</option>
            </select>
          )}
        </div>

        {/* Event Cards */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <CardEvent key={event.event.id} event={event} variant="user" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <img
              src="/src/assets/img/no-data/empty.svg"
              alt="Belum ada event"
              className="w-auto h-56 object-contain"
            />
            <p className="text-gray-600 text-lg font-bold mb-5">Belum Ada Event</p>
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
