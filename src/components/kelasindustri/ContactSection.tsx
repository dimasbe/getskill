// src/components/ContactSection.tsx
import React from "react";
import Illustration from "../../assets/img/others/concept12.png.png";

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          
          {/* Left side - Illustration */}
          <div className="w-full lg:w-5/12 flex justify-center md:justify-center lg:justify-start relative lg:-ml-6 md:px-6">
            {/* Background telur miring */}
            <div
              className="absolute bg-orange-50 hidden sm:block"
              style={{
                width: "420px",
                height: "260px",
                borderRadius: "50% 100% 100% 50% / 60% 100% 100% 60%",
                transform: "rotate(-3deg) translateY(30px)",
              }}
            ></div>

            {/* Ilustrasi */}
            <img
              src={Illustration}
              alt="Belajar Online"
              className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-auto lg:max-w-[345px] h-auto object-contain z-10 lg:translate-x-10"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-7/12 text-left md:pl-4 md:pr-2 lg:pl-10">
            <div className="content">
              <span className="inline-block text-[11px] md:text-xs font-medium text-gray-600 mb-3">
                Ingin tahu lebih banyak?
              </span>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold mb-4 leading-snug">
                Butuh informasi lebih banyak dan proposal lengkap dari kelas industri?
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-sm lg:text-xs mb-6 leading-relaxed">
                Silahkan hubungi kami pada nomor yang tertera dan undang kami ke
                sekolah anda untuk menjelaskan program kelas industri kami di sekolah
                anda, akan kami jelaskan secara detail.
              </p>

              {/* Button */}
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

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
