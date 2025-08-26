// src/components/TechnologySection.tsx
import React from "react";
import conceptImg from "../../assets/img/others/concept3.png.png";
import { ArrowRight } from "lucide-react";

const TechnologySection: React.FC = () => {
  return (
    <section className="technology-section py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          
          {/* Left side - Illustration */}
          <div className="w-full lg:w-5/12 flex justify-center md:justify-center lg:justify-start relative lg:-ml-6 md:px-6">
            {/* Background telur miring */}
            <div
              className="absolute bg-orange-50 hidden sm:block"
              style={{
                width: "420px",
                height: "260px",
                borderRadius: "50% 100% 100% 50% / 60% 100% 100% 60%",
                transform: "rotate(-6deg) translateY(30px)",
              }}
            ></div>

            <img
              src={conceptImg}
              alt="Belajar Online"
              className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-auto lg:max-w-[345px] h-auto object-contain z-10 lg:translate-x-10"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-7/12 text-left md:pl-4 md:pr-2 lg:pl-10">
            <div className="content">
              <span className="inline-block text-[11px] lg:text-[11px] md:text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1.5 rounded-full mb-3">
                Teknologi
              </span>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold mb-4 leading-snug">
                Kelas Industri menggunakan sistem LMS sendiri
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-sm lg:text-xs mb-6 leading-relaxed">
                Menggunakan smart classroom sebagai pendukung dalam meningkatkan
                daya serap dalam proses kegiatan belajar mengajar (KBM).
              </p>

              {/* List Fitur */}
              <ul className="space-y-3">
                {[
                  "Melakukan sinkronisasi kurikulum berbasis industri.",
                  "Menerima guru magang.",
                  "Menerima siswa magang / Praktik Kerja Lapangan (PKL).",
                  "Mengadakan rekruitmen kerja untuk lulusan SMK jurusan rekayasa perangkat lunak.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="bg-yellow-400 rounded-full p-1.5 mr-3 flex-shrink-0">
                      <ArrowRight size={12} className="text-white" />
                    </span>
                    <span className="text-sm sm:text-base lg:text-xs text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
