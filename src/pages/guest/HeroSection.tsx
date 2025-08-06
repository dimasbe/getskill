import React from 'react';
import fotomodel1 from '../../assets/landingpage/beranda/fotomodel1.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-100 to-white py-20 overflow-hidden rounded-lg mt-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Selamat <span className="text-purple-600">Datang</span>
          </h1>
          <p className="text-3xl text-gray-700 mb-6">
            Update kemampuan anda bersama <span className="font-semibold text-purple-700">Getskill.id</span>
          </p>
          <p className="text-lg text-gray-600">Belajar seru bersama GetSkill</p>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src={fotomodel1}
            alt="Orang dengan Laptop"
            className="w-full max-w-md rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
          />
          {/* Elemen dekoratif */}
          <div className="absolute top-10 left-10 bg-yellow-300 p-3 rounded-full shadow-lg animate-bounce-slow">
            <p className="text-sm font-semibold">Kenza Aurelia</p>
          </div>
          <div className="absolute bottom-20 right-10 bg-blue-300 p-3 rounded-full shadow-lg animate-bounce-slow delay-200">
            <p className="text-sm font-semibold">Michel Jones</p>
          </div>
        </div>
      </div>
      {/* Bentuk abstrak di latar belakang */}
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300 opacity-20 rounded-full mix-blend-multiply transform translate-x-1/2 translate-y-1/2 blur-xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 opacity-20 rounded-full mix-blend-multiply transform -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
    </section>
  );
};

export default HeroSection;
