import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import komponen1 from "../../assets/kelasindustri/Icon1.png";
import komponen3 from "../../assets/kelasindustri/Icon3.png";
import komponen4 from "../../assets/kelasindustri/Icon4.png";

interface FeatureCardProps {
  icon?: React.ReactNode;
  iconSrc?: string;
  altText: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconSrc,
  altText,
  title,
  description,
}) => {
  return (
    <motion.div
      className="bg-white py-6 px-3 rounded-xl shadow-md border border-gray-200 
                 text-center flex flex-col items-center justify-center cursor-pointer 
                 w-full h-full max-w-[235px] md:max-w-[260px] xl:max-w-[280px] 2xl:max-w-[320px] mx-auto"
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1, y: 0, boxShadow: "0px 2px 6px rgba(0,0,0,0.1)" },
        hover: { scale: 1.05, y: -5, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" },
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="mb-4 w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 flex items-center justify-center"
        variants={{
          rest: { rotateY: 0 },
          hover: { rotateY: 180 },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ perspective: 1000 }}
      >
        {icon ? (
          <div className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <img
            src={iconSrc}
            alt={altText}
            className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 object-contain"
          />
        )}
      </motion.div>

      <h3 className="text-sm md:text-base xl:text-lg 2xl:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-[0.7rem] md:text-xs xl:text-sm 2xl:text-base text-gray-600 leading-snug">
        {description}
      </p>
    </motion.div>
  );
};

const SkeletonCard = () => (
  <div className="bg-white py-8 px-6 rounded-2xl shadow-md border border-gray-200 text-center flex flex-col items-center justify-center w-full h-full animate-pulse">
    <div className="bg-gray-300 rounded-full w-14 h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 mb-5"></div>
    <div className="bg-gray-300 h-5 xl:h-6 w-28 xl:w-32 mb-3 rounded"></div>
    <div className="bg-gray-200 h-4 xl:h-5 w-32 xl:w-36 2xl:w-40 rounded"></div>
  </div>
);

const FeaturesSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      iconSrc: komponen1,
      altText: "Belajar Dari Ahli",
      title: "Sekolah",
      description: "Total 18 Sekolah Yang Tergabung Dalam Kelas Industri",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
        >
          <path
            fill="#24aef0"
            d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4l.11-.94L5 5.5L12 2l7 3.5v5h-1V6l-2.11 1.06zm-4 6c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
          />
        </svg>
      ),
      altText: "Alumni",
      title: "Alumni",
      description: "Terdapat 97 Alumni Yang Telah Lulus Dari Kelas Industri",
    },
    {
      iconSrc: komponen3,
      altText: "Program Sertifikat",
      title: "Kelas",
      description: "Ada 45 Kelas Yang Terdaftar Pada Kelas Industri.",
    },
    {
      iconSrc: komponen4,
      altText: "Event Pelatihan",
      title: "Siswa",
      description: "Total 755 Siswa Yang Telah Bergabung Dalam Kelas Industri",
    },
  ];

  return (
    <section className="relative z-20 -mt-12 pb-20">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto px-6 xl:px-10 2xl:px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 xl:gap-6 2xl:gap-8 max-w-5xl xl:max-w-6xl 2xl:max-w-full mx-auto">
          {isLoading
            ? Array(4)
                .fill(null)
                .map((_, i) => <SkeletonCard key={i} />)
            : features.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
