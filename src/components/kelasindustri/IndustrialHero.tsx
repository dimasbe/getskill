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
      className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden"
      style={{
        backgroundImage: `url(${bg1}), url(${bg2})`,
        backgroundPosition: "20% center, 80% center", // lebih proporsional
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "auto 100%, auto 100%",
      }}
    >
      {/* Overlay mobile */}
      <div className="absolute inset-0 bg-white/70 md:bg-transparent z-0"></div>

      {/* Konten */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {isLoading ? (
          <div className="space-y-4">
            <SkeletonText width="w-40 mx-auto" height="h-3" />
            <SkeletonText width="w-full mx-auto" height="h-8 sm:h-10 md:h-12" />
          </div>
        ) : (
          <div className="fade-in-up space-y-3 max-w-2xl mx-auto">
            <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-500 tracking-widest">
              KELAS INDUSTRI HUMMATECH
            </p>
            <h1 className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-relaxed">
              Upgrade Materi dan Skill di Industri untuk meningkatkan persentase kerja anak didik anda.
              Sejatinya Teknologi IT terus berkembang.
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustrialHero;
