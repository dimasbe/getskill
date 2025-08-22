// src/components/IndustrialClassBanner.tsx
import React from "react";

// Import gambar
import backgroundClass from "../../assets/img/others/backgroundclassindustri.png";
import peopleBanner from "../../assets/img/others/peoplebanner.png";
import shape from "../../assets/img/others/shape.png"; // lingkaran kuning
import bannerShape01 from "../../assets/img/banner/banner_shape01.svg"; // garis pojok kiri atas

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center py-11 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundClass})` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="lg:w-7/12 text-center lg:text-left space-y-1 -mt-95 relative z-20 -mr-20 lg:-mr-32">
          <h3
            className="text-4xl md:text-5xl lg:text-[47px] font-bold text-gray-800 
               leading-tight md:leading-snug lg:leading-[1.2] tracking-tight 
               text-left"
          >
            Selamat Datang Di Kelas <br />
            <span className="whitespace-nowrap">
              Industri <span className="font-extrabold">Hummatech</span>
            </span>
          </h3>

          <p
            id="header-description"
            className="text-gray-600 text-xs md:text-xs lg:text-sm max-w-xl mx-auto lg:mx-0"
          >
            Belajar seru bersama GetSkill
          </p>

        </div>

        {/* Image Section */}
        <div className="lg:w-6/12 relative flex justify-center items-center overflow-visible">
          {/* Lingkaran kuning di belakang */}
          <img
            src={shape}
            alt="Lingkaran Kuning"
            className="absolute top-50  -z-0"
            style={{ width: "550px", maxWidth: "none" }}
          />

          {/* Gambar orang */}
          <img
            src={peopleBanner}
            alt="Orang"
            className="relative z-10 top-11 scale-110 translate-x-12"
            style={{ width: "500px", maxWidth: "none" }}
          />
        </div>
      </div>

      {/* Garis pojok kiri atas */}
      <img
        src={bannerShape01}
        alt="Garis Ornamen"
        className="absolute top-3 left-0 w-[160px] md:w-[210px] opacity-80 z-30"
      />

    </section>
  );
};

export default HeroSection;
