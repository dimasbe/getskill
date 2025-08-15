import { Card } from "flowbite-react";
import { HiOutlineUsers, HiOutlineClock } from "react-icons/hi";
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
};

type EventCardGridProps = {
    events: Event[];
};

const EventCardGrid: React.FC<EventCardGridProps> = ({ events }) => {
    return (
        <div className="w-full px-4 xl:px-8 md:px-20 sm:px-6 lg:px-30 max-w-screen-xl mx-auto mt-12 
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   xl:grid-cols-4 gap-6 
                min-h-[60vh]">

            {events.map((event) => (
                <Link key={event.id} to={`/event/${event.id}`}>
                    <Card className="relative flex flex-col justify-between border rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer p-0 overflow-hidden">
                        {/* Gambar */}
                        <div className="relative">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="h-40 w-full object-cover rounded-md"
                            />
                            <div className="absolute bottom-2 left-2 bg-yellow-400 text-sm font-bold text-gray-900 px-4 py-1 rounded-full shadow-md z-10">
                                {event.date}
                            </div>
                        </div>

                        {/* Konten */}
                        <div className="text-left flex-1 px-4 pt-3">
                            <h3 className="text-lg font-semibold line-clamp-1 overflow-hidden">
                                {event.title}
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-3 overflow-hidden">
                                {event.description}
                            </p>
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
                </Link>
            ))}
        </div>
    );
};

export default EventCardGrid;
