// src/components/IndustrialClassBanner.tsx
import React from "react";
import { motion } from "framer-motion";

// Import gambar
import backgroundClass from "../../assets/img/others/backgroundclassindustri.png";
import peopleBanner from "../../assets/img/others/peoplebanner.png";
import shape from "../../assets/img/others/shape.png";
import bannerShape01 from "../../assets/img/banner/banner_shape01.svg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center 
                py-2 md:py-12 lg:py-31"
      style={{ backgroundImage: `url(${backgroundClass})` }}
    >
      <div
        className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16
             flex flex-col items-center justify-between 
             gap-8 md:gap-12 lg:flex-row"
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
              w-full text-center space-y-1 relative z-20           
              md:space-y-4 md:pl-8 md:text-left   /* 🔹 Tablet */
              lg:w-7/12 lg:text-left lg:absolute lg:top-1/3 lg:left-12 /* 🔹 Desktop */
  "
        >
          {/* Heading */}
          <h3
            className="
                text-2xl font-semibold text-gray-800 leading-snug tracking-tight
                sm:text-3xl  /* Tablet kecil */
                md:text-4xl md:leading-snug  /* Tablet sedang */
                lg:text-[47px] lg:leading-[1.2]   /* Desktop */
                xl:text-[50px] xl:leading-[1.2]  /* Desktop besar */
              "
          >
            Selamat Datang Di Kelas{" "}
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap">
              Industri <span className="font-extrabold">Hummatech</span>
            </span>
          </h3>

          <p
            id="header-description"
            className="
                mx-auto max-w-md text-sm text-gray-600          
                sm:text-base /* Tablet kecil */    
                md:max-w-xl md:text-sm  /* Tablet sedang */            
                lg:mx-0 lg:-mt-5 /* Desktop */
              "
          >
            Belajar seru bersama GetSkill
          </p>
        </motion.div>

        <div
          className="relative flex w-full items-center justify-center overflow-visible
                     /* Desktop */
                     lg:w-6/12"
        >
          <motion.img
            src={peopleBanner}
            alt="Orang"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="
              relative z-10 drop-shadow-xl scale-95 top-4              
              sm:top-6 sm:scale-100  /* Tablet kecil */             
              md:top-8  /* Tablet sedang */              
              lg:top-10 lg:translate-x-130 lg:scale-155  /* Desktop */
            "
            style={{ width: "80%", maxWidth: "500px" }}
          />

          <motion.img
            src={shape}
            alt="Lingkaran Kuning"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            whileHover={{ y: -8, opacity: 1 }}
            className="
              absolute -z-0 top-32
              w-[85%] max-w-[360px]                
              sm:top-40 sm:scale-159   /* Tablet kecil */
              md:top-75 /* Tablet sedang */
              lg:top-51 lg:scale-159 lg:translate-x-120 /* Desktop - lebih besar */
            "

          />
        </div>
      </div>

      <motion.img
        src={bannerShape01}
        alt="Garis Ornamen"
        initial={{ opacity: 0, x: -40, y: -40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 1 }}
        className="
          absolute left-0 top-2 z-30 opacity-80 w-[100px]          
          sm:top-3 sm:w-[130px]  /* Tablet kecil */          
          md:w-[160px]  /* Tablet sedang */          
          lg:w-[210px]  /* Desktop */
        "
      />
    </section>
  );
};

export default HeroSection;
