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
    <section className="relative bg-gradient-to-br from-white via-[#faf9fb] to-[#ebe9f0] overflow-hidden min-h-[75vh] md:min-h-[90vh] m-0 pt-0">

      {/* Gambar garis lengkung di pojok kiri atas */}
      <img
        src={garislengkung}
        alt="garis lengkung"
        className="absolute top-0 left-0 w-[150px] md:w-[200px] z-0 fade-in-up"
        style={{ animationDelay: '0s' }}
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-18 pt-10 md:pt-16 relative z-10">

        {/* Bagian Kiri - Konten Teks */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-20 mt-10 md:mt-0 relative">

          <h1
            className="text-[36px] md:text-[46px] font-bold text-gray-900 leading-tight md:leading-snug mb-3 fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Selamat{' '}
            <span className="bg-purple-700 px-3 py-1 font-bold text-white rounded-[20px] inline-block">
              Datang
            </span>
          </h1>
          <h2
            className="text-[20px] md:text-[26px] text-gray-900 font-medium mb-4 fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Update kemampuan anda bersama{' '}
            <span className="font-semibold">Getskill.id</span>
          </h2>
          <p
            className="text-gray-600 text-base md:text-lg fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            Belajar seru bersama GetSkill
          </p>

          {/* Tombol Daftar */}
          <div className="mt-6 fade-in-up" style={{ animationDelay: '0.7s' }}>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-[20px] flex items-center justify-center mx-auto md:mx-0 gap-2 transition-all duration-200 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border border-yellow-500 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
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

          {/* Bubble dan Panah untuk mobile */}
          <div className="absolute top-[110%] left-[5%] space-y-1 md:hidden fade-in-up" style={{ animationDelay: '0.9s' }}>

            {/* Panah kecil untuk seluler */}
            <img
              src={panah}
              alt="panah"
              className="absolute top-6 left-[90%] w-[70px] rotate-20 fade-in-up"
              style={{ animationDelay: '1s' }}
            />

            {/* Bubble Kenza */}
            <div className="bg-white px-3 py-1 rounded-full shadow-lg shadow-gray-500/30 backdrop-blur-sm flex items-center space-x-2">
              <img
                src={avatar}
                alt="Kenza"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-sm font-medium">Kenza</p>
            </div>
            {/* Bubble Michel */}
            <div className="bg-white px-3 py-1 rounded-full shadow-lg shadow-gray-500/30 backdrop-blur-sm flex items-center space-x-2">
              <img
                src={avatar2}
                alt="Michel"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-sm font-medium">Michel</p>
            </div>
          </div>
        </div>

        {/* Bagian Kanan - Gambar dan Pola */}
        <div className="md:w-1/2 relative flex justify-center items-center">

          {/* Panah ungu - MOBILE */}
          <img
            src={arrowPattern}
            alt="Panah Ungu"
            className="absolute top-[100px] -right-[30px] w-[360px] opacity-80 z-0 dots-animate md:hidden"
          />

          {/* Panah ungu - DESKTOP */}
          <img
            src={arrowPattern}
            alt="Panah Ungu"
            className="absolute -right-[20px] top-[150px] w-[600px] z-0 arrow-animate hidden md:block"
          />

          {/* Pattern titik - MOBILE */}
          <img
            src={dotsPattern}
            alt="Dots Pattern"
            className="absolute -top-[40px] -right-[10px] w-[360px] opacity-80 z-0 dots-animate md:hidden"
          />

          {/* Pattern titik - DESKTOP */}
          <img
            src={dotsPattern}
            alt="Dots Pattern"
            className="absolute top-[0px] right-[50px] w-[450px] opacity-80 z-0 dots-animate hidden md:block"
          />

          {/* Foto model */}
          <img
            src={fotomodel1}
            alt="Orang dengan Laptop"
            className="relative z-10 w-[300px] md:w-[520px] fade-in-scale"
            style={{ animationDelay: '1.2s' }}
          />

          {/* Panah kecil untuk desktop */}
          <img
            src={panah}
            alt="panah"
            className="absolute right-[125px] top-[15px] md:right-[225px] md:top-[20px] xl:right-[315px] xl:top-[20px] w-[70px] md:w-[90px] rotate-20 fade-in-up hidden md:block"
            style={{ animationDelay: '1s' }}
          />

          {/* Bubble nama atas untuk desktop */}
          <div
            className="absolute top-[50%] left-[10%] md:top-[1px] md:left-auto md:right-[290px] xl:right-[390px] z-20 fade-in-up hidden md:block"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="bg-white px-3 py-1 rounded-lg shadow-lg shadow-gray-500/30 backdrop-blur-sm flex items-center space-x-2 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/40">
              <img
                src={avatar}
                alt="Kenza"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-sm font-medium">Kenza Aurelia</p>
            </div>
          </div>

          {/* Bubble nama bawah untuk desktop */}
          <div
            className="absolute top-[calc(50%+50px)] left-[15%] md:top-[40px] md:left-auto md:right-[290px] xl:right-[380px] z-20 fade-in-up hidden md:block"
            style={{ animationDelay: '0.3s' }}
          >
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