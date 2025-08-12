import React from "react";
import chartImg from "../../assets/kelasindustri/Chart.png"; // Ganti sesuai lokasi file gambar

const IndustrialClassSection1: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-14 py-5 grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div className="flex justify-start pl-10">
        <img src={chartImg} alt="Ilustrasi Chart" className="w-full max-w-sm" />
      </div>

      {/* Text */}
      <div className="text-left md:pl-5">
        <span className="text-xs font-medium  text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
          Teknologi
        </span>
        <h2 className="text-xl font-bold text-gray-900 mt-3">
          Kelas Industri menggunakan sistem LMS sendiri
        </h2>
        <p className="text-xs text-gray-600 mt-4 leading-relaxed">
          Menggunakan smart classroom sebagai pendukung dalam meningkatkan daya
          serap <br />
          dalam proses kegiatan belajar mengajar (KBM).
        </p>

        <ul className="mt-6 space-y-3 text-xs">
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
    </section>
  );
};

export default IndustrialClassSection1;
