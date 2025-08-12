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
        className="absolute top-30 left-[20%] w-8 sm:w-13"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.img
        src={shapeBook}
        alt="Shape Book"
        className="absolute top-33 left-[45%] w-8 sm:w-11"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.img
        src={shapeStar}
        alt="Shape Star"
        className="absolute top-[30%] right-[14%] w-8 sm:w-15"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.img
        src={garislengkung}
        alt="garis lengkung"
        className="absolute top-0 left-0 w-[220px] z-0"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-12 gap-6 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="col-span-12 md:col-span-6 text-left pl-15 -mt-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-[#2A1A4A] leading-tight">
            Selamat Datang Di Kelas<br />
            Industri{" "}
            <span className="relative inline-block">
              <span className="relative font-extrabold z-10">Hummatech</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#ffc336] -z-10"></span>
            </span>
          </h1>
          <p className="mt-5 text-lg md:text-base text-gray-600">
            Belajar seru bersama GetSkill
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="col-span-12 md:col-span-6 relative flex justify-center md:justify-end -translate-x-4 md:-translate-x-8 right-15"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          {/* Lingkaran Kuning */}
          <motion.div
            className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[550px] md:h-[550px] bg-[#FFB800] rounded-full top-1/1 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>

          {/* Gambar Model */}
          <motion.img
            src={modelImg}
            alt="Model"
            className="relative w-[240px] sm:w-[280px] md:w-[440px] lg:w-[480px] z-10 top-10"
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
