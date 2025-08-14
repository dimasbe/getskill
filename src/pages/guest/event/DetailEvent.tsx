import { useParams } from 'react-router-dom';
import events from '../../../data/events';
import { HiUsers } from "react-icons/hi";
import BackgroundShapes from "../../../components/public/BackgroundShapes";
import EventPriceCard from "../../../components/public/CardEvent/EventPriceCard";
import StatusIndicator from "../../../components/public/CardEvent/StatusIndicator";

const DetailEvent: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = events.find(e => e.id === Number(id));

    if (!event) {
        return <div className="p-6 text-center">Event tidak ditemukan</div>;
    }

    return (
        <div className="bg-white min-h-screen text-left">
            {/* Breadcrumb & Header */}
            <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
                <BackgroundShapes />

                {/* Konten tengah */}
                <div className="max-w-6xl mx-auto px-4 2xl:px-2 xl:px-18 lg:px-35 md:px-30 sm:px-30 text-center sm:text-left relative z-10">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                        {event.title}
                    </h1>
                    <p className="mt-2 text-sm sm:text-base text-gray-800 flex flex-wrap items-center justify-center sm:justify-start">
                        <a href="/" className="hover:underline">Beranda</a>
                        <span className="mx-1">&gt;</span>
                        <a href="/event" className="hover:underline">Events</a>
                        <span className="mx-1">&gt;</span>
                        <span className="text-purple-600">{event.title}</span>
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 lg:px-30 md:px-30 sm:px-20 py-10 md:py-18">
                <div className="relative">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-130 object-cover rounded-xl"
                    />

                    <div className="absolute right-8 -bottom-189 w-75 hidden lg:block">
                        <EventPriceCard event={event} />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <span className="bg-purple-600 text-white px-3 py-1 text-sm rounded-full inline-block">
                            {event.category}
                        </span>

                        <h2 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900">
                            {event.title}
                        </h2>

                        <div className="flex flex-wrap items-center gap-3 mt-3 text-gray-600 text-sm">
                            <img
                                src={event.speakerImage}
                                alt={event.speakerName}
                                className="w-8 h-8 rounded-full"
                            />
                            <span>By {event.speakerName}</span>
                            <StatusIndicator isOnline={event.isOnline} />
                            <span className="flex items-center gap-1">
                                <HiUsers /> {event.quota} Peserta
                            </span>
                        </div>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            {event.description}
                        </p>

                        {/* Rundown Table */}
                        <h3 className="mt-8 text-lg font-semibold">Rundown Acara :</h3>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full border border-gray-300 rounded-lg text-sm text-left border-collapse min-w-[500px]">
                                <thead className="bg-purple-100 text-gray-700">
                                    <tr>
                                        <th className="px-6 py-2 border border-gray-300 text-center whitespace-nowrap">Time</th>
                                        <th className="px-4 py-2 border border-gray-300 text-center">Session</th>
                                        <th className="px-4 py-2 border border-gray-300 text-center">Speaker</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {event.rundown.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-2 border border-gray-300 text-center whitespace-nowrap">
                                                {item.time}
                                            </td>
                                            <td className="px-4 py-2 border border-gray-300">
                                                {item.session}
                                            </td>
                                            <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                                                <span className="font-semibold">{item.speaker.name}</span><br />
                                                <span>{item.speaker.role}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* FAQ */}
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
                    </div>


                    <div className="lg:hidden">
                        <EventPriceCard event={event} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailEvent;
