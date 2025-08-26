// src/components/IndustrialSection.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import manfaatImg from "../../assets/img/others/manfaatid.png";

const IndustrialClassSection: React.FC = () => {
  return (
    <section className="industrial-section py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

          {/* Left side - Image */}
          <div className="w-full lg:w-5/12 flex justify-center md:justify-center lg:justify-start relative lg:-mt-16 lg:-ml-6 md:px-6">
            <img
              src={manfaatImg}
              alt="Belajar Online"
              className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-auto lg:max-w-[345px] h-auto object-contain"
            />
          </div>


          {/* Right side - Content */}
          <div className="w-full lg:w-7/12 text-left md:pl-4 md:pr-2 lg:pl-15">
            <div className="content">
              <span className="inline-block text-[11px] lg:text-[11px] md:text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1.5 rounded-full mb-3">
                Manfaat Kelas Industri?
              </span>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold mb-4 leading-snug">
                Program Kelas industri didesain untuk meningkatkan kemampuan{" "}
                <span className="bg-yellow-400 px-2 py-1 rounded text-white">
                  Siswa
                </span>
              </h1>

              <p className="text-gray-600 text-sm sm:text-base md:text-sm lg:text-xs mb-6 leading-relaxed">
                Materi Kelas industri akan dipelajari selama 3 tahun, dimulai
                dari kelas X, XI dan XII. Dengan metode ini, materi akan lebih
                maksimal diterima. Adapun Kelas Industri yang telah tersedia saat ini adalah:
              </p>

              {/* List Fitur */}
              <ul className="space-y-3">
                {[
                  "Rekayasa Perangkat Lunak",
                  "Desain Komunikasi Visual",
                  "Teknik Komputer Jaringan",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="bg-yellow-400 rounded-full p-1.5 mr-3 flex-shrink-0">
                      <ArrowRight size={12} className="text-white" />
                    </span>
                    <span className="font-semibold text-sm sm:text-base lg:text-sm lg:font-bold">{item}</span>
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

export default IndustrialClassSection;
