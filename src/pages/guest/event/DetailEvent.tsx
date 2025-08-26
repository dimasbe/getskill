import { useParams } from "react-router-dom";
import events from "../../../data/events";
import { GraduationCap } from "lucide-react";
import BackgroundShapes from "../../../components/public/BackgroundShapes";
import EventPriceCard from "../../../components/public/CardEvent/EventPriceCard";
import StatusIndicator from "../../../components/public/CardEvent/StatusIndicator";
import EventLocationCard from "../../../components/public/CardEvent/EventLocationCard";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const DetailEvent: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = events.find((e) => e.id === Number(id));

    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!event && !loading) {
        return <div className="p-6 text-center">Event tidak ditemukan</div>;
    }

    return (
        <div className="bg-white min-h-screen text-left">
            {/* Breadcrumb & Header */}
            <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
                <BackgroundShapes />

                <div className="max-w-6xl mx-auto px-4 2xl:px-2 xl:px-18 lg:px-35 md:px-30 sm:px-30 text-left relative z-10">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                        {event?.title}
                    </h1>
                    <p className="mt-2 text-xs sm:text-xs text-gray-800">
                        <a href="/">Beranda</a>
                        <span className="mx-1">&gt;</span>
                        <a href="/event">Events</a>
                        <span className="mx-1">&gt;</span>
                        <span className="text-purple-600">{event?.title}</span>
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div
                className={`max-w-7xl mx-auto px-4 xl:px-10 lg:px-20 pt-10 ${event?.isOnline ? "pb-10 xl:pb-28 lg:pb-28" : "pb-10 xl:pb-90 lg:pb-90"
                    }`}
            >
                <div className="relative">
                    {loading ? (
                        <div className="animate-pulse w-full h-80 bg-gray-200 rounded-xl"></div>
                    ) : event?.image ? (
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-130 object-cover rounded-xl cursor-pointer"
                            onClick={() => setIsOpen(true)}
                            onError={(e) => {
                                e.currentTarget.src =
                                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d1d5db' viewBox='0 0 24 24'%3E%3Cpath d='M12 5c1.657 0 3 1.343 3 3S13.657 11 12 11s-3-1.343-3-3 1.343-3 3-3m0-2C9.239 3 7 5.239 7 8s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5m0 16c-3.866 0-7-3.134-7-7h2c0 2.761 2.239 5 5 5s5-2.239 5-5h2c0 3.866-3.134 7-7 7z'/%3E%3C/svg%3E";
                            }}
                        />
                    ) : (
                        <div className="w-full h-130 flex items-center justify-center bg-gray-200 rounded-xl">
                            <svg
                                className="w-12 h-12 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 7l6 6-6 6M21 7l-6 6 6 6"
                                />
                            </svg>
                        </div>
                    )}

                    <div className="absolute right-8 top-[70%] translate-y-[3%] w-85 hidden lg:block space-y-6">
                        {loading ? (
                            <div className="animate-pulse space-y-4">
                                <div className="h-32 bg-gray-200 rounded-xl"></div>
                                <div className="h-32 bg-gray-200 rounded-xl"></div>
                            </div>
                        ) : (
                            <>
                                <EventPriceCard event={event!} />
                                <EventLocationCard
                                    isOnline={event!.isOnline}
                                    location={event!.location}
                                    platform={event!.platform}
                                />
                            </>
                        )}
                    </div>
                    {/* Modal */}
                    {isOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-2">
                            <div className="relative rounded-xl w-full max-w-5xl max-h-[95vh] overflow-y-auto">

                                {/* Tombol close */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-3 right-3 text-white hover:text-gray-300 text-2xl"
                                >
                                    <FiX />
                                </button>

                                <img
                                    src={event?.image}
                                    alt={event?.title}
                                    className="w-full max-h-[90vh] object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    )}

                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 xl:pb-60 lg:pb-60">
                        {loading ? (
                            <div className="animate-pulse space-y-4">
                                <div className="h-6 w-32 bg-gray-200 rounded-full"></div>
                                <div className="h-6 w-80 bg-gray-200 rounded-md"></div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                    <div className="h-4 w-40 bg-gray-200 rounded-md"></div>
                                </div>
                                <div className="h-20 w-full bg-gray-200 rounded-md"></div>
                            </div>
                        ) : (
                            <>
                                <span className="bg-purple-600 text-white px-3 py-1 text-sm rounded-full inline-block">
                                    {event?.category}
                                </span>

                                <h2 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900">
                                    {event?.title}
                                </h2>

                                <div className="flex flex-wrap items-center gap-3 mt-3 text-gray-600 text-sm">
                                    <img
                                        src={event?.speakerImage}
                                        alt={event?.speakerName}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span>By {event?.speakerName}</span>
                                    <StatusIndicator isOnline={event!.isOnline} />
                                    <span className="flex items-center gap-1">
                                        <GraduationCap /> {event?.quota} Peserta
                                    </span>
                                </div>

                                <p className="mt-4 text-gray-700 leading-relaxed">
                                    {event?.description}
                                </p>

                                {/* Rundown Table */}
                                <h3 className="mt-8 text-lg font-semibold">Rundown Acara :</h3>
                                <div className="overflow-x-auto mt-4">
                                    {loading ? (
                                        <div className="animate-pulse space-y-2">
                                            {Array.from({ length: 3 }).map((_, i) => (
                                                <div key={i} className="h-10 bg-gray-200 rounded-md"></div>
                                            ))}
                                        </div>
                                    ) : (
                                        <table className="w-full border border-gray-300 rounded-lg text-sm text-left border-collapse min-w-[500px]">
                                            <thead className="bg-purple-100 text-gray-700">
                                                <tr>
                                                    <th className="px-6 py-2 border border-gray-300 text-center whitespace-nowrap">
                                                        Time
                                                    </th>
                                                    <th className="px-4 py-2 border border-gray-300 text-center">
                                                        Session
                                                    </th>
                                                    <th className="px-4 py-2 border border-gray-300 text-center">
                                                        Speaker
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {event?.rundown.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="px-6 py-2 border border-gray-300 text-center whitespace-nowrap">
                                                            {item.time}
                                                        </td>
                                                        <td className="px-4 py-2 border border-gray-300">
                                                            {item.session}
                                                        </td>
                                                        <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                                                            <span className="font-semibold">
                                                                {item.speaker.name}
                                                            </span>
                                                            <br />
                                                            <span>{item.speaker.role}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>

                                {/* FAQ */}
                                {loading ? (
                                    <div className="animate-pulse mt-8 space-y-3">
                                        <div className="h-5 w-40 bg-gray-200 rounded-md"></div>
                                        <div className="h-4 w-full bg-gray-200 rounded-md"></div>
                                        <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div>
                                    </div>
                                ) : (
                                    <div className="mt-8">
                                        <h3 className="text-lg font-semibold mb-4">FAQ:</h3>
                                        <div className="mb-4 border-b border-gray-200 pb-4">
                                            <p className="font-medium">
                                                1. Apakah setelah mendaftar...
                                            </p>
                                            <p className="text-gray-600">
                                                Jawab: Kamu tidak perlu mendaftar ulang...
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                2. Apakah saya bisa mendapatkan sertifikat...
                                            </p>
                                            <p className="text-gray-600">
                                                Jawab: Sertifikat dan rekaman video akan tersedia...
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    <div
                        className={`lg:hidden space-y-6 ${event?.isOnline ? "pb-1" : "pb-0"
                            }`}
                    >
                        {loading ? (
                            <div className="animate-pulse space-y-4">
                                <div className="h-32 bg-gray-200 rounded-xl"></div>
                                <div className="h-32 bg-gray-200 rounded-xl"></div>
                            </div>
                        ) : (
                            <>
                                <EventPriceCard event={event!} />
                                <EventLocationCard
                                    isOnline={event!.isOnline}
                                    location={event!.location}
                                    platform={event!.platform}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailEvent;
