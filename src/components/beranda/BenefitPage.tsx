import React from 'react';
import fotomodel2 from '../../assets/landingpage/beranda/fotomodel2.png' // Pastikan path ini benar

const BenefitPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Tailwind CSS dan style kustom diasumsikan diatur di konfigurasi proyek atau file CSS global */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-22 flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            {/* Gambar ilustrasi benefit */}
            <img
              src={fotomodel2}
              alt="Belajar Online"
              className="w-full max-w-md rounded-lg "
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <span className="px-2 py-1 text-sm font-semibold border border-gray-200 bg-gray-100 text-purple-600 rounded-full">
              Benefit Yang Didapat
            </span>
            <h3 className="text-3xl font-bold text-gray-800 mt-4 mb-6">
              Tingkatkan <span className="bg-purple-700 text-white px-2 py-1 rounded-[20px]">Skillmu</span> Dengan Kursus Terbaik Di Satu Tempat
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              GetSkill memberikan penjaminan belajar terbaik dengan akses ke berbagai kursus berkualitas tinggi yang dirancang untuk membantu Anda mengembangkan keterampilan yang dibutuhkan di dunia kerja.
            </p>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Akses Materi Premium & Berkualitas
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Belajar Kapan Saja & Di Mana Saja
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Sertifikat Resmi & Peluang Karier
              </li>
            </ul>
            {/* Tombol Daftar */}
            <div className="mt-6">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-2 rounded-[20px] flex items-center gap-2 transition-all duration-200 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border border-yellow-500 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                Daftar Sekarang
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
        </div>
      </section>
    </div>
  );
};

export default BenefitPage;
