import React, { useState, useEffect } from "react";
import modelImage from "../../assets/kelasindustri/Background+Shadow.png";

// Skeleton components
const SkeletonText = ({ width, height }: { width: string; height: string }) => (
  <div className={`bg-gray-300 rounded ${width} ${height} animate-pulse`}></div>
);

const SkeletonCircle = ({ size }: { size: string }) => (
  <div className={`bg-gray-300 rounded-full ${size} animate-pulse`}></div>
);

const SkeletonImage = () => (
  <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[380px] h-[200px] bg-gray-300 rounded-lg animate-pulse"></div>
);

const IndustrialClassSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const kelasList = [
    "Rekayasa Perangkat Lunak",
    "Desain Komunikasi Visual",
    "Teknik Komputer Jaringan",
  ];

  return (
    <section className="w-full py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 justify-items-center md:justify-items-start">

        {/* Kiri - Gambar */}
        <div className="relative flex justify-center md:justify-start">
          {isLoading ? (
            <SkeletonImage />
          ) : (
            <img
              src={modelImage}
              alt="Model"
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[380px] h-auto object-contain fade-in-scale"
            />
          )}
        </div>

        {/* Kanan - Konten */}
        <div className="text-left mt-6 md:mt-0 max-w-lg">
          {isLoading ? (
            <div className="space-y-4">
              <SkeletonText width="w-28" height="h-5" />
              <SkeletonText width="w-full" height="h-6" />
              <SkeletonText width="w-3/4" height="h-6" />
              <div className="space-y-2">
                <SkeletonText width="w-full" height="h-3" />
                <SkeletonText width="w-5/6" height="h-3" />
                <SkeletonText width="w-4/5" height="h-3" />
              </div>
              <ul className="space-y-3">
                {Array(3).fill(null).map((_, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <SkeletonCircle size="w-6 h-6 sm:w-7 sm:h-7" />
                    <SkeletonText width="w-40" height="h-4" />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="fade-in-up space-y-4">
              <span className="inline-block text-xs sm:text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full mb-3">
                Manfaat Kelas Industri?
              </span>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-4">
                Program Kelas industri didesain untuk <br className="hidden sm:block" />
                meningkatkan kemampuan{" "}
                <span className="bg-yellow-400 text-white px-1.5 py-0.5 rounded-md">Siswa</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-gray-600 mb-6 leading-relaxed">
                Materi Kelas industri akan dipelajari selama 3 tahun, diawali dengan
                kelas X, XI, dan XII. Dengan ini materi akan lebih maksimal diterima.
                Adapun Kelas Industri yang telah tersedia saat ini adalah:
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {kelasList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 fade-in-up"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-yellow-400 rounded-full text-white text-sm">
                      ➝
                    </span>
                    <span className="font-bold text-gray-900 text-sm sm:text-sm">{item}</span>
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

export default IndustrialClassSection;
