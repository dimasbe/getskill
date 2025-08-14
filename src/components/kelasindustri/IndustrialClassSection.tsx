import React from "react";
import modelImage from "../../assets/kelasindustri/Background+Shadow.png";

const IndustrialClassSection: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

        {/* Kiri - Gambar */}
        <div className="relative flex justify-center md:justify-start md:pr-8 lg:pr-12 md:translate-x-6 lg:translate-x-15">
          <img
            src={modelImage}
            alt="Model"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[380px] h-auto object-contain"
          />
        </div>


        {/* Kanan - Konten */}
        <div className="text-left mt-6 md:mt-0 md:-ml-2  max-w-lg">
          <span className="inline-block text-xs sm:text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full mb-3">
            Manfaat Kelas Industri?
          </span>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-4">
            Program Kelas industri didesain untuk{" "}
            <br className="hidden sm:block" />
            meningkatkan kemampuan{" "}
            <span className="bg-yellow-400 text-white px-1.5 py-0.5 rounded-md">
              Siswa
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-sm text-gray-600 mb-6 leading-relaxed">
            Materi Kelas industri akan dipelajari selama 3 tahun, diawali dengan
            kelas X, XI, dan XII. Dengan ini materi akan lebih maksimal
            diterima. Adapun Kelas Industri yang telah tersedia saat ini adalah:
          </p>

          <ul className="space-y-3 sm:space-y-4">
            {[
              "Rekayasa Perangkat Lunak",
              "Desain Komunikasi Visual",
              "Teknik Komputer Jaringan",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-yellow-400 rounded-full text-white text-sm">
                  ➝
                </span>
                <span className="font-bold text-gray-900 text-sm sm:text-sm">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IndustrialClassSection;