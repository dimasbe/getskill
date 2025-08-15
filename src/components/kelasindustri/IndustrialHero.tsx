import React, { useState, useEffect } from "react";
import bg1 from "../../assets/landingpage/beranda/layer1.png";
import bg2 from "../../assets/landingpage/beranda/Layer 2.png";

// Skeleton text component
const SkeletonText = ({ width, height }: { width: string; height: string }) => (
  <div className={`bg-gray-300 rounded ${width} ${height} animate-pulse`}></div>
);

const IndustrialHero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 text-center bg-white overflow-hidden"
      style={{
        backgroundImage: `url(${bg1}), url(${bg2})`,
        backgroundPosition: "center left, center right", // posisi lebih tengah
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "auto 100%, auto 100%", // proporsional
      }}
    >
      {/* Overlay mobile */}
      <div className="absolute inset-0 bg-white/70 md:bg-transparent z-0"></div>

      {/* Konten */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="space-y-4">
            <SkeletonText width="w-40 mx-auto" height="h-3" /> {/* Subtext */}
            <SkeletonText width="w-full mx-auto" height="h-8 sm:h-10 md:h-12" /> {/* Title */}
          </div>
        ) : (
          <div className="fade-in-up space-y-2">
            <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-500 tracking-widest">
              KELAS INDUSTRI HUMMATECH
            </p>
            <h1 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-relaxed">
              Upgrade Materi dan Skill Di Industri untuk meningkatkan Persentase
              kerja anak didik anda Sejatinya Teknologi IT Terus Berkembang.
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustrialHero;
