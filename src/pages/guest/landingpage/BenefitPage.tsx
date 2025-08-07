import React from 'react';
import fotomodel2 from '../../../assets/landingpage/beranda/fotomodel2.png' // Pastikan path ini benar

const BenefitPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased p-4">
      {/* Tailwind CSS dan style kustom diasumsikan diatur di konfigurasi proyek atau file CSS global */}
      <section className="py-16 bg-white rounded-lg mt-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            {/* Gambar ilustrasi benefit */}
            <img
              src={fotomodel2}
              alt="Belajar Online"
              className="w-full max-w-md rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-sm font-semibold text-purple-600 mb-2">Benefit Yang Didapat</h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Tingkatkan <span className="text-purple-700">Skillmu</span> Dengan Kursus Terbaik Di Satu Tempat
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              GetSkill memberikan penjaminan belajar terbaik dengan akses ke berbagai kursus berkualitas tinggi yang dirancang untuk membantu Anda mengembangkan keterampilan yang dibutuhkan di dunia kerja.
            </p>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Akses Materi Premium & Berkualitas
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Belajar Kapan Saja & Di Mana Saja
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Sertifikat Resmi & Peluang Karier
              </li>
            </ul>
            <button className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-lg font-semibold">
              Daftar Sekarang &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitPage;
