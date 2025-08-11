import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import BackgroundShapes from "../../components/public/BackgroundShapes";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Apa itu website ini?",
    answer:
      "Website ini adalah platform edukasi yang menyediakan kursus online dengan berbagai topik menarik."
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Klik tombol 'Daftar' di pojok kanan atas, lalu isi formulir pendaftaran dengan data yang benar."
  },
  {
    question: "Apakah kursusnya gratis?",
    answer:
      "Beberapa kursus gratis, sementara yang lainnya berbayar. Informasi harga akan terlihat di halaman kursus."
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami menerima pembayaran melalui transfer bank, e-wallet, dan kartu kredit."
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* HEADER */}
<div className="relative px-6 py-14 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden shadow-sm">
  <BackgroundShapes />
  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight text-left">
      FAQ
    </h1>
    <p className="mt-2 text-sm sm:text-base text-gray-700 text-left">
      <a
        href="/"
        className="hover:underline hover:text-indigo-600 transition-colors duration-200"
      >
        Beranda
      </a>
      <span className="mx-1">›</span>
      <span className="text-purple-600 font-medium">FAQ</span>
    </p>
  </div>
</div>


      {/* FAQ CONTENT */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Temukan Pertanyaanmu
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden transition hover:shadow-lg"
            >
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-purple-600" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-4 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
