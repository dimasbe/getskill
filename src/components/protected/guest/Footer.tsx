import React from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logoLandscape from '../../../assets/logo/landscape white .png';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-[#a0a0ae] text-left">

      {/* Section atas: background utama */}
      <div className="w-full bg-[#100936]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-35 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Left Section with Logo and Contact */}
          <div className="flex flex-col items-start text-left">
            <div className="font-bold text-white text-xl flex items-center gap-3 mb-6">
              <img
                src={logoLandscape}
                alt="GetSkill Logo"
                className="w-auto h-11 object-contain"
              />
            </div>
            <p className="text-[12px] leading-5 max-w-[260px] mb-6">
              Getskill adalah Platform Pembelajaran yang digunakan untuk Upgrade ilmu dan wawasan secara lengkap.
            </p>
            <div>
              <div className="font-semibold text-white mb-1 text-base">082132560566</div>
              <div className="font-medium text-xs text-[#c1c1d1]">getskill.id@gmail.com</div>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-col text-left">
            <h3 className="text-white font-bold text-base mb-3 relative pb-1">
              Link Cepat
              <span className="absolute left-0 top-8 h-1 w-6 bg-[#8a4fff] rounded"></span>
            </h3>
            <ul className="list-none p-0 mt-3">
              {['Kursus', 'Events', 'Berita', 'Mentor', 'Penukaran Hadiah'].map(link => (
                <li key={link} className="mb-3 text-[12px]">
                  <a
                    href="#"
                    tabIndex={0}
                    className="relative inline-block text-[#B2BBCC] hover:text-yellow-500 transition-colors duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-500 
                      hover:after:w-full after:transition-all after:duration-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Website Links */}
          <nav className="flex flex-col text-left">
            <h3 className="text-white font-bold text-base mb-3 relative pb-1">
              Website Kami
              <span className="absolute left-0 top-8 h-1 w-6 bg-[#8a4fff] rounded"></span>
            </h3>
            <ul className="list-none p-0 mt-3">
              {['Hubungi Kami', 'FAQ', 'Penukaran Hadiah'].map(link => (
                <li key={link} className="mb-3 text-[12px]">
                  <a
                    href="#"
                    tabIndex={0}
                    className="relative inline-block text-[#B2BBCC] hover:text-yellow-500 transition-colors duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-500 
                      hover:after:w-full after:transition-all after:duration-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media */}
          <section className="flex flex-col text-left">
            <h3 className="text-white font-bold text-base mb-5 relative pb-2">
              Sosial Media
              <span className="absolute left-0 top-8 h-1 w-6 md:2 bg-[#8a4fff] rounded"></span>
            </h3>
            <p className="text-[12px] text-[#8a8a9d] mb-3">Kunjungi sosial media kami</p>
            <div className="flex gap-4 text-white text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8a4fff]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8a4fff]"
              >
                <FaTwitter />
              </a>
              <a
                href="https://wa.me/6282132560566"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8a4fff]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#2a2454]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#3a3366] text-[11px] text-[#7a7a94] text-left">
          <div>© 2025 GetSkill. All rights reserved.</div>
          <nav className="flex gap-4 font-semibold">
            {['Terms & Conditions', 'Privacy Policy'].map(link => (
              <a
                key={link}
                href="#"
                tabIndex={0}
                className="text-[#7a7a94] hover:text-[#8a4fff] relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#8a4fff] hover:after:w-full after:transition-all after:duration-500"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
