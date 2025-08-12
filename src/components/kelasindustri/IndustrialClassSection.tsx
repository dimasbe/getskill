import React from "react";
import modelImage from "../../assets/kelasindustri/Background+Shadow.png"; // ganti dengan path gambar kamu

const IndustrialClassSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-12 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Kiri - Gambar */}
        <div className="relative flex justify-center">
          <img
            src={modelImage}
            alt="Model"
            className="relative right-17 w-[220px] sm:w-[250px] md:w-[300px] lg:w-[340px] z-10"
          />
        </div>

        {/* Kanan - Konten */}
        <div className="text-left -ml-6 md:-ml-12">
          <span className="inline-block text-xs font-medium  text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full mb-3">
            Manfaat Kelas Industri?
          </span>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-4">
            Program Kelas industri didesain untuk <br />
            meningkatkan kemampuan{" "}
            <span className="bg-yellow-400 text-white px-2 py-1 rounded-md">Siswa</span>
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Materi Kelas industri akan dipelajari selama 3 tahun, diawali dengan
            kelas X, XI, dan XII. Dengan ini materi akan lebih maksimal
            diterima. Adapun Kelas Industri yang telah <br />
            tersedia saat ini adalah:
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 flex items-center justify-center bg-yellow-400 rounded-full text-white">
                ➝
              </span>
              <span className="font-semibold text-gray-900">
                Rekayasa Perangkat Lunak
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 flex items-center justify-center bg-yellow-400 rounded-full text-white ">
                ➝
              </span>
              <span className="font-semibold text-gray-900">
                Desain Komunikasi Visual
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 flex items-center justify-center bg-yellow-400 rounded-full text-white">
                ➝
              </span>
              <span className="font-semibold text-gray-900">
                Teknik Komputer Jaringan
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

  );
};

export default IndustrialClassSection;
