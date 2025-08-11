// src/pages/FiturUnggulanPage.tsx
import React from 'react';

// Import gambar-gambar
import iconKomponen5 from '../../assets/landingpage/beranda/komponen5.png';
import iconKomponen6 from '../../assets/landingpage/beranda/komponen6.png';
import iconKomponen7 from '../../assets/landingpage/beranda/komponen7.png';

// Interface untuk data fitur
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

// Komponen Feature Item
const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`p-6 rounded-xl shadow-lg text-center flex flex-col items-center ${bgColor}`}>
      <div className="text-white mb-4 text-5xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Komponen FiturUnggulanPage
const FiturUnggulanPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <section className="py-24 bg-white rounded-lg">
        <div className="container mx-auto px-40 text-center">
          <span className="px-2 py-1 text-sm font-semibold border border-gray-200 bg-gray-100 text-purple-600 rounded-full">
            Fitur Unggulan
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mt-6 mb-4">
            Upgrade Kemampuan Anda Bersama Getskill.id
          </h1>
          <p className="text-sm text-gray-600 mb-10">
            belajar dari instruktur terbaik di kelas langsung terlibat, berinteraksi dan menyelesaikan keraguan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureItem
              icon={<img src={iconKomponen5} alt="Mentor Terpercaya" className="w-12 h-12" />}
              title="Mentor Terpercaya"
              description="Mentor Kami ramah dan ahli dalam domain untuk membuat Anda belajar dengan mudah"
              bgColor="bg-purple-200"
            />
            <FeatureItem
              icon={<img src={iconKomponen6} alt="Kursus Terbaik" className="w-12 h-12" />}
              title="Kursus Terbaik"
              description="Semua kursus kami dibuat dan untuk membuat Anda menikmati mempelajari hal-hal baru"
              bgColor="bg-blue-200"
            />
            <FeatureItem
              icon={<img src={iconKomponen7} alt="Tugas Kompetensi" className="w-12 h-12" />}
              title="Tugas Kompetensi"
              description="Bergabunglah dengan kelas kami dengan alat interaktif dan dukungan keraguan"
              bgColor="bg-orange-200"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiturUnggulanPage;