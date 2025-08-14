import React, { useState, useEffect } from 'react';
import komponen1 from '../../assets/landingpage/beranda/komponen1.png';
import komponen2 from '../../assets/landingpage/beranda/komponen2.png';
import komponen3 from '../../assets/landingpage/beranda/komponen3.png';
import komponen4 from '../../assets/landingpage/beranda/komponen4.png';

// Komponen Feature Card
interface FeatureCardProps {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, altText, title, description }) => {
  return (
    <div
      className="bg-white max-w-xs w-full mx-auto px-4 py-10 rounded-xl shadow-lg border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 ease-in-out text-center flex flex-col items-center cursor-pointer hover:scale-105 hover:-translate-y-2"
    >
      <div className="mb-2">
        <img
          src={iconSrc}
          alt={altText}
          className="w-12 h-12 object-contain"
        />
      </div>
      <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
};

// --- Komponen Skeleton Loader ---
const SkeletonFeatureCard: React.FC = () => {
  return (
    <div className="bg-white max-w-xs w-full mx-auto px-4 py-10 rounded-xl shadow-lg border border-gray-200 animate-pulse text-center flex flex-col items-center">
      <div className="mb-2 bg-gray-200 w-12 h-12 rounded-full"></div>
      <div className="bg-gray-200 h-4 w-3/4 mb-2 rounded"></div>
      <div className="bg-gray-200 h-3 w-5/6 rounded"></div>
    </div>
  );
};
// --- Akhir Komponen Skeleton Loader ---

const FeaturesSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan pengambilan data selama 2 detik
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="py-14 -mt-5 bg-white">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-20 relative z-10">
          {isLoading ? (
            // Tampilkan skeleton saat loading
            <>
              <SkeletonFeatureCard />
              <SkeletonFeatureCard />
              <SkeletonFeatureCard />
              <SkeletonFeatureCard />
            </>
          ) : (
            // Tampilkan konten asli setelah loading selesai
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;