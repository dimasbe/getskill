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

// Warna background berbeda untuk tiap ikon
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
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-left pl-6 md:pl-12">
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
            Manfaat Sekolah
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-4 leading-snug">
            Manfaat yang akan didapatkan sekolah ketika mengikuti kelas industri.
          </h2>

          <ul className="mt-6 space-y-6">
            {benefits.map((benefit, index) => (
              <li key={benefit.id} className="flex items-start space-x-4">
                <div
                  className={`relative w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0 ${bgColors[index]}`}
                >
                  {/* Nomor di dalam ikon dengan posisi lebih masuk */}
                  <span
                    className={`absolute bottom-[-0.2rem] left-[-0.2rem] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full ${numberColors[index]}`}
                  >
                    {index + 1}
                  </span>
                  {/* Ikon */}
                  <img
                    src={icons[index]}
                    alt={benefit.title}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-gray-800">{benefit.title}</h4>
                  <p className="text-gray-600 text-xs">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={kelasIndustriImg}
            alt="Kelas Industri"
            className="w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustrialClassBenefits;
