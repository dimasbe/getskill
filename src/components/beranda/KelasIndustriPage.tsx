// src/pages/KelasIndustriPage.tsx
import React, { useState, useEffect } from 'react';

// Import gambar-gambar dekorasi
import komponen8 from '../../assets/landingpage/beranda/komponen8.png';
import komponen9 from '../../assets/landingpage/beranda/komponen9.png';

// --- Komponen Skeleton Loader ---
const SkeletonKelasIndustri: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-10 z-10 relative animate-pulse">
      {/* Skeleton untuk bagian teks dan tombol */}
      <div className="md:w-1/2 text-center md:text-left">
        <div className="bg-gray-200 h-10 w-3/4 mb-4 rounded-full mx-auto md:mx-0"></div>
        <div className="bg-gray-200 h-6 w-full mb-2 rounded"></div>
        <div className="bg-gray-200 h-6 w-5/6 mb-6 rounded mx-auto md:mx-0"></div>
        <div className="bg-gray-200 h-10 w-40 rounded-[20px] mx-auto md:mx-0"></div>
      </div>

      {/* Skeleton untuk bagian statistik (card) */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-lg flex flex-col items-center justify-center">
            <div className="bg-gray-200 h-12 w-1/2 mb-2 rounded"></div>
            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
// --- Akhir Komponen Skeleton Loader ---

// Komponen KelasIndustriPage
const KelasIndustriPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan loading data selama 2 detik
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased p-20">
      <section className="py-30 bg-gray-50 rounded-lg mt-5 relative overflow-hidden">
        {/* Dekorasi Gambar 1 */}
        <img
          src={komponen8}
          alt="Dekorasi Gelombang"
          className="absolute z-0 opacity-100 animate-rotate
                       hidden sm:block
                       top-4 sm:top-6 md:top-8
                       right-10 sm:right-20 md:right-[100px]
                       w-10 sm:w-12 md:w-14 h-auto"
        />

        {/* Dekorasi Gambar 2 */}
        <img
          src={komponen9}
          alt="Dekorasi Geometris"
          className="absolute z-0 opacity-100 animate-jump
                       hidden sm:block
                       bottom-8 sm:bottom-12 md:bottom-[45px]
                       left-10 sm:left-20 md:left-[420px]
                       w-10 sm:w-12 md:w-14 h-auto"
        />

        {/* Conditional Rendering: Tampilkan skeleton saat loading, konten asli saat selesai */}
        {isLoading ? (
          <SkeletonKelasIndustri />
        ) : (
          <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-10 z-10 relative">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Jelajahi{' '}
                <span className="bg-purple-700 px-4 py-1 font-bold text-white rounded-[20px] inline-block">
                  Kelas Industri
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mb-6 text-justify">
                Tingkatkan keterampilan dengan program kelas industri yang dirancang
                untuk menjembatani dunia akademik dan profesional. Dapatkan pengalaman
                langsung dari para ahli dan siapkan diri untuk karier yang kompetitif.
              </p>
              <div className="mt-6 flex justify-center md:justify-start">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-[20px] flex items-center gap-2 transition-all duration-200 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border border-yellow-500 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                  Gabung Sekarang
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-5 rounded-xl shadow-lg flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-5xl font-bold text-purple-700">
                  535+
                </span>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Siswa Kelas Industri
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-lg flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-5xl font-bold text-blue-700">
                  34+
                </span>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Alumni Kelas Industri
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-lg flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-5xl font-bold text-yellow-700">
                  18+
                </span>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Sekolah Bergabung
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default KelasIndustriPage;