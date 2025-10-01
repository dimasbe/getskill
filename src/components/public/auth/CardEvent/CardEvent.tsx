import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import {
    HiOutlineUsers,
    HiOutlineClock,
    HiOutlineLocationMarker,
    HiOutlineGlobeAlt,
    HiOutlineEye,
} from "react-icons/hi";
import type { EventActivity } from "../../../../features/user/models";


interface CardEventProps {
    event: EventActivity;
    variant?: "default" | "user";
    onCancel?: (id: string) => void;
}



const CardEvent = ({ event, variant = "default", onCancel }: CardEventProps) => {
    const evt = event.event;

    const handleCancel = (e: React.MouseEvent) => {
        e.preventDefault();
        if (onCancel) onCancel(evt.id);
    };

    const DefaultCard = () => (
        <Link to={`/event/${evt.slug}`}>
            <Card className="h-full card-shine relative flex flex-col justify-between border rounded-2xl shadow-sm hover:shadow-[8px_8px_0_#D3DAD9] hover:scale-[1.02] transition-all duration-300 cursor-pointer p-0 overflow-visible z-10">
                <div className="relative -mt-1 -mx-1">
                    <div className="shine__animate">
                        <img
                            src={evt.image || "/src/assets/Default-Img.png"}
                            alt={evt.title}
                            className="h-40 w-full object-cover rounded-xl"
                            onError={(e) => {
                                e.currentTarget.src = "/src/assets/Default-Img.png";
                            }}
                        />
                    </div>
                    <div className="absolute -bottom-1 -left-1 bg-yellow-400 text-xs font-bold text-gray-900 px-3 py-2 rounded-full border shadow-[5px_5px_0_#4c1d95] z-10">
                        {evt.start_date}
                    </div>
                </div>

                <div className="text-left flex-1 pt-3 px-2">
                    <h3 className="text-md font-semibold line-clamp-2 min-h-[50px]">
                        <a className="inline bg-[linear-gradient(black,black),linear-gradient(black,black)]
                        bg-[length:0%_2px,0_2px]
                        bg-[position:100%_100%,0_100%]
                        bg-no-repeat
                        transition-[background-size] duration-900
                        hover:bg-[length:0_2px,100%_2px]">
                            {evt.title}
                        </a>
                    </h3>

                    <div className="flex items-center gap-1 text-gray-500 text-xs mt-3">
                        {evt.is_online ? (
                            <>
                                <HiOutlineGlobeAlt size={20} />
                                <span className="truncate hover:text-yellow-500">
                                    {evt.map_link || "Online Event"}
                                </span>
                            </>
                        ) : (
                            <>
                                <HiOutlineLocationMarker size={20} />
                                <span className="truncate hover:text-yellow-500">
                                    {evt.location}
                                </span>
                            </>
                        )}
                    </div>

                    <span
                        className={`mt-2 inline-block text-xs font-semibold px-2 py-0.5 rounded-md ${evt.is_online ? "bg-green-500 text-white" : "bg-red-500 text-white"
                            }`}
                    >
                        {evt.is_online ? "Online" : "Offline"}
                    </span>
                </div>

                <div className="border-t border-gray-200 pt-4 text-[10px] text-gray-500 pb-1">
                    <div className="flex justify-between items-center w-full overflow-hidden">
                        <span className="flex items-center gap-1">
                            <HiOutlineUsers size={15} />
                            <span className="truncate">Sisa Kuota: {evt.capacity_left ?? 0}</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <HiOutlineClock size={15} />
                            <span className="truncate">
                                {new Date(evt.start_date) > new Date()
                                    ? `${evt.start_in}` 
                                    : new Date(evt.end_date) > new Date()
                                        ? "Berlangsung"
                                        : "Selesai"}
                            </span>
                        </span>
                    </div>
                </div>
            </Card>
        </Link>
    );

    /** --- Card untuk "Event Saya" (dashboard user) --- */
    const UserCard = () => (
        <Link to={`/event/${evt.slug}`}>
            <Card className="h-full card-shine relative flex flex-col justify-between border rounded-2xl shadow-sm hover:shadow-[8px_8px_0_#D3DAD9] hover:scale-[1.02] transition-all duration-300 cursor-pointer p-0 overflow-visible z-10">
                <div className="relative -mt-1 -mx-1">
                    <div className="shine__animate">
                        <img
                            src={evt.image || "/src/assets/Default-Img.png"}
                            alt={evt.title}
                            className="h-40 w-full object-cover rounded-xl"
                            onError={(e) => {
                                e.currentTarget.src = "/src/assets/Default-Img.png";
                            }}
                        />
                    </div>
                    <div className="absolute -bottom-1 -left-1 bg-yellow-400 text-xs font-bold text-gray-900 px-3 py-2 rounded-full border shadow-[5px_5px_0_#4c1d95] z-10">
                        {evt.start_date}
                    </div>
                </div>

                <div className="text-left flex-1 pt-3 px-2">
                    <h3 className="text-md font-semibold line-clamp-2 min-h-[50px]">
                        <a className="inline bg-[linear-gradient(black,black),linear-gradient(black,black)]
                        bg-[length:0%_2px,0_2px]
                        bg-[position:100%_100%,0_100%]
                        bg-no-repeat
                        transition-[background-size] duration-900
                        hover:bg-[length:0_2px,100%_2px]">
                            {evt.title}
                        </a>
                    </h3>
                </div>

                <div className="border-t border-gray-200 pt-4 text-[10px] text-gray-500 pb-1">
                    <div className="flex items-center gap-2 text-gray-600 text-xs mb-3">
                        {evt.is_online ? (
                            <>
                                <HiOutlineGlobeAlt size={16} />
                                <span>{evt.is_online ? "Online" : "Offline"}</span>
                            </>
                        ) : (
                            <>
                                <HiOutlineLocationMarker size={16} />
                                <span>{evt.is_online ? "Online" : "Offline"}</span>
                            </>
                        )}
                        <span className="ml-auto text-gray-500">
                            {evt.relativeTime}
                        </span>

                    </div>
                    <div className="flex justify-between items-center gap-2 mt-2">
                        <button
                            onClick={handleCancel}
                            className="flex-1 px-4 py-2 bg-red-100 border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white rounded-xl font-bold text-xs transition-all duration-500 ease-out shadow-[4px_4px_0px_0px_#0B1367]
              hover:shadow-none active:translate-y-0.5"
                        >
                            Batal Ikuti
                        </button>
                        <Link
                            to={`/event/${evt.slug}`}
                            className="p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all"
                        >
                            <HiOutlineEye size={20} />
                        </Link>
                    </div>
                </div>
            </Card>
        </Link>
    );

    return variant === "user" ? <UserCard /> : <DefaultCard />;
};

export default CardEvent;
