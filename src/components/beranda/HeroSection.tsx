import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/App.css';
import fotomodel1 from '../../assets/landingpage/beranda/fotomodel1.png';
import avatar from '../../assets/landingpage/beranda/avatar.png';
import avatar2 from '../../assets/landingpage/beranda/avatar2.png';
import panah from "../../assets/landingpage/beranda/panah.png";
import arrowPattern from '../../assets/landingpage/beranda/panah-ungu.png';
import dotsPattern from '../../assets/landingpage/beranda/dots.png';
import garislengkung from '../../assets/landingpage/beranda/garis lengkung.png';
import bannerShape02 from '../../assets/img/banner/banner_shape02.png';

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-[#faf9fb] to-[#ebe9f0] overflow-hidden min-h-[75vh] md:min-h-[90vh] m-0 pt-0">
      {/* Garis lengkung pojok kiri */}
      <img
        src={garislengkung}
        alt="garis lengkung"
        className="absolute top-0 left-0 w-[150px] md:w-[170px] z-0"
        data-aos="fade-right"
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-18 pt-10 md:pt-16 relative z-10">

        {/* Bagian kiri */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-20 mt-10 md:-mt-14 relative">
          <h1
            className="text-[32px] md:text-[40px] font-normal text-gray-900 leading-tight md:leading-snug mb-3 relative"
            data-aos="fade-right"
          >
            Selamat
            <span className="relative inline-block z-10 px-0 ml-6">
              {/* BG kuning */}
              <svg className="absolute -top-[3px] -left-[22px] w-[180px] h-[125%] -z-10" viewBox="0 0 209 59" fill="none">
                <path d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565" fill="#FFC107" />
              </svg>
              {/* garis hitam */}
              <svg className="absolute top-[-40px] left-[107%] w-[55px] h-[60px] -z-10" viewBox="0 0 61 68" fill="none">
                <path d="M10.9456 42.4604C12.35 35.8453 15.0985 20.3798 14.8574 11.4385" stroke="#031333" strokeWidth="3.07158" strokeLinejoin="round" />
                <path d="M27.4487 52.5191C33.5478 49.598 47.4807 42.3448 54.4199 36.7009" stroke="#031333" strokeWidth="3.07158" strokeLinejoin="round" />
                <path d="M20.1039 44.2553C23.1559 40.986 29.8591 33.2239 32.2559 28.3291" stroke="#031333" strokeWidth="3.07158" strokeLinejoin="round" />
              </svg>
              <span className="font-bold text-white relative z-20">Datang</span>
            </span>
          </h1>

          <h2
            className="text-[32px] md:text-[32px] text-gray-900 font-medium mb-4"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="max-w-[400px] whitespace-normal">
              Update kemampuan anda bersama <span className="font-semibold">Getskill.id</span>
            </div>
          </h2>

          {/* Tombol daftar */}
          <div className="mt-6" data-aos="fade-right" data-aos-delay="700">
            <button
              className="group bg-[#7063FF] text-white font-semibold py-3 px-6 
               rounded-full flex items-center justify-center mx-auto md:mx-0 gap-2
               transition-all duration-500 ease-in-out
               shadow-[4px_4px_0_#0A0082] 
               hover:bg-yellow-400 hover:shadow-none
               active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
               focus:outline-none"
            >
              <span className="transition-colors duration-500 group-hover:text-[#0A0082]">
                Daftar Sekarang
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 transition-colors duration-500 text-white group-hover:text-[#0A0082]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Bubble + panah mobile */}
          <div
            className="absolute top-[110%] -left-[1%] space-y-1 md:hidden"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            {/* Panah di belakang */}
            <img
              src={panah}
              alt="panah"
              className="absolute top-4 left-[90%] w-[70px] rotate-20 z-0"
            />

            {/* Bubble versi mobile */}
            <div className="relative z-10 bg-white p-2 rounded-[5px] shadow-[7px_7px_0px_rgba(176,184,196,0.6)] space-y-2">
              <div className="flex items-center space-x-2">
                <img src={avatar} alt="Kenza" className="w-6 h-6 rounded-full" />
                <p className="text-xs font-medium">Kenza Aurelia</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={avatar2} alt="Michel" className="w-6 h-6 rounded-full" />
                <p className="text-xs font-medium">Michel Jones</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian kanan */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* Banner mobile */}
          <img src={bannerShape02} alt="Banner Shape" className="absolute top-[150px] right-[30px] w-[280px] z-0 md:hidden" data-aos="fade-left" />
          {/* Banner desktop */}
          <img src={bannerShape02} alt="Banner Shape" className="absolute top-[430px] right-[380px] w-[120px] z-0 hidden md:block" data-aos="fade-up" />

          {/* Panah ungu */}
          <img src={arrowPattern} alt="Panah Ungu" className="absolute top-[100px] -right-[30px] w-[360px] z-0 md:hidden" data-aos="fade-up" />
          <img src={arrowPattern} alt="Panah Ungu" className="absolute -right-[30px] top-[230px] w-[530px] z-0 hidden md:block" data-aos="fade-up" />

          {/* Dots */}
          <img
            src={dotsPattern}
            alt="Dots"
            className="absolute -top-[40px] -right-[10px] w-[360px] z-0 md:hidden spin-slow"
            data-aos="fade-right"
          />
          <img
            src={dotsPattern}
            alt="Dots"
            className="absolute top-[25px] right-[60px] w-[400px] z-0 hidden md:block spin-reverse"
            data-aos="fade-up"
          />

          {/* Foto model */}
          <img src={fotomodel1} alt="Orang dengan Laptop" className="relative z-10 w-[300px] md:w-[520px]" data-aos="fade-up" />

          {/* Panah desktop */}
          <img src={panah} alt="panah" className="absolute right-[125px] top-[15px] md:right-[225px] md:top-[20px] xl:right-[375px] xl:top-[60px] w-[70px] md:w-[80px] rotate-1 hidden md:block" data-aos="fade-right" />

          {/* Bubble desktop */}
          <div className="absolute top-[50%] left-[10%] md:top-[50px] md:left-auto md:right-[280px] xl:right-[440px] z-20 hidden md:block" data-aos="fade-down">
            <div className="bg-white p-2 rounded-[5px] shadow-[7px_7px_0px_rgba(176,184,196,0.6)] space-y-2">
              <div className="flex items-center space-x-2">
                <img src={avatar} alt="Kenza" className="w-6 h-6 rounded-full" />
                <p className="text-xs font-medium">Kenza Aurelia</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={avatar2} alt="Michel" className="w-6 h-6 rounded-full" />
                <p className="text-xs font-medium">Michel Jones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
