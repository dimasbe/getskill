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
    loading?: boolean;
};

const EventCardGrid: React.FC<EventCardGridProps> = ({ events, loading = false }) => {
    const skeletonArray = Array.from({ length: 8 });

    return (
        <div className="w-full px-4 xl:px-3 md:px-20 sm:px-6 lg:px-30 max-w-screen-xl mx-auto mt-12 
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[60vh]">

            {loading
                ? skeletonArray.map((_, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col justify-between rounded-2xl shadow-sm p-0 overflow-hidden animate-pulse"
                    >
                        {/* Gambar Skeleton */}
                        <div className="h-40 w-full bg-gray-200 rounded-xl"></div>

                        {/* Konten Skeleton */}
                        <div className="p-4">
                            <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
                        </div>

                        {/* Footer Skeleton */}
                        <div className="border-t border-gray-200 pt-3 px-4 pb-3">
                            <div className="flex justify-between">
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))
                : events.map((event) => (
                    <Link key={event.id} to={`/event/${event.id}`}>
                        <div className="relative">
                            <Card className="shine__animate-item relative flex flex-col justify-between border rounded-2xl shadow-sm 
                  hover:shadow-[8px_8px_0_#D3DAD9] hover:scale-[1.02] transition-all duration-300 cursor-pointer p-0 overflow-hidden z-10">

                                <div className="relative shine__animate-item">
                                    <div className="shine__animate-link ">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="h-40 w-full object-cover rounded-xl"
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -left-1 bg-yellow-400 text-sm font-extrabold text-gray-900 px-5 py-2 rounded-full border shadow-[5px_5px_0_#4c1d95] z-10">
                                        {event.date}
                                    </div>
                                </div>

                                <div className="text-left flex-1 pt-3 px-4">
                                    <h3 className="text-lg font-semibold line-clamp-2 cursor-pointer">
                                        <a
                                            className="inline bg-[linear-gradient(black,black),linear-gradient(black,black)]
               bg-[length:0%_2px,0_2px]
               bg-[position:100%_100%,0_100%]
               bg-no-repeat
               transition-[background-size] duration-300
               hover:bg-[length:0_2px,100%_2px]">
                                            {event.title}
                                        </a>
                                    </h3>
                                    <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                                        {event.isOnline ? (
                                            <>
                                                <HiOutlineGlobeAlt size={25} className="flex-shrink-0" />
                                                <span className="truncate transition-colors duration-300 hover:text-yellow-500">{event.platform}</span>
                                            </>
                                        ) : (
                                            <>
                                                <HiOutlineLocationMarker size={25} className="flex-shrink-0" />
                                                <span className="truncate transition-colors duration-300 hover:text-yellow-500">{event.location}</span>
                                            </>
                                        )}
                                    </div>

                                    <span
                                        className={`mt-2 inline-block text-xs font-semibold px-2 py-0.5 rounded-md ${event.isOnline ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                                    >
                                        {event.isOnline ? "Online" : "Offline"}
                                    </span>
                                </div>

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
