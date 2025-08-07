import { Card } from "flowbite-react";
import { HiOutlineUsers, HiOutlineClock } from "react-icons/hi";
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
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event) => (
                <Card
                    key={event.id}
                    className="relative flex flex-col justify-between border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-0 overflow-hidden"
                >
                    <div className="relative">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="h-40 w-full object-cover rounded-md"
                        />
                        <div className="absolute top-35 bg-yellow-400 text-sm font-bold text-gray-900 px-4 py-1 rounded-full shadow-md z-10">
                            {event.date}
                        </div>
                    </div>

                    <div className="text-left">
                        <h5 className="text-base font-semibold text-gray-900 mb-2">
                            {event.title}
                        </h5>
                        <p className="text-sm text-gray-500">{event.description}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-3 text-xs text-gray-500">
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
            ))}
        </div>
    );
};

export default EventCardGrid;
