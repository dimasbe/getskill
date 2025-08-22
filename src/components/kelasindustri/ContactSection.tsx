// src/components/ContactSection.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import Illustration from "../../assets/img/others/concept12.png.png";

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">

        {/* Left side - Illustration */}
        <div className="flex justify-center lg:col-span-4 lg:col-start-2 relative lg:translate-x-12">
          {/* Background telur miring */}
          <div
            className="absolute bg-orange-50"
            style={{
              width: "480px",
              height: "300px",
              borderRadius: "50% 100% 100% 50% / 60% 100% 100% 60%",
              transform: "rotate(-3deg) translateY(30px)",
            }}
          ></div>

          {/* Ilustrasi */}
          <div className="relative w-[90%] md:w-[80%] lg:w-[110%] scale-95 z-10">
            <img
              src={Illustration}
              alt="Belajar Online"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-left lg:col-span-6 lg:pl-24">
          <span className="text-gray-600 text-xs sm:text-xs rounded-full mb-3">
            Ingin tahu lebih banyak?
          </span>

          <h2 className="text-xl lg:text-2xl font-semibold mb-4 leading-snug">
            Butuh informasi lebih banyak dan proposal lengkap dari kelas industri?
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-xs">
            Silahkan Hubungi kami pada nomor yang tertera dan undang kami ke
            sekolah anda untuk menjelaskan program kelas industri kami di sekolah
            anda, akan kami jelaskan secara detail.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2.5 rounded-full text-xs transition-all duration-300 shadow-md"
          >
            Hubungi Sekarang
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
