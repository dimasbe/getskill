import { HiCalendar, HiClock, HiCheckCircle, HiUsers } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const paymentLogos = [
    { name: "BRI", src: "/public/images/payments/bri.png", url: "https://bri.co.id" },
    { name: "BNI", src: "/public/images/payments/bni.png", url: "https://bni.co.id" },
    { name: "BCA", src: "/public/images/payments/bca.png", url: "https://www.bca.co.id" },
    { name: "DANA", src: "/public/images/payments/dana.jpg", url: "https://www.dana.id" },
    { name: "GOPAY", src: "/public/images/payments/gopay.png", url: "https://www.gopay.co.id" },
    { name: "Mandiri", src: "/public/images/payments/mandiri.png", url: "https://bankmandiri.co.id" },
    { name: "OVO", src: "/public/images/payments/ovo.png", url: "https://www.ovo.id" },
    { name: "VISA", src: "/public/images/payments/visa.png", url: "https://www.visa.co.id" },
    { name: "Mastercard", src: "/public/images/payments/mastercard.jpeg", url: "https://www.mastercard.co.id" },
    { name: "Alfamart", src: "/public/images/payments/alfamart.jpg", url: "https://www.alfamart.co.id" },
    { name: "Indomaret", src: "/public/images/payments/indomaret.jpg", url: "https://www.indomaret.co.id" },
    { name: "BJB", src: "/public/images/payments/bank bjb.png", url: "https://www.bankbjb.co.id" },
    { name: "Astra Pay", src: "/public/images/payments/astra pay.jpeg", url: "https://www.astrapay.com" },
    { name: "BSI", src: "/public/images/payments/bnk bsi.jpg", url: "https://www.bankbsi.co.id" },
    { name: "JCB", src: "/public/images/payments/jcb.jpeg", url: "https://www.global.jcb/en" },
    { name: "Link Aja", src: "/public/images/payments/link aja.jpg", url: "https://www.linkaja.id" },
    { name: "Permata Bank", src: "/public/images/payments/permata bank.jpg", url: "https://www.permatabank.com" },
    { name: "Shopee Pay", src: "/public/images/payments/shopee pay.jpg", url: "https://shopeepay.co.id" },
    { name: "QRIS", src: "/public/images/payments/qris.jpg", url: "https://qris.id" },
];


interface EventPriceCardProps {
    event: {
        price: number;
        date: string;
        quota: number;
        daysLeft: number;
        isOnline: boolean;
        rundown: {
            time: string;
            session: string;
            speaker: {
                name: string;
                role: string;
            };
        }[];
    };
}


const EventPriceCard: React.FC<EventPriceCardProps> = ({ event }) => (
    <Card className="shadow-lg border border-gray-100 p-0 overflow-hidden z-10">
        <div className="bg-purple-600 text-white px-4 py-3 rounded-xl">
            <p className="text-sm">Harga Masuk</p>
            <p className="text-2xl font-bold">Rp {event.price.toLocaleString('id-ID')}</p>
        </div>
        <div className="p-2 space-y-3 text-sm text-gray-700">
            <h1 className="text-lg font-semibold">Informasi Event:</h1>
            <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                <HiCalendar className="text-purple-600" /> Tanggal Mulai: {event.date}
            </div>
            <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                <HiClock className="text-purple-600" />
                Waktu Mulai: {event.rundown[0].time.split(" - ")[0]} WIB
            </div>

            <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                <HiCheckCircle className="text-purple-600" />
                Sertifikat: {event.isOnline ? "Online Certificate" : "Include"}
            </div>

            <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                <HiUsers className="text-purple-600" />
                Sisa Peserta: {event.quota}/300
            </div>


            <div className="flex flex-col items-start gap-2 border-b border-gray-300 pb-2">
                <h1 className="text-lg font-semibold">Lokasi:</h1>
                <span>
                    LIVE at{" "}
                    <a href="#" className="text-purple-600 hover:underline">
                        YouTube HumanTech Class <br />
                    </a>
                </span>
                <span className="font-bold">Online</span>
            </div>


            {/* Payment Methods */}
            <div className="border-b border-gray-300 pb-2">
                <p className="text-lg font-semibold">Metode Pembayaran:</p>
                <div className="flex flex-wrap gap-3 mt-1">
                    {paymentLogos.map((logo) => (
                        <a
                            key={logo.name}
                            href={logo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-gray-300 rounded p-1 flex items-center justify-center w-10 h-8 
                       transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-md hover:border-purple-400"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="max-h-full max-w-full object-contain"
                            />
                        </a>
                    ))}
                </div>

            </div>


            {/* Share Section */}
            <div>
                <p className="text-lg font-semibold mb-1">Bagikan Kursus Ini:</p>
                <div className="flex gap-2 mt-3">
                    {[
                        { icon: <FaFacebookF />, color: "hover:bg-blue-200 hover:text-blue-600", url: "https://facebook.com/sharer/sharer.php?u=https://contoh.com" },
                        { icon: <FaTwitter />, color: "hover:bg-sky-200 hover:text-sky-500", url: "https://twitter.com/intent/tweet?url=https://contoh.com&text=Ikut%20Kursus%20Ini!" },
                        { icon: <FaWhatsapp />, color: "hover:bg-green-200 hover:text-green-500", url: "https://wa.me/?text=Ikut%20Kursus%20Ini%20https://contoh.com" },
                        { icon: <FaInstagram />, color: "hover:bg-pink-200 hover:text-pink-500", url: "https://instagram.com" },
                        { icon: <FaYoutube />, color: "hover:bg-red-200 hover:text-red-500", url: "https://youtube.com" }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            rel="noopener noreferrer"
                            className={`bg-gray-200 p-2 rounded-full text-gray-400 text-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:shadow-md ${item.color}`}
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>

            {event.isOnline ? (
                <Link
                    to="/login"
                    className="block text-center w-full bg-purple-600 text-white py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-purple-700 active:scale-95 mt-3"
                >
                    Masuk
                </Link>
            ) : (
                <button
                    disabled
                    className="block text-center w-full bg-gray-400 text-white py-2 rounded-lg mt-3 cursor-not-allowed opacity-70"
                >
                    Masuk
                </button>
            )}

        </div>
    </Card>
);

export default EventPriceCard;