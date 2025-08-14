import React from "react";

import mitraIcon from "../../assets/kelasindustri/Icon5.png";
import businessIcon from "../../assets/kelasindustri/Icon6.png";
import akreditasiIcon from "../../assets/kelasindustri/Icon7.png";
import kerjaIcon from "../../assets/kelasindustri/Icon8.png";

import kelasIndustriImg from "../../assets/kelasindustri/foto1.png";

const benefits = [
  {
    id: 1,
    title: "Mitra Industri",
    description:
      "Memiliki kerjasama dengan CV. Hummatech Technology dan menjadikan mitra industri.",
  },
  {
    id: 2,
    title: "Business Center",
    description:
      "Mengaktifkan Business Center Sekolah dibidang pengembangan perangkat lunak.",
  },
  {
    id: 3,
    title: "Akreditasi",
    description: "Menambah poin akreditasi sekolah.",
  },
  {
    id: 4,
    title: "Kerja",
    description:
      "Peningkatan keterserapan lulusan sesuai kebutuhan industri.",
  },
];

const icons = [mitraIcon, businessIcon, akreditasiIcon, kerjaIcon];

const bgColors = [
  "bg-indigo-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-green-100",
];

const numberColors = [
  "bg-indigo-600",
  "bg-green-600",
  "bg-yellow-600",
  "bg-green-500",
];

const IndustrialClassBenefits: React.FC = () => {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

        {/* Left Content */}
        <div className="text-left md:pr-6 lg:pr-1">
          <span className="inline-block text-xs sm:text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full mb-3">
            Manfaat Sekolah
          </span>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-4">
            Manfaat yang akan didapatkan sekolah ketika mengikuti kelas industri.
          </h2>

          <ul className="mt-4 space-y-4 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <li key={benefit.id} className="flex items-start gap-3 sm:gap-4">
                <div
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full flex-shrink-0 ${bgColors[index]}`}
                >
                  {/* Nomor */}
                  <span
                    className={`absolute bottom-[-0.2rem] left-[-0.2rem] text-white text-[8px] sm:text-[10px] font-bold w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center rounded-full ${numberColors[index]}`}
                  >
                    {index + 1}
                  </span>
                  {/* Ikon */}
                  <img
                    src={icons[index]}
                    alt={benefit.title}
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 text-sm sm:text-sm">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end md:-translate-x-4 lg:-translate-x-15">
          <img
            src={kelasIndustriImg}
            alt="Kelas Industri"
            className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[440px] xl:w-[480px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustrialClassBenefits;