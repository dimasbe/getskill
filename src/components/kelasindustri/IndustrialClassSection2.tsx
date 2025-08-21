import React, { useState, useEffect } from "react";
import clockImg from "../../assets/kelasindustri/Clock.png";

const SkeletonText = ({ width, height }: { width: string; height: string }) => (
  <div className={`bg-gray-300 rounded ${width} ${height} animate-pulse`}></div>
);

const SkeletonImage = () => (
  <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[380px] h-[200px] bg-gray-300 rounded-lg animate-pulse"></div>
);

const IndustrialClassSection2: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 
                  grid grid-cols-1 md:grid-cols-2 items-center 
                  gap-4 md:gap-6 justify-center">
        {/* Kanan - Gambar */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 md:mr-15">
          {isLoading ? (
            <SkeletonImage />
          ) : (
            <img
              src={clockImg}
              alt="Ilustrasi Waktu"
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[380px] h-auto object-contain fade-in-scale"
            />
          )}
        </div>

        {/* Kiri - Teks */}
         <div className="text-left max-w-md md:ml-4 lg:ml-6 order-2 md:order-1">
          {isLoading ? (
            <div className="space-y-3">
              <SkeletonText width="w-40" height="h-3" />
              <SkeletonText width="w-full" height="h-7" />
              <SkeletonText width="w-full" height="h-4" />
              <SkeletonText width="w-5/6" height="h-4" />
              <SkeletonText width="w-36" height="h-10" />
            </div>
          ) : (
            <div className="fade-in-up space-y-4">
              <p className="text-xs text-gray-500">Ingin tahu lebih banyak?</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Butuh informasi lebih banyak dan proposal lengkap dari kelas industri?
              </h2>
              <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                Silahkan Hubungi kami pada nomor yang tertera dan undang kami ke sekolah
                anda untuk menjelaskan program kelas industri kami di sekolah anda,
                akan kami jelaskan secara detail.
              </p>
              <div className="mt-6 flex justify-center md:justify-start fade-in-up" style={{ animationDelay: "0.2s" }}>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-[20px] flex items-center gap-2 transition-all duration-200 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border border-yellow-500 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                  Hubungi Sekarang
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IndustrialClassSection2;
