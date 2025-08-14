import { useLocation } from "react-router-dom";
import { FaCreditCard, FaCopy } from "react-icons/fa";
import { useState } from "react";
import { formatRupiah, parsePrice } from "../../utils/formatPrice";

interface PaymentData {
  course: {
    id: string;
    title: string;
    price: string | number;
    isFree?: boolean;
  };
}

export default function PaymentPage() {
  const location = useLocation();
  const { course } = (location.state as PaymentData) || {};
  const [copied, setCopied] = useState(false);

  const virtualAccount = "1234 5678 9012 3456"; // dummy
  const price = course ? parsePrice(course.price) : 0;
  const isFree = course?.isFree || false;

  const handleCopy = () => {
    navigator.clipboard.writeText(virtualAccount);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Pembayaran Virtual Account
        </h1>

        {/* Metode pembayaran */}
        <div className="flex items-center gap-2">
          <FaCreditCard className="text-blue-500 text-xl" />
          <span>Kartu Kredit</span>
        </div>

        {/* Nomor VA */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Nomor Virtual Account:</p>
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold text-lg text-gray-800">
              {virtualAccount}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
            >
              <FaCopy /> {copied ? "Tersalin" : "Salin"}
            </button>
          </div>
        </div>

        {/* Total Pembayaran */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Total Pembayaran:</p>
          <p className="text-xl font-bold text-green-600">
            {isFree ? "Gratis" : formatRupiah(price)}
          </p>
        </div>

        {/* Info pembayaran */}
        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-xs text-gray-600">
          Setelah pembayaran berhasil, sistem akan memproses otomatis dalam 1-10 menit.
        </div>
      </div>
    </div>
  );
}
