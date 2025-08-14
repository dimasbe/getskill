import React from "react";
import chartImg from "../../assets/kelasindustri/Chart.png";

const IndustrialClassSection1: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

        {/* Kiri - Gambar */}
        <div className="relative flex justify-center md:justify-start md:translate-x-4 lg:translate-x-15">
          <img
            src={chartImg}
            alt="Ilustrasi Chart"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[380px] h-auto object-contain"
          />
        </div>

        {/* Kanan - Konten */}
       <div className="text-left mt-6 md:mt-0 md:pl-0 max-w-lg">
          <span className="inline-block text-xs sm:text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full mb-3">
            Teknologi
          </span>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-4">
            Kelas Industri menggunakan sistem LMS sendiri
          </h2>
          <p className="text-xs sm:text-sm md:text-sm text-gray-600 mb-6 leading-relaxed">
            Menggunakan smart classroom sebagai pendukung dalam meningkatkan daya serap
            dalam proses kegiatan belajar mengajar (KBM).
          </p>

          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-xs">
            {[
              "Melakukan sinkronisasi kurikulum berbasis industri.",
              "Menerima guru magang.",
              "Menerima siswa magang / Praktik Kerja Lapangan (PKL).",
              "Mengadakan rekrutmen kerja untuk lulusan SMK jurusan rekayasa perangkat lunak.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg leading-none">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IndustrialClassSection1;
