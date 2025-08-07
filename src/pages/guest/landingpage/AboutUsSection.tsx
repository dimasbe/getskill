import React from 'react';
import logo from '../../../assets/logo/logo.png';

const AboutUsSection: React.FC = () => {
    return (
        <section className="py-16 bg-white rounded-lg mt-0">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <img
                        src={logo}
                        alt="Ilustrasi Getskill"
                        className="w-full max-w-xs "
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-sm font-semibold text-purple-600 mb-2">Tentang Kami</h2>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Apa Itu Getskill?</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Getskill adalah platform pembelajaran online yang dirancang untuk membantu pengguna dalam mengembangkan keterampilan, memperdalam wawasan, dan meningkatkan kompetensi di berbagai bidang. Dengan berbagai pilihan kursus yang diajarkan oleh para ahli, Getskill memberikan pengalaman belajar yang interaktif, fleksibel, dan mudah diakses kapan saja serta di mana saja. Selain itu, platform ini juga menyediakan event pelatihan eksklusif yang memungkinkan peserta untuk mendapatkan ilmu terbaru, berdiskusi dengan instruktur berpengalaman, serta memperoleh sertifikat sebagai bukti kompetensi yang dapat mendukung perkembangan karier mereka.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
