import React from "react";
import { motion } from "framer-motion";
import komponen1 from "../../assets/kelasindustri/Icon1.png";
import komponen2 from "../../assets/kelasindustri/Icon2.png";
import komponen3 from "../../assets/kelasindustri/Icon3.png";
import komponen4 from "../../assets/kelasindustri/Icon4.png";

interface FeatureCardProps {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  altText,
  title,
  description,
}) => {
  return (
    <motion.div
      className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 text-center flex flex-col items-center cursor-pointer h-full w-full max-w-[180px] sm:max-w-none mx-auto"
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        type: "spring",
        stiffness: 500, 
        damping: 15, 
      }}
    >
      <div className="mb-4">
        <motion.img
          src={iconSrc}
          alt={altText}
          className="w-10 h-10 object-contain"
          whileHover={{
            y: -5, 
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
        />
      </div>
      <h3 className="text-md font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-[0.65rem] text-gray-600 leading-snug px-2">
        {description}
      </p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="relative z-20 -mt-12 pb-16">
      <div className="max-w-5xl mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <FeatureCard
            iconSrc={komponen1}
            altText="Belajar Dari Ahli"
            title="Sekolah"
            description="Total 18 Sekolah Yang Tergabung Dalam Kelas Industri"
          />
          <FeatureCard
            iconSrc={komponen2}
            altText="Kursus Profesional"
            title="Alumni"
            description="Terdapat 40 Alumni Yang Telah Lulus Dari Kelas Industri"
          />
          <FeatureCard
            iconSrc={komponen3}
            altText="Program Sertifikat"
            title="Kelas"
            description="Ada 43 Kelas Yang Terdaftar Pada Kelas Industri."
          />
          <FeatureCard
            iconSrc={komponen4}
            altText="Event Pelatihan"
            title="Siswa"
            description="Total 656 Siswa Yang Telah Bergabung Dalam Kelas Industri"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
