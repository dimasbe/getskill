import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logoLandscape from '../../../assets/logo/landscape white .png';

const footerLinks = [
  {
    title: 'Link Cepat',
    links: ['Kursus', 'Events', 'Berita', 'Mentor', 'Penukaran Hadiah'],
  },
  {
    title: 'Website Kami',
    links: ['Hubungi Kami', 'FAQ', 'Penukaran Hadiah'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0D0B34] text-white font-sans text-sm relative">
      {/* Top Section */}
      <div className="px-6 md:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2 text-center md:text-left">
          <img src={logoLandscape} alt="GetSkill Logo" className="h-12 mb-6 mx-auto md:mx-0" />
          <p className="text-[#B2B7C2] text-base leading-[1.75] max-w-sm mx-auto md:mx-0 text-justify">
            Getskill adalah Platform Pembelajaran yang digunakan untuk Upgrade ilmu dan wawasan secara lengkap.
          </p>
          <div className="mt-6">
            <p className="font-semibold text-lg text-white">082132560566</p>
            <p className="text-[#B2B7C2] text-sm">getskill.id@gmail.com</p>
          </div>
        </div>

        {/* Link Cepat */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-lg relative inline-block tracking-wide">
            <span className="pb-1 border-b-2 border-[#9F53FF]">Link Cepat</span>
          </h4>
          <ul className="mt-4 space-y-3">
            {footerLinks[0].links.map((item, idx) => (
              <li key={idx}>
                <a href="#" className="relative inline-block group cursor-pointer">
                  <span className="text-[#B2B7C2] group-hover:text-white transition ease-in-out duration-300">{item}</span>
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#9F53FF] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Website Kami */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-lg relative inline-block tracking-wide">
            <span className="pb-1 border-b-2 border-[#9F53FF]">Website Kami</span>
          </h4>
          <ul className="mt-4 space-y-3">
            {footerLinks[1].links.map((item, idx) => (
              <li key={idx}>
                <a href="#" className="relative inline-block group cursor-pointer">
                  <span className="text-[#B2B7C2] group-hover:text-white transition ease-in-out duration-300">{item}</span>
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#9F53FF] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-lg relative inline-block tracking-wide">
            <span className="pb-1 border-b-2 border-[#9F53FF]">Sosial Media</span>
          </h4>
          <p className="text-[#B2B7C2] mt-4 mb-3">Kunjungi sosial media kami</p>
          <div className="flex gap-4 text-white text-lg">
            <a href="#" className="p-2 rounded-full bg-[#1F1B45] hover:bg-[#9F53FF] transition duration-300 ease-in-out">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#1F1B45] hover:bg-[#9F53FF] transition duration-300 ease-in-out">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#1F1B45] hover:bg-[#9F53FF] transition duration-300 ease-in-out">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#1F1B45] py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between text-[#B2B7C2] text-xs gap-y-2">
        <p className="text-center md:text-left">© 2025 GetSkill. All rights reserved.</p>
        <div className="flex gap-4 flex-wrap justify-center md:justify-end">
          {['Terms & Conditions', 'Privacy Policy'].map((text, idx) => (
            <a
              key={idx}
              href="#"
              className="relative inline-block group hover:text-white transition cursor-pointer"
            >
              <span className="relative z-10">{text}</span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[#9F53FF] transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;