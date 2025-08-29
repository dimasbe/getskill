import { useState, useEffect } from "react";
import { HiSearch } from "react-icons/hi";
import BackgroundShapes from "../../../components/public/BackgroundShapes";
import EventCardGrid from "../../../components/public/CardEvent/EventCardGrid";
import SortDropdown from "../../../components/public/SortDropdown";
import { fetchEvents } from "../../../features/event/_services/eventService";
import type { Event as ApiEvent } from "../../../features/event/_event";
import { motion } from "framer-motion";

const Event: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("terbaru");
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<ApiEvent[]>([]);

  const eventsPerPage = 8;

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error("Gagal memuat event:", error);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  // Filter & Sorting
  const filteredEvents = events
    .filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice();

  if (sortOption === "terbaru") {
    filteredEvents.sort(
      (a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
    );
  } else if (sortOption === "terlama") {
    filteredEvents.sort(
      (a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
    );
  }

  // Pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
        <BackgroundShapes />
        <div className="max-w-6xl mx-auto px-4 2xl:px-2 xl:px-18 lg:px-35 md:px-30 sm:px-30 text-left relative z-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Event
          </h1>
          <p className="mt-2 text-xs sm:text-xs text-gray-800">
            <a href="/">Beranda</a>
            <span className="mx-1">&gt;</span>
            <span className="text-purple-600">Event</span>
          </p>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mt-12 px-4">
        {loading ? (
          <div className="animate-pulse">
            <div className="mx-auto h-6 w-32 bg-gray-200 rounded-full"></div>
            <div className="h-6 md:h-8 bg-gray-200 rounded w-2/3 mx-auto mt-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mt-2"></div>
          </div>
        ) : (
          <>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
              Event GetSkill
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
              Kembangkan Kemampuanmu <br />
              Di Event GetSkill
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Tingkatkan kemampuan teknis melalui event yang diselenggarakan
              oleh partner GetSkill
            </p>
          </>
        )}
      </div>

      {/* Search & Filter */}
      <div className="max-w-2xl 2xl:mx-29 xl:mx-18 lg:mx-25 md:mx-15 sm:mx-1 flex flex-col sm:flex-row items-center gap-3 mt-8 px-4">
        {loading ? (
          <div className="animate-pulse w-full sm:w-1/2 h-10 bg-gray-200 rounded-md"></div>
        ) : (
          <div className="relative w-full sm:w-1/2 transition-all duration-300 ease-in-out hover:scale-[1.02]">
            <input
              type="text"
              placeholder="Cari Event"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-2 pr-10 border border-gray-300 hover:border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <HiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        )}

        <SortDropdown selected={sortOption} onChange={setSortOption} loading={loading} />
      </div>

      {/* Event Grid */}
      <EventCardGrid events={currentEvents} loading={loading} />

      {/* Pagination */}
      <div className="flex justify-center mt-20">
        <div className="flex gap-3 mb-10">
          {Array.from({ length: totalPages || 1 }).map((_, index) => {
            const page = index + 1;
            const isActive = page === currentPage;
            return (
              <motion.button
                key={page}
                onClick={() => setCurrentPage(page)}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  boxShadow: isActive ? "0px 4px 10px rgba(147, 51, 234, 0.4)" : "none",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors duration-300 ease-in-out
                  ${isActive
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-purple-100"
                  }`}
              >
                {page}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Event;
