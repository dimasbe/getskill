// src/components/IndustrialSection.tsx
import React from "react";
import { ArrowRight } from "lucide-react"; // untuk icon panah
import manfaatImg from "../../assets/img/others/manfaatid.png";

const IndustrialClassSection: React.FC = () => {
  return (
    <section className="industrial-section py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Image */}
          <div className="lg:w-1/2 flex justify-center relative">
            <img
              src={manfaatImg}
              alt="Belajar Online"
              className="w-[80%] md:w-[60%] lg:w-[72%] h-auto object-contain -ml-48"
            />
          </div>


          {/* Right side - Content */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 text-left">
            <div className="content">
              <span className="inline-block text-xs sm:text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-2 rounded-full mb-3">
                Manfaat Kelas Industri?
              </span>

              <h1 className="text-2xl md:text-2xl font-semibold mb-4">
                Program Kelas industri didesain untuk meningkatkan kemampuan{" "}
                <span className="bg-yellow-400 px-2 py-1 rounded text-white">
                  Siswa
                </span>
              </h1>

              <p className="text-gray-600 text-sm md:text-xs mb-6 leading-relaxed">
                Materi Kelas industri akan di pelajari selama 3 tahun, diawali
                dengan kelas x, xi dan xii dengan ini materi akan lebih maksimal
                diterima. adapun Kelas Industri yang telah tersedia saat ini adalah
              </p>

              {/* List Fitur */}
              <ul className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="bg-yellow-400 rounded-full p-1.5 mr-3">
                      <ArrowRight size={12} className="text-white" />
                    </span>
                    <span className="font-semibold text-sm">Rekayasa Perangkat Lunak</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-yellow-400 rounded-full p-1.5 mr-3">
                      <ArrowRight size={12} className="text-white" />
                    </span>
                    <span className="font-semibold text-sm">Desain Komunikasi Visual</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-yellow-400 rounded-full p-1.5 mr-3">
                      <ArrowRight size={12} className="text-white" />
                    </span>
                    <span className="font-semibold text-sm">Teknik Komputer Jaringan</span>
                  </li>
                </ul>


              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialClassSection;
