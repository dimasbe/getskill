// src/components/TechnologySection.tsx
import React from "react";
import conceptImg from "../../assets/img/others/concept3.png.png";
import { ArrowRight } from "lucide-react";

const TechnologySection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">

        {/* Left side - Illustration */}
        <div className="flex justify-center lg:col-span-4 lg:col-start-2 relative lg:translate-x-15">
          {/* Background telur miring */}
          <div
            className="absolute bg-orange-50"
            style={{
              width: "480px",
              height: "300px",
              borderRadius: "50% 100% 100% 50% / 60% 100% 100% 60%", 
              transform: "rotate(-6deg) translateY(30px)",
            }}
          ></div>

          {/* Illustration */}
          <div className="relative w-[90%] md:w-[80%] lg:w-[110%] scale-96 z-10">
            <img
              src={conceptImg}
              alt="Belajar Online"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>



        {/* Right side - Content */}
        <div className="text-left lg:col-span-6 lg:pl-24">
          <span className="inline-block text-[11px] font-medium text-indigo-600 bg-indigo-100 px-3 py-2 rounded-full mb-3">
            Teknologi
          </span>

          <h2 className="text-xl lg:text-2xl font-semibold mb-4 leading-snug">
            Kelas Industri menggunakan sistem LMS sendiri
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-xs">
            Menggunakan smart classroom sebagai pendukung dalam meningkatkan
            daya serap dalam proses kegiatan belajar mengajar (KBM).
          </p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-yellow-400 text-white rounded-full p-1.5 mr-3 mt-1">
                <ArrowRight size={14} />
              </span>
              <span className="text-gray-700 text-xs">
                Melakukan sinkronisasi kurikulum berbasis industri.
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-yellow-400 text-white rounded-full p-1.5 mr-3 mt-1">
                <ArrowRight size={14} />
              </span>
              <span className="text-gray-700 text-xs">
                Menerima guru magang.
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-yellow-400 text-white rounded-full p-1.5 mr-3 mt-1">
                <ArrowRight size={14} />
              </span>
              <span className="text-gray-700 text-xs">
                Menerima siswa magang / Praktik Kerja Lapangan (PKL).
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-yellow-400 text-white rounded-full p-1.5 mr-3 mt-1">
                <ArrowRight size={14} />
              </span>
              <span className="text-gray-700 text-xs">
                Mengadakan rekruitmen kerja untuk lulusan SMK jurusan rekayasa perangkat lunak.
              </span>
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default TechnologySection;
