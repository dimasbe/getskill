// src/components/BenefitsSection.tsx
import React from "react";
import lampImg from "../../assets/img/icons/lampid.png";
import searchImg from "../../assets/img/icons/searchid.png";
import loveImg from "../../assets/img/icons/loveid.png";
import boardImg from "../../assets/img/icons/blackboardid.png";
import fotofotoImg from "../../assets/img/others/fotofotoid.png";

const IndustrialClassBenefits: React.FC = () => {
  return (
    <section className="benefits-section py-10 sm:py-14 lg:py-2">
      <div className="container mx-auto px-0 sm:px-0 lg:px-1">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content (Teks) */}
          <div className="w-full md:w-30/30 lg:w-8/12 text-left px-4 sm:px-6 md:px-12 lg:px-0 lg:-ml-6 mx-auto">
            <span className="inline-block text-[11px] lg:text-[11px] md:text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1.5 rounded-full mb-3">
              Manfaat Sekolah
            </span>

            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-2xl font-semibold mb-6 leading-snug">
              Manfaat yang akan didapatkan sekolah ketika mengikuti kelas industri.
            </h2>

            <div className="space-y-5">
              {[
                {
                  id: 1,
                  img: lampImg,
                  title: "Mitra Industri",
                  desc: "Memiliki kerjasama dengan CV. Hummatech Technology dan menjadikan mitra industri.",
                  color: "bg-purple-100",
                  badge: "bg-purple-700",
                },
                {
                  id: 2,
                  img: searchImg,
                  title: "Business Center",
                  desc: "Mengaktifkan Business Center Sekolah dibidang pengembangan perangkat lunak.",
                  color: "bg-teal-50",
                  badge: "bg-teal-600",
                },
                {
                  id: 3,
                  img: loveImg,
                  title: "Akreditasi",
                  desc: "Menambah poin akreditasi sekolah.",
                  color: "bg-yellow-50",
                  badge: "bg-yellow-500",
                },
                {
                  id: 4,
                  img: boardImg,
                  title: "Kerja",
                  desc: "Peningkatan keterserapan lulusan sesuai kebutuhan industri.",
                  color: "bg-green-50",
                  badge: "bg-green-600",
                },
              ].map((item) => (
                <div key={item.id} className="flex items-start">
                  <div
                    className={`relative flex-shrink-0 w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}
                  >
                    <img src={item.img} alt={item.title} className="w-6 h-6" />
                    <div
                      className={`absolute -bottom-1 -left-1 w-5 h-5 rounded-full ${item.badge} text-white text-[10px] flex items-center justify-center`}
                    >
                      {item.id}
                    </div> 
                  </div>
                  <div className="ml-3 flex-1">
                    <h4 className="font-semibold text-sm sm:text-base lg:text-base">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image (tapi di mobile jadi atas) */}
          <div className="w-full lg:w-7/12 flex justify-center">
            <img
              src={fotofotoImg}
              alt="Belajar Online"
              className="w-full max-w-md md:max-w-lg lg:max-w-none lg:w-[116%] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustrialClassBenefits;
