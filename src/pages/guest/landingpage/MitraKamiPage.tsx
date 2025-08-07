import React from 'react';

// Komponen MitraKamiPage
const MitraKamiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased p-4">
      {/* Tailwind CSS dan style kustom diasumsikan diatur di konfigurasi proyek atau file CSS global */}
      <section className="py-16 bg-white rounded-lg mt-4">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">MITRA KAMI</h1>
          <p className="text-lg text-gray-600 mb-10">Kolaborasi menuju kesuksesan</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {/* Placeholder untuk logo mitra */}
            <img src="https://placehold.co/150x150/8B5CF6/FFFFFF?text=Logo+SMK" alt="Logo SMK Malang" className="w-32 h-32 object-contain mx-auto" />
            <img src="https://placehold.co/150x150/8B5CF6/FFFFFF?text=Logo+Muhammadiyah" alt="Logo Muhammadiyah Genteng" className="w-32 h-32 object-contain mx-auto" />
            <img src="https://placehold.co/150x150/8B5CF6/FFFFFF?text=Logo+SMKN+6" alt="Logo SMKN 6 Jember" className="w-32 h-32 object-contain mx-auto" />
            <img src="https://placehold.co/150x150/8B5CF6/FFFFFF?text=Logo+Antartika" alt="Logo SMK Antartika 1 Sidoarjo" className="w-32 h-32 object-contain mx-auto" />
            <img src="https://placehold.co/150x150/8B5CF6/FFFFFF?text=Logo+Lain" alt="Logo Mitra Lain" className="w-32 h-32 object-contain mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MitraKamiPage;
