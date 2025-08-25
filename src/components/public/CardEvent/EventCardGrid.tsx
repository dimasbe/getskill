import { Card } from "flowbite-react";
import { HiOutlineUsers, HiOutlineClock, HiOutlineLocationMarker, HiOutlineGlobeAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import React from "react";

type Event = {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
    quota: number;
    daysLeft: number;
    location?: string;
    platform?: string;
    isOnline: boolean;
};

type EventCardGridProps = {
    events: Event[];
};

const EventCardGrid: React.FC<EventCardGridProps> = ({ events }) => {
    return (
        <div className="w-full px-4 xl:px-3 md:px-20 sm:px-6 lg:px-30 max-w-screen-xl mx-auto mt-12 
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[60vh]">

            {events.map((event) => (
                <Link key={event.id} to={`/event/${event.id}`}>
                    <div className="relative">
                        <Card className="relative flex flex-col justify-between border rounded-2xl shadow-sm 
              hover:shadow-[8px_8px_0_#D3DAD9] hover:scale-[1.02] transition-all duration-300 cursor-pointer p-0 overflow-hidden z-10">

                            {/* Gambar */}
                            <div className="relative shine__animate-item">
                                <div className="shine__animate-link">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="h-40 w-full object-cover rounded-xl"
                                    />
                                </div>
                                {/* Tanggal */}
                                <div className="absolute -bottom-1 -left-1 bg-yellow-400 text-sm font-extrabold text-gray-900 px-5 py-2 rounded-full border shadow-[5px_5px_0_#4c1d95] z-10">
                                    {event.date}
                                </div>
                            </div>


                            {/* Konten */}
                            <div className="text-left flex-1 px- pt-3">
                                <h3 className="text-lg font-semibold line-clamp-1 overflow-hidden">
                                    {event.title}
                                </h3>
                                {/* Lokasi / Platform */}
                                <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                                    {event.isOnline ? (
                                        <>
                                            <HiOutlineGlobeAlt size={25} className="flex-shrink-0" />
                                            <span className="truncate">{event.platform}</span>
                                        </>
                                    ) : (
                                        <>
                                            <HiOutlineLocationMarker size={25} className="flex-shrink-0" />
                                            <span className="truncate">{event.location}</span>
                                        </>
                                    )}
                                </div>

                                {/* Status Online/Offline */}
                                <span
                                    className={`mt-2 inline-block text-xs font-semibold px-2 py-0.5 rounded-md ${event.isOnline ? "bg-green-500 text-white" : "bg-red-500 text-white"
                                        }`}
                                >
                                    {event.isOnline ? "Online" : "Offline"}
                                </span>
                            </div>

                            {/* Footer Info */}
                            <div className="border-t border-gray-200 pt-3 text-xs text-gray-500 px-4 pb-3">
                                <div className="flex justify-between items-center w-full">
                                    <span className="flex items-center gap-1">
                                        <HiOutlineUsers className="w-4 h-4" /> Sisa Kuota: {event.quota}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <HiOutlineClock className="w-4 h-4" /> {event.daysLeft} Hari Lagi
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default EventCardGrid;
