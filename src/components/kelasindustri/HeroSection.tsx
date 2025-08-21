// src/components/HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";

import modelImg from "../../assets/kelasindustri/Foto Model 4 1.png";
import shapePlane from "../../assets/shape/breadcrumb_shape02.svg.png";
import shapeBook from "../../assets/shape/breadcrumb_shape03.svg.png";
import shapeStar from "../../assets/shape/breadcrumb_shape04.svg.png";
import garislengkung from "../../assets/landingpage/beranda/garis lengkung.png";
import bgSection from "../../assets/kelasindustri/Section.png";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgSection})` }}
    >
      {/* Shapes */}
      <motion.img
        src={shapePlane}
        alt="Shape Plane"
        className="
          absolute 
          top-[25%] left-[5%]          
          sm:top-[15%] sm:left-[10%]  /* tablet diperbaiki */
          md:top-[10%] md:left-[18%]  
          w-14 sm:w-16 md:w-16 lg:w-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.img
        src={shapeBook}
        alt="Shape Book"
        className="
          absolute 
          top-[35%] left-[25%]         
          sm:top-[22%] sm:left-[35%]  /* tablet diperbaiki */
          md:top-[35%] md:left-[50%]  
          w-14 sm:w-16 md:w-16"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.img
        src={shapeStar}
        alt="Shape Star"
        className="
          absolute 
          top-[45%] right-[6%]         
          sm:top-[30%] sm:right-[8%]   /* tablet diperbaiki */
          md:top-[30%] md:right-[14%]  
          w-14 sm:w-16 md:w-16"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.img
        src={garislengkung}
        alt="garis lengkung"
        className="
          absolute 
          top-0 left-0 
          w-[140px] sm:w-[180px] md:w-[220px] /* tablet lebih besar */
          z-0"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-2 pb-4 sm:pt-6 sm:pb-8 grid grid-cols-12 gap-6 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="
            col-span-12 md:col-span-6 text-left 
            sm:pl-8 md:pl-12 lg:pl-16 
            -mt-1 sm:-mt-2 md:-mt-4 
            pt-6 sm:pt-10 md:pt-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[43px] font-bold text-[#2A1A4A] leading-tight sm:text-[40px]">
            Selamat Datang Di Kelas Industri{" "}
            <span className="relative inline-block">
              <span className="relative font-extrabold z-10">Hummatech</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#ffc336] -z-10"></span>
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Belajar seru bersama GetSkill
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="col-span-12 md:col-span-6 relative flex justify-center md:justify-end -translate-x-2 sm:-translate-x-4 md:-translate-x-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          {/* Lingkaran Kuning */}
          <motion.div
            className="absolute bg-[#FFB800] rounded-full 
              aspect-square 
              w-[90%] min-w-[400px] max-w-[850px]        /* mobile */
              md:w-[65%] md:min-w-[320px] md:max-w-[500px]  /* tablet */
              lg:w-[650px] lg:max-w-none                 /* desktop */
              top-1/1 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          ></motion.div>

          {/* Gambar Model */}
          <motion.img
            src={modelImg}
            alt="Model"
            className="relative max-w-full h-auto sm:w-[320px] md:w-[440px] lg:w-[560px] z-10 top-4 sm:top-6 md:top-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
