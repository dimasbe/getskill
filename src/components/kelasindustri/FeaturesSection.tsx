import React from 'react';
import komponen1 from '../../assets/kelasindustri/Icon1.png'; // Pastikan path ini benar
import komponen2 from '../../assets/kelasindustri/Icon2.png'; // Pastikan path ini benar
import komponen3 from '../../assets/kelasindustri/Icon3.png'; // Pastikan path ini benar
import komponen4 from '../../assets/kelasindustri/Icon4.png'; // Pastikan path ini benar

// Komponen Feature Card
interface FeatureCardProps {
  iconSrc: string; // Tipe ikon adalah string untuk path gambar
  altText: string; // AltText untuk deskripsi gambar
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, altText, title, description }) => {
  return (
    <div
      className="bg-white w-full mx-auto px-6 py-10 rounded-xl 
                 shadow-lg border border-gray-200 
                 hover:border-gray-300 hover:shadow-xl 
                 transition-all duration-300 ease-in-out 
                 text-center flex flex-col items-center 
                 cursor-pointer hover:scale-105 hover:-translate-y-2"
    >
      <div className="mb-4">
        <img
          src={iconSrc}
          alt={altText}
          className="w-14 h-14 object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-14 -mt-5 bg-white">
      <div className="max-w-5xl mx-auto px-">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-20 relative z-10">
          <FeatureCard
            iconSrc={komponen1}
            altText="Belajar Dari Ahli"
            title="Sekolah"
            description="Total 18 Sekolah Yang Tergabung Dalam Kelas Industri"
          />
          <FeatureCard
            iconSrc={komponen2}
            altText="Kursus Profesional"
            title="Alumni"
            description="Terdapat 40 Alumni Yang Telah Lulus Dari Kelas Industri"
          />
          <FeatureCard
            iconSrc={komponen3}
            altText="Program Sertifikat"
            title="kelas"
            description="Ada 43 Kelas Yang Terdaftar Pada Kelas Industri."
          />
          <FeatureCard
            iconSrc={komponen4}
            altText="Event Pelatihan"
            title="Siswa"
            description="Total 656 Siswa Yang Telah Bergabung Dalam Kelas Industri"
          />
        </div>
      </div>
    </section>
  );
};


export default FeaturesSection;
