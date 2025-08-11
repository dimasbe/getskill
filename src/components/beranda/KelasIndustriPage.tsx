// src/pages/KelasIndustriPage.tsx
import React from 'react';

// Import gambar-gambar dekorasi
import komponen8 from '../../assets/landingpage/beranda/komponen8.png';
import komponen9 from '../../assets/landingpage/beranda/komponen9.png';

// Komponen KelasIndustriPage
const KelasIndustriPage: React.FC = () => {
  return (
    <div className="min-h-20 bg-gray-50 font-sans antialiased p-4">
      <section className="py-28 bg-gray-50 rounded-lg mt-5 relative overflow-hidden">
        {/* Dekorasi Gambar 1 */}
        <img
          src={komponen8}
          alt="Dekorasi Gelombang"
          className="absolute top-8 left-290 w-14 h-auto z-0 opacity-100 hidden md:block animate-rotate"
        />

        {/* Dekorasi Gambar 2 */}
        <img
          src={komponen9}
          alt="Dekorasi Geometris"
          className="absolute bottom-15 right-210 w-14 h-auto z-0 opacity-100 hidden md:block animate-jump"
        />

        <div className="container mx-auto px-35 flex flex-col md:flex-row items-center justify-center gap-12 z-10 relative">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Jelajahi <span className="bg-purple-700 px-4 py-1 font-bold text-white rounded-[20px] inline-block">Kelas Industri</span>
            </h1>
            <p className="text-md text-gray-600 mb-6" px-20>
              Tingkatkan keterampilan dengan program kelas industri yang dirancang untuk menjembatani dunia akademik dan profesional. Dapatkan pengalaman langsung dari para ahli dan siapkan diri untuk karier yang kompetitif.
            </p>
            <div className="mt-6">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-2 rounded-[20px] flex items-center gap-2 transition-all duration-200 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border border-yellow-500 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
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
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-purple-700">535+</span>
              <p className="text-gray-600 text-xs">Siswa Kelas Industri</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-blue-700">34+</span>
              <p className="text-gray-600 text-xs">Alumni Kelas Industri</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-yellow-700">18+</span>
              <p className="text-gray-600 text-xs">Sekolah Bergabung</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KelasIndustriPage;