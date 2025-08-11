import React from 'react';
import '../../style/App.css';
import fotomodel1 from '../../assets/landingpage/beranda/fotomodel1.png';
import avatar from '../../assets/landingpage/beranda/avatar.png';
import avatar2 from '../../assets/landingpage/beranda/avatar2.png';
import panah from "../../assets/landingpage/beranda/panah.png";
import arrowPattern from '../../assets/landingpage/beranda/panah-ungu.png';
import dotsPattern from '../../assets/landingpage/beranda/dots.png';
import garislengkung from '../../assets/landingpage/beranda/garis lengkung.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#F5F4F9] to-[#ebe9f0] overflow-hidden min-h-[90vh] m-0 pt-0">

      {/* Gambar garis lengkung di pojok kiri atas */}
      <img
        src={garislengkung}
        alt="garis lengkung"
        className="absolute top-0 left-0 w-[220px] z-0"
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-18 pt-16 relative z-10">

        {/* Bagian Kiri */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-20">
          <h1 className="text-[46px] font-bold text-gray-900 leading-snug mb-3">
            Selamat{' '}
            <span className="bg-purple-700 px-4 py-1 font-bold text-white rounded-[20px] inline-block">
              Datang
            </span>
          </h1>
          <h2 className="text-[26px] text-gray-900 font-medium mb-4">
            Update kemampuan anda bersama{' '}
            <span className="font-semibold">Getskill.id</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Belajar seru bersama GetSkill
          </p>
          {/* Tombol Daftar */}
          <div className="mt-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-[20px] flex items-center gap-2 transition-all duration-200 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border border-yellow-500 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
              Daftar Sekarang
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

        {/* Bagian Kanan */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* Panah ungu */}
          <img
            src={arrowPattern}
            alt="Panah Ungu"
            className="absolute -right-[20px] top-[150px] w-[600px] z-0 arrow-animate"
          />

          {/* Pattern titik */}
          <img
            src={dotsPattern}
            alt="Dots Pattern"
            className="absolute top-[0px] right-[50px] w-[450px] opacity-80 z-0 dots-animate"
          />

          {/* Foto model */}
          <img
            src={fotomodel1}
            alt="Orang dengan Laptop"
            className="relative z-10 w-[520px]"
          />

          {/* Panah kecil */}
          <img
            src={panah}
            alt="panah"
            className="absolute right-[325px] top-[25px] w-[90px] rotate-20"
          />

          {/* Bubble nama atas */}
          <div className="absolute top-[5px] right-[400px] z-20">
            <div className="bg-white px-3 py-1 rounded-lg shadow-lg shadow-gray-500/30 backdrop-blur-sm flex items-center space-x-2 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/40">
              <img
                src={avatar}
                alt="Kenza"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-sm font-medium">Kenza Aurelia</p>
            </div>
          </div>

          {/* Bubble nama bawah */}
          <div className="absolute top-[45px] right-[390px] z-20">
            <div className="bg-white px-3 py-1 rounded-lg shadow-lg shadow-gray-500/30 backdrop-blur-sm flex items-center space-x-2 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/40">
              <img
                src={avatar2}
                alt="Michel"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-sm font-medium">Michel Jones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
