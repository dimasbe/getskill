import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTag,
  FaBook,
  FaQuestionCircle,
  FaInfinity,
  FaCertificate,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

interface Props {
  totalModul: number;
  totalKuis: number;
  price: string;
  isFree?: boolean;
}

export default function CourseSidebar({ totalModul, totalKuis, price, isFree }: Props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const formatRupiah = (value: string | number) => {
    if (typeof value === "string") {
      value = value.replace(/\./g, "");
    }
    return Number(value).toLocaleString("id-ID");
  };

  const handleBuyNow = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      navigate("/payment", {
        state: {
          course: {
            price,
            isFree,
            id: window.location.pathname.split("/").pop() || "",
            title: document.title,
          },
        },
      });
    }
  };

  // Sidebar content (biar reusable)
  const SidebarContent = (
    <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-300 w-full max-w-[280px] font-sans">
      {/* Harga */}
      <div className="bg-purple-600 border border-purple-400 rounded-xl p-4 text-center shadow-sm">
        <div className="flex items-center justify-center gap-2 font-semibold text-white">
          <FaTag size={18} /> <span>Harga Kursus</span>
        </div>
        <p className={`font-bold text-[25px] mt-2 ${isFree ? "text-white" : "text-white"}`}>
          {isFree ? "Gratis" : `Rp ${formatRupiah(price)}`}
        </p>
      </div>

      {/* Tombol */}
      <button
        onClick={handleBuyNow}
        className="my-6 w-full relative group overflow-hidden text-black font-sans font-semibold text-base py-3 px-5 
          rounded-full flex items-center justify-center gap-2 border border-black transition-all duration-500 
          ease-in-out shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)] 
          active:translate-y-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:text-white"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></span>
        <span className="relative z-10 text-[15px]">Beli Sekarang →</span>
      </button>

      {/* Info kursus */}
      <div className="pt-3 pb-3">
        <h4 className="text-left font-semibold text-black">Kursus ini mencakup:</h4>
        <ul className="space-y-4 text-gray-600 text-sm mt-5">
          <li className="flex items-center gap-3 border-b border-gray-300 pb-4 ">
            <FaBook /> <span>{totalModul} Modul</span>
          </li>
          <li className="flex items-center gap-3 border-b border-gray-300 pb-4 ">
            <FaQuestionCircle /> <span>{totalKuis} Kuis</span>
          </li>
          <li className="flex items-center gap-3 border-b border-gray-300 pb-4">
            <FaInfinity /> <span>Akses penuh seumur hidup</span>
          </li>
          <li className="flex items-center gap-3 border-b border-gray-300 pb-4">
            <FaCertificate /> <span>Sertifikat penyelesaian</span>
          </li>
        </ul>
      </div>

      {/* Metode pembayaran */}
      <div className="mb-3 pt-3 pb-3 border-b border-gray-300">
        <h4 className="text-left font-semibold text-black">Metode Pembayaran:</h4>
        <div className="grid grid-cols-6 gap-2 mt-5">
          {[
            "bri.png",
            "bca.png",
            "gopay.png",
            "ovo.png",
            "mastercard.jpeg",
            "alfamart.jpg",
            "astra pay.jpeg",
            "bank bjb.png",
            "bnk bsi.jpg",
            "dana.jpg",
            "indomaret.jpg",
            "jcb.jpeg",
            "link aja.jpg",
            "mandiri.png",
            "permata bank.jpg",
            "qris.jpg",
            "shopee pay.jpg",
            "visa.png",
          ].map((img, i) => (
            <img
              key={i}
              src={`/images/payments/${img}`}
              alt={img}
              className="w-10 h-8 object-contain mx-auto"
            />
          ))}
        </div>
      </div>

      {/* Share */}
      <div className="pt-3">
        <h4 className="text-left font-semibold text-black">Bagikan kursus ini:</h4>
        <div className="flex gap-3 justify-center mt-5">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <FaFacebookF className="text-xs" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
          >
            <FaTwitter className="text-xs" />
          </a>
          <a
            href={`https://wa.me/?text=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop: sticky */}
      <div className="hidden lg:block sticky top-6 self-start">
        {SidebarContent}
      </div>

      {/* Mobile: tombol buka drawer */}
      <div className="fixed bottom-5 right-5 z-40 lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold"
        >
          Lihat Detail Kursus
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="flex-1 bg-black/40"
          ></div>

          {/* Sidebar drawer */}
          <div className="w-80 max-w-full h-full bg-white shadow-xl p-5 overflow-y-auto animate-slideInRight">
            <button
              onClick={() => setOpen(false)}
              className="mb-4 px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
            >
              ✕ Tutup
            </button>
            {SidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
