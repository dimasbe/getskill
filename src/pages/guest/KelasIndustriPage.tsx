import React from 'react';

// Komponen KelasIndustriPage
const KelasIndustriPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased p-4">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <section className="py-16 bg-white rounded-lg mt-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Jelajahi <span className="text-purple-700">Kelas Industri</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Tingkatkan keterampilan dengan program kelas industri yang dirancang untuk menjembatani dunia akademik dan profesional. Dapatkan pengalaman langsung dari para ahli dan siapkan diri untuk karier yang kompetitif.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-lg font-semibold">
              Gabung Sekarang &rarr;
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-purple-100 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-purple-700">535+</span>
              <p className="text-gray-600">Siswa Kelas Industri</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-blue-700">34+</span>
              <p className="text-gray-600">Alumni Kelas Industri</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-yellow-700">18+</span>
              <p className="text-gray-600">Sekolah Bergabung</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KelasIndustriPage;
