import React, { useState, useEffect } from "react";
import chartImg from "../../assets/kelasindustri/Chart.png";

const SkeletonText = ({ width, height }: { width: string; height: string }) => (
  <div className={`bg-gray-300 rounded ${width} ${height} animate-pulse`}></div>
);

const SkeletonCircle = ({ size }: { size: string }) => (
  <div className={`bg-gray-300 rounded-full ${size} animate-pulse`}></div>
);

const SkeletonImage = () => (
  <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[380px] h-[200px] bg-gray-300 rounded-lg animate-pulse"></div>
);

const SkeletonListItem = () => (
  <div className="flex items-start gap-3 animate-pulse">
    <SkeletonCircle size="w-4 h-4" />
    <SkeletonText width="w-64" height="h-3" />
  </div>
);

const IndustrialClassSection1: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const listItems = [
    "Melakukan sinkronisasi kurikulum berbasis industri.",
    "Menerima guru magang.",
    "Menerima siswa magang / Praktik Kerja Lapangan (PKL).",
    "Mengadakan rekrutmen kerja untuk lulusan SMK jurusan rekayasa perangkat lunak.",
  ];

  return (
    <section className="w-full py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 justify-items-center md:justify-items-start">

        {/* Kiri - Gambar */}
        <div className="relative flex justify-center md:justify-start order-1">
          {isLoading ? <SkeletonImage /> : (
            <img
              src={chartImg}
              alt="Ilustrasi Chart"
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[380px] h-auto object-contain fade-in-scale"
            />
          )}
        </div>

        {/* Kanan - Konten */}
        <div className="text-left mt-6 md:mt-0 max-w-lg order-2">
          {isLoading ? (
            <div className="space-y-4">
              <SkeletonText width="w-28" height="h-5" /> {/* Label */}
              <SkeletonText width="w-full" height="h-6" /> {/* Title */}
              <SkeletonText width="w-5/6" height="h-4" /> {/* Paragraph line 1 */}
              <SkeletonText width="w-4/6" height="h-4" /> {/* Paragraph line 2 */}
              <div className="space-y-2">
                {Array(4).fill(null).map((_, i) => <SkeletonListItem key={i} />)}
              </div>
            </div>
          ) : (
            <div className="fade-in-up space-y-4">
              <span className="inline-block text-xs sm:text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full mb-3">
                Teknologi
              </span>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-4">
                Kelas Industri menggunakan sistem LMS sendiri
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-gray-600 mb-6 leading-relaxed">
                Menggunakan smart classroom sebagai pendukung dalam meningkatkan daya serap
                dalam proses kegiatan belajar mengajar (KBM).
              </p>

              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-xs">
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 fade-in-up"
                    style={{ animationDelay: `${0.15 * index}s` }} // stagger
                  >
                    <span className="text-yellow-400 text-lg leading-none">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IndustrialClassSection1;
