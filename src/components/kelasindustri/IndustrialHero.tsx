// src/components/BannerSection.tsx
import React from "react";

const BannerSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Dot pattern kiri */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 -translate-x-10 -translate-y-10" />

      {/* Dot pattern kanan */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 translate-x-10 translate-y-10" />

      <div className="relative z-10 px-6 py-20">
        <div className="text-center mx-auto max-w-3xl">
          <h3 className="text-purple-600 text-sm md:text-sm font-semibold tracking-wide uppercase">
            KELAS INDUSTRI HUMMATECH
          </h3>


          <h2 className="mt-4 text-2xl md:text-2xl font-semibold text-gray-900 leading-snug">
            Upgrade Materi dan Skill Di Industri untuk meningkatkan Persentase kerja anak didik anda.
            Sejatinya Teknologi IT Terus Berkembang.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
