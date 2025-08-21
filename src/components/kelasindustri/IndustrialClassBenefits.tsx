import React, { useState, useEffect } from "react";

import mitraIcon from "../../assets/kelasindustri/Icon5.png";
import businessIcon from "../../assets/kelasindustri/Icon6.png";
import akreditasiIcon from "../../assets/kelasindustri/Icon7.png";
import kerjaIcon from "../../assets/kelasindustri/Icon8.png";

import kelasIndustriImg from "../../assets/kelasindustri/foto1.png";

const benefits = [
  { id: 1, title: "Mitra Industri", description: "Memiliki kerjasama dengan CV. Hummatech Technology dan menjadikan mitra industri." },
  { id: 2, title: "Business Center", description: "Mengaktifkan Business Center Sekolah dibidang pengembangan perangkat lunak." },
  { id: 3, title: "Akreditasi", description: "Menambah poin akreditasi sekolah." },
  { id: 4, title: "Kerja", description: "Peningkatan keterserapan lulusan sesuai kebutuhan industri." },
];

const icons = [mitraIcon, businessIcon, akreditasiIcon, kerjaIcon];
const bgColors = ["bg-indigo-100", "bg-green-100", "bg-yellow-100", "bg-green-100"];
const numberColors = ["bg-indigo-600", "bg-green-600", "bg-yellow-600", "bg-green-500"];

// Skeleton components
const SkeletonText = ({ width, height }: { width: string, height: string }) => (
  <div className={`bg-gray-300 rounded ${width} ${height} animate-pulse`}></div>
);

const SkeletonBenefitItem = () => (
  <div className="flex items-start gap-3 sm:gap-4 animate-pulse">
    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
    <div className="flex-1 space-y-1">
      <SkeletonText width="w-24" height="h-3" />
      <SkeletonText width="w-32" height="h-2" />
    </div>
  </div>
);

const SkeletonImage = () => (
  <div className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[440px] xl:w-[480px] h-[200px] bg-gray-300 rounded-lg animate-pulse"></div>
);

const IndustrialClassBenefits: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 
                  grid grid-cols-1 md:grid-cols-2 items-center 
                  gap-4 md:gap-6 justify-center">

        {/* Right Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 md:mr-10">
          {isLoading ? <SkeletonImage /> : (
            <img
              src={kelasIndustriImg}
              alt="Kelas Industri"
              className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[440px] xl:w-[480px] h-auto object-contain fade-in-scale"
            />
          )}
        </div>

        {/* Left Content */}
        <div className="text-left max-w-md md:ml-4 lg:ml-6 order-2 md:order-1">
          {isLoading ? (
            <div className="space-y-3">
              <SkeletonText width="w-28" height="h-5" />
              <SkeletonText width="w-full" height="h-6" />
              <ul className="mt-4 space-y-4 sm:space-y-6">
                {Array(4).fill(null).map((_, i) => <SkeletonBenefitItem key={i} />)}
              </ul>
            </div>
          ) : (
            <div className="fade-in-up space-y-4">
              <span className="inline-block text-xs sm:text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full mb-3">
                Manfaat Sekolah
              </span>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-4">
                Manfaat yang akan didapatkan sekolah ketika mengikuti kelas industri.
              </h2>
              <ul className="mt-4 space-y-4 sm:space-y-6">
                {benefits.map((benefit, index) => (
                  <li
                    key={benefit.id}
                    className="flex items-start gap-3 fade-in-up"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    <div className={`relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full flex-shrink-0 ${bgColors[index]}`}>
                      <span className={`absolute bottom-[-0.2rem] left-[-0.2rem] text-white text-[8px] sm:text-[10px] font-bold w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center rounded-full ${numberColors[index]}`}>
                        {index + 1}
                      </span>
                      <img src={icons[index]} alt={benefit.title} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800 text-sm sm:text-sm">{benefit.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>

  );
};

export default IndustrialClassBenefits;
