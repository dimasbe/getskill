import React from 'react';
import komponen1 from '../../assets/landingpage/beranda/komponen1.png'; // Pastikan path ini benar
import komponen2 from '../../assets/landingpage/beranda/komponen2.png'; // Pastikan path ini benar
import komponen3 from '../../assets/landingpage/beranda/komponen3.png'; // Pastikan path ini benar
import komponen4 from '../../assets/landingpage/beranda/komponen4.png'; // Pastikan path ini benar

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
      className="bg-white max-w-[240px] w-full mx-auto px-4 py-10 rounded-xl shadow-lg border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 ease-in-out text-center flex flex-col items-center cursor-pointer hover:scale-105 hover:-translate-y-2"
    >
      <div className="mb-2">
        <img
          src={iconSrc}
          alt={altText}
          className="w-12 h-12 object-contain" // ikon lebih besar (48px)
        />
      </div>
      <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3> {/* font title lebih besar */}
      <p className="text-xs text-gray-600">{description}</p> {/* deskripsi lebih besar */}
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-14 -mt-5 bg-white">
      <div className="container mx-auto px-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-20 relative z-10">
          <FeatureCard
            iconSrc={komponen1}
            altText="Belajar Dari Ahli"
            title="Belajar Dari Ahli"
            description="Kami menyediakan kursus online dengan instruktur berpengalaman."
          />
          <FeatureCard
            iconSrc={komponen2}
            altText="Kursus Profesional"
            title="Kursus Profesional"
            description="Tingkatkan keterampilan Anda dengan berbagai kursus berkualitas."
          />
          <FeatureCard
            iconSrc={komponen3}
            altText="Program Sertifikat"
            title="Program Sertifikat"
            description="Dapatkan sertifikat resmi untuk mendukung karier Anda."
          />
          <FeatureCard
            iconSrc={komponen4}
            altText="Event Pelatihan"
            title="Event Pelatihan"
            description="Ikuti berbagai event dan pelatihan eksklusif secara online."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
