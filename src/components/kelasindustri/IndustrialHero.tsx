import React from "react";
import bg1 from "../../assets/landingpage/beranda/layer1.png";
import bg2 from "../../assets/landingpage/beranda/Layer 2.png";

const IndustrialHero: React.FC = () => {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 text-center bg-white"
      style={{
        backgroundImage: `url(${bg1}), url(${bg2})`,
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, contain",
      }}
    >
      {/* Overlay untuk mobile agar teks tetap terbaca jika background terlalu ramai */}
      <div className="absolute inset-0 bg-white/70 md:bg-transparent z-0"></div>

      {/* Konten */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-500 tracking-widest">
          KELAS INDUSTRI HUMMATECH
        </p>
        <h1 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-relaxed">
          Upgrade Materi dan Skill Di Industri untuk meningkatkan Persentase
          kerja anak didik anda Sejatinya Teknologi IT Terus Berkembang.
        </h1>
      </div>
    </section>
  );
};

export default IndustrialHero;