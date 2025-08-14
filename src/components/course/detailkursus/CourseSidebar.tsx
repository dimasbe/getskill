import { useNavigate } from "react-router-dom";
import {
  FaTag,
  FaBook,
  FaQuestionCircle,
  FaInfinity,
  FaCertificate,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";

interface Props {
  totalModul: number;
  totalKuis: number;
  price: string;
  isFree?: boolean;
}

export default function CourseSidebar({ totalModul, totalKuis, price, isFree }: Props) {
  const navigate = useNavigate();

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
            title: document.title
          }
        }
      });
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl sticky top-6 space-y-6 border border-gray-100">
      {/* Harga */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center shadow-sm">
        <div className="flex items-center justify-center gap-2 text-black-700 font-semibold">
          <FaTag size={18} /> <span>Harga Kursus</span>
        </div>
        <p
          className={`font-bold text-lg mt-auto ${
            isFree ? "text-yellow-500" : "text-green-600"
          }`}
        >
          {isFree ? "Gratis" : `Rp ${formatRupiah(price)}`}
        </p>
      </div>

      {/* Tombol */}
      <button
        onClick={handleBuyNow}
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
      >
        Beli Sekarang →
      </button>

      {/* Info kursus */}
      <div className="text-left">
        <h4 className="font-semibold text-gray-700 mb-3">Kursus ini mencakup:</h4>
        <ul className="space-y-3 text-gray-600 text-sm">
          <li className="flex items-center gap-3">
            <FaBook className="text-black-600" /> <span>{totalModul} Modul</span>
          </li>
          <li className="flex items-center gap-3">
            <FaQuestionCircle className="text-black-600" /> <span>{totalKuis} Kuis</span>
          </li>
          <li className="flex items-center gap-3">
            <FaInfinity className="text-black-600" /> <span>Akses penuh seumur hidup</span>
          </li>
          <li className="flex items-center gap-3">
            <FaCertificate className="text-black-600" />{" "}
            <span>Sertifikat penyelesaian</span>
          </li>
        </ul>
      </div>

      {/* Metode pembayaran */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 text-left">Metode Pembayaran:</h4>
        <div className="flex flex-wrap justify-center gap-3">
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
            "visa.png"
          ].map((img, i) => (
            <img
              key={i}
              src={`/images/payments/${img}`}
              alt={img}
              className="w-10 h-auto object-contain hover:scale-110 transition-transform duration-200"
            />
          ))}
        </div>
      </div>

      {/* Share */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 text-left">
          Bagikan kursus ini:
        </h4>
        <div className="flex justify-center gap-3">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href={`https://wa.me/?text=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
