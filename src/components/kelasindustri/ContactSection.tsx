// src/components/ContactSection.tsx
import React from "react";
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

          <div className="mt-6" data-aos="fade-right" data-aos-delay="700">
            <button
              className="group bg-[#7063FF] text-white font-semibold py-2 px-4 
                  rounded-full flex items-center justify-center mx-auto md:mx-0 gap-2
                  transition-all duration-500 ease-in-out
                  shadow-[4px_4px_0_#0A0082] 
                   hover:bg-yellow-400 hover:shadow-none
                  active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                  focus:outline-none"
            >
              <span className="transition-colors duration-500 group-hover:text-[#0A0082]">
                Hubungi Sekarang
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
