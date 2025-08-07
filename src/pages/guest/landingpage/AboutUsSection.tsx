import React from 'react';
import logo from '../../../assets/logo/logo.png';
import bintang from '../../../assets/landingpage/beranda/bintang.png';
import layer1 from '../../../assets/landingpage/beranda/layer1.png';
import layer2 from '../../../assets/landingpage/beranda/Layer 2.png';

const AboutUsSection: React.FC = () => {
    return (
        <section className="relative py-30 bg-white rounded-lg mt-0 overflow-hidden">
            {/* Dekorasi Background */}
            <img
                src={bintang}
                alt="bintang"
                className="absolute top-40 left-270 w-12 md:w-16 opacity-100 z-0 bounce-star"
            />
            <img
                src={layer1}
                alt="layer1"
                className="absolute top-35 -left-10 w-[300px] md:w-[900px] opacity-100 z-0"
            />
            <img
                src={layer2}
                alt="layer2"
                className="absolute -bottom-20 -right-2 w-[250px] md:w-[900px] opacity-100 z-0"
            />

            <div className="relative z-10 container mx-auto px-5 md:px-20 flex flex-col md:flex-row items-center justify-center">
                {/* Logo */}
                <div className="md:w-1/2 flex justify-start mb-10 md:mb-0 md:ml-4">
                    <img
                        src={logo}
                        alt="Ilustrasi Getskill"
                        className="w-full max-w-xs"
                    />
                </div>

                {/* Teks */}
                <div className="md:w-1/2 text-center md:text-left md:-ml-40">
                    <h2 className="text-sm font-semibold text-purple-600 mb-2">Tentang Kami</h2>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Apa Itu Getskill?</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Getskill adalah platform pembelajaran online yang dirancang untuk membantu pengguna dalam mengembangkan keterampilan, memperdalam wawasan, dan meningkatkan kompetensi di berbagai bidang. Dengan berbagai pilihan kursus yang diajarkan oleh para ahli, Getskill memberikan pengalaman belajar yang interaktif, fleksibel, dan mudah diakses kapan saja serta di mana saja. Selain itu, platform ini juga menyediakan event pelatihan eksklusif yang memungkinkan peserta untuk mendapatkan ilmu terbaru, berdiskusi dengan instruktur berpengalaman, serta memperoleh sertifikat sebagai bukti kompetensi yang dapat mendukung perkembangan karier mereka.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
