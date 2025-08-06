import React from 'react';
import '../../../style/app.css';
import fotomodel1 from '../../../assets/landingpage/beranda/fotomodel1.png';
import arrowPattern from '../../../assets/landingpage/beranda/panah-ungu.png';
import dotsPattern from '../../../assets/landingpage/beranda/dots.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f3eaff] to-white overflow-hidden min-h-screen m-0 pt-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-14 pt-10">
        {/* Bagian Kiri */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-20">
          <h1 className="text-[46px] font-bold text-gray-900 leading-snug mb-3">
            Selamat{' '}
            <span className="bg-yellow-400 px-3 py-1 font-bold text-gray-900">
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
        </div>

        {/* Bagian Kanan */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* Panah ungu */}
          <img
            src={arrowPattern}
            alt="Panah Ungu"
            className="absolute -right-[10px] top-[100px] w-[600px] z-0 arrow-animate"
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
            className="relative z-10 w-[480px]"
          />

          {/* Bubble nama atas */}
          <div className="absolute top-[0px] right-[360px] z-20">
            <div className="bg-white px-3 py-1 rounded-lg shadow-md flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/30"
                alt="Kenza"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-sm font-medium">Kenza Aurelia</p>
            </div>
          </div>

          {/* Bubble nama bawah */}
          <div className="absolute top-[40px] right-[350px] z-20">
            <div className="bg-white px-3 py-1 rounded-lg shadow-md flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/30"
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
