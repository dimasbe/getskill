import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import BackgroundShapes from '../../../components/public/BackgroundShapes';
import EventCardGrid from "../../../components/public/CardEvent/EventCardGrid";
import SortDropdown from '../../../components/public/SortDropdown';
import events from "../../../data/events";

const Event: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 8; // misalnya 3 event per halaman

    // Hitung indeks untuk slicing array
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    // Hitung total halaman
    const totalPages = Math.ceil(events.length / eventsPerPage);


    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
                <BackgroundShapes />

                {/* Konten tengah */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center sm:text-left relative z-10">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">Event</h1>
                    <p className="mt-2 text-sm sm:text-base text-gray-800">
                        <a href="/" className="hover:underline">Beranda</a>
                        <span className="mx-1">&gt;</span>
                        <span className="text-purple-600">Event</span>
                    </p>
                </div>

            </div>



            {/* Title Section */}
            <div className="text-center mt-12 px-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    Event Hummaclass
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
                    Kembangkan Kemampuanmu Di <br />Event Hummaclass
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                    Tingkatkan kemampuan teknis melalui event yang diselenggarakan oleh partner Hummaclass
                </p>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 px-4">

                <div className="relative w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Cari Event"
                        className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none  focus:ring-purple-500"
                    />
                    <HiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <SortDropdown />
            </div>

            {/* Event Grid */}
            <EventCardGrid events={currentEvents} />



            {/* Pagination */}
            <div className="flex justify-center mt-20">
                <div className="flex gap-3 mb-10">
                    {Array.from({ length: totalPages }).map((_, index) => {
                        const page = index + 1;
                        return (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-8 h-8 rounded-full text-sm font-medium ${page === currentPage
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                                    }`}
                            >
                                {page}
                            </button>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Event;
