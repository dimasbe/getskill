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
      {/* Shapes dengan animasi melayang */}
      <motion.img
        src={shapePlane}
        alt="Shape Plane"
        className="absolute top-20 left-[18%] w-6 sm:w-8 md:w-12"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.img
        src={shapeBook}
        alt="Shape Book"
        className="absolute top-24 left-[45%] w-6 sm:w-8 md:w-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.img
        src={shapeStar}
        alt="Shape Star"
        className="absolute top-[30%] right-[14%] w-6 sm:w-8 md:w-12"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.img
        src={garislengkung}
        alt="garis lengkung"
        className="absolute top-0 left-0 w-[140px] sm:w-[180px] md:w-[220px] z-0"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-2 pb-4 sm:pt-4 sm:pb-6 grid grid-cols-12 gap-6 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="col-span-12 md:col-span-6 text-left sm:pl-6 md:pl-12 lg:pl-16 -mt-1 sm:-mt-2 md:-mt-4 lg:-mt-70"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[43px] font-bold text-[#2A1A4A] leading-tight">
            Selamat Datang Di Kelas Industri{" "}
            <span className="relative inline-block">
              <span className="relative font-extrabold z-10">Hummatech</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#ffc336] -z-10"></span>
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-base text-gray-600">
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
            className="absolute w-[90vw] h-[90vw] min-w-[300px] min-h-[300px] max-w-[650px] max-h-[650px] bg-[#FFB800] rounded-full top-1/1 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>

          {/* Gambar Model */}
          <motion.img
            src={modelImg}
            alt="Model"
            className="relative max-w-full h-auto sm:w-[300px] md:w-[440px] lg:w-[560px] z-10 top-4 sm:top-6 md:top-10"
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
